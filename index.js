// importing libraries

const express = require('express');
const passport = require('passport');
const cookieParser = require('cookie-parser')
const session=require('express-session');
const expressLayouts =  require('express-ejs-layouts');
const flash = require('connect-flash');
const MongoStore = require('connect-mongo');

// Middleware to parse incoming JSON requests
app.use(express.json());

// Middleware to parse incoming URL-encoded form data
app.use(express.urlencoded({
    extended: true // Allow parsing of rich objects and arrays in addition to strings
}));

// Middleware to serve static files from the 'assets' directory
app.use(express.static('assets'));

// Middleware for parsing cookies attached to the request
app.use(cookieParser());

// Middleware for integrating express-ejs-layouts into the application
app.use(expressLayouts);



const port = 8080;
const app = express();

app.listen(port, function(){
    console.log('Server is running on',port);
})
