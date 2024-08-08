var express = require("express");
var router = express.Router();

const mongoose = require("mongoose");
const { dbUrl } = require("../common/dbConfig");  
const { MobileModel } = require("../schemas/mobileSchemas");
mongoose.connect(dbUrl);

// POST Add A Movie Review
router.post("/addMobile", async function (req, res) {
  try { 
    let data= await MobileModel.create(req.body) 
    res.status(200).send({message:"Mobile Created Successfully",data})  
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error", error });
  }
});

// GET ALL
// router.get("/",validate, async function (req, res, next) {
  router.get("/", async function (req, res, next) {
  try {
    let data= await MobileModel.find({})
    res.status(200).send({message:"Mobiles Fetched Successfully",data}) 
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error", error });
  }
});

// GET By ID 
router.get("/getMobile/:id", async function (req, res, next) {
  try {
    let data= await MobileModel.find({_id:req.params.id})
    console.log(data);
    res.status(200).send({message:"Mobile's Data Fetched Successfully",data}) 
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error", error });
  }
});

// PUT Update A Movie Review 
router.put("/updateMobile/:id", async function (req, res, next) {
  try {
    let data= await MobileModel.findOneAndUpdate({_id:req.params.id},req.body)      
    console.log(data);
    res.status(200).send({message:"Updated Mobile's Data Fetched Successfully",data}) 
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error", error });
  }
});


//DELETE A Movie Review
router.delete("/deleteMobile/:id",async function(req,res){
  try {
    let data=await MobileModel.deleteOne({_id:req.params.id})
    console.log(req.params.id)
    res.status(200).send({message: "Mobile Deleted Successfully", data});
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error", error });
  }
})



module.exports = router;
