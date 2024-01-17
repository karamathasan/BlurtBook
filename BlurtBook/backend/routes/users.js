const express = require('express');
const router = express.Router();
const Users = require("../models/user");
const bcrypt = require('bcrypt');
const passport = require('passport');
const initializePassport = require('../passport-config')

const flash = require('express-flash');
const session = require('express-session');

initializePassport(passport, async Username=>{
    return await Users.findOne({username: Username});
}, async id=>{
    return await Users.findById(id);
}

)
router.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}))
router.use(passport.initialize())
router.use(passport.session())
router.use(flash())

//getting
// router.get('/',  checkAuth, async (req,res) => {
//     res.render('users')
//     try{
//         const users = await Users.find()
//     } catch(err){
//         res.status(500).json({message:err})
//     }
// })

router.get('/', (req,res) => {
    res.render('users')
    res.send("get from users")
})

// router.get('/:id', (req,res) => {
//     res.send(req.params.id);    
// })

//adding a user
router.post('/', async(req,res)=>{
    const existingUsername = await Users.findOne({ username: req.body.username });
    const existingEmail = await Users.findOne({ email: req.body.email });

    if (existingUsername || existingEmail) {
        res.status(400).send("Try a different username or email");
        return;
    }

    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
    
        const newUser = await Users.create({
            username:req.body.username,
            email:req.body.email,
            password:hashedPassword
        })
        await newUser.save()
        res.status(201)
        res.send("./Log_in")
    }
    catch(err){
        res.status(500).send(err);
    }
})

router.get("/login", (req,res)=>{
    const user = Users.find({username: {$eq:req.body.username}})
    res.render('users', user)
})

// router.post("/login", async (req,res)=>{
//     const user = await Users.findOne({username:req.body.username})
//     const password = req.body.password;
//     if(user == null){
//         return done(null, false, {message: "user not found"})
//     }

//     try{
//         if(await bcrypt.compare(password, user.password)){
//             return res.send("success")
//         } else {
//             return res.send("failure")
//         }
//     } catch (e) {
//         return res.send(e)
//     }
// })

router.post("/login", passport.authenticate('local',{
    // successRedirect: "/users/login/success",
    successRedirect: "/users/login/success",
    failureRedirect: "/",
    failureFlash: true
}))

router.get("/login/success", (req,res)=>{
    // res.send("./Your_Notes")
    // res.send(req.session)
    res.send(req.isAuthenticated())
})

// router.delete("/logout")

router.get("/auth", checkAuth)

function checkAuth(req,res,next){
    if (req.isAuthenticated()){
        res.send('true')
        return next()
    }
    res.send('false')
    // res.send(req.isAuthenticated())
    // res.redirect('./Log_in')
}

function checkNotAuth(req,res,next){
    
}

//removing a user
router.delete('/:id', (req,res)=>{
    Users.deleteOne(req.params.id);
})
//updating a user

module.exports = router