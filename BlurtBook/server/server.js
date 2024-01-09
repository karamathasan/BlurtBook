const express = require('express');
const app = express();
const cors = require('cors');
const bcrypt = require('bcrypt');

app.set("view engine", "ejs");
let serverNum = 3000;
app.use(
    cors({
        // origin:[
        //     "https://localhost:5173",
        //     // "https://Your_Notes:5173/"
        // ]

        origin:'*'
    })
)
console.log("server is running at http://localhost:" + serverNum);

const users = [];

app.get("/", (req,res)=>{
    res.json({"message":"yuh"});
})

app.get("/login", (req,res)=>{

})

app.post("/login", (req,res)=>{
    console.log(req.body.email);
    console.log(req.body.password);
})

app.get("/register",(req,res)=>{
    
})

app.post("/register", (req,res)=>{
    // try{
    //     const hasedPassword = await bcrypt.hash(req.body.password, 10);
    //     users.push({
    //         username: req.body.username,
    //         email: req.body.email,
    //         password: hashedPassword
    //     })
    //     res.redirect("/login");
    // } catch {
    //     res.redirect("register");
    // }
})
app.listen(serverNum)