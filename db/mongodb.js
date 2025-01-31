const mongoose = require("mongoose");
const CONFIG = require("../config/config");


function ConnectToDb() {
   mongoose.connect(CONFIG.MONGODB_URL)

   mongoose.connection.on("connected", () => {
    console.log("MongoDB Connected Successfully")
   });

   mongoose.connection.on("error", (err) => {
    console.log("An error Occured")
    console.log(err)
   });
}

module.exports = ConnectToDb;