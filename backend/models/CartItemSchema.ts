import mongoose from "mongoose";

export type SchemaType = {
  quantity:string;
  _id:number;
  userid:string;
  title: string;
  image: string;
  price: string;

};

const CartSchema = new mongoose.Schema<SchemaType>({
  quantity:String,
  _id:String,
  userid:String,
  title:String,
  image: String,
  price: String,
});

const Cart = mongoose.model("cartItem", CartSchema);

module.exports = Cart;

