import { PlataformRoute } from "../_models";
import { ADM_MODULE_ROUTE_ID, admRoutes } from "./adm";
import { CROSSFIT_MODULE_ROUTE_ID, crossfitRoutes } from "./crossfit";
import { PLANOS_MODULE_ROUTE_ID, planoRoutes } from "./planos";
import { TREINO_MODULE_ROUTE_ID, treinoRoutes } from "./treino";


export type PLATAFORM_ROUTE_ID = ADM_MODULE_ROUTE_ID
| CROSSFIT_MODULE_ROUTE_ID
| PLANOS_MODULE_ROUTE_ID
| TREINO_MODULE_ROUTE_ID;

export const plataformRoutes: PlataformRoute[] = [
    ...admRoutes,
    ...crossfitRoutes,
    ...planoRoutes,
    ...treinoRoutes
];