const os = require('os');
const path = require('path')
const mongoose = require('mongoose');
require('dotenv').config();

console.log(os.type());
console.log(os.version());
console.log(os.homedir());