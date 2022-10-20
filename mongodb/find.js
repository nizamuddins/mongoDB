const data = require("./mongoconnect")

// -----mongodb
const db = async ()=>{

    let data1 = await data();
    let data2 = await data1.find({}).toArray();
    console.log(data2);

}
db();