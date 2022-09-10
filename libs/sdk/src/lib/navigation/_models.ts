import { PLATAFORM_MODULE_ID } from './modules';
import { PLATAFORM_APPLICATION_ID } from './applications';
import { InjectionToken } from '@angular/core';

// Application Model
export interface PlataformApplication {
    id: PLATAFORM_APPLICATION_ID;
    deployUrl: string;
}

export const CurrentApplicationId = new InjectionToken<PLATAFORM_APPLICATION_ID>('Current Application ID');



// Module Model
export interface PlataformModule {
    id: PLATAFORM_MODULE_ID;
    applicationId: PLATAFORM_APPLICATION_ID;
    url: string;
    label: string;
    initials: string;
    themeColor: string;
}

export const CurrentModuleId = new InjectionToken<PLATAFORM_MODULE_ID>('Current Module ID');


// 
// Route models 
//
export interface PlataformRoute<T> {
    label: string;
    isDynamic?: boolean,
    url: T
}

export interface StaticPlatformRoute extends PlataformRoute<() => string> {}

export interface DynamicPlatformRoute extends PlataformRoute<(any) => string> {}

export interface ModuleRoutes { [key: string]: PlataformRoute<(any) => string> };

export interface PlataformRoutes { [moduleId: string]: ModuleRoutes };
