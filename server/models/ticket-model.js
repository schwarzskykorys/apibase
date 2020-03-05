const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Ticket = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: false },
        author: {type: String},
    },
    { timestamps: true },
)

module.exports = mongoose.model('tickets', Ticket)