var express = require("express"),
	router = express.Router(),
	path = require('path'),
	app = express();
var MongoClient = require("mongodb").MongoClient;
var assert = require("assert");
var url = "mongodb://localhost:27017/JSON-CSV";
var jsonCtrl = require("../controllers/JSON.controller");

router.post("/convert/convertToCSV", jsonCtrl.convertToCSV);
router.post("/convert/convertFileToCSV", jsonCtrl.convertFileToCSV);

module.exports = router;
