(function() {
  var ANIM, CIRCLE_FILL, DASHED;

  DASHED = {
    fill: "none",
    stroke: "#666",
    "stroke-dasharray": "- "
  };

  CIRCLE_FILL = {
    fill: "#fff",
    "fill-opacity": 0,
    stroke: "#fff",
    "stroke-width": 2
  };

  ANIM = {
    "50%": {
      cx: 140,
      fill: "#f00",
      "fill-opacity": 1
    },
    "100%": {
      cx: 40,
      fill: "#fff",
      "fill-opacity": 0
    }
  };

  Raphael.fn.arrow = function(x, y) {
    return this.path(["M", x, y] + "m-10-10l20,0 0-6 10,16 -10,16 0-6 -20,0 0,6 -10-16 10-16z").attr({
      fill: "#fff",
      stroke: "none",
      "stroke-dasharray": "-",
      "fill-opacity": 0.2
    });
  };

  window.drawCircle = function() {
    var a, el, elattrs, now, r;
    r = Raphael("holder", 619, 419);
    r.circle(40, 40, 20).attr(DASHED);
    r.circle(140, 40, 20).attr(DASHED);
    el = r.circle(40, 40, 20).attr(CIRCLE_FILL);
    elattrs = [
      {
        cx: 140,
        fill: "#f00",
        "fill-opacity": 1
      }, {
        cx: 40,
        fill: "#fff",
        "fill-opacity": 0
      }
    ];
    now = 1;
    a = r.arrow(90, 40).node;
    a.onclick = function() {
      return el.animate(ANIM, 2000);
    };
    return a.onclick();
  };

  window.onload = function() {
    return drawCircle();
  };

}).call(this);
