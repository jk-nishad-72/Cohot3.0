
import express from "express"
import { loginValidator, registerValidator } from "../validators/auth.validators.js";

import { 
    getMeController, 
    loginController, 
    logoutController,
    refreshController, 
    registerController 
} from "../controllers/auth.controllers.js";

import { authenticate } from "../middlewares/auth.middlewares.js";

const router = express.Router();


/**
 * @description user  register and store user info on db  
 * @method POST 
 * @route /api/auth/register
 */

router.post("/register", registerValidator ,registerController)

/**
 * @description user  login and return new access-refresh-token and set cookie 
 * @method POST 
 * @route /api/auth/login
 */

router.post("/login", loginValidator , loginController)

/**
 * @description user  refresh token and return new access-refresh-token and set cookie 
 * @method POST 
 * @route /api/auth/refresh-token
 */

router.post("/refresh-token", refreshController) 

/**
 * @description user  logout and remove refresh-token from db 
 * @method POST 
 * @route /api/auth/logout
 */

router.post("/logout", authenticate , logoutController)


/**
 * @description user  info fetch from db  
 * @method GET 
 * @route /api/auth/me
 */

router.get("/me", authenticate, getMeController)


export default router;

