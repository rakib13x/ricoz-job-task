import express from "express";
import { ProductControllers } from "../controllers/productController.js";

const router = express.Router();

router.route("/").post(ProductControllers.createProducts);
router.get("/", ProductControllers.getAllProducts);
router.get("/:id", ProductControllers.getSingleProduct);

export default router;
