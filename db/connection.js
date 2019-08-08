// monk let you easy to use mongoDB
const monk = require('monk');
// localhost:27017是 mongoDB預設的port
// testproject是你可以連接的一個db, 要先進入mongDB裡面建立好
const connectionString = process.env.MONGODB_URI || 'localhost:27017/testproject'
const db = monk(connectionString);

module.exports = db;