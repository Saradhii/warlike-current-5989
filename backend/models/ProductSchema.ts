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

const Product = mongoose.model("product", ProductSchema);

module.exports = Product;

