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
app.use(bodyParser.urlencoded({ extended: true }))
app.use(fileUpload())

var port = 8888;

///////////////////////////////////////////////////////////Mobile get/////////////////////////////////////////////////////////////////

app.get('/beefmenu', (req, res) => {
    connection.execute('SELECT * from menu_master WHERE type_id = 001').then(([result]) => {
        res.status(200).send(result).end()
    })
})

app.get('/vetmenu', (req, res) => {
    connection.execute('SELECT * from menu_master WHERE type_id = 003').then(([result]) => {
        res.status(200).send(result).end()
    })
})

app.get('/drinkmenu', (req, res) => {
    connection.execute('SELECT * from menu_master WHERE type_id = 004').then(([result]) => {
        res.status(200).send(result).end()
    })
})

app.get('/fastmenu', (req, res) => {
    connection.execute('SELECT * from menu_master WHERE type_id = 002').then(([result]) => {
        res.status(200).send(result).end()
    })
})

app.get('/allmenu', (req, res) => {
    connection.execute('SELECT * from menu_master').then(([result]) => {
        res.status(200).send(result).end()
    })
})
//////////////////////////////////////////////////// Order //////////////////////////////////////////////////////////////////

// DELETE ORDER finished by order_code
app.get('/clearorder/:tid', (req , res) => {
    var tid = req.params.tid
    
    connection.execute('DELETE FROM order_detail Where Table_code = ?' , [tid]).then(([result]) => {
        
    })

    connection.execute('DELETE FROM order_head Where Table_code = (?)' , [tid]).then(([result]) => {
        res.status(200).end()
    })

})


//SET ORDER print
app.get('/setorderp/:oid' , (req , res) => {
    var oid = req.params.oid
    connection.execute('UPDATE order_head SET print_status = 1 WHERE Head_code = (?)', [oid]).then((result) => {
        res.end()
    })
})


/// get order by table 
app.get('/ordert/:tid', (req, res) => {
    var tid = req.params.tid
    connection.execute('SELECT * FROM order_head WHERE Table_code=(?)', [tid]).then(([result]) => {
        res.status(200).send(result).end()
    })
})

/// get order all where no print
app.get('/orderallnp', (req, res) => {
    
    connection.execute('SELECT * FROM order_head where print_status = 0').then(([result]) => {
        res.status(200).send(result).end()
    })
})

/// get order all where print
app.get('/orderallp', (req, res) => {
    
    connection.execute('SELECT * FROM order_head where print_status = 1').then(([result]) => {
        res.status(200).send(result).end()
    })
})

/// get order by table 
app.post('/geto/:tid', (req, res) => {
    var tid = req.params.tid
    var oid = req.body.oid
    console.log(tid)
    console.log(oid)
    connection.execute('SELECT dt.* , mu.Type_id , mu.Menu_nameTH FROM order_detail dt LEFT JOIN menu_master mu ON (mu.Menu_code = dt.Menu_code) WHERE Table_code = (?) and Head_code = (?) order by mu.Type_id', [tid, oid]).then(([result]) => {
        res.status(200).send(result).end()
    })
})

/// get order by oid 
app.post('/geto', (req, res) => {
    var oid = req.body.oid
    
    console.log(oid)
    connection.execute('SELECT dt.* , mu.Type_id , mu.Menu_nameTH FROM order_detail dt LEFT JOIN menu_master mu ON (mu.Menu_code = dt.Menu_code) WHERE Head_code = (?)', [oid]).then(([result]) => {
        res.status(200).send(result).end()
    })
})

/// get order by table 
app.get('/getorderbt/:tid', (req, res) => {
    var tid = req.params.tid
    connection.execute('SELECT dt.* , mu.Type_id , mu.Menu_nameTH FROM order_detail dt LEFT JOIN menu_master mu ON (mu.Menu_code = dt.Menu_code) WHERE Table_code = (?)', [tid]).then(([result]) => {
        res.status(200).send(result).end()
    })
})
////get order by order ID
app.get('/order/:oid', (req, res) => {
    const oid = req.params.oid
    connection.execute('SELECT * FROM order_detail WHERE Head_code = (?)', [oid]).then(([result]) => {
        res.status(200).send(result).end()
    })
})

//// สร้างออเดอร์
app.get('/insorder/:id', (req, res) => {
    const table_id = req.params.id

    console.log(table_id)

    connection.execute('Insert INTO order_head (Table_code ) VALUES (?)', [table_id]).then(() => {

        connection.execute('SELECT LAST_INSERT_ID()').then(([result]) => {
            console.log(result)
            res.status(200).send(result).end()
        })
    })
})

/////get order by detail code and as type
app.get('/ordertype/:oid', (req, res) => {
    const oid = req.params.oid

    connection.execute('SELECT * from order_detail WHERE Detail_code = (?)', [oid]).then(([result]) => {
        res.status(200).send(result).end()
    })
})


