import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavigationService } from '../navigation/navigation.service';
import { plataformRoutes } from '../navigation/routes';
import { ModuleRoutes, PlataformRoute, PlataformRoutes, StaticPlatformRoute } from '../navigation/_models';

@Component({
  selector: 'sdk-global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.scss']
})
export class GlobalSearchComponent implements OnInit {

  constructor(private navigationService: NavigationService) {}

  protected filterFormControl: FormControl = new FormControl();
  protected filteredRoutes: StaticPlatformRoute[] = [];
  protected showDropdown = false;

  ngOnInit() {
    this.filterFormControl.valueChanges.subscribe((value: string) => {
      const sanitizedQuery = value.trim();
      if (!sanitizedQuery) return;
      this.filteredRoutes = this.filterStaticRoutes(plataformRoutes as PlataformRoutes, sanitizedQuery);
      this.showDropdown = true;
    });
  }

  private filterStaticRoutes(routes: PlataformRoutes, searchQuery: string): StaticPlatformRoute[] {
    let matchedRoutes = [];
    Object.entries(routes).forEach(([, moduleRoutes]) => {
      const filteredModuleRoutes = this.filterStaticRoutesInModule(moduleRoutes, searchQuery);
      matchedRoutes = matchedRoutes.concat(filteredModuleRoutes);
    });
    return matchedRoutes;
  }

  private filterStaticRoutesInModule(moduleRoutes: ModuleRoutes, searchQuery: string): StaticPlatformRoute[] {
    return Object.entries(moduleRoutes)
    .filter(([,route]) => {
      return this.doesRouteMatch(route.label, searchQuery) && !route.isDynamic
    })
    .map(([,route]) => route) as StaticPlatformRoute[];
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
