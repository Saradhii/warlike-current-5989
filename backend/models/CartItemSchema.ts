import mongoose from "mongoose";

export type SchemaType = {
  quantity: string;
  _id: mongoose.Schema.Types.ObjectId;
  userid: string;
  name: string;
  image: string;
  price: string;
};

const CartSchema = new mongoose.Schema<SchemaType>({
  quantity: String,
  _id: mongoose.Schema.Types.ObjectId,
  userid: String,
  name: String,
  image: String,
  price: String,
});

export const Cart = mongoose.model("cartItem", CartSchema);
