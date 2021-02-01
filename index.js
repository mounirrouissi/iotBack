const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/Persons'
const cors = require('cors');

const app = express()
app.use(cors());
app.options('*', cors());
mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const alienRouter = require('./routes.js')
app.use('/persons',alienRouter)

app.listen(9000, () => {
    console.log('Server started')
})