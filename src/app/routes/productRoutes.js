import express from "express";
import { ProductControllers } from "../controllers/productController.js";

const router = express.Router();

router.route("/").post(ProductControllers.createProducts);

export default router;
