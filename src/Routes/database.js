const URL = "mongodb+srv://mohitsharma018:Rajv1981@cluster0.xdsvx.mongodb.net/DataBase?retryWrites=true&w=majority&appName=Cluster0"


const mongoose = require("mongoose")


function productData(){
    mongoose.connect(URL)
    .then(()=>{
        console.log("Db connected")
    })
    .catch(()=>{
        console.log("Db DIsconnected")
    })
}

module.exports ={
    productData
}