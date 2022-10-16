const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

const PORT = process.env.PORT || 8080;
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

//const DATABASE = new Sequelize({ dialect: "sqlite", storage: './DB/akhub.db', logging: 'true' });
//const akhubDB = DATABASE.define('akhub', {
//    info: {
//      type: DataTypes.STRING,
//      allowNull: false
//    },
//    value: {
//        type: DataTypes.TEXT,
//        allowNull: false
//    }
//});


const app = new express();
app.use(morgan('dev'));
app.use(express.static('client'));
app.set("json spaces",2)
__path = process.cwd()


var home = require('./home.js');
var bot = require('./bot.js');
//var gmgn = require(__path + '/tools/bin/')


app.use('/bot', bot)
app.use('/', home)
app.listen(PORT, () => {console.log(`Server Run on port ${PORT}`)});
