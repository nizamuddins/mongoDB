const express = require("express");
const data = require("./mongoconnect")
const mongodb = require("mongodb");
const bodyParser = require("body-parser")
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})


// ----------
// app.get("/",async(req,res)=>{

//     let data1 = await data()
//     let data2 =await data1.find({}).toArray();
//     res.send(data2)


// })
// // ------------
// insert
app.get("/signup",(req,res)=>{
    res.sendFile(__dirname+"/signup.html")
})
app.post("/login",async(req,res)=>{
    
    let data1 = await data()
    let data2 =await data1.find({}).toArray();
    console.log(data2)
    console.log(req.body.mail)
    console.log(req.body.password)

    let flag =1;
    for(let i=0;i<data2.length;i++){
        if(data2[i].mail=== req.body.mail && data2[i].password === req.body.password){
            flag = 0;
            break;
        }
        
    }
    if(flag===0){
        res.sendFile(__dirname+"/index2.html")
        
    }else{
        res.send("something went wrong");

    }

})
app.post("/signup",async (req,res)=>{
let data1 = await data()
let data2 = await data1.insertOne(req.body)
res.sendFile(__dirname+"/index2.html")
})

// // // update

// app.put("/:name",async (req,res)=>{
//     let data1 = await data()
//     let data2 = await data1.updateOne({name:req.params.name},{$set:req.body})
//     res.send(data2)

// })

// // delete
// app.delete("/:id",async (req,res)=>{
//     let data1 = await data();
//     // let data2 = await data1.deleteOne(req.body)
//     let data2 = await data1.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
//     res.send({result:"deleted"})
//     // console.log(req.params.id)
// })


app.listen(5000,()=>{
    console.log("started");
})

