import { PLATAFORM_MODULE_ID } from "../modules";
import { PlataformRoute } from "../_models";
import { admRoutes } from "./adm";
import { crossfitRoutes } from "./crossfit";
import { planoRoutes } from "./planos";
import { treinoRoutes } from "./treino";

export { ADM_MODULE_ROUTE_ID } from "./adm";
export { CROSSFIT_MODULE_ROUTE_ID } from "./crossfit";
export { PLANOS_MODULE_ROUTE_ID } from "./planos";
export { TREINO_MODULE_ROUTE_ID } from "./treino";

type PlatformRouteMap = Map<PLATAFORM_MODULE_ID, PlataformRoute[]>;

const buildPlataformRoutesArray = (routeMap: PlatformRouteMap): PlataformRoute[] => {
    let routes = [];
    routeMap.forEach(routesForModule => {
        routes = routes.concat(routesForModule)
    });
    return routes;
}

export const publicPlataformRoutesByModule: PlatformRouteMap = new Map([
    [PLATAFORM_MODULE_ID.ADM, admRoutes],
    [PLATAFORM_MODULE_ID.CROSSFIT, crossfitRoutes],
    [PLATAFORM_MODULE_ID.PLANOS, planoRoutes],
    [PLATAFORM_MODULE_ID.TREINO, treinoRoutes]
])

export const publicPlataformRoutes: PlataformRoute[] = buildPlataformRoutesArray(
    publicPlataformRoutesByModule
);





