const data = require("./mongoconnect")

// -----mongodb
const update = async ()=>{

    let data1 = await data();
    let data2 = await data1.updateOne({name:"noor"},{$set:{height:"5.6"}});
    // let data2 = await data1.updateMany({name:"noor"},{$set:{height:"5.6"}});
    if(data2.acknowledged){
        console.log("success")
    }

}
update();