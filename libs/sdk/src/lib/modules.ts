import { PLATAFORM_APPLICATION_ID } from './applications';
import { PlataformModule } from './_models';

export enum PLATAFORM_MODULE_ID {
    TREINO,
    CROSSFIT,
    ADM,
    PLANOS
}

export const plataformModules: PlataformModule[] = [
    {
        id: PLATAFORM_MODULE_ID.TREINO,
        applicationId: PLATAFORM_APPLICATION_ID.TREINO_APP,
        relativeUrl: 'treino'
    },
    {
        id: PLATAFORM_MODULE_ID.CROSSFIT,
        applicationId: PLATAFORM_APPLICATION_ID.TREINO_APP,
        relativeUrl: 'crossfit'
    },
    {
        id: PLATAFORM_MODULE_ID.ADM,
        applicationId: PLATAFORM_APPLICATION_ID.ADM_APP,
        relativeUrl: 'adm'
    },
    {
        id: PLATAFORM_MODULE_ID.PLANOS,
        applicationId: PLATAFORM_APPLICATION_ID.ADM_APP,
        relativeUrl: 'planos'
    },
];
