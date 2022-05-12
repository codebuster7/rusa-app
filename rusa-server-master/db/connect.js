// init monogoose to connect to monogoDB server
const mongoose = require("mongoose");
// our server path
// Use .env for production
// var local_url = "mongodb+srv://piyush98:piyush98@cluster0.frhug.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
// mongodb://localhost:27017/msfda
let local_url = "mongodb+srv://admin:Mongodb%40kali7%24@cluster0.t1eqq.mongodb.net/msfdb?retryWrites=true&w=majority"
// let local_url = "mongodb+srv://piyush98:2c5CAHJGLKc9xu9@cluster0.ub6s6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
// let local_url = "mongodb+srv://piyush98:2c5CAHJGLKc9xu9@cluster0.n7zmo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
// connect with debugg

const connectDB = async () => {
  console.log("2. connecting ...")
  return mongoose.connect(local_url, { useNewUrlParser: true, useUnifiedTopology: true })
};

module.exports = connectDB;
