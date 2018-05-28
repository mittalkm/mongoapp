var express=require('express');
var bodyParser=require('body-parser');
var {mongoose}=require('./db/mongoconf.js');
var {Todo}=require('./models/todo.js');
var {Users}=require('./models/user.js');
const app=express();
app.use(bodyParser.json());
app.post('/todos',(req,res)=>{
    var todoa=new Todo({
        text:req.body.text
    });
    todoa.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.status(400).send(e);
    })
});
app.listen('3000',()=>{
    console.log('Server started at port 3000');
});