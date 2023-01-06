// const redis=require("redis");
// const client=redis.createClient();

// client.on('error',function (err){
//     console.log("error encountered on connecting to redis server",err);
// })
// client.on('connect',function (err){
//     console.log("redis connection is established");
// })

const express=require('express');
const app=express();

app.listen(8080,()=>{
    console.log("listening to port number 8080!!!");
})