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
  var libraries = require(__dirname+'/libraries.js'); // A function that returns a Promise
    //console.log('proxies - libraries: ', libraries);
    console.log('proxies - calling libraries');
    libraries()
      .then(function(libraries) {
        console.log('proxies - inside libraries then');
        _Me.libraries = libraries; 
      }); //eof libraries

  var paths = require(__dirname+'/paths.js'); // A function that returns a Promise
    //console.log('proxies - paths: ', paths);
    console.log('proxies - calling paths');
    paths()
      .then(function(paths) {
        console.log('proxies - inside paths then');
        _Me.paths = paths; 
      }); //eof paths  

  var path = require('../libraries/path'); //TEMP hard coded
  var paths = require('../paths/paths'); //TEMP hard coded
  var promise = require(path.join(paths.libraries, '/promise.js')); //TEMP hard coded
  //var promise = require(_Me.libraries.path.join(_Me.paths.libraries, '/promise.js'));

  //return new _Me.libraries.promise(function(resolve) {
  return new promise(function(resolve) {
    // put module properties and logic here
    console.log('proxies - resolve');
    resolve(_Me);
  }); // eof promise
} // eof module