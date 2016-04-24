/*
 * libraries.js
 */
var LibrariesLibrary = require(__dirname+'/library.js');

/**
 * Create a new Libraries that let users create sub-libraries.
 * @return {Libraries}
 */
function Libraries() { }

/**
 * Create a new LibrariesLibrary object.
 * @return {LibrariesLibrary}
 */
Libraries.prototype.library = function() {
  return new LibrariesLibrary();
}

//ORIGINAL module.exports = new Libraries();
module.exports = function() { return new Libraries(); }
