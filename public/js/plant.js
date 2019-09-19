"use strict";

var fs = require("fs");
var plantIDRequest = require("../../apis/plantid");

var buff = fs.readFileSync(image); // CHANGE THIS TO THE IMAGE VAR BEFORE PRESENTING
var base64data = buff.toString("base64");
console.log("Image converted to base 64 is:\n\n" + base64data);

plantIDRequest.sendPlantIDRequest(imgTest);
alert(imgTest);