//////////////////////////////////////////////////// Menu //////////////////////////////////////////////////////////////////



// GET menu by id
app.get('/getmenu/:id' , (req ,res ) => {
    const id = req.params.id

    connection.execute('SELECT * FROM menu_master WHERE Menu_code = (?)' , [id]).then(([result]) => {
        res.status(200).send(result).end()
    })
})


// Delete Menu with Menu_code
app.delete('/deletemenu/:mid', (req, res) => {
    const mid = req.params.mid

    try {
        connection.execute('SELECT Menu_image FROM menu_master WHERE Menu_code = ?', [mid])
        .then(([result]) => {
            console.log(result[0].Menu_image)
            fs.unlink(`${__dirname}/../public/uploads/${result[0].Mune_image}`, () => {console.log("Delete")})
        })
    } catch (err) {

    }
    

    connection.execute('DELETE FROM menu_master WHERE Menu_code = ?', [mid])
    .then(() => {
        
        res.status(200).send('Delete Success')

        


    })
})


//Edit Menu
app.post('/editmenu', (req, res) => {


    const name = req.body.name
    const price = req.body.price
    const type = req.body.type
    const request_id = req.body.mid

    
        
        
        connection.execute('UPDATE menu_master SET Type_id = ? , Menu_price = ?, Menu_nameTH = ? WHERE Menu_code = ?',
        [type, price ,name ,request_id]).then(() => {

        res.send('Success')
        return res.end
     })
    
})

//Edit menu with img
app.post('/editmenuimg', (req, res) => {

    if(req.files === null){
        return res.status(400).json({ msg: 'no file upload'})
    }
    const file = req.files.file
    const type = req.body.type
    const name = req.body.name
    const price = req.body.price
    const request_id = req.body.mid
    file.name = uuid.v4()+".jpg"

    connection.execute('SELECT Menu_image FROM menu_master WHERE Menu_code = ?', [request_id])
        .then(([result]) => {
            console.log(result[0].Menu_image)
            
            fs.unlink(`${__dirname}/../public/uploads/${result[0].Menu_image}`, () => {console.log("Delete")})
        })

    

    file.mv(`${__dirname}/../public/uploads/${file.name}`, err => {
        if(err) {
            console.error(err)
            return res.status(500).send(err)
        }
        res.json({ fileName: file.name, filePath: `/uploads/${file.name}`})
    })
    
    connection.execute('UPDATE menu_master SET Menu_image = ?, Type_id = ?, Menu_nameTH = ?, Menu_price = ? WHERE Menu_code = ?',
        [file.name, type, name, price ,request_id]).catch(err => {
         console.error(err)
         
     })
    
})


//Create Menu
app.post('/createmenu', (req, res) => {
    

    if(req.files === null){
        console.log('no file upload')
        return res.status(400).json({ msg: 'no file upload'})
    }
    const name = req.body.name
    const price = req.body.price
    const type = req.body.type
    const file = req.files.file
    console.log(name)
    console.log(price)
    console.log(type)
    console.log(file)
    
    
    file.name = uuid.v4()+".jpg"
    

    file.mv(`${__dirname}/../public/uploads/${file.name}`, err => {
        if(err) {
            console.error(err)
            return res.status(500).send(err)
        }
        res.json({ fileName: file.name, filePath: `/uploads/${file.name}`})
    })
    
    var to = new Date()
    var x = to.getHours() + 7
    console.log(x)
    to.setHours(x)
    console.log(' befoe insert')
    
    connection.execute('INSERT INTO menu_master (Menu_nameTH , Menu_price ,Type_id , Menu_image  ) VALUES (?, ?, ? , ?)', [name ,price , type , file.name]).then((result) => {
        console.log('insert')
    })

    
    
})


///////////// on menu
app.get('/onmenu/:id', (req , res) => {
    const id = req.params.id
    console.log(id)
    connection.execute('UPDATE menu_master SET status = 1 WHERE Menu_code = (?)', [id]).then((result) => {
        res.status(200).end()
    })
    
})

///////////// off menu
app.get('/offmenu/:id', (req , res) => {
    const id = req.params.id

    connection.execute('UPDATE menu_master SET status = 0 WHERE Menu_code = (?)', [id]).then((result) => {
        res.status(200).end()
    })
    
})

//// เพิ่มรายการอาหาร
app.post('/setmenu', (req, res) => {
    const Detail_amount = req.body.Detail_amount
    const Menu_code = req.body.Menu_code
    const Detail_price = req.body.Detail_price
    const Head_code = req.body.Head_code
    const tid = req.body.tid

    connection.execute('Insert INTO order_detail (Detail_amount, Menu_code , Detail_price , Head_code , Table_code) VALUES (?,?,?,?,?)',
        [Detail_amount, Menu_code, Detail_price, Head_code, tid]).then(([result]) => {
            res.status(200).send("success").end()
        })
})
//////////////////////////////////////////////////// EMP ///////////////////////////////////////////////////////////

