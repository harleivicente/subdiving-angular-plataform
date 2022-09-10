import { Inject, Injectable } from '@angular/core';
import { plataformApplications, PLATAFORM_APPLICATION_ID } from './applications';
import { plataformModules, PLATAFORM_MODULE_ID } from './modules';
import { CurrentApplicationId, PlataformApplication, PlataformModule } from './_models';

export interface PlataformUrl {
  url: string;
  isRelative: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(@Inject(CurrentApplicationId) private currentApplicationId: PLATAFORM_APPLICATION_ID) {}

  getPlatformModule(moduleId: PLATAFORM_MODULE_ID): PlataformModule {
    return plataformModules.find(module => module.id === moduleId);
  }

  getPlataformApplication(applicationId: PLATAFORM_APPLICATION_ID): PlataformApplication {
    return plataformApplications.find(app => app.id === applicationId);
  }

}
