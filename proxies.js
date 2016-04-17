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
    //console.log('proxies - libraries: ', libraries);
    libraries()
      .then(function(libraries) {
        _Me.libraries = libraries;
        console.log('proxies - inside libraries then: ', _Me.libraries); 
        var paths = require(__dirname+'/paths.js'); // A function that returns a Promise
          paths()
            //console.log('proxies - paths: ', paths);
            .then(function(paths) {
              _Me.paths = paths;
              console.log('proxies - inside paths then: ', _Me.paths);

              //var path = require('../libraries/path'); //TEMP hard coded
              //var promise = require(path.join(paths.libraries, '/promise.js')); //TEMP hard coded

              return new _Me.libraries.promise(function(resolve) {
              //return new promise(function(resolve) {
                // put module properties and logic here
                console.log('proxies - _Me: ', _Me);
                resolve(_Me);
              }); // eof promise 
            }); //eof paths  
      }); //eof libraries
} // eof module