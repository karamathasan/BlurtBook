const express = require('express')
const router = express.Router()

//getting
router.get('/', (req,res) => {
    res.send("Hello World");
})

router.get('/:id', (req,res) => {
    req.params.id;
    
})

router.post('/', (req,res)=>{
    res.send("post detected")
})
//removing a user
router.delete('/:id', (req,res)=>{

})
//updating a user

module.exports = router