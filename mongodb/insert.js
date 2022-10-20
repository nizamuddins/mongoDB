const data = require("./mongoconnect")

const insert = async ()=>{

    let data1 = await data();
    // let data2 = await data1.insertOne({name:"noor",work:"student",id:"1"}),
    let data2 = await data1.insertMany([
        {name:"noor",work:"student",id:"1"},
        {name:"shebaaz",work:"student",id:"2"},
        {name:"saam",work:"student",id:"3"}
    ])
    console.log(data2);
    
}
insert();