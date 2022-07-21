import mongoose, { Schema } from "mongoose";

export type SchemaType = {
  first_name: string;
  last_name:string;
  email:string;
  hash:string;
  googleID:string;
  
};

const UserSchema = new mongoose.Schema<SchemaType>({
    first_name: String,
    last_name:String,
    email:String,
    hash:String,
    googleID:String,
    // cartProducts:[Schema.Types.ObjectId]
});

export const User = mongoose.model("user", UserSchema);


