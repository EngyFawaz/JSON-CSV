var mongoose = require("mongoose"),
    Validations = require("../utils/Validations"),
    moment = require("moment");
    

    module.exports.convertToCSV = function(req, res, next){
        if (!Validations.isJSON(req.body.input)) {
            return res.status(422).json({
                err: null,
                msg: "input entered is not in JSON format",
                data: null
            });
        }
        else 
        return res.status(200).json({
            err: null,
            msg: "YAAAAYY",
            data: null
        });

    };