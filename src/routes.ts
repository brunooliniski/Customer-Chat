import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";

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

const settingsController = new SettingsController();

routes.post("/settings", settingsController.create);

export {routes};