const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const messages = require('./db/messages');

const app = express();

//morgan is used to log http requests to the console
app.use(morgan('tiny'));

//cors allows the client to talk to the front end
// 跨來源資源共用CORS
// 可以自動幫你調整http 的header讓你的瀏覽器可以存取後端的資源，因為fetch API預設是
// 遵守same origin policy, 是無法存取的跨網域資源的
// (你前端是一個server, 後端是另一個server, 非同源)
app.use(cors());  // 這個啟動後，後面的API都可以CORS

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Behold The MEVN Stack!'
    });
});

// get all msg
app.get('/messages', (req, res) => {
    messages.getAll().then((messages) => {
        res.json(messages);
    });
});

// post msg
app.post('/messages', (req, res) => {
    console.log(req.body);
    messages.create(req.body).then((message) => {
        res.json(message);
    }).catch((error) => {
        res.status(500);
        res.json(error);
    });
});


// setup port and server kick off
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});