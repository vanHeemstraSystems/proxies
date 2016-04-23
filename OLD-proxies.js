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
  var path = require('../libraries/path'); //TEMP hard coded
  var paths = require('../paths/paths'); //TEMP hard coded
  var promise = require(path.join(paths.libraries, '/promise.js')); //TEMP hard coded
  var _configurations = require(__dirname+'/configurations.js'); // A function that returns a Promise
  var _libraries = require(__dirname+'/libraries.js'); // A function that returns a Promise
  var _mappings = require(__dirname+'/mappings.js'); // A function that returns a Promise
  var _paths = require(__dirname+'/paths.js'); // A function that returns a Promise
  var _resources = require(__dirname+'/resources.js'); // A function that returns a Promise
  var join = promise.join;
  return new promise(function(resolve) {
    join(_configurations(), _libraries(), _mappings(), _paths(), _resources(), function(configurations, libraries, mappings, paths, resources) {
      _Me.configurations = configurations;
      _Me.libraries = libraries;
      _Me.mappings = mappings;
      _Me.paths = paths;
      _Me.resources = resources;
    }); // eof join
    console.log('proxies - resolve(_Me): ', _Me);
    resolve(_Me);
  })
  .catch(function(error) {
    console.log('proxies - error: ', error);
  })
  .finally(function() {
    console.log('proxies - finally');
  }); // eof promise
} // eof module