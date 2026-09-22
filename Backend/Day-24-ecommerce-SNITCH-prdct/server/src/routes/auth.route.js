

import { Router } from "express";
import { loginValidator, registerValidator } from "../validators/auth.validator.js";
import { getMeController, loginController, refreshController, registerController } from "../controllers/auth.controller.js";
import { authenticateMiddlware } from "../middlewares/auth.middleware.js";

const router = Router();

/**
 * @POST /api/auth/register
 * @param req Express req
 * @param req.body = { email,name,password }
 * @response res.status = 201 (if successful)
 */
router.post("/register",registerValidator,registerController)

/**
 * @POST /api/auth/login
 * @param req
 * @param req.body = {email,password}
 * res.status = 200
 */
router.post("/login",loginValidator,loginController)

/**
 * @POST /api/auth/refresh
 */
router.post("/refresh",refreshController)

/**
 * @GET /api/auth/me
 */
router.get("/me",authenticateMiddlware,getMeController)

export default router;