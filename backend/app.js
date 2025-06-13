// import express from 'express'; // This is new version to import express from ES6 module

// These two line of code is a compulsary initial code while doing project in excpress
const express = require('express'); // express require gareko

const app = express(); // express lai trigger gareko
const bookRoute = require("./routes/bookRoute")


require("./database/connection")
app.use(express.json())




app.use("", bookRoute);

app.listen(5000,()=>{
    console.log("Backend Server of node js project has started as port 5000");
})

