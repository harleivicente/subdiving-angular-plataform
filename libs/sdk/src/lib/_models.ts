import { PLATAFORM_MODULE_ID } from './modules';
import { PLATAFORM_APPLICATION_ID } from './applications';
import { PLATAFORM_ROUTE_ID } from './routes';

type Route = (() => string) | string;

export interface PlataformApplication {
    id: PLATAFORM_APPLICATION_ID;
    deployUrl: string;
}

export interface PlataformModule {
    id: PLATAFORM_MODULE_ID;
    applicationId: PLATAFORM_APPLICATION_ID;
    relativeUrl: string;
}

export interface PlataformRoute {
    id: PLATAFORM_ROUTE_ID;
    moduleId: PLATAFORM_MODULE_ID;
    url: Route;
}



