var Backbone = require('../backbone-parse');
var carModel = require('../models/car');

var carsCollection = Backbone.Collection.extend({
  model: carModel,
  _parse_class_name: 'car'
});

var cars = new carsCollection();

module.exports = cars;