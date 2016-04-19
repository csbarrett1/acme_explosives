"use strict";

// var categories = function() {
//   var deferred = new Promise();

//   $.ajax({
//     url: "categories.json"
//   }).done(function(data) {
//     deffered.resolve(data);
//   }).fail(function(xhr, status, error) {
//     deferred.reject(error);
//   });

//   return deffered.promise;
// };

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
}

var types = function(result_of_categories) {
  // var deferred = Q.defer();

  $.ajax({
    url: "types.json",
    data: result_of_categories
  }).done(function(data) {
    deferred.resolve(data);
  }).fail(function(xhr, status, error) {
    deferred.reject(error);
  });

  return deferred.promise;
  console.log("test");
};

categories()
  .then(function(data1) {
    return types(data1);
  })