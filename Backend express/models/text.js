const mongoose = require("mongoose")
const Schema = mongoose.Schema
const TextSchema = new Schema ({
    text : String ,
})
module.exports = mongoose.model("Text", TextSchema)