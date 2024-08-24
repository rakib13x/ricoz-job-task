import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import productRoutes from "./app/routes/productRoutes.js";

import connectDB from "./app/config/db.js";
import { errorHandler, notFound } from "./app/middlewares/errorMiddleware.js";
dotenv.config();

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Hello from server.");
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, () =>
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${port}`
  )
);
