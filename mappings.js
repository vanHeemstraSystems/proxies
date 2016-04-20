/*
 * filename: mappings.js
 *
 * input: input - an Object
 *
 * output: resolve - a Promise
 */
module.exports = function(input) {  
  console.log('mappings - called');
  var _Me = {};
  var path = require('../libraries/path'); //TEMP hard coded
  var paths = require('../paths/paths'); //TEMP hard coded
  var promise = require(path.join(paths.libraries, '/promise.js')); //TEMP hard coded  
  var _mappings = require(path.join(paths.mappings, '/mappings.js')); // A function that returns a Promise 
  _Me.mappings = _mappings;
  return new promise(function(resolve) {
    console.log('mappings - resolve(_Me): ', _Me);
    resolve(_Me.mappings); // Note: return only _Me.mappings here
  })
  .catch(function(error) {
    console.log('mappings - error: ', error);
  }); // eof promise
} // eof module