/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(__dirname + '')); 

app.get('/', function(req, res) {
    res.sendfile(path.join(__dirname + 'login.html'));
});

app.listen(process.env.PORT || 5000);