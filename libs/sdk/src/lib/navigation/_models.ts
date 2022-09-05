import { PLATAFORM_MODULE_ID } from './modules';
import { PLATAFORM_APPLICATION_ID } from './applications';
import { 
    ADM_MODULE_ROUTE_ID,
    CROSSFIT_MODULE_ROUTE_ID,
    PLANOS_MODULE_ROUTE_ID,
    TREINO_MODULE_ROUTE_ID
} from './routes';
import { InjectionToken } from '@angular/core';

export type PLATAFORM_ROUTE_ID = ADM_MODULE_ROUTE_ID
| CROSSFIT_MODULE_ROUTE_ID
| PLANOS_MODULE_ROUTE_ID
| TREINO_MODULE_ROUTE_ID;

type Route = (() => string) | string;

export interface PlataformApplication {
    id: PLATAFORM_APPLICATION_ID;
    deployUrl: string;
}

export interface PlataformModule {
    id: PLATAFORM_MODULE_ID;
    applicationId: PLATAFORM_APPLICATION_ID;
    url: string;
    label: string;
    initials: string;
    themeColor: string;
}

export interface PlataformRoute {
    id: PLATAFORM_ROUTE_ID;
    moduleId: PLATAFORM_MODULE_ID;
    label: string;
    url: Route;
}

export const CurrentApplicationId = new InjectionToken<PLATAFORM_APPLICATION_ID>('Current Application ID');

export const CurrentModuleId = new InjectionToken<PLATAFORM_MODULE_ID>('Current Module ID');




