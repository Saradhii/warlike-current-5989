const Product = require("../models/ProductSchema");
const Cart = require("../models/CartItemSchema");
import express from "express";
import { Router } from "express";
const jwt = require("jsonwebtoken");

const ProductRoute = Router();

ProductRoute.get("/:id",async (req: express.Request, res: express.Response) => {
    const SignleProduct = await Product.find(req.params);
    res.status(200).send(SignleProduct);
  })

  ProductRoute.get("/cartproducts/:id",async (req: express.Request, res: express.Response) => {
    const item = {
         userid : req.params.id
    }
    const SignleProduct = await Cart.find(item);
    res.status(200).send(SignleProduct);
  })
  

ProductRoute.post("/addToCart",async (req: express.Request, res: express.Response) => {
  const token = req.headers.authentication;
  if(!token){
    return res.send("forbiden");
  }
  try{
    const decoded = jwt.verify(token,"SECRET1234");
    // console.log("Decode",decoded);
    if(decoded){
      const cart = new Cart(req.body);
      cart.save();
      res.status(200).send({ message: "Product Added successfully" });
    }
    } catch(e :any){
    console.log("err",e.message);
    return res.status(403).send('Forbiden');
    }
  })


module.exports = ProductRoute;
