oz-if
========

Boolean show/hide tag for [Oz](http://github.com/treygriffith/oz).


Installation
------------

Using component:

```
$ component install treygriffith/oz-if
```

Using a script tag (UMD compatible)

```
<script src="./oz-if.min.js"></script>
```

Usage
-----

This node will be hidden if the property is falsey, or not if it's truthy. Does not change context for child nodes.

Notation:

```html
<div oz-if="person.active"></div>
```

Example:

```javascript
var context = {
  person: {
    name: 'Tobi',
    active: true
  }
};
```

```html
<div oz-if="person.active">
  <span oz-text="person.name">Tobi</span>
</div>
```

License
-------
MIT
