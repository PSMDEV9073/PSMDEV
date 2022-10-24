!function ($) {

    "use strict";

    var Typed = function (el, options) {
        this.el = $(el);
        this.options = $.extend({}, $.fn.typed.defaults, options);
        this.text = this.el.text();
        this.typeSpeed = this.options.typeSpeed;
        this.backDelay = this.options.backDelay;
        this.strings = this.options.strings;
        this.strPos = 0;
        this.arrayPos = 0;
        this.string = this.strings[this.arrayPos];
        this.stopNum = 0;
        this.loop = this.options.loop;
        this.loopCount = this.options.loopCount;
        this.curLoop = 1;
        if (this.loop === false) {
            this.stopArray = this.strings.length - 1;
        } else {
            this.stopArray = this.strings.length;
        }

        this.init();
    }

    Typed.prototype = {

        constructor: Typed,
        init: function () {
            this.typewrite(this.string, this.strPos);
        },
        typewrite: function (curString, curStrPos) {
            var humanize = Math.round(Math.random() * (100 - 30)) + this.typeSpeed;
            var self = this;

            setTimeout(function () {
                if (self.arrayPos < self.strings.length) {
                    self.el.text(self.text + curString.substr(0, curStrPos));
                    if (curStrPos > curString.length && self.arrayPos < self.stopArray) {
                        clearTimeout(clear);
                        var clear = setTimeout(function () {
                            self.backspace(curString, curStrPos);
                        }, self.backDelay);
                    } else {
                        curStrPos++;
                        self.typewrite(curString, curStrPos);
                        // task
                        if (self.loop === false) {
                            if (self.arrayPos === self.stopArray && curStrPos === curString.length) {
                                var clear = self.options.callback();
                                clearTimeout(clear);
                            }
                        }
                    }
                } else if (self.loop === true && self.loopCount === false) {
                    self.arrayPos = 0;
                    self.init();
                } else if (self.loopCount !== false && self.curLoop < self.loopCount) {
                    self.arrayPos = 0;
                    self.curLoop = self.curLoop + 1;
                    self.init();
                }
            }, humanize);

        },
        backspace: function (curString, curStrPos) {
            var humanize = Math.round(Math.random() * (100 - 30)) + this.typeSpeed;
            var self = this;

            setTimeout(function () {
                if (self.arrayPos == 1, 2, 3, 4) {
                    self.stopNum = 0;
                }
                
                self.el.text(self.text + curString.substr(0, curStrPos));

                if (curStrPos > self.stopNum) {
                    curStrPos--;
                    self.backspace(
                        curString,
                        curStrPos
                    );
                } else if (curStrPos <= self.stopNum) {
                    clearTimeout(clear);
                    var clear = self.arrayPos = self.arrayPos + 1;
                    self.typewrite(self.strings[self.arrayPos], curStrPos);
                }
            }, humanize);

        }

    }

    $.fn.typed = function (option) {
        return this.each(function () {
            var $this = $(this),
                data = $this.data('typed'),
                options = typeof option == 'object' && option
            if (!data) 
                $this.data('typed', (data = new Typed(this, options)))
            if (typeof option == 'string') 
                data[option]()
        });
    }

    $.fn.typed.defaults = {
        strings: [
            "Hello", "Hi!", " 안녕", " 안녕하세요", "Welcome to my website "
        ],
        typeSpeed: 50,
        backDelay: 100,
        loop: true,
        loopCount: false,
        callback: function () {
            null
        }
    }

}(window.jQuery);

$(function () {
    $("#typed").typed({
        strings: [
            "대학생", "PSM"
        ],
        typeSpeed: 40,
        backDelay: 600,
        loop: true,
        loopCount: false,
        callback: function () {
            foo();
        }
    });

    function foo() {
        console.log("Callback");
    }

});