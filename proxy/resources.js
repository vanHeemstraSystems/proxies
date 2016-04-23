function resources() {
  console.log('resources - called');
  var _Me = {};
  var path = require('../libraries/path'); //TEMP hard coded
  var paths = require('../paths/paths'); //TEMP hard coded
  var promise = require(path.join(paths.libraries, '/promise.js')); //TEMP hard coded
  var _resources = require(path.join(paths.resources, '/resources.js')); // A function that returns a Promise 
  _Me.resources = _resources;
  return new promise(function(resolve) {
    console.log('resources - resolve(_Me): ', _Me);
    resolve(_Me.resources); // Note: return only _Me.resources here
  })
  .catch(function(error) {
    console.log('resources - error: ', error);
  }); // eof promise
}