app.post('/login', (req, res) => {
    const username = req.body.username
    const tel = req.body.tel
    try {
        connection.execute('SELECT * from user_master where User_id = (?)', [username]).then(([result]) => {



            if (username == result[0].User_id && tel == result[0].tel) {


                res.status(200).send(result).end()

            }

        })
    } catch (error) {

    }

})

//get all table open
app.get('/alltable', (req, res) => {
    connection.execute('SELECT * from table_main').then(([result]) => {
        res.status(200).send(result).end()
    })
})

//get all table q
app.get('/alltableq', (req, res) => {
    connection.execute('SELECT * from table_main order by   status desc, Table_code ').then(([result]) => {
        res.status(200).send(result).end()
    })
})

//get all table open
app.get('/alltableopen', (req, res) => {
    connection.execute('SELECT * from table_main where status = 1').then(([result]) => {
        res.status(200).send(result).end()
    })
})

//get all table off
app.get('/alltableoff', (req, res) => {
    connection.execute('SELECT * from table_main where status = 0 ').then(([result]) => {
        res.status(200).send(result).end()
    })
})



///////////// on table
app.get('/ontable/:id', (req , res) => {
    const id = req.params.id
    console.log(id)
    connection.execute('UPDATE table_main SET status = 1 WHERE Table_code = (?)', [id]).then((result) => {
        res.status(200).end()
    })
    
})

///////////// off table
app.get('/offtable/:id', (req , res) => {
    const id = req.params.id

    connection.execute('UPDATE table_main SET status = 0 WHERE Table_code = (?)', [id]).then((result) => {
        res.status(200).end()
    })
    
})


/////////////////////////////////////////////////////ADMIN //////////////////////////////////////////////////////////

///////////// get all emp
app.get('/allemp', (req , res) => {
    
    connection.execute('SELECT * FROM user_master').then(([result]) => {
        res.status(200).send(result).end()
    })
    
})

///////////// del emp by code
app.get('/delemp/:id', (req , res) => {
    const id = req.params.id
    
    connection.execute('Delete from user_master where User_code = (?)' , [id]).then(([result]) => {
        res.status(200).send(result).end()
    })
    
})

///////////// get emp by code
app.get('/allemp/:id', (req , res) => {
    const id = req.params.id
    connection.execute('SELECT * FROM user_master WHERE User_code = (?)' , [id]).then(([result]) => {
        res.status(200).send(result).end()
    })
    
})

////// Add Emp
app.post('/addemp' , (req , res) => {
    
    const code = req.body.ucode
    const name = req.body.name
    const lname = req.body.lname
    const ustatus = req.body.ustatus
    const tel = req.body.tel
    connection.execute('INSERT into user_master (User_id , User_name , User_surname , Status_id , tel) values (?,?,?,?,?) ' , [ code , name ,lname ,ustatus , tel]).then((result) => {

        res.status(200).end()
    })
})

//// EDIT emp
app.post('/editemp/:uuid', (req , res) => {
    const code = req.params.uuid
    const id = req.body.id
    const name = req.body.name
    const lname = req.body.lname
    const ustatus = req.body.ustatus
    const tel = req.body.tel
    connection.execute('UPDATE user_master SET User_id = (?) ,User_name = (?), User_surname = (?), Status_id = (?), tel = (?) WHERE User_code = (?)' , [id , name , lname , ustatus , tel, code]).then(([result]) => {
        res.status(200).send(result).end()
    })
    
})

////////////////////////////////////////////////////////TABLE ///////////////////////////////////////////////////////////


////// Add Table
app.post('/addtable' , (req , res) => {
    
    const table_id = req.body.table_id
    const table_name = req.body.table_name
    
    connection.execute('INSERT into table_main (Table_name , Table_id ) values (?,?) ' , [ table_name , table_name]).then((result) => {

        res.status(200).end()
    })
})

////// Edit Table
app.post('/edittable/:table_code' , (req , res) => {
    const table_code = req.params.table_code
    
    const table_id = req.body.table_id
    const table_name = req.body.table_name
    
    connection.execute('UPDATE table_main SET Table_id = (?) ,Table_name = (?) WHERE Table_code = (?)' , [ table_id , table_name , table_code]).then((result) => {

        res.status(200).end()
    })
})


///// Get table by id
app.get('/gettable/:id' , (req , res) => {
    const code = req.params.id
    connection.execute('SELECT * FROM table_main WHERE table_code = (?)' , [code]).then(([result]) => {
        res.status(200).send(result).end()
    })
})

///// Del table by id
app.get('/deltable/:id' , (req , res) => {
    const code = req.params.id
    console.log(code)
    connection.execute('Delete from table_main where Table_code = (?)' , [code]).then(([result]) => {
        res.status(200).send(result).end()
    })
})





app.listen(port, (req, res) => {
    console.log(`Node app is Running on port ${port}...`)
})