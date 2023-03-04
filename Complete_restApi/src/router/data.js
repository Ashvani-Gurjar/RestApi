const express = require('express');
const router  = new express.Router();
const MensRanking = require("../models/mens");

router.post('/mens',async(req,res)=>{
     try {
          const addingMensRecodes = new MensRanking(req.body);
         const insertdata = await addingMensRecodes.save().then(()=>{
              res.status(200).send(insertdata)
         })
     } catch (e) {
          res.status(404).send(e);
     }
})
router.get('/mens',async(req,res)=>{
     try {
          const finddata = await MensRanking.find().sort({ranking:1});
              res.status(200).send(finddata)
         } 
      catch (e) {
          res.status(404).send(e);
     }
})
router.get('/mens/:id',async(req,res)=>{
     try {
          const _id = req.params.id;
          const finddata = await MensRanking.findById({_id});
              res.status(200).send(finddata)
         } 
      catch (e) {
          res.status(404).send(e);
     }
})
router.patch('/mens/:id',async(req,res)=>{
     try {
          const _id = req.params.id;
          const finddata = await MensRanking.findByIdAndUpdate({_id},{
               name:"Asvhanidfjsd"
               
          },{
               new:true
          });
              res.status(200).send(finddata)
         } 
      catch (e) {
          res.status(500).send(e);
     }
})
router.delete('/mens/:id',async(req,res)=>{
     try {
          const _id = req.params.id;
          const finddata = await MensRanking.findByIdAndDelete({_id});
              res.status(200).send(finddata)
         } 
      catch (e) {
          res.status(500).send(e);
     }
})
 
module.exports = router;