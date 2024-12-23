const express = require("express")
const app = express();
const mongoose = require("mongoose")
const env = require("dotenv")
const route = require("./Routes/delete")

// app.get("/", (req,res)=>{
//     res.send("Hey, how are you?")
// })
const port = process.env.PORT || 8000   
env.config()

app.use(express.json())

const signup = require("./Routes/Signup")

app.use("/signup",signup) 
app.use("/api",route)
 
main().catch((err)=>console.log(err));
async function main(){
    await mongoose.connect(process.env.URL);
    console.log("connected")
}
app.listen(8000,()=>{
    console.log("server is running")
})