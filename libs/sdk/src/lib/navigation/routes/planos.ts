import { PLATAFORM_MODULE_ID } from "../modules";

export const planoRoutes = {
    LISTA_PLANOS: {
        url: () => '/planos/lista',
        label: 'Lista de Planos',
        moduleId: PLATAFORM_MODULE_ID.PLANOS
    },
    CADASTRO_PLANO: {
        url: () => '/planos/criar',
        label: 'Cadastrar Plano',
        moduleId: PLATAFORM_MODULE_ID.PLANOS
    },
};


