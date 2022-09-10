import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PLATAFORM_MODULE_ID } from '../navigation/modules';
import { NavigationService } from '../navigation/navigation.service';
import { plataformRoutes } from '../navigation/routes';
import { ModuleRoutes, PlataformRoute, PlataformRoutes,  } from '../navigation/_models';


interface FilteredStaticRoute {
  route: PlataformRoute,
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
    .filter(entry => this.doesRouteMatch(entry[1], searchQuery))
    .map(entry => ({ route: entry[1], moduleId }))
  };

  private doesRouteMatch(route: PlataformRoute, searchQuery: string): boolean {
      const sanitizedQuery = searchQuery.toLowerCase();
      const sanitizedLabel = route.label.toLowerCase();
      const textMatch = sanitizedLabel.includes(sanitizedQuery);
      return textMatch && !route.isDynamic;
  }

  protected routeClick() {
    this.showDropdown = false;
    this.filteredRoutes = [];
    this.filterFormControl.setValue('', { emitEvent: false });
  }

}
