import { PLATAFORM_APPLICATION_ID } from './applications';
import { PlataformModule } from './_models';

export enum PLATAFORM_MODULE_ID {
    TREINO = 'TREINO',
    CROSSFIT = 'CROSSFIT',
    ADM = 'ADM',
    PLANOS = 'PLANOS'
}

export const plataformModules: PlataformModule[] = [

    // Treino application
    {
        applicationId: PLATAFORM_APPLICATION_ID.TREINO_APP,
        id: PLATAFORM_MODULE_ID.TREINO,
        url: 'treino'
    },
    {
        applicationId: PLATAFORM_APPLICATION_ID.TREINO_APP,
        id: PLATAFORM_MODULE_ID.CROSSFIT,
        url: 'crossfit'
    },

    //  Adm application
    {
        applicationId: PLATAFORM_APPLICATION_ID.ADM_APP,
        id: PLATAFORM_MODULE_ID.ADM,
        url: 'adm'
    },
    {
        applicationId: PLATAFORM_APPLICATION_ID.ADM_APP,
        id: PLATAFORM_MODULE_ID.PLANOS,
        url: 'planos'
    },
];
