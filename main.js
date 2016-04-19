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
    return types(data1);
  })
  .then(function(data2) {
    return products(data2);
  })
  .done();

  });