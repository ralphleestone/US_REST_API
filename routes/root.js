const express = require('express');
const router = express.Router();
const path = require('path');

// if just a / or index or index.html
// send the index.html page in the views folder
router.get('^/$|/index(.html)?', (req,res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
    console.log(path.join(__dirname, '..', 'views', 'index.html'));
})

module.exports = router;