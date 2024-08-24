import Product from "../model/productModel.js";

const createProductIntoDB = async (req) => {
  try {
    const productData = req.body;
    const result = await Product.create(productData);
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const ProductServices = {
  createProductIntoDB,
};
