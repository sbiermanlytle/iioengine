// Generated by CoffeeScript 1.9.1
(function() {
  var iio, ref, root,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty,
    slice = [].slice;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  iio = root.iio = (ref = root.iio) != null ? ref : {};

  iio.Line = (function(superClass) {
    extend(Line, superClass);

    function Line() {
      var others, properties;
      properties = arguments[0], others = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      Line.__super__.constructor.call(this, others);
    }

    return Line;

  })(iio.Object);

}).call(this);
