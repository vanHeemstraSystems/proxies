function libaries() {
  console.log('libraries - called');
  var _Me = {};
  var path = require('../libraries/path'); //TEMP hard coded
  _Me.path = path;
  var paths = require('../paths/paths'); //TEMP hard coded
  var promise = require(path.join(paths.libraries, '/promise.js')); //TEMP hard coded
  _Me.promise = promise;
  _Me.express = require(_Me.path.join(paths.libraries, '/express.js'));
  _Me.bodyParser = require(_Me.path.join(paths.libraries, '/body-parser.js'));
  return new promise(function(resolve) {
    console.log('libraries - resolve(_Me): ', _Me);
    resolve(_Me);
  })
  .catch(function(error) {
    console.log('libraries - error: ', error);
  }); // eof promise
}