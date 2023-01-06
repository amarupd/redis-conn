const redis=require("redis");
const app=redis.createClient();

app.on('error',function (err){
    console.log("error encountered on connecting to redis server",err);
})
app.on('connect',function (err){
    console.log("redis connection is established");
})