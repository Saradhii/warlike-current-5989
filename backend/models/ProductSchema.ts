import mongoose from "mongoose";

export type SchemaType = {
  _id: mongoose.Schema.Types.ObjectId;
  title: string;
  image: string;
  price: string;
};

const ProductSchema = new mongoose.Schema<SchemaType>({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  image: String,
  price: String,
});

export const Product = mongoose.model("fabbag_product", ProductSchema);
