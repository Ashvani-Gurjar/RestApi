const express = require('express');
const app =  express();
require("./db/conn");
const MensRanking = require("./models/mens");
const PORT = process.env.PORT || 3000;
const router = require("./router/data")


app.use(express.json());
app.use(router);
    

app.listen(PORT,()=>{
     console.log("connected..... http://localhost:3000");
})