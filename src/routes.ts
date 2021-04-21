import { request } from "express";
import { Router } from "express";
import { getCustomRepository } from "typeorm";

import { SettingsRepository } from "./repositories/SettingsRepository";

const routes = Router();

/**
 * ..:: [Param Types]::..
 * Routes Params, 
 * http://localhost:3333/settings/1
 * 
 * Query Params (filters and searches)
 * http://localhost:3333/settings/1?search=result
 * 
 * Body Params (JSON)
 */

routes.post("/settings", async (request, response) => {
    
})

export {routes};