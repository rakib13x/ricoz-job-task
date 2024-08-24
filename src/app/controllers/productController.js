import httpStatus from "http-status";
import asyncHandler from "../middlewares/asyncHandler.js";
import { ProductServices } from "../services/productService.js";
import sendResponse from "../utils/sendResponse.js";

const createProducts = asyncHandler(async (req, res) => {
  const {
    name,
    image,
    brand,
    category,
    description,
    rating,
    price,
    countInStock,
  } = req.body;

  if (
    !name ||
    !image ||
    !brand ||
    !category ||
    !description ||
    rating === undefined ||
    price === undefined ||
    countInStock === undefined
  ) {
    return sendResponse(res, {
      statusCode: httpStatus.BAD_REQUEST,
      success: false,
      message: "All fields are required",
      data: null,
    });
  }

  const result = await ProductServices.createProductIntoDB(req);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Product created successfully",
    data: result,
  });
});

export const ProductControllers = {
  createProducts,
};
