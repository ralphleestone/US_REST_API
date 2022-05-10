const os = require('os');
const path = require('path')
const mongoose = require('mongoose');
require('dotenv').config();

console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(_dirname);
console.log(_filename);

console.log(path.dirname(_filename));
console.log(path.basename(_filename));
console.log(path.extname(_filename));

console.log(path.parse(_filename));
