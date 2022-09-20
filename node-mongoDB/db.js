const { MongoClient } = require('mongodb');

let dbConnection;

// connect to db
// retrieve from db

module.exports = {
    connectToDb: (callback) => {
        MongoClient.connect('mongodb://localhost:27017/bookstore')
            .then((client) => {
                dbConnection = client.db()
                // after connected to the client, call the callback function
                return callback();
            })
            .catch(err => {
                console.log(err);
                return callback(err);
            })
    },
    getDb: () => dbConnection
}