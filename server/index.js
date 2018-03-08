const express = require('express');
const compression = require('compression')
const bodyParser = require('body-parser');
const secure = require('express-force-https');
const Recaptcha = require('express-recaptcha');

const app = express();

const recaptcha = new Recaptcha(process.env.RECAPTCHA_SITE_KEY, process.env.RECAPTCHA_SECRET_KEY);

app.use(secure)
app.use(compression())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const path = require('path');

// api

const mailgun = require('./mailgun');

app.post('/mail', recaptcha.middleware.verify, mailgun)

// server

app.use(express.static(path.resolve('public'), {maxAge: 86400000}));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Website listening on port ${PORT}!`));
