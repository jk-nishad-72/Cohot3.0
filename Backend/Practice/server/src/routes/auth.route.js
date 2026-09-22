
import express from "express"
import registerValidator from "../validators/auth.validator.js";
import { registerController } from "../controllers/auth.controllers.js";

const router  = express.Router();




/**
 * @POST /api/auth/register
 */
router.post("/register",registerValidator ,registerController)


/**
 * @POST /api/auth/login
 */
router.post("/login", async (req, res) => {
    
})

/**
 * @POST /api/auth/refresh
 */
router.post("/refresh",async (req, res) => {

    
})

/**
 * @GET /api/auth/me
 */
router.post("/me" ,async (req, res) => {
    
})



export default router;
