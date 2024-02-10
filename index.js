// importing libraries

const express = require('express');
const passport = require('passport');
const cookieParser = require('cookie-parser')
const session=require('express-session');
const expressLayouts =  require('express-ejs-layouts');
const flash = require('connect-flash');
const MongoStore = require('connect-mongo');


const port = 8080;
const app = express();

app.listen(port, function(){
    console.log('Server is running on',port);
})
