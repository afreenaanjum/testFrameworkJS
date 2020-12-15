(function (global) {
  var Greeter = function (firstName, lastName, language) {
    return new Greeter.init(firstName, lastName, language);
  };

  //Hidden within the scope of IIFE, never directly accessible
  var supporetdLangs = ["en", "hi"];

  var greetings = {
    en: "Hello",
    hi: "नमस्ते",
  };

  var formalGreet = {
    en: "Greetings",
    hi: "अभिवादन",
  };

  var logMessages = {
    en: "Logged in",
    hi: "लॉग इन",
  };

  Greeter.prototype = {
    fullName: function () {
      return this.firstName + " " + this.lastName;
    },
    validate: function () {
      if (supporetdLangs.indexOf(this.language) === -1)
        throw "Invalid language";
    },
    greeting: function () {
      return greetings[this.language] + " " + this.firstName + "!";
    },
    formalGreeting: function () {
      return formalGreet[this.language] + " " + this.firstName + "!";
    },
    greet: function (formal) {
      var msg;
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }
      if (console) {
        console.log(msg);
      }
      //This will help in chainable methods
      return this;
    },
    log: function () {
      if (console) {
        console.log(logMessages[this.language] + " : " + this.fullName());
      }
      return this;
    },
    setLang: function (language) {
      this.language = language;
      this.validate();
      return this;
    },
  };

  Greeter.init = function (firstName, lastName, language) {
    var self = this;
    self.firstName = firstName || "";
    self.lastName = lastName || "";
    self.language = language || "en";
  };

  //Any objects created with init function should point to Greeter prototype
  Greeter.init.prototype = Greeter.prototype;

  //Aliasing
  global.Greeter = global.G$ = Greeter;
})(window);
