
var Oz = require('oz');
var ozText = require('oz-text');
var assert = require('assert');
var text = require('text');
var children = require('children');

Oz.use(ozText);

describe('Rendering', function(){

  it('should hide elements that have falsey values', function(){
    var el = children(Oz.render('<div oz-if="bool"></div>', { bool: false }));
    assert(el[0].style.display === 'none');
  });

  it('should not change context for bool values', function(){
    var el = children(Oz.render('<div oz-if="bool"><p oz-text="name"></p></div>', { name: 'Tobi', bool: true }));
    assert('Tobi' == text(children(el[0])[0]));
  });

  it('should allow access dot notation for value access', function(){
    var el = children(Oz.render('<div oz-if="names.length"><p oz-text="text"></p></div>', { names: ['Tobi', 'Paul'], text: 'something'}));
    assert('something' == text(children(el[0])[0]));
  });

  it('should not choke on undefined objects', function () {
    var el = children(Oz.render('<div oz-if="names.length"></div>', {}))[0];
    assert(el.style.display === 'none');
  });
});

describe("Updating", function() {

  it('should show elements that have truthy values', function(){
    var template = Oz('<div oz-if="bool"></div>');
    var el = children(template.render({ bool: false }));
    assert(el[0].style.display === 'none');

    template.update({bool: true});
    assert(el[0].style.display === '');
  });

});
