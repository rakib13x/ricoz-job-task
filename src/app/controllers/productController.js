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

const getAllProducts = asyncHandler(async (req, res) => {
  const products = await ProductServices.getAllProductsFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All Products retrieved successfully",
    data: products,
  });
});

const getSingleProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const product = await ProductServices.getSingleProductFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product retrieved successfully",
    data: product,
  });
});

const updateProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  const updatedProduct = await ProductServices.updateProductInDB(
    id,
    updateData
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product updated successfully",
    data: updatedProduct,
  });
});

export const ProductControllers = {
  createProducts,
  getAllProducts,
  getSingleProduct,
  updateProduct,
};
