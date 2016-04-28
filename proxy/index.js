/*
 * index.js
 */
var ProxyConfigurations = require(__dirname+'/configurations.js');
var ProxyErrors = require(__dirname+'/errors.js');
var ProxyLibraries = require(__dirname+'/libraries.js');
var ProxyMappings = require(__dirname+'/mappings.js');
var ProxyPaths = require(__dirname+'/paths.js');
var ProxyQueries = require(__dirname+'/queries.js');
var ProxyResources = require(__dirname+'/resources.js');
var ProxySchemas = require(__dirname+'/schemas.js');
var ProxyTypes = require(__dirname+'/types.js');
var ProxyUtilities = require(__dirname+'/utilities.js');

/**
 * Create a new Proxy that let users create sub-proxies.
 * @return {Proxy}
 */
function Proxy() { }

/**
 * Create a new ProxyConfigurations object.
 * @return {ProxyConfigurations}
 */
Proxy.prototype.configurations = function() {
  return new ProxyConfigurations();
}

/**
 * Create a new ProxyErrors object.
 * @return {ProxyErrors}
 */
Proxy.prototype.errors = function() {
  return new ProxyErrors();
}

/**
 * Create a new ProxyLibraries object.
 * @return {ProxyLibraries}
 */
 
Proxy.prototype.libraries = function() {
  return new ProxyLibraries();
}

/**
 * Create a new ProxyMappings object.
 * @return {ProxyMappings}
 */
Proxy.prototype.mappings = function() {
  return new ProxyMappings();
}

/**
 * Create a new ProxyPaths object.
 * @return {ProxyPaths}
 */
Proxy.prototype.paths = function() {
  return new ProxyPaths();
}

/**
 * Create a new ProxyQueries object.
 * @return {ProxyQueries}
 */
Proxy.prototype.queries = function() {
  return new ProxyQueries();
}

/**
 * Create a new ProxyResources object.
 * @return {ProxyResources}
 */
Proxy.prototype.resources = function() {
  return new ProxyResources();
}

/**
 * Create a new ProxySchemas object.
 * @return {ProxySchemas}
 */
Proxy.prototype.schemas = function() {
  return new ProxySchemas();
}

/**
 * Create a new ProxyTypes object.
 * @return {ProxyTypes}
 */
Proxy.prototype.types = function() {
  return new ProxyTypes();
}

/**
 * Create a new ProxyUtilities object.
 * @return {ProxyUtilities}
 */
Proxy.prototype.utilities = function() {
  return new ProxyUtilities();
}

//ORIGINAL module.exports = new Proxy();
module.exports = function() { return new Proxy(); }
