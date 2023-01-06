const redis=require("redis");
const app=redis.createClient();

app.on('error',(err)=>{
    console.log("error encountered on connecting to redis server");
})
app.on('connect',(err)=>{
    console.log("redis connection is established");
})