var express = require("express"),
	router = express.Router(),
	path = require('path'),
	app = express();
var assert = require("assert");
var jsonCtrl = require("../controllers/JSON.controller");

router.post("/convert/convertToCSV", jsonCtrl.convertToCSV);

module.exports = router;
