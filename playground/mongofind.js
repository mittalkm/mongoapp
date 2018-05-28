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
    db.collection('users').find({
        age:18
    }).toArray().then((users)=>{
        console.log(JSON.stringify(users,undefined,2));
    },(err)=>{
        console.log('Unable to fetch data');
    });
    db.collection('users').find().count().then((count)=>{
        console.log(count);
    },(err)=>{
        console.log('Error in counting');
    });
    //db.close();
});