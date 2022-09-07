import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavigationService } from '../navigation/navigation.service';
import { publicPlataformRoutes } from '../navigation/routes';
import { PlataformRoute, PLATAFORM_ROUTE_ID } from '../navigation/_models';

@Component({
  selector: 'sdk-global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.scss']
})
export class GlobalSearchComponent implements OnInit {

  constructor(private navigationService: NavigationService) {}

  protected filterFormControl: FormControl = new FormControl();
  protected filteredRoutes: PlataformRoute[] = [];
  protected showDropdown = false;

  ngOnInit() {
    this.filterFormControl.valueChanges.subscribe(value => {
      this.filteredRoutes = publicPlataformRoutes.filter(item => {
        return item.label.toLowerCase().includes(`${value}`.toLowerCase());
      });
      this.showDropdown = true;
    });
  }

  protected getPlataformModule(routeId: PLATAFORM_ROUTE_ID) {
    const route = this.navigationService.getPlataformRoute(routeId);
    return this.navigationService.getPlatformModule(route.moduleId);
  }

  protected routeClick() {
    this.showDropdown = false;
    this.filteredRoutes = [];
    this.filterFormControl.setValue('', { emitEvent: false });
  }

  get routes() {
    return publicPlataformRoutes;
  }

}
