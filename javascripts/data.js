"use strict";

const dom = require('./dom');

let explosives = [];
let categories = [];
let types = [];

const categoriesJSON = () => {
	return new Promise((resolve, reject) =>{
		$.ajax('./db/categories.json').done((data1) => {
			resolve(data1.categories);
		}).fail((error1) => {
			reject(error1);
		});
	});
};

const typesJSON = () => {
	return new Promise((resolve, reject) =>{
		$.ajax('./db/types.json').done((data2) => {
			resolve(data2.types);
		}).fail((error2) => {
			reject(error2);
		});
	});
};

const productsJSON = () => {
	return new Promise((resolve, reject) =>{
		$.ajax('./db/products.json').done((data3) => {
			resolve(data3.products);
		}).fail((error3) => {
			reject(error3);
		});
	});
};

var acmeGetter = function(){
	categoriesJSON().then(function(results){	
		results.forEach(function(acme){
			categories.push(acme);
		});
		return typesJSON();
	}).then(function(results2){
		results2.forEach(function(acme){
			categories.forEach(function(category){
				if (acme.category === category.id){
                    acme.categoryId = category.id;
                    acme.categoryName = category.name;
                }
			});
			types.push(acme);
			console.log("types", types);
	});
		return productsJSON();
	}).then(function(results3){
		console.log("results3", results3[0]);
		let products = results3[0];
		Object.keys(products).forEach((key)=>{
			// console.log("acme", acme);
            let acme = products[key];
            console.log("acme", acme);
            types.forEach((type) => {
                if (acme.type === type.id){
                    acme.typeName = type.name;
                    acme.typeDescription = type.description;
                    acme.categoryId = type.categoryId;
                    acme.categoryName = type.categoryName;
                }
            });
            explosives.push(acme);

		});
		console.log('explosives', explosives);
		makeExplosives();
	});
};

const makeExplosives = () => {
	explosives.forEach((acme) => {
		dom(acme);
	});
};

const initializer = () => {
	acmeGetter();	
};

const getExplosives = () => {
	return explosives;
};

module.exports = {initializer:initializer, getExplosives:getExplosives};