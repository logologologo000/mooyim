const express = require('express');
const path = require('path');
const cookieSession = require('cookie-session')
const bcrypt = require('bcrypt')
const connection = require('./database');
const { body, validatorResult, validationResult, Result } = require('express-validator')


const sessions = require('express-session');
const bodyParser = require('body-parser');
const { response } = require('express');
const mysql = require('mysql');
const cors = require('cors')
const fileUpload = require('express-fileupload')
const uuid = require('uuid');
const { send } = require('process');
const fs = require('fs');
const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}))
app.use(fileUpload())

var port = 8888;

///////////////////////////////////////////////////////////Mobile get/////////////////////////////////////////////////////////////////

app.get('/beefmenu', (req , res) => {
    connection.execute('SELECT * from menu_master WHERE type_id = 001').then(([result]) => {
        res.status(200).send(result).end()
    })
})

app.get('/vetmenu', (req , res) => {
    connection.execute('SELECT * from menu_master WHERE type_id = 003').then(([result]) => {
        res.status(200).send(result).end()
    })
})

app.get('/drinkmenu', (req , res) => {
    connection.execute('SELECT * from menu_master WHERE type_id = 004').then(([result]) => {
        res.status(200).send(result).end()
    })
})

app.get('/fastmenu', (req , res) => {
    connection.execute('SELECT * from menu_master WHERE type_id = 002').then(([result]) => {
        res.status(200).send(result).end()
    })
})


app.listen(port, (req, res) => {
    console.log(`Node app is Running on port ${port}...`)
})