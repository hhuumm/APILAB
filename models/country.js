const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const countrySchema=new Schema({
name:{type:String,required:true},
age:{type:Number,min:0},
generalLocation:String,
prominentLeaders:[String]
})

module.exports=mongoose.model("Country",countrySchema)