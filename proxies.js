/*
 * filename: proxies.js
 *
 * input: input - an Object
 *
 * output: resolve - a Promise
 */
module.exports = function(input) {
  console.log('proxies - called');
  var _Me = {};
  _Me.input = input;
  var libraries = require(__dirname+'/libraries.js'); // A function that returns a Promise
    libraries()
      .then(function(libraries) {
        _Me.libraries = libraries;
      }); //eof libraries
  var paths = require(__dirname+'/paths.js'); // A function that returns a Promise
    paths()
      .then(function(paths) {
        _Me.paths = paths;
      }); //eof paths
  return new _Me.libraries.promise(function(resolve) {
    // put module properties and logic here
    resolve(_Me);
  }); // eof promise
} // eof module