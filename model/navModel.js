const mongoose=require("mongoose")

const navModel=mongoose.model("navs",{
    xs:{type:Number},
    path:{type:String},
    title:{type:String}
})
module.exports=navModel