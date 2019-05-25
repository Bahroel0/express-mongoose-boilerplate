import express from "express";

import indexController from "../controllers/index.controller";
var router = express.Router();

/* GET home page. */
router.get("/", indexController.index);

export default router;
