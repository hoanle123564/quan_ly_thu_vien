const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const connection = async () => {
    try {
        await client.connect();
        console.log("connect successfull");
        return client.db('QuanLyMuonSach');
    } catch (error) {
        console.log("Error: ", error);
    }
}
module.exports = connection;