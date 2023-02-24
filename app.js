const express = require("express");
const mongoos = require("mongoose")
const bodyParser = require("body-parser")
const homeRouter  = require("./router/home")



const app = express();


app.listen(8000,function(){
    console.log("runing server ...");
})


mongoos.set('strictQuery', false);
const URL = 'mongodb+srv://Rdilshan:Ir077788075@cluster0.xvofktm.mongodb.net/?retryWrites=true&w=majority'
mongoos.connect(URL,{useNewUrlParser: true})
const db = mongoos.connection;


db.on('eror',function(){
    console,log("Error....");
});

db.on('open',function(){
    console.log("Connected ...");
});

app.set('view engine','ejs');
app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended:true}))
app.use('/',homeRouter);

