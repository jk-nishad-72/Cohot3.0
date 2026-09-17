

import express from "express"
import { deleteController, getAllUrlsController, redirectController, shortCodeController } from "../controllers/url.controller.js";

const  router = express.Router();


/**
 * @PORT /api/url
 */

router.post("/",shortCodeController)

/**
 * @GET /api/url
 */
router.get("/",getAllUrlsController) 

/**
 * @POST /api/url/:code
 */

router.post("/:code",redirectController)

/**
 * @DELETE /api/url/:code 
 */

router.delete("/:code",deleteController)

export default router; 







