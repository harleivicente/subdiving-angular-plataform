import { PLATAFORM_MODULE_ID } from "../modules";

export const crossfitRoutes = {
    LISTA_WOD: {
        url: () => '/crossfit/wods/lista',
        label: 'WODS',
        moduleId: PLATAFORM_MODULE_ID.CROSSFIT
    },
    CRIAR_WOD: {
        url: () => '/crossfit/wods/criar',
        label: 'Criar WOD',
        moduleId: PLATAFORM_MODULE_ID.CROSSFIT
    }
};

