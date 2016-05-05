"use strict";

$(document).ready(function() {

var categories = function(){
  return new Promise((resolve, reject) => {

    $.ajax({
      url: "categories.json"
    }).done(function(data) {
      resolve(data);
    }).fail(function(xhr, status, error) {
      reject(error);
    });
  });
};

var types = function(result_of_categories) {
  return new Promise((resolve, reject) => {

    $.ajax({
      url: "types.json",
      data: result_of_categories
    }).done(function(data) {
      resolve(data);
    }).fail(function(xhr, status, error) {
      reject(error);
    });
  });
};

var products = function(result_of_types) {
  return new Promise((resolve, reject) => {

    $.ajax({
      url: "products.json",
      data: result_of_types
    }).done(function(data) {
      resolve(data);
    }).fail(function(xhr, status, error) {
      reject(error);
    });
  });
};



categories()
  .then(function(data1) {
    var categories = "";
    for (let i = 0; i < data1.categories.length; i++) {
      categories += `<div id="categories${i}" class="col-sm-6"><h1 class="page-header">${data1.categories[i].name}</h1></div>`;
    }
    catList.innerHTML += categories;
    return types(data1);
  })
  .then(function(data2) {
    var fireworks = "";
    var demolition = "";
    for (let i = 0; i < data2.types.length; i++) {
      if (data2.types[i].category === 0) {
        fireworks += `<div id="type${i}"><h3>${data2.types[i].name}<h3>`;
        fireworks += `<h5>${data2.types[i].description}</h5></div>`;
      } else {
        demolition += `<div id="type${i}"><h3>${data2.types[i].name}<h3>`;
        demolition += `<h5>${data2.types[i].description}</h5></div>`;
      }
    };
      categories0.innerHTML += fireworks;    
      categories1.innerHTML += demolition;    
    return products(data2);
  })
  .then(function(data3) {
    var ground = "";
    var flying = "";
    var kid = "";
    var small = "";
    var med = "";
    var lrg = "";
    for (let i = 0; i < data3.products.length; i++) {
      if (data3.products[i].type === 0) {
        ground += `<li>${data3.products[i].name}</li>`;
        ground += `<ul>${data3.products[i].description}</ul>`;
      } else
      if (data3.products[i].type === 1) {
        flying += `<li>${data3.products[i].name}</li>`;
        flying += `<ul>${data3.products[i].description}</ul>`;
      } else
      if (data3.products[i].type === 2) {
        kid += `<li>${data3.products[i].name}</li>`;
        kid += `<ul>${data3.products[i].description}</ul>`;
      } else
      if (data3.products[i].type === 3) {
        small += `<li>${data3.products[i].name}</li>`;
        small += `<ul>${data3.products[i].description}</ul>`;
      } else
      if (data3.products[i].type === 4) {
        med += `<li>${data3.products[i].name}</li>`;
        med += `<ul>${data3.products[i].description}</ul>`;
      } else {
        lrg += `<li>${data3.products[i].name}</li>`;
        lrg += `<ul>${data3.products[i].description}</ul>`;
      };
    };

    type0.innerHTML += ground;
    type1.innerHTML += flying;
    type2.innerHTML += kid;
    type3.innerHTML += small;
    type4.innerHTML += med;
    type5.innerHTML += lrg;

    })
 


  });