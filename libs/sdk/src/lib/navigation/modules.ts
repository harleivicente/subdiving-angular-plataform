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
        url: 'treino',
        label: 'Treino',
        initials: 'Tr',
        themeColor: '#123'
    },
    {
        applicationId: PLATAFORM_APPLICATION_ID.TREINO_APP,
        id: PLATAFORM_MODULE_ID.CROSSFIT,
        url: 'crossfit',
        label: 'Crossfit',
        initials: 'Cr',
        themeColor: '#665'
    },

    //  Adm application
    {
        applicationId: PLATAFORM_APPLICATION_ID.ADM_APP,
        id: PLATAFORM_MODULE_ID.ADM,
        url: 'adm',
        label: 'Adm',
        initials: 'Ad',
        themeColor: '#456'
    },
    {
        applicationId: PLATAFORM_APPLICATION_ID.ADM_APP,
        id: PLATAFORM_MODULE_ID.PLANOS,
        url: 'planos',
        label: 'Planos',
        initials: 'Pl',
        themeColor: '816'
    },
];
