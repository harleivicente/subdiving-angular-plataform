import { PlataformApplication } from "./_models";

export enum PLATAFORM_APPLICATION_ID {
    TREINO_APP = 'TREINO_APP',
    ADM_APP = 'ADM_APP'
}

export const plataformApplications: PlataformApplication[] = [
    {
        id: PLATAFORM_APPLICATION_ID.TREINO_APP,
        deployUrl: 'http://localhost:4200'
    },
    {
        id: PLATAFORM_APPLICATION_ID.ADM_APP,
        deployUrl: 'http://localhost:4201'
    }
];
