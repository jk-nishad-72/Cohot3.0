
import express from "express";
import { authenticate } from "../middlewares/auth.middleware.js";
import { authMeController, loginController, registerController } from "../controllers/auth.controller.js";

const router = express.Router();



//register api
router.post("/register",registerController)


// auth me api 
router.get("/me", authenticate ,authMeController )


// login api 
router.post("/login" , loginController ) 








export default router