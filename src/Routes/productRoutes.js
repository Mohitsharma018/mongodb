const express = require("express")
const productRouter = express.Router()
const{Product} = require("../Models/product")


productRouter.get("/product",async(req,res)=>{
    let data = await Product.find({})
    res.status(200).json(data)
})

productRouter.post("/product",async(req,res)=>{
    await Product.insertOne(req.body)
    res.status(200).json({msg : "post success"})
})

productRouter.put("/product/:id",async(req,res)=>{
    await Product.findByIdAndUpdate({_id : req.params.id} , req.body)
    res.status(200).json({msg : "put success"})
})

productRouter.delete("/product/:id",async(req,res)=>{
    await Product.findByIdAndDelete(req.params.id)
    res.status(200).json({msg : "delete success"})
})

productRouter.delete("/product/:id",async(req,res)=>{
    let info = await Product.find({_id : req.params.id})
    res.status(200).json(info)
})

module.exports = {
    productRouter
}