
"use strict";

const data = require("./data");

$("#fireworks").click((event) => {
    console.log("Fireworks", data.Fireworks);
    data("Fireworks");

});

$("#other").click((event) => {
    data("Other");
});

$("#both").click((event) => {
    data("Fireworks", "Other");
});

module.exports = {};