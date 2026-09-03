

import express from "express"
import { authMeController, registerController } from "../controllers/auth.controller.js"; 
import { authenticate } from "../middlewares/auth.middleware.js";


const router = express.Router();


router.post("/register",registerController)

router.get("/me",authenticate , authMeController)


export default router