import { Inject, Injectable, Optional } from '@angular/core';
import { plataformApplications, PLATAFORM_APPLICATION_ID } from './applications';
import { plataformModules, PLATAFORM_MODULE_ID } from './modules';
import { publicPlataformRoutes } from './routes';
import { CurrentApplicationId, PLATAFORM_ROUTE_ID } from './_models';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(@Optional() @Inject(CurrentApplicationId) private currentApplicationId: PLATAFORM_APPLICATION_ID) {}

  getRouteUrl(routeId: PLATAFORM_ROUTE_ID): string {
      if (!this.currentApplicationId) {
        throw Error('The Injection Token: CurrentApplicationId must be provided.')
      }

      const plataformRoute = publicPlataformRoutes.find(route => route.id === routeId);
      const plataformModule = plataformModules.find(module => module.id === plataformRoute.moduleId);
      const plataformApp = plataformApplications.find(app => app.id === plataformModule.applicationId);

      if (this.currentApplicationId === plataformApp.id) {
        return `/${plataformModule.url}/${plataformRoute.url}`
      } else {
        return `${plataformApp.deployUrl}/${plataformModule.url}/${plataformRoute.url}`
      }
  }

  getModuleUrl(moduleId: PLATAFORM_MODULE_ID): string {
    if (!this.currentApplicationId) {
      throw Error('The Injection Token: CurrentApplicationId must be provided.')
    }

    const plataformModule = plataformModules.find(module => module.id === moduleId);
    const plataformApp = plataformApplications.find(app => app.id === plataformModule.applicationId);

    if (this.currentApplicationId === plataformApp.id) {
      return `/${plataformModule.url}`
    } else {
      return `${plataformApp.deployUrl}/${plataformModule.url}`
    }

  }

}
