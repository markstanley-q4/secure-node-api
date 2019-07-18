const config = require('./common/config/env.config.js');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.listen(config.port, function(){
    console.log('app listening at port: ' + config.port);
});