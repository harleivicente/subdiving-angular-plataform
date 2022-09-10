import { Component, Input, OnInit, Inject } from '@angular/core';
import { AppStateService } from '../app-state/app-state.service';
import { PLATAFORM_APPLICATION_ID } from '../navigation/applications';
import { plataformModules, PLATAFORM_MODULE_ID } from '../navigation/modules';
import { NavigationService } from '../navigation/navigation.service';
import { plataformRoutes } from '../navigation/routes';
import { CurrentApplicationId, PlataformModule, ModuleRoutes } from '../navigation/_models';

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

  get staticModuleRoutes() {
    const moduleRoutes: ModuleRoutes = plataformRoutes[this.moduleId];
    return Object.entries(moduleRoutes).map(([,route]) => route).filter(route => !route.isDynamic);
  }

  constructor(
    @Inject(CurrentApplicationId) private currentAppId:  PLATAFORM_APPLICATION_ID,
    protected navigationService: NavigationService,
    private appState: AppStateService
  ) {}

  logoutHandler() {
    this.appState.logout();
  }

  isInternalModule(module: PlataformModule): boolean {
    return module.applicationId === this.currentAppId;
  }

  getExternalUrl(module: PlataformModule): string {
    const application = this.navigationService.getPlataformApplication(
      module.applicationId
    );
    return `${application.deployUrl}${module.url}`;
  }

  ngOnInit() {}

}
