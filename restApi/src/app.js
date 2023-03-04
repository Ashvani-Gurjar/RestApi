const express =  require('express');
const app = express();
const router = require("./routers/studen")
const mongoose = require("mongoose");
const validator = require("validator");
const Student  = require("./models/students");
require("./db/connection")
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(router);

app.listen(PORT,()=>{
       console.log("Connected..... at http://localhost:3000")
  })