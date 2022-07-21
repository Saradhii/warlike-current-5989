import mongoose from "mongoose";

export type SchemaType = {
  title: string;
  image: string;
  price: string;
};

const ProductSchema = new mongoose.Schema<SchemaType>({
  title: String,
  image: String,
  price: String,
});

export const Product = mongoose.model("product", ProductSchema);
