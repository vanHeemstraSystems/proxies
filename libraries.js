/*
 * filename: libraries.js
 *
 * input: input - an Object
 *
 * output: resolve - a Promise
 */
module.exports = function(input) {
  console.log('libraries - called');
  var _Me = {};
  _Me.input = input;
  // required libraries
  var path = require('../libraries/path');
  _Me.path = path;
  var paths = require('../paths/paths'); // hard coded for now
  var promise = require(path.join(paths.libraries, '/promise.js')); // hard coded for now
  _Me.promise = promise;
  // Create a new promise
  return new promise(function(resolve) {
    console.log('libraries - inside promise');
    // all other libraries
    _Me.bodyParser = require(_Me.path.join(paths.libraries, '/body-parser.js')); // this should become a call to a function that returns a promise
    _Me.express = require(_Me.path.join(paths.libraries, '/express.js')); // this should become a call to a function that returns a promise
    resolve(_Me);
  }); // eof promise
}