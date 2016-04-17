/*
 * filename: paths.js
 *
 * input: input - an Object
 *
 * output: resolve - a Promise
 */
module.exports = function(input) {  
  console.log('paths - called');
  var _Me = {};
  var path = require('../libraries/path'); //TEMP hard coded
  var paths = require('../paths/paths'); //TEMP hard coded
  _Me.paths = paths;
  var promise = require(path.join(paths.libraries, '/promise.js')); //TEMP hard coded
  return new promise(function(resolve) {
    console.log('paths - resolve(_Me): ', _Me);
    resolve(_Me.paths); // Note: return only _Me.paths here
  }); // eof promise
} // eof module