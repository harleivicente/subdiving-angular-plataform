import { PLATAFORM_MODULE_ID } from "../modules";

export const admRoutes = {
    LISTA_UNIDADES: {
        url: () => '/adm/unidades/lista',
        label: 'Unidades',
        moduleId: PLATAFORM_MODULE_ID.ADM
    },
    CRIAR_UNIDADE: {
        url: () => '/adm/unidades/criar',
        label: 'Criar Unidade',
        moduleId: PLATAFORM_MODULE_ID.ADM
    }
};