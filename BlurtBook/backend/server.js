const express = require('express');
const app = express();
const cors = require('cors');

const mongoose = require('mongoose');
require('dotenv').config()

const bcrypt = require('bcrypt');

app.set("view engine", "ejs");
let serverNum = 3000;
app.use(
    cors({
        origin:[
            "http://localhost:5173",
            "http://localhost/Your_Notes:5173/",
            // "http://localhost/Login:5173/"
        ]

        // origin:'*'
    })
)

console.log("server is running at http://localhost:" + serverNum);
mongoose.set("strictQuery",false);
mongoose.connect(process.env.USERS).then(()=>{
    console.log('connected to DB');
}).catch((error)=>{
    console.log(error);
});

app.use(express.json());

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);
app.listen(serverNum)

app.get("/", (req,res)=>{
    res.send({"message":"yes"});
})

app.post("/", (req,res)=>{
    res.send("post message");
})

app.get("/login", (req,res)=>{

})

app.post("/login", (req,res)=>{
    console.log(req.body.email);
    console.log(req.body.password);
})

app.get("/register",(req,res)=>{
    
})

// app.post("/register", (req,res)=>{
//     try{
//         const hashedPassword = await bcrypt.hash(req.body.password, 10);
//         users.push({
//             username: req.body.username,
//             email: req.body.email,
//             password: hashedPassword
//         })
//         res.redirect("/login");
//     } catch {
//         res.redirect("register");
//     }
// })

app.get("/notes",(req,res)=>{
    res.send("new note page")
})

app.post("/notes", (req,res)=>{
    // console.log(req.body.name);
    // console.log(req.body.notes);
    // res.send(req.body.name);
    res.send("test");
})

