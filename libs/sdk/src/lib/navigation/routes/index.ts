import { PlataformRoute } from "../_models";
import { admRoutes } from "./adm";
import { crossfitRoutes } from "./crossfit";
import { planoRoutes } from "./planos";
import { treinoRoutes } from "./treino";

export { ADM_MODULE_ROUTE_ID } from "./adm";
export { CROSSFIT_MODULE_ROUTE_ID } from "./crossfit";
export { PLANOS_MODULE_ROUTE_ID } from "./planos";
export { TREINO_MODULE_ROUTE_ID } from "./treino";

export const publicPlataformRoutes: PlataformRoute[] = [
    ...admRoutes,
    ...crossfitRoutes,
    ...planoRoutes,
    ...treinoRoutes
];