import { PLATAFORM_MODULE_ID } from "../modules";


const fichaRoutes = {
    LISTA_FICHAS_TREINO: {
        url: () => '/treino/fichas/lista',
        label: 'Lista de Fichas',
        moduleId: PLATAFORM_MODULE_ID.TREINO
    },
    CRIAR_FICHA_TREINO: {
        url: () => '/treino/fichas/criar',
        label: 'Criar ficha',
        moduleId: PLATAFORM_MODULE_ID.TREINO
    },
    FICHAS_DO_ALUNO: {
        url: (alunoId: number) => `/treino/fichas/aluno/${alunoId}`,
        label: 'Fichas do Aluno',
        isDynamic: true,
        moduleId: PLATAFORM_MODULE_ID.TREINO
    }
};

const aparelhoRoutes = {
    APARELHO_LISTA: {
        url: () => `/treino/aparelhos`,
        label: 'Aparelhos',
        moduleId: PLATAFORM_MODULE_ID.TREINO
    }
};


export const treinoRoutes = {
    ...fichaRoutes,
    ...aparelhoRoutes
};

