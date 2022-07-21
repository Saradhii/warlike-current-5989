import mongoose from "mongoose";
import { ObjectId } from "mongoose";
import {Schema} from "mongoose";

export type SchemaType = {
  first_name:string;
  last_name:string;
  email:string;
  hash: string;
  cartProducts: [Schema.Types.ObjectId];
};

const UserSchema = new mongoose.Schema<SchemaType>({
  first_name:String,
  last_name:String,
  email:String,
  hash:String,
  cartProducts:Schema.Types.ObjectId,
});

const User = mongoose.model("user", UserSchema);

module.exports = User;

