const express = require('express');
const app = express();
const cors = require('cors');

const mongoose = require('mongoose');
const Users = require("./models/user")
require('dotenv').config()

// const passport = require('passport')
// const initializePassport = require('./passport-config')
// const flash = require('express-flash')
// const session = require('express-session')

app.set("view engine", "ejs");
app.use(
    cors({
        origin:[
            "http://localhost:5173",
            "http://localhost/Your_Notes:5173/",
            "http://localhost/Log_in:5173/",
            "http://localhost/Sign_up:5173/"
            // "*"
        ]
    })
    )
    
let serverNum = 3000;
console.log("server is running at http://localhost:" + serverNum);
mongoose.set("strictQuery",false);
mongoose.connect(process.env.USERS).then(()=>{
    console.log('connected to DB');
}).catch((error)=>{
    console.log(error);
});
app.use(express.json());
// app.use(express.urlencoded({extended: true}))

// initializePassport(passport, async Username=>{
//     return await Users.findOne({username: Username});
// }, async id=>{
//     return await Users.findById(id);
// }

// )
// app.use(flash())
// app.use(session({
//     secret: process.env.SECRET,
//     resave: false,
//     saveUninitialized: false
// }))
// app.use(passport.initialize())
// app.use(passport.session())

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

app.listen(serverNum)

app.get("/", (req,res)=>{
    res.render('index')
    // res.send({"message":"Server open"});
    res.send("get from root server")
})

app.post("/", (req,res)=>{
    res.json({
        message:"response"
    })
})
