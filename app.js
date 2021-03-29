const express = require("express");
const mongoose = require("mongoose");
//calling router
const router = require('./router/routerproduct');

const app = express();

app.use(express.json());
// file upload
// app.use(fileupload());
app.use("/", router);
//db connection URl
const db_URL =
  "mongodb+srv://ecommerce:123456abcd@cluster0.wav1d.mongodb.net/ecommerce?retryWrites=true&w=majority";

// make asyn function to connect BD and server
const Dbconnection = async () => {
  try {
    await mongoose.connect(db_URL, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("db conected");
  } catch (error) {
    console.log(error);
  }
};
Dbconnection();

const PORT = 5000;
app.listen(PORT, () => console.log(`server running ${PORT}`));

// mongodb+srv://ecommerce:123456abcd@cluster0.wav1d.mongodb.net/ecommerce?retryWrites=true&w=majority
