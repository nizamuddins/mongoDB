const { MongoClient } = require('mongodb');
let url = "mongodb+srv://nizam:nizam@cluster0.phabhjk.mongodb.net/test"
const client = new MongoClient(url);
const database = "produts";

async function getData(){
    // Use connect method to connect to the server
    let connection =   await client.connect();
    const db = connection.db(database);
    const collection = db.collection('products');
    return collection
}
getData()

module.exports = getData;