//const Mongoclient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

var obj=new ObjectID();
console.log(obj);
var user={
    name:'Shubham',
    age:18
};
var {name}=user;
console.log(name);
MongoClient.connect('mongodb://localhost:27017/kunaldb',(err,db)=>{
    if(err){
        return console.log('Unable to connect');
    }
    console.log('Connected to server');
    db.collection('users').findOneAndUpdate({
        _id:new ObjectID('5b0bee564794e041104b7f03')
    },{
        $set:{
            age:39
        }
    },{
        returnOriginal:false
    }).then((res)=>{
        console.log(res);
    });
    db.collection('users').findOneAndUpdate({
        _id:new ObjectID('5b0bee564794e041104b7f03')
    },{
        $inc:{
            age:10
        }
    },{
        returnOriginal:false
    }).then((res)=>{
        console.log(res);
    })
    //db.close();
});