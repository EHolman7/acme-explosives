"use strict";

var outputDiv = $('#explosives');

const domString = (explosives) => {
    let domStrang = "";
        domStrang += `<div>`;
        domStrang +=`<h1>${explosives.type}</h1>`;
        domStrang +=`</div>`;
    printToDom(domStrang);
};

const printToDom = (string) => {
	outputDiv.append(string);
};

module.exports = domString;