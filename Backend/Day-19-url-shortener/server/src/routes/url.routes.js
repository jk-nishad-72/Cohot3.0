import express from "express";
import {  createShortCodeController, getAllUrlsController } from "../controllers/url.controller.js";


const router = express.Router();

/**
 * @POST  /api/url
 */
router.post("/",createShortCodeController)


/**
 * @GET /api/url
 */
router.get("/",getAllUrlsController)


export default router



