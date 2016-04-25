/*
 * proxies.js
 */
var ProxiesProxy = require(__dirname+'/proxy.js');

/**
 * Create a new Proxies that let users create sub-proxies.
 * @return {Proxies}
 */
function Proxies() { }

/**
 * Create a new ProxiesProxy object.
 * @return {ProxiesProxy}
 */
Proxies.prototype.proxy = function() {
  return new ProxiesProxy();
}

//ORIGINAL module.exports = new Proxies();
module.exports = function() { return new Proxies(); }
