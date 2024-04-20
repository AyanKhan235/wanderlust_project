const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ListingSchema= new Schema({
    title: String,
    description:String,
    image:{
        type:String,
        default:"https://unsplash.com/photos/the-golden-gate-bridge-is-silhouetted-against-the-sunset-To4-hsfiA3A",
        set:(v)=> v==="" ? "https://unsplash.com/photos/the-golden-gate-bridge-is-silhouetted-against-the-sunset-To4-hsfiA3A" : v,
    },
    price:Number,
    location:String,
    country:String
})

const Listing = new mongoose.model("Listing", ListingSchema);
module.exports = Listing;