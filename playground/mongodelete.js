//const Mongoclient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

var obj=new ObjectID();
console.log(obj);
/*var user={
    name:'Shubham',
    age:18
};
var {name}=user;
console.log(name);*/
MongoClient.connect('mongodb://localhost:27017/kunaldb',(err,db)=>{
    if(err){
        return console.log('Unable to connect');
    }
    console.log('Connected to server');
    /*db.collection('users').deleteMany({
        name:'Rohan'
    }).then((res)=>{
        console.log(res);
    });
    db.collection('users').deleteOne({
        name:'Shubham'
    }).then((res)=>{
        console.log(res);
    });*/
    db.collection('users').findOneAndDelete({
        _id:new ObjectID('5b0c0311fe05d206902eeb78')
    }).then((res)=>{
        console.log(res);
    })
    //db.close();
});