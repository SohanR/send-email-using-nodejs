const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.get('/', (req,res)=>{
    res.send('welcome')
})


let email = process.env.MAIL;
let password = process.env.PASS;

app.post('/api/form', (req,res)=>{
    let data = req.body
    let smtpTransport = nodemailer.createTransport({
        service:'Gmail',
        port:465,
        auth:{
            user:email,
            pass:password
        }

    })


    let mailOption={
        from:data.email,
        to:process.env.MAIL,
        subject:`Message from ${data.name}`,
        html:`
        <h3>university identity information</h3>
        <ul>
            <li>Name:${data.name}</li> <br>
            <li>ID:${data.id}</li> <br>
            <li>Email:${data.email}</li> <br>
            <li>Batch:${data.batch}</li> <br>
            <li>Section:${data.section}</li> <br>
        </ul>
        `
    }
    
    smtpTransport.sendMail(mailOption, (err, res)=>{
    
        if(err){
            res.send(error)
        }else{
            res.send('SUCCESS')
        }
        
    })

    smtpTransport.close()






})


const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`server is running no port: ${PORT}`)
})