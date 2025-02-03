const mongoose = require("mongoose");
const CONFIG = require("../config/config");
const logger = require("../logging/logger");

function ConnectToDb() {
   mongoose.connect(CONFIG.MONGODB_URL)

   mongoose.connection.on("connected", () => {
    logger.info("MongoDB Connected Successfully")
   });

   mongoose.connection.on("error", (err) => {
    logger.error(err)
   });
}

module.exports = ConnectToDb;