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
  var paths = require(__dirname+'/paths.js'); // A function that returns a Promise
    paths()
    //console.log('proxies - paths: ', paths);
      .then(function(paths) {
        var _paths = paths
        console.log('proxies - inside paths then');
      }); //eof paths
  _paths = require('../paths/paths'); // hard coded for now
  _Me.path = require('../libraries/path');
  _Me.promise = require(_Me.path.join(_paths.libraries, '/promise.js'));
  return new _Me.promise(function(resolve) {
    // put module properties and logic here
    console.log('libraries - resolve');
    resolve(_Me);
  }); // eof promise
} // eof module