const mongoose = require('mongoose')
const secrets = 'secrets.json'

mongoose
    .connect('', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db