/*
 * filename: configurations.js
 *
 * input: input - an Object
 *
 * output: resolve - a Promise
 */
module.exports = function(input) {  
  console.log('configurations - called');
  var _Me = {};
  var path = require('../libraries/path'); //TEMP hard coded
  var paths = require('../paths/paths'); //TEMP hard coded
  var promise = require(path.join(paths.libraries, '/promise.js')); //TEMP hard coded  
  var _configurations = require(path.join(paths.configurations, '/configurations.js')); // A function that returns a Promise 
  _Me.configurations = _configurations;
  return new promise(function(resolve) {
    console.log('configurations - resolve(_Me): ', _Me);
    resolve(_Me.configurations); // Note: return only _Me.configurations here
  })
  .catch(function(error) {
    console.log('configurations - error: ', error);
  }); // eof promise
} // eof module