var plantIDRequest = require("../../apis/plantid-request");
var plantIDResponse = require("../../apis/plantid-response");
var fs = require("fs");

// First grab image from plant.handlebars field
var image = $("plant.handlebars").getElementById(imageToBase64);

// Then convert image into base64
var buff = fs.readFileSync(image);
var base64data = buff.toString("base64");
console.log("Image converted to base 64 is:\n\n" + base64data);

plantIDRequest.sendPlantIDRequest(base64data);