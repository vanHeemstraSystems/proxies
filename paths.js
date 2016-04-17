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
  _Me.input = input;  
  var path = require('../libraries/path'); // hard coded for now; this should become a call to a function that returns a promise
  var paths = require('../paths/paths'); // hard coded for now; this should become a call to a function that returns a promise
  var promise = require(path.join(paths.libraries, '/promise.js')); // hard coded for now; this should become a call to a function that returns a promise
  // Create a new promise
  return new promise(function(resolve) {
    console.log('paths - inside promise');
    _Me.paths = paths;
    console.log('_Me.paths: ', _Me.paths);   
    resolve(_Me.paths); // Note: return only the paths property
  }); // eof promise
}