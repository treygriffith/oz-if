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

function render (el, val) {

  if(!val || (Array.isArray(val) && val.length === 0)) {
    this.hide(el);
  } else {
    this.show(el);
  }
}

