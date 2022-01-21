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

app.get('/allmenu', (req , res) => {
    connection.execute('SELECT * from menu_master').then(([result]) => {
        res.status(200).send(result).end()
    })
})
//////////////////////////////////////////////////// Order //////////////////////////////////////////////////////////////////

/// get order by table 
app.get('/ordert/:tid', (req , res) => {
    var tid = req.params.tid
    connection.execute('SELECT * FROM order_head WHERE Table_code=(?)' , [tid]).then(([result]) => {
        res.status(200).send(result).end()
    })
})

/// get order by table 
app.post('/geto/:tid', (req , res) => {
    var tid = req.params.tid
    var oid = req.body.oid
    console.log(tid)
    console.log(oid)
    connection.execute('SELECT dt.* , mu.Type_id , mu.Menu_nameTH FROM order_detail dt LEFT JOIN menu_master mu ON (mu.Menu_code = dt.Menu_code) WHERE Table_code = (?) and Head_code = (?)' , [tid, oid]).then(([result]) => {
        res.status(200).send(result).end()
    })
})

/// get order by table 
app.get('/getorderbt/:tid', (req , res) => {
    var tid = req.params.tid
    connection.execute('SELECT dt.* , mu.Type_id , mu.Menu_nameTH FROM order_detail dt LEFT JOIN menu_master mu ON (mu.Menu_code = dt.Menu_code) WHERE Table_code = (?)' , [tid]).then(([result]) => {
        res.status(200).send(result).end()
    })
})
////get order by order ID
app.get('/order/:oid', (req , res) => {
    const oid = req.params.oid
    connection.execute('SELECT * FROM order_detail WHERE Head_code = (?)' , [oid]).then(([result]) => {
        res.status(200).send(result).end()
    })
})

//// สร้างออเดอร์
app.get('/insorder/:id', (req , res) => {
    const table_id = req.params.id
    
    console.log(table_id)
    
    connection.execute('Insert INTO order_head (Table_code ) VALUES (?)', [table_id]).then(()=> {
        
        connection.execute('SELECT LAST_INSERT_ID()').then(([result]) => {
            console.log(result)
            res.status(200).send(result).end()
        })
    })
})

/////get order by detail code and as type
app.get('/ordertype/:oid', (req , res) => {
    const oid = req.params.oid

    connection.execute('SELECT * from order_detail WHERE Detail_code = (?)' , [oid]).then(([result]) => {
        res.status(200).send(result).end()
    })
})


//////////////////////////////////////////////////// Menu //////////////////////////////////////////////////////////////////



//// เพิ่มรายการอาหาร
app.post('/setmenu', (req , res) => {
    const Detail_amount = req.body.Detail_amount
    const Menu_code = req.body.Menu_code
    const Detail_price = req.body.Detail_price
    const Head_code = req.body.Head_code
    const tid = req.body.tid

    connection.execute('Insert INTO order_detail (Detail_amount, Menu_code , Detail_price , Head_code , Table_code) VALUES (?,?,?,?,?)', 
    [Detail_amount , Menu_code , Detail_price , Head_code , tid]).then(([result]) => {
        res.status(200).send("success").end()
    })
})
////////////////////////////////////////////////////

app.listen(port, (req, res) => {
    console.log(`Node app is Running on port ${port}...`)
})