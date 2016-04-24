/*
 * index.js
 */
var ProxyConfigurations = require(__dirname+'/configurations.js');
var ProxyLibraries = require(__dirname+'/libraries.js');
var ProxyMappings = require(__dirname+'/mappings.js');
var ProxyPaths = require(__dirname+'/paths.js');
var ProxyResources = require(__dirname+'/resources.js');

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
 * Create a new ProxyLibraries object.
 * @return {ProxyLibraries}
 */
 
Proxy.prototype.libraries = function() {
  return new ProxyLibraries();
}

/**
 * Create a new ProxyPaths object.
 * @return {ProxyPaths}
 */
Proxy.prototype.paths = function() {
  return new ProxyPaths();
}

/**
 * Create a new ProxyMappings object.
 * @return {ProxyMappings}
 */
Proxy.prototype.mappings = function() {
  return new ProxyMappings();
}

/**
 * Create a new ProxyResources object.
 * @return {ProxyResources}
 */
Proxy.prototype.resources = function() {
  return new ProxyResources();
}

//ORIGINAL module.exports = new Proxy();
module.exports = function() { return new Proxy(); }
