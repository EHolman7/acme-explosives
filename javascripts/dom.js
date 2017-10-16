"use strict";

var outputDiv = $('#explosives');

const domString = (explosives) => {
    let domStrang = "";
        domStrang += `<div>`;
        domStrang +=`<h1>${explosives.name}</h1>`;
        domStrang +=`<h4>${explosives.description}</h4>`;
        domStrang +=`</div>`;
    printToDom(domStrang);
};

const printToDom = (string) => {
	outputDiv.append(string);
};

module.exports = domString;