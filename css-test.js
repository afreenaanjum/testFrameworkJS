(function (global, $) {
  var Css = function (element) {
    return new Css.init(element);
  };

  Css.prototype = {
    textColor: function (color) {
      this.element.css("color", color);
      return this;
    },
    fontSize: function (size) {
      this.element.css("font-size", size);
      return this;
    },
    fontFamily: function (family) {
      this.element.css(("font-family", family));
      return this;
    },
    padding: function (padding) {
      this.element.css("padding", padding);
      return this;
    },
    margin: function (margin) {
      console.log(margin);
      this.element.css("margin", margin);
      return this;
    },
    border: function (border) {
      this.element.css("border", border);
      return this;
    },
    hideInSmallScreens: function () {
      if (window.screen.width < 400) {
        this.element.css("display", "none");
      }
      return this;
    },
    showInLargeScreens: function () {
      if (window.screen.width > 400) {
        this.element.css("display", "block");
      }
      return this;
    },
  };

  Css.init = function (element) {
    var self = this;
    this.element = element;
  };

  //Any objects created with init function should point to Css prototype
  Css.init.prototype = Css.prototype;

  //Aliasing
  global.Css = Css;
})(window, jQuery);
