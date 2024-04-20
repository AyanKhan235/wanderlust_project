const express= require('express')
const mongoose = require('mongoose')
const ejs= require('ejs')
const app = express();
const path = require('path')
const Listing = require('./models/Listing.js');

const mongo_url= "mongodb://localhost:27017/wanderlust";
main().then(()=>{
    console.log("connection successfull");
}).catch((err)=>{
    console.log(err);
})

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
async  function main(){
    await  mongoose.connect(mongo_url)
}

app.get('/', (req,res)=>{
    res.send("Hi ! i am root")
})
// index route 
app.get("/listing", async( req, res)=>{
    const allListing = await Listing.find({});
    // res.send(allListing)
    res.render("listings/index.ejs",{allListing})
})
//  show route 
app.get("/listings/:id", async (req,res)=>{
    let {id}= req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", {listing})
})
app.get("/testListing", async (req, res)=>{
    let sampleListing = new Listing({
        title:"My new Villa",
        description:"By the beach",
        price:12999,
        location:"goa",
        country:"India"
    })
    await sampleListing.save();
    res.send("ok")
    console.log("sample was succefull");
})
app.listen(8080,()=>{
    console.log("Server is running on port 8080")
})