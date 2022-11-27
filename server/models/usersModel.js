const mongoose = require("mongoose")

let usersSchema = new mongoose.Schema({
    Name: String,
    Email: String, 
    Street: String,
    City: String,
    Zipcode: Number,
    Posts:[{ID : Number ,Title:String , Body :String}],
    Tasks: [{ ID : Number,Title: String, Completed: Boolean }]
   
})

module.exports = mongoose.model("users", usersSchema)