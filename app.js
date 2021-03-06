const express = require('express')
require('./db/mongoose.js')
const cors = require('cors')

const router = require('./routes')
const app = express()

app.use(express.json()) 
app.use(cors())
app.use(router)

module.exports = app