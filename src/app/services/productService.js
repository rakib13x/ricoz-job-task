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

const getAllProductsFromDB = async () => {
  const products = await Product.find();
  return products;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
};
