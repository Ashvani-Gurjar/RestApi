const express = require('express')
const router = new express.Router();
const Student  = require("../models/students");


// router.get("/gurjar",(req,res)=>{
//  res.send("This is a good boy sir");
// });

// this is using Promise
// post the data into mongoose campass


// router.post("/students",(req,res)=>{
     
//      console.log(req.body);
//      const user = new Student(req.body);
//      user.save().then(()=>{
//          res.status(201).send(user);
// }).catch((e)=>{
//      res.status(400),send(e);
// });
// })

// using async/await function
// post the data into mongoose campass 

router.post("/students",async(req,res)=>{
     try {
          const user = new Student(req.body);
           const createuser= await user.save();
           console.log(createuser)
           res.status(201).send(createuser);
     } catch (e) {
          res.status(400).send(e);
          console.log(e);
          
     }
})


// read the data of registered Student

router.get("/students",async(req,res)=>{
        try {
         const students = await Student.find();
         console.log(students);
         res.send(students);

        } catch (e) {
          console.log(e);
          res.send(e);
          
        }
})

// get individual data of a perticular id


router.get("/students/:id",async(req,res)=>{
        try {
         const _id = req.params.id;
         const students = await Student.findById(_id);
         res.send(students);
        } catch (e) {
          res.send(e);
        }
})

// Delete the student by id

router.delete("/students/:id",async(req,res)=>{
        try {
         const _id = req.params.id;
         const students = await Student.findByIdAndDelete(_id);
         res.send(students);

        } catch (e) {
          res.send(e);

        }
})

// put and petch update api

router.patch("/students/:id",async(req,res)=>{
        try {
         const _id = req.params.id;
         const updatestudents = await Student.findByIdAndUpdate(_id,req.body,{
              new:true
         });
         res.send(updatestudents);
        } catch (e) {
          res.status(400).send(e);

        }
})

module.exports = router;