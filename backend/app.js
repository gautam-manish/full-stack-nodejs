// import express from 'express'; // This is new version to import express from ES6 module

// These two line of code is a compulsary initial code while doing project in excpress
const express = require('express'); // express require gareko
const app = express(); // express lai trigger gareko

require("./database/connection")


app.get("/books",(req,res)=>{  // read opertaion
    // logic to fetch from database
    res.json({
        message : "books fetch successfully",
    })
})

app.post("/books",(req,res)=>{ // create opertaion
    // logic to add books in database goes here ....
    res.json({
        message : "Books added successfully",
    })
})

app.delete("/books/:id",(req,res)=>{ // delete operation
    // logic to delete books from database goes here ....
    res.json({
        message : "Books deleted successfully",
    })
});

app.patch("/books/:id",(req,res)=>{ // update operation
    // logic to update books goes here ...
    res.json({
        message : "Books updated successfully"
    })
})


app.listen(4000,()=>{
    console.log("Backend Server of node js project has started as port 4000");
})

