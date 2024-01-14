const express = require('express')
const router = express.Router()
const Users = require("../models/user")
const bcrypt = require('bcrypt')
const passport = require('passport')



//getting
router.get('/', async (req,res) => {
    res.render('users')
    try{
        const users = await Users.find()
    } catch(err){
        res.status(500).json({message:err})
    }
})

router.get('/:id', (req,res) => {
    res.send(req.params.id);    
})

//adding a user
router.post('/', async(req,res)=>{
    // const identicalUser = await  Users.find({username:req.body.username})
    // res.send(identicalUser);
    // if(Users.findOne({username:req.body.username}) != null ||
    //     Users.findOne({email:req.body.email}) != null){
    //         res.status(400).send("try a different username or password")
    //     return 
    //    } 

    const existingUsername = await Users.findOne({ username: req.body.username });
    const existingEmail = await Users.findOne({ email: req.body.email });

    if (existingUsername || existingEmail) {
        res.status(400).send("Try a different username or email");
        return;
    }

    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
    
        const newUser = Users.create({
            username:req.body.username,
            email:req.body.email,
            password:hashedPassword
        })
        const saveduser = await newUser.save()
        res.status(201).json(saveduser)
        // res.send("./Log_in")
    }
    catch(err){
        res.status(500).send(err);
    }
})


// router.post("/login", async (req,res)=>{
//     // const user = Users.find({$and: [{username: {$eq:req.body.username}}, {password:}]})
//     const user = Users.find({username: {$eq:req.body.username}})
//     res.render('users', user)
//     if (user == null){
//         return res.status(400).send("user not found")
//     }
//     try{
//         if(await bcrypt.compare(req.body.password, user.password)){
//             res.send("success")
//             res.redirect("")
//         }else{
//             res.send("failure")
//         }
//     } catch {
//         res.status(500).send()
//     }
// })

router.post("/login", passport.authenticate('local',{
    successRedirtect: "./Your_Notes",
    failureRedirect: "/",
    failureFlash: false
}))
//removing a user
router.delete('/:id', (req,res)=>{
    Users.deleteOne(req.params.id);
})
//updating a user

module.exports = router