import { PLATAFORM_MODULE_ID } from "../modules";
import { PlataformRoute } from "../_models";


export enum CROSSFIT_MODULE_ROUTE_ID {
    LISTA_WOD = 'LISTA_WOD',
    CRIAR_WOD = 'CRIAR_WOD'
}

const routes: Omit<PlataformRoute, 'moduleId'>[] = [
    {
        id: CROSSFIT_MODULE_ROUTE_ID.LISTA_WOD,
        url: 'wods'
    },
    {
        id: CROSSFIT_MODULE_ROUTE_ID.CRIAR_WOD,
        url: 'wods/criar'
    }
];

export const crossfitRoutes: PlataformRoute[] = routes.map(item => {
    return {
        ...item,
        moduleId: PLATAFORM_MODULE_ID.CROSSFIT 
    };
})