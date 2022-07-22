import mongoose from "mongoose";

export type SchemaType = {
  quantity: number;
  _id: mongoose.Schema.Types.ObjectId;
  userid: mongoose.Schema.Types.ObjectId;
  name: string;
  image: string;
  price: string;
};

const CartSchema = new mongoose.Schema<SchemaType>({
  quantity: Number,
  _id: mongoose.Schema.Types.ObjectId,
  userid: mongoose.Schema.Types.ObjectId,
  name: String,
  image: String,
  price: String,
});

export const Cart = mongoose.model("cartItem", CartSchema);
