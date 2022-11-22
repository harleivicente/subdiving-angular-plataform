const fichaRoutes = {
    LISTA_FICHAS_TREINO: {
        url: () => '/treino/fichas/lista', 
        label: 'Lista de Fichas',
    },
    CRIAR_FICHA_TREINO: {
        url: () => '/treino/fichas/criar',
        label: 'Criar ficha',
    },
    // FICHAS_DO_ALUNO: {
    //     url: (alunoId: number) => `/treino/fichas/aluno/${alunoId}`,
    //     label: 'Fichas do Aluno',
    //     isDynamic: true,
    // }
};

const aparelhoRoutes = {
    // APARELHO_LISTA: {
    //     url: () => `/treino/aparelhos`,
    //     label: 'Aparelhos',
    // }
};

export const treinoRoutes = {
    ...fichaRoutes,
    ...aparelhoRoutes
};

