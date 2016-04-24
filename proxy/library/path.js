function LibraryPath() {
  this._promise = require('../../../libraries/path'); // a function that returns a Promise
  this._default = undefined;
  this._validator = undefined;
  this._options = {};
}

LibraryPath.prototype.promise = function() {
  return this._promise;
}

LibraryPath.prototype.default = function(fnOrValue) {
  this._default = fnOrValue;
  return this;
}

// Dummy functions
LibraryPath.prototype.validate = function() {}


LibraryPath.prototype.options = function() {}


LibraryPath.prototype.optional = function() {}


LibraryPath.prototype.required = function() {}


LibraryPath.prototype.allowNull = function() {}


module.exports = LibraryPath;