import express, {raw} from "express";
import {authMeController, loginController, registerController} from "../controllers/auth.controller.js";


const router = express.Router();


// Register api
router.post("/register",registerController)

// Login api
router.post("/login", loginController);

//auth me | get me

router.get("/me",authMeController)



export  default  router;


