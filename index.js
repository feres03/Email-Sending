const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");
const ejs = require('ejs');
const port = 4000;
const app = express();

require('../Challenge4/dataBase/connect')
require('dotenv').config()
app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/api/', require('./Routes/sendingemail'))


// create reusable transporter object using the default SMTP transport


app.listen(port, () => {
    console.log('App is running on port 4000')
})