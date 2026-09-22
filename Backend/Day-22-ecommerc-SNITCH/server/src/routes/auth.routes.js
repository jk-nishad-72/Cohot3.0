
import express from "express"
import registerValidator from "../validators/auth.validator.js";
import { registerController } from "../controllers/auth.controller.js";

const router = express.Router();

/**
 * @POST /api/auth/register
 * @param req Express req
 * @param req.body {email , name , password , role}
 * @response res.status = 201(if succeed)
 * @respose res.status = 400(if validation fail)
 * 
 */

router.post('/register',registerValidator ,registerController)
export default router;