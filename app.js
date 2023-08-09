const express = require("express")
const cors= require("cors")
const mongoose=require("mongoose")
const productModel = require("./model/productModel")
const navModel = require("./model/navModel")

const app=express()
app.use(express.json())
app.use(cors())
mongoose
.connect("mongodb://127.0.0.1:27017/Productshops")
.then(()=>console.log("DataBase Is Connected"))

app.get("/",(req,res)=>{
    res.send("Product Shop Is Here")
})
app.get("/product",async(req,res)=>{
    const result = await productModel.find({})
    res.send(result)
})
app.post("/addpr",(req,res)=>{
    const payload=req.body;
    const newPr=new productModel(payload)
    newPr.save()
    res.send("pr ")
})
app.get("/nav",async(req,res)=>{
const result= await navModel.find({})
res.send(result)
})
app.post("/adnav",(req,res)=>{
    const payload=req.body;
    const newNav= new navModel(payload)
    newNav.save()
    res.send("nav added")
})

app.listen(1030,()=>{
    console.log("App is Runnig On Port 1030")
})

