import { Inject, Injectable, Optional } from '@angular/core';
import { plataformApplications, PLATAFORM_APPLICATION_ID } from './applications';
import { plataformModules, PLATAFORM_MODULE_ID } from './modules';
import { publicPlataformRoutes } from './routes';
import { CurrentApplicationId, PLATAFORM_ROUTE_ID } from './_models';

export interface PlataformUrl {
  url: string;
  isRelative: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(@Inject(CurrentApplicationId) private currentApplicationId: PLATAFORM_APPLICATION_ID) {}

  getRouteUrl(routeId: PLATAFORM_ROUTE_ID): PlataformUrl {
      const plataformRoute = publicPlataformRoutes.find(route => route.id === routeId);
      const plataformModule = plataformModules.find(module => module.id === plataformRoute.moduleId);
      const plataformApp = plataformApplications.find(app => app.id === plataformModule.applicationId);

      const external = this.currentApplicationId !== plataformApp.id;
      const relativeUrl = `${plataformModule.url}/${plataformRoute.url}`;
      const rootUrl = plataformApp.deployUrl;
      const url = `${external ? rootUrl : ''}/${relativeUrl}`

      return {
        url,
        isRelative: !external
      };
  }

  getModuleUrl(moduleId: PLATAFORM_MODULE_ID): PlataformUrl {
    const plataformModule = plataformModules.find(module => module.id === moduleId);
    const plataformApp = plataformApplications.find(app => app.id === plataformModule.applicationId);

    const external = this.currentApplicationId !== plataformApp.id;
    const relativeUrl = `${plataformModule.url}`;
    const rootUrl = plataformApp.deployUrl;
    const url = `${external ? rootUrl : ''}/${relativeUrl}`

    return {
      url,
      isRelative: !external
    };
  }

}
