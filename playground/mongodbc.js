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
    db.collection('users').insertOne({
        name:'Saransh',
        age:18
    },(err,result)=>{
        if(err){
            return console.log('Error in insertion');
        }
        console.log(JSON.stringify(result.ops,undefined,2));
        console.log(result.ops[0]._id.getTimestamp());
    });
    db.close();
});