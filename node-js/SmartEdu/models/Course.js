const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CoureseSchema = new Schema({

    name: {
        type: String,
        unique: true,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

})

const Course = mongoose.model('Course',CoureseSchema)
module.exports = Course;