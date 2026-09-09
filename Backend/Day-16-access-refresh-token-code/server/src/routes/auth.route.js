
import { Router } from "express";
import { registerController } from "../controllers/auth.controller.js";

const router = Router();


/**
 * @POST /api/auth/register
 */

router.post('/register', registerController)



/**
 * @GET /api/auth/me
 */

router.post('/me', (req,res)=>{

    let token = req.headers.autherization?.split(" ")[1];
    console.log(token)

    return
})


/**
 * @POST /api/auth/refresh
 */

router.post('/refresh', (req,res)=>{})






export default router