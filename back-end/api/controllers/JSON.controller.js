var mongoose = require("mongoose"),
    Validations = require("../utils/Validations"),
    moment = require("moment");
    Papa = require("papaparse");
    

    module.exports.convertToCSV = function(req, res, next){
        if (!Validations.isJSON(req.body.input)) {
            return res.status(422).json({
                err: null,
                msg: "input entered is not in JSON format",
                data: null
            });
        }
        
        var csv = Papa.unparse(req.body.input).replace(/(\r\n)/gm,";");
        var result = csv.split(";");
        console.log(csv);
        return res.status(200).json({
                err: null,
                msg: "converted successfully",
                data: result
            });
    };
