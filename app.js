const express = require("express");
const APP_SERVER = express();



// REGISTER ALL THE CONTROLLER IN APP SERVER

APP_SERVER.use("/bookings", require("./Controllers/Bookings.controllers"));
APP_SERVER.use("/users", require("./Controllers/Users.controllers"));
APP_SERVER.use("/mahal", require("./Controllers/Mahal.controllers"));
module.exports = APP_SERVER;

// INJECTING DATABSE CONNECTION
 require("./Database/dbConfig");