
;(function(){

/**
 * Require the module at `name`.
 *
 * @param {String} name
 * @return {Object} exports
 * @api public
 */

function require(name) {
  var module = require.modules[name];
  if (!module) throw new Error('failed to require "' + name + '"');

  if (!('exports' in module) && typeof module.definition === 'function') {
    module.client = module.component = true;
    module.definition.call(this, module.exports = {}, module);
    delete module.definition;
  }

  return module.exports;
}

/**
 * Registered modules.
 */

require.modules = {};

/**
 * Register module at `name` with callback `definition`.
 *
 * @param {String} name
 * @param {Function} definition
 * @api private
 */

require.register = function (name, definition) {
  require.modules[name] = {
    definition: definition
  };
};

/**
 * Define a module's exports immediately with `exports`.
 *
 * @param {String} name
 * @param {Generic} exports
 * @api private
 */

require.define = function (name, exports) {
  require.modules[name] = {
    exports: exports
  };
};
require.register("oz-if", function (exports, module) {
/**
 * Export plugin
 */
module.exports = function (Oz) {
  Oz.tag('oz-if', render);
};

module.exports.render = render;

/**
 * Hide nodes for falsey values without switching scope
 * template: <div oz-if="person.active"></div>
 * context: { person: {active: false} }
 * output: <div oz-if="person.active" style="display:none"></div>
 */

function render (el, ctx, prop, scope, next) {

  var val = this.get(ctx, prop);

  if(!val || (Array.isArray(val) && val.length === 0)) {
    this.hide(el);
  } else {
    this.show(el);
  }

  next();
}


});

if (typeof exports == "object") {
  module.exports = require("oz-if");
} else if (typeof define == "function" && define.amd) {
  define([], function(){ return require("oz-if"); });
} else {
  this["oz-if"] = require("oz-if");
}
})()
