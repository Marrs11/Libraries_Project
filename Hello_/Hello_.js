(function (global, $) {

    var Hello = function (firstName, lastName, language) {
        return new Hello.init(firstName, lastName, language)
    }

    Hello.prototype = {};

    Hello.init = function (firstName, lastName, language) {
        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
        
    }

    Hello.init.prototype = Hello.prototype;

    global.Hello = global.G$ = Hello;

}(window, jQuery))