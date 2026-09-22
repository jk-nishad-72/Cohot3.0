
import express from "express";
import { loginValidator, registerValidator } from "../validators/auth.validator.js";
import { 
    registerController, 
    loginController,
    refreshTokenController, 
    getMeController 
} from "../controllers/auth.controller.js";
import { authenticateMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();



/**
 * @POST /api/auth/register
 */
router.post("/register",registerValidator , registerController) 


/**
 * @POST /api/auth/login
 */
router.post("/login",loginValidator, loginController) 


/**
 * @POST /api/auth/refresh
 */
router.post("/refresh",refreshTokenController)


/**
 * @GET /api/auth/me
 */
router.get("/me", authenticateMiddleware ,getMeController)

export default router
