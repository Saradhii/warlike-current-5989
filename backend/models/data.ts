const {Schema,model}= require('mongoose')

const data = new Schema({
    "category": String,
    "title": String,
    "mrp": Number,
    "discount": Boolean,
    "price": Number,
    "shortDisc": String,
    "outofstock": Boolean,
    "image": String,
    "fullDisc": String
})

const dataSchema = model("dataSchema",data)
module.exports= dataSchema