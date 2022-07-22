import { Request, Response, Router } from "express";
import { Cart } from "../models/CartItemSchema";

const cartRoute = Router();

cartRoute.get("/getCartData/:id", async (req: Request, res: Response) => {
  if (
    req.params.id === null ||
    req.params.id === "" ||
    req.query.id === "undefined"
  ) {
    return res
      .status(404)
      .send({ message: "User id not provided", error: true });
  }

  const data = await Cart.find({ userid: req.params.id });

  if (data === null) {
    return res.status(404).send({ message: "User not found", error: true });
  }

  if (data.length === 0) {
    return res.status(200).send({ message: "Cart is empty", error: false });
  }

  return res
    .status(200)
    .send({ message: "Cart is not empty", error: false, data });
});

cartRoute.post("/addItem", async (req: Request, res: Response) => {
  if (req.body === "" && req.body === "undefined" && req.body === "true") {
    return res
      .status(200)
      .send({ message: "Someting went wrong", error: true });
  }

  const data = new Cart(req.body);

  data.save();

  res
    .status(200)
    .send({ message: "Product Added to the cart successfully.", error: false });
});

cartRoute.delete("/deleteProduct/:id", async (req: Request, res: Response) => {
  if (req.params.id) {
    const data = await Cart.deleteOne({ _id: req.params.id });

    return res.status(200).send({ message: "Product Deleted Succsessfully" });
  }

  return res
    .status(200)
    .send({ message: "Something went wrong!", error: false });
});

cartRoute.patch("/updateCart", async (req: Request, res: Response) => {
  if (req.body === "" && req.body === "undefined" && req.body === "true") {
    return res
      .status(200)
      .send({ message: "Someting went wrong", error: true });
  }

  const data = await Cart.updateOne(
    { $and: [{ _id: req.body.product_id, userid: req.body.userid }] },
    { $set: { quantity: req.body.quantity } }
  );

  const cartData = await Cart.find({ userid: req.body.userid });

  return res.status(200).send({
    message: "Cart data updated successfully",
    error: false,
    data: cartData,
  });
});

export default cartRoute;
