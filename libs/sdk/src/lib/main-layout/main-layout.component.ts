import { Component, Input, OnInit } from '@angular/core';
import { AppStateService } from '../app-state/app-state.service';
import { plataformModules, PLATAFORM_MODULE_ID } from '../navigation/modules';
import { NavigationService } from '../navigation/navigation.service';
import { publicPlataformRoutesByModule } from '../navigation/routes';

@Component({
  selector: 'sdk-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  @Input() moduleId: PLATAFORM_MODULE_ID;

  get plataformModules() {
    return plataformModules;
  }

  get currentModule() {
    return this.navigationService.getPlatformModule(this.moduleId);
  }

  get moduleRoutes() {
    return publicPlataformRoutesByModule.get(this.moduleId);
  }

  constructor(
    protected navigationService: NavigationService,
    private appState: AppStateService
  ) {}

  logoutHandler() {
    this.appState.logout();
  }

  ngOnInit() {}

}
