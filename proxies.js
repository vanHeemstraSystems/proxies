/*
 * proxies.js
 *
 * input: input - an Object
 *
 * output: resolve - a Promise
 */
module.exports = function() {
  console.log('proxies - called');
  var _Me = {};
  var path = require('../libraries/path');
  var paths = require('../paths/paths'); 
  var promise = require(path.join(paths.libraries, '/promise.js'));
  var _proxy = require(__dirname+'/proxy.js');
  var join = promise.join;
  return new promise(function(resolve) {
    join(_proxy(), function(proxy) {
      _Me.proxyy = proxy;
    }); // eof join
    console.log('proxies - resolve(_Me): ', _Me);
    resolve(_Me);
  }) // eof promise
  .catch(function(error) {
    console.log('proxies - error: ', error);
  }) // eof catch
  .finally(function() {
    console.log('proxies - finally');
  }); // eof finally
} // eof module