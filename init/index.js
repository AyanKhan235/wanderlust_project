const mongoose = require("mongoose");
const initData = require('./data.js');
const Listing  = require("../models/listing.js")

const mongo_url="mongodb://localhost:27017/wanderlust";
main().then(()=>{
    console.log("Connected to db"); 
})
.catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect(mongo_url);
}

const initDB= async () =>{
    await Listing.deleteMany({});
    await Listing.insertMany(initData);
    console.log("data was initalize");
    // console.log(initData);
}

initDB();