const bodyParser = require("body-parser");
const express = require("express");
const Router = express.Router();
const club1 = require("../models/club")

Router.get('/',function(req,res){
    res.render('index')
})

//insert data
Router.post('/',function(req,res){
    const username = req.body.uname;
    const passward = req.body.psw;
var currentuser = username
    // console.log(username,passward);
    const club1 = new club({
        username,
        passward
    })
    club1.save(err=>{
        if(err){
            console.log("err is");
        }else{
            res.redirect('/sign')
        }
    })

})

//find data
Router.get('/sign',function(req,res,currentuser){
    club1.find(({username:currentuser}),(err,docs)=>{
        if(err) {console.log(err)}
        else{
            console.log()
            res.render('sign')
        }
        
    })
})



module.exports = Router;