const express = require('express');
const app = express();

app.set("view engine", "ejs")
let serverNum = 3000
app.listen(serverNum);
console.log("server is running at http://localhost:" + serverNum);

app.get("/", (req,res)=>{
    res.send("wenis");
})

app.get("/users",(req,res)=>{
    console.log("fetch occured");
})

app.post("/users",(req,res)=>{
    console.log("post occured")
    // res.json({"message":"response given"})
})