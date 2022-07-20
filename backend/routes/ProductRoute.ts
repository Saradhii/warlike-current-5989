const Product = require("../models/ProductSchema");
const Cart = require("../models/CartItemSchema");
import express from "express";
import { Router } from "express";

const ProductRoute = Router();

ProductRoute.get("/:id",async (req: express.Request, res: express.Response) => {
    const SignleProduct = await Product.find(req.params);
    res.status(200).send(SignleProduct);
  })

ProductRoute.post("/addToCart",async (req: express.Request, res: express.Response) => {
  const cart = new Cart(req.body);
  cart.save();
  res.status(200).send({ message: "Product Added successfully" });
  })


module.exports = ProductRoute;
