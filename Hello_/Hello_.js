(function (global, $) {

    var Hello = function (firstName, lastName, language) {
        return new Hello.init(firstName, lastName, language)
    };

    var supportedLangs = ['en', 'bg'];

    var greetings = {
        en: 'Hello',
        bg: 'Здравей'
    };

    var formalGreetings = {
        en: 'Greetings',
        bg: 'Добър ден'
    };

    var logMessages = {
        en: 'Logged in',
        bg: 'Вписан'
    };

    Hello.prototype = {

        fullName: function () {
            return this.firstName + ' ' + this.lastName
        },

        validate: function () {
            if (supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid language";
            }
        },
        
        greeting: function () {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },
        
        formalGreetings: function () {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },

        greet: function (formal) {
            var msg

            if (formal){
                msg = this.formalGreetings();
            }
            else {
                msg = this.greeting();
            }
            if (console){
                console.log(msg)
            }
            return this;
        },

        log: function () {
            if (console){
                console.log(logMessages[this.language] + ':' + this.fullName())
            }
            return this;
        },

        setLang: function (lang) {
            this.language = lang;

            this.validate();

            return this;
        },

        HTMLGreeting: function (selector, formal) {
            if(!$){
                throw 'jQuery not loaded';
            }

            if (!selector){
                throw  'Missing jQuery selector';
            }

            var msg;
            if (formal){
                msg = this.formalGreetings();
            }
            else {
                msg = this.greeting();
            }

            $(selector).html(msg);

            return this;
        }

    };

    Hello.init = function (firstName, lastName, language) {
        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';

        self.validate();
    };

    Hello.init.prototype = Hello.prototype;

    global.Hello = global.G$ = Hello;

}(window, jQuery));