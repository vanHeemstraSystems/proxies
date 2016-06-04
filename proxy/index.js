/*
 * index.js
 */
var ProxyAssets = require(__dirname + '/assets.js');
var ProxyConfigurations = require(__dirname + '/configurations.js');
var ProxyDatabases = require(__dirname + '/databases.js');
var ProxyDocumentations = require(__dirname + '/documentations.js');
var ProxyErrors = require(__dirname + '/errors.js');
var ProxyEvents = require(__dirname + '/events.js');
var ProxyFeeds = require(__dirname + '/feeds.js');
var ProxyInstructions = require(__dirname + '/instructions.js');
var ProxyLayers = require(__dirname + '/layers.js');
var ProxyLibraries = require(__dirname + '/libraries.js');
var ProxyMains = require(__dirname + '/mains.js');
var ProxyMappings = require(__dirname + '/mappings.js');
var ProxyPaths = require(__dirname + '/paths.js');
var ProxyQueries = require(__dirname + '/queries.js');
var ProxyResources = require(__dirname + '/resources.js');
var ProxySchemas = require(__dirname + '/schemas.js');
var ProxyServers = require(__dirname + '/servers.js');
var ProxyTypes = require(__dirname + '/types.js');
var ProxyUtilities = require(__dirname + '/utilities.js');

/**
 * Create a new Proxy that let users create sub-proxies.
 * @return {Proxy}
 */
function Proxy() { }

/**
 * Create a new ProxyAssets object.
 * @return {ProxyAssets}
 */
Proxy.prototype.assets = function() {
  return new ProxyAssets();
}

/**
 * Create a new ProxyConfigurations object.
 * @return {ProxyConfigurations}
 */
Proxy.prototype.configurations = function() {
  return new ProxyConfigurations();
}

/**
 * Create a new ProxyDatabases object.
 * @return {ProxyDatabases}
 */
Proxy.prototype.databases = function() {
  return new ProxyDatabases();
}

/**
 * Create a new ProxyDocumentations object.
 * @return {ProxyDocumentations}
 */
Proxy.prototype.documentations = function() {
  return new ProxyDocumentations();
}

/**
 * Create a new ProxyErrors object.
 * @return {ProxyErrors}
 */
Proxy.prototype.errors = function() {
  return new ProxyErrors();
}

/**
 * Create a new ProxyEvents object.
 * @return {ProxyEvents}
 */
Proxy.prototype.events = function() {
  return new ProxyEvents();
}

/**
 * Create a new ProxyFeeds object.
 * @return {ProxyFeeds}
 */
Proxy.prototype.feeds = function() {
  return new ProxyFeeds();
}

/**
 * Create a new ProxyInstructions object.
 * @return {ProxyInstructions}
 */
Proxy.prototype.instructions = function() {
  return new ProxyInstructions();
}

/**
 * Create a new ProxyLayers object.
 * @return {ProxyLayers}
 */
Proxy.prototype.layers = function() {
  return new ProxyLayers();
}

/**
 * Create a new ProxyLibraries object.
 * @return {ProxyLibraries}
 */
Proxy.prototype.libraries = function() {
  return new ProxyLibraries();
}

/**
 * Create a new ProxyMains object.
 * @return {ProxyMains}
 */
Proxy.prototype.mains = function() {
  return new ProxyMains();
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
 * Create a new ProxyServers object.
 * @return {ProxyServers}
 */
Proxy.prototype.servers = function() {
  return new ProxyServers();
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

module.exports = Proxy;
