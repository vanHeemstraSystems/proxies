/*
 * filename: resources.js
 *
 * input: input - an Object
 *
 * output: resolve - a Promise
 */
module.exports = function(input) {  
  console.log('resources - called');
  var _Me = {};
  var path = require('../libraries/path'); //TEMP hard coded
//  _Me.path = path;
  var paths = require('../paths/paths'); //TEMP hard coded
  var resources = require(path.join(paths.resources, '/resources.js')); // A function that returns a Promise 
  _Me = resources;
  return(_Me);

//  var promise = require(path.join(paths.libraries, '/promise.js')); //TEMP hard coded
//  _Me.promise = promise;
//  _Me.express = require(_Me.path.join(paths.libraries, '/express.js'));
//  _Me.bodyParser = require(_Me.path.join(paths.libraries, '/body-parser.js'));
//  return new promise(function(resolve) {
//    console.log('resources - resolve(_Me): ', _Me);
//    resolve(_Me);
//  }); // eof promise

} // eof module