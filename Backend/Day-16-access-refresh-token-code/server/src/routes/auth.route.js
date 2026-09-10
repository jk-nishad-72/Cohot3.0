
import { Router } from "express";
import { authMeController, refreshController, registerController } from "../controllers/auth.controller.js";
import { verifyAccesToken } from "../utils/auth.js";
import authModel from "../models/auth.model.js";

const router = Router();


/**
 * @POST /api/auth/register
 */

router.post('/register', registerController)



/**
 * @GET /api/auth/me
 */

router.get('/me',authMeController) 

/**
 * @POST /api/auth/refresh
 */

router.post('/refresh', refreshController)


export default router