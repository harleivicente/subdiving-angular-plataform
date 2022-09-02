import { PLATAFORM_MODULE_ID } from "../modules";
import { PlataformRoute } from "../_models";


export enum TREINO_MODULE_ROUTE_ID {
    LISTA_FICHAS_TREINO = 'LISTA_FICHAS_TREINO',
    CRIAR_FICHA_TREINO = 'CRIAR_FICHA_TREINO'
}

const routes: Omit<PlataformRoute, 'moduleId'>[] = [
    {
        id: TREINO_MODULE_ROUTE_ID.LISTA_FICHAS_TREINO,
        url: 'fichas/lista'
    },
    {
        id: TREINO_MODULE_ROUTE_ID.CRIAR_FICHA_TREINO,
        url: 'fichas/criar'
    }
];


export const treinoRoutes: PlataformRoute[] = routes.map(item => {
    return {
        ...item,
        moduleId: PLATAFORM_MODULE_ID.TREINO 
    };
})
