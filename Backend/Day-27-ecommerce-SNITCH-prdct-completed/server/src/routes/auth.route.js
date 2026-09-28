
import express from "express"
import { loginValidator, registerValidator } from "../validators/auth.validator.js";
import { getMeController, loginController, refreshController, registerController } from "../controllers/auth.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const router = express.Router();

/**
 * @POST /api/auth/register
 */

router.post("/register",registerValidator,registerController)



/**
 * @POST /api/auth/login
 */

router.post("/login",loginValidator,loginController)

/**
 * @POST /api/auth/me
 */

router.post("/me",authenticate,getMeController )
/**
 * @POST /api/auth/refresh
 */

router.post("/refresh",refreshController)


export default  router;