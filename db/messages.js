// joi let you easily validate
const Joi = require('joi');
const db = require('./connection');

// define schema with validation
const schema = Joi.object().keys({
    username: Joi.string().alphanum().required(),
    subject: Joi.string().required(),
    message: Joi.string().max(500).required(),
    imageURL: Joi.string().uri({
        scheme: [
            /https?/
        ]
    })
});

// 進入或是建立message這個collection
const messages = db.get('messages');


// 底下是一些API會需要用到的db 操做

//query collection內的所有資料
function getAll() {
    return messages.find();
}

// create data
function create(message) {
    if (!message.username) message.username = 'Anonymous';

    const result = Joi.validate(message, schema);

    if (result.error == null) {
        message.created = new Date();
        return messages.insert(message);
    } else {
        return Promise.reject(result.error);
    }
}

module.exports = {
    create,
    getAll
};

