const data = require("./mongoconnect")

// -----mongodb
const deletes = async ()=>{

    let data1 = await data();
    let data2 = await data1.deleteOne({name:"noor"});
    // let data2 = await data1.deleteMany({name:"noor"});
    if(data2.acknowledged){
        console.log("success")
    }

}
deletes();