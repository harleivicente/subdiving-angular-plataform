import { PLATAFORM_MODULE_ID } from "../modules";
import { PlataformRoute } from "../_models";

export enum PLANOS_MODULE_ROUTE_ID {
    LISTA_PLANOS = 'LISTA_PLANOS',
    CADASTRO_PLANO = 'CADASTRO_PLANO'
}

const routes: Omit<PlataformRoute, 'moduleId'>[] = [
    {
        id: PLANOS_MODULE_ROUTE_ID.LISTA_PLANOS,
        url: 'lista'
    },
    {
        id: PLANOS_MODULE_ROUTE_ID.CADASTRO_PLANO,
        url: 'criar'
    },
];

export const planoRoutes: PlataformRoute[] = routes.map(item => {
    return {
        ...item,
        moduleId: PLATAFORM_MODULE_ID.PLANOS 
    };
})
