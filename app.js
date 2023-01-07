// const redis=require("redis");
// const client=redis.createClient();

// client.on('error',function (err){
//     console.log("error encountered on connecting to redis server",err);
// })
// client.on('connect',function (err){
//     console.log("redis connection is established");
// })

const express=require('express');
const redis=require("redis");
const redisURL="redis://127.0.0.1:6379"
const client=redis.createClient(redisURL)

// app.use(express.json)

// const app=express();

client
  .connect()
  .then(async (res) => {
    console.log('connected');
 })
  .catch((err) => {
    console.log('err happened' + err);
  });
  
client.set("name","amar")
console.log("data is set now");
client.get("name",(err,value)=>{
    if(err){
        console.log("error is");
        console.log(err);
    }
    console.log(value);
})

// app.listen(8080,()=>{
//     console.log("listening to port number 8080!!!");
// })

// const redis = require('redis');
// const client = redis.createClient();

// client.on('connect', function() {
//   console.log('Connected!');
// });