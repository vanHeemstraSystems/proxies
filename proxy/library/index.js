/*
 * index.js
 */
var LibraryPath = require(__dirname+'/path.js');

/**
 * Create a new Library that let users create sub-libraries.
 * @return {Library}
 */
function Library() { }

/**
 * Create a new LibraryPath object.
 * @return {LibraryPath}
 */
Library.prototype.path = function() {
  return new LibraryPath();
}

//ORIGINAL module.exports = new Library();
module.exports = function() { return new Library(); }
