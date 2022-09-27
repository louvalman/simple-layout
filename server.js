// importing packages
const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path = require('path');

// declare static path
let staticPath = path.join(__dirname, "public");

//intializing express.js
const app = express();

//middlewares
app.use(express.static(staticPath));
app.use(express.json());

//routes
//home route
app.get("/", (req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
})

//login route
app.get('/login', (req, res) => {
    res.sendFile(path.join(staticPath, "login.html"));
})

//signup route
app.get('/signup', (req, res) => {
    res.sendFile(path.join(staticPath, "signup.html"));
})

app.post('/signup', (req, res) => {
    console.log(req.body);
    let {
        name,
        email,
        password,
        number,
        tac,
        notification
    } = req.body;

    // backend form validations
    if (name.length < 3) {
        return res.json({
            'alert': 'Your name must be at least three letters long'
        });
    } else if (!email.length) {
        return res.json({
            'alert': 'Enter your e-mail address'
        });
    } else if (!number.length) {
        return res.json({
            'alert': 'Please enter your phone number'
        });
    } else if (!Number(number) || number.length < 10) {
        return res.json({
            'alert': 'Invalid phone number, please enter valid one (at least eight numbers)'
        });
    } else if (password.length < 8) {
        return res.json({
            'alert': 'Your password should be at least eight letters long'
        });
    } else if (!tac) {
        return res.json({
            'alert': 'You must agree to our terms and conditions'
        });
    } else {
        //store user in e.g. firebase
    }
    res.json('Account data recieved');
})

// 404 route
app.get('/404', (req, res) => {
    res.sendFile(path.join(staticPath, "404.html"));
})

app.use((req, res) => {
    res.redirect('/404');
})

app.listen(3000, () => {
    console.log('listening on port 3000.......');
})