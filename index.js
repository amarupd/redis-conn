const redis=require("redis");
const redisURL="redis://127.0.0.1:6379"
const client=redis.createClient(redisURL)


client.set("name","redis")
console.log("data is set now");
client.get("name",(err,value)=>{
    if(err){
        console.log("error is");
        console.log(err);
    }
    console.log(value);
})