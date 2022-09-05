import { PLATAFORM_MODULE_ID } from "../modules";
import { PlataformRoute } from "../_models";

export enum ADM_MODULE_ROUTE_ID {
    LISTA_UNIDADES = 'LISTA_UNIDADES',
    CRIAR_UNIDADE = 'CRIAR_UNIDADE'
}

const routes: Omit<PlataformRoute, 'moduleId'>[] = [
    {
        id: ADM_MODULE_ROUTE_ID.LISTA_UNIDADES,
        url: 'unidades/lista',
        label: 'Unidades'
    },
    {
        id: ADM_MODULE_ROUTE_ID.CRIAR_UNIDADE,
        url: 'unidades/criar',
        label: 'Criar Unidade'
    },
];

export const admRoutes: PlataformRoute[] = routes.map(item => {
    return {
        ...item,
        moduleId: PLATAFORM_MODULE_ID.ADM 
    };
})
