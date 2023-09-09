const express = require('express')
const RecipeModel=require('../models/Recipe')
const router=express.Router()
router.post('/create-recipe',(req,res)=>{
    RecipeModel.create({
        name: req.body.name,
        description: req.body.description,
        ingredients: req.body.ingredients,
        imageurl:req.body.imageurl,
        userId: req.body.userId
    }).then(result=>{
        return res.json(result)
    }).catch(err =>console.log(err))

})
module.exports=router;