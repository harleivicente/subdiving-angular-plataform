import { admRoutes } from "./adm";
import { crossfitRoutes } from "./crossfit";
import { planoRoutes } from "./planos";
import { treinoRoutes } from "./treino";

// 
// As chaves representao o ID de um modulo
// e não uma aplicaçao.
//
export const plataformRoutes = {
    ADM: admRoutes,
    CROSSFIT: crossfitRoutes,
    PLANOS: planoRoutes,
    TREINO: treinoRoutes
};










