const mongoose = require("mongoose");

const urlSchema = mongoose.Schema({
    fullUrl : {type:String, require:true,expires: 604800 },
    shortUrl :  {type:String, require:true, unique:true,expires: 604800 },
});

const URL = mongoose.model("url",urlSchema);

module.exports = {URL}