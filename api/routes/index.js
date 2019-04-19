var express = require('express');
var router = express.Router();
let http = require("http");
let data = require("../data/data.json")
    /* GET home page. */
router.get('/getlist', function(req, res, next) {
    res.send(data)
});

module.exports = router;