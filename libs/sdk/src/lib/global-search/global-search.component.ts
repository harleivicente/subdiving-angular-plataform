import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PLATAFORM_MODULE_ID } from '../navigation/modules';
import { NavigationService } from '../navigation/navigation.service';
import { plataformRoutes } from '../navigation/routes';
import { ModuleRoutes, PlataformRoutes, StaticPlatformRoute } from '../navigation/_models';


interface FilteredStaticRoute {
  route: StaticPlatformRoute,
  moduleId: PLATAFORM_MODULE_ID
}

@Component({
  selector: 'sdk-global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.scss']
})
export class GlobalSearchComponent implements OnInit {

  constructor(private navigationService: NavigationService) {}

  protected filterFormControl: FormControl = new FormControl();
  protected filteredRoutes: FilteredStaticRoute[] = [];
  protected showDropdown = false;

  ngOnInit() {
    this.filterFormControl.valueChanges.subscribe((value: string) => {
      const sanitizedQuery = value.trim();
      if (!sanitizedQuery) return;
      this.filteredRoutes = this.filterRoutes(plataformRoutes as PlataformRoutes, sanitizedQuery);
      this.showDropdown = true;
    });
  }

  private filterRoutes(routes: PlataformRoutes, searchQuery: string): FilteredStaticRoute[] {
    let matchedRoutes = [];
    Object.entries(routes).forEach(([moduleId, moduleRoutes]) => {
      
      const filteredRoutes = this.filterModuleRoutes(
        moduleId as PLATAFORM_MODULE_ID,
        moduleRoutes,
        searchQuery
      );

      matchedRoutes = matchedRoutes.concat(filteredRoutes);
    });
    return matchedRoutes;
  }

  private filterModuleRoutes(moduleId: PLATAFORM_MODULE_ID, moduleRoutes: ModuleRoutes, searchQuery: string): FilteredStaticRoute[] {
    return Object.entries(moduleRoutes)
    .filter(entry => {
      const [, route] = entry;
      const searchQueryMatch = this.doesRouteMatch(route.label, searchQuery);
      const isStatic = !route.isDynamic;
      return searchQueryMatch && isStatic;
    })
    .map(entry => {
      const [, route] = entry;
      return { 
        route: route as StaticPlatformRoute,
        moduleId
      };
    });
  };

  private doesRouteMatch(label: string, searchQuery: string): boolean {
      const sanitizedQuery = searchQuery.toLowerCase();
      const sanitizedLabel = label.toLowerCase();
      const match = sanitizedLabel.includes(sanitizedQuery);
      return match;
  }

  protected getPlataformModule(moduleId) {
    return this.navigationService.getPlatformModule(moduleId);
  }

  protected routeClick() {
    this.showDropdown = false;
    this.filteredRoutes = [];
    this.filterFormControl.setValue('', { emitEvent: false });
  }

}
