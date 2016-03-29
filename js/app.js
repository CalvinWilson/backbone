var $ = require("jquery");
var cars = require("./collections/cars");
var Car = require("./models/car");
var carTemplate = require('../templates/cars.html');

var $form = $("#carForm");



$form.on("submit", function (e) {
  e.preventDefault();

  var car = new Car({

  });

  car.set({
    "make": $("#make").val(),
    "model": $("#model").val(),
    "color": $("#color").val(),
    "year": $("#year").val(),
    "url": $("#url").val(),
  });
  //car.save();
});

// UPDATE CAR INFO \/\/\/

// var car = new car({
//   objectId: ""
// });

// car.set("ENTER ATTR", "");
// car.save();

// var car = new car();
// car.set({
//   "make": "",
//   "model": "",
//   "color": "",
//   "year": "",
// });
// car.save();




cars.fetch({
 success: function (cars) {
  console.log(cars.toJSON());
    var data = {cars:cars.toJSON()};
    console.log("template", carTemplate(data));
    $("#showcar").html(carTemplate(data)); 
   }
 })
