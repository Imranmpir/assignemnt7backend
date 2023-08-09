const mongoose=require("mongoose")

const productModel=mongoose.model("products",{
    brand:{type:String},
    price:{type:Number},
    image:{type:String},
    rating:{type:Number},
    desc:{type:String}

})
module.exports=productModel