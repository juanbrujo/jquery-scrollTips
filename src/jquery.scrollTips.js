;(function($) {

    $.scrollTips = function(element, options) {

        var defaults = {
            container: $("section"),
            title: $("h1"),
            exclude: $("#intro"),
            smoothscroll: 500,

            onCreate: function(){},
            onSection: function(){}
        };

        var plugin = this;

        plugin.settings = {};

        var $element = $(element),
             elem = $element;

        plugin.init = function() {
            plugin.settings = $.extend({}, defaults, options);

            // Start!
            var tips = [];
            var scrollTip = function(wrapper,container,title,exclude) {
              
              Number.prototype.limit = function(min, max) {
                return Math.min(Math.max(this, min), max);
              };
              
              // SMOOTHSCROLL
              var smoothScroll = function() {
                var pos = $($(this).attr("href")).offset().top;
                $("html, body").stop().animate({scrollTop: pos}, plugin.settings.smoothscroll);
                return false;
              };
              // SMOOTHSCROLL
              
              // RESIZE
              var resizeTips = function() {
                var section = container.first();
                section.css("margin-top", $(window).height() - exclude.height() - exclude.offset().top );
                for( var i = 0; i < tips.length; i++ ) {
                    var t = tips[i];
                    t.targetPos = t.target.offset().top;
                }
              };
              // END RESIZE
              
              // SCROLLTIPS
              var scrollTips = function() {
                var windowHeight = $(window).height(),
                    scrollPos = $(window).scrollTop();

                for( var i = 0; i < tips.length; i++ ) {
                    var t = tips[i],
                        targetHeight = t.target.height(),
                        tipSection = t.target;


                    if( scrollPos+20 > t.targetPos && scrollPos < t.targetPos + targetHeight ) {
                        if( !t.tip.hasClass("activeTip") ) {
                            if( typeof window.history.replaceState === "function" ) {
                                history.replaceState({}, "", window.location.href.replace(/#.*$/,"") + "#" + t.name);
                            }
                            t.tip.addClass("activeTip");
                            tipSection.addClass("activeSection");

                            // onSection callback
                            plugin.settings.onSection.call(this);
                        }
                    }
                    else {
                        t.tip.removeClass("activeTip");
                        tipSection.removeClass("activeSection");
                    }

                    var tipPos = ( (windowHeight - ((scrollPos-t.targetPos)/targetHeight) * windowHeight)/1.8 )
                        .limit((i+0.3)*30, windowHeight - (tips.length-i+0.3)*30);
                    t.tip.css("top", tipPos);
                }

                if( scrollPos+20 < tips[0].targetPos && document.location.href.match(/#.+$/) ) {
                    if( typeof window.history.replaceState === "function" ) {
                        history.replaceState({}, "", window.location.href.replace(/#.*$/,""));
                    }
                }
              };
              // END SCROLLTIPS

              container.each(function(){
                var container = $(this),
                    title = container.find("h1").text();

                var scrollTip = $("<a class='scrollTip'/>")
                .attr("href", "#"+this.id)
                .text(title)
                .click(smoothScroll)
                .appendTo("body");

                tips.push({
                  name: this.id,
                  tip: scrollTip,
                  target: $("#"+this.id),
                  targetPos: 0,
                });
              });

              $(window).on("load scroll resize", function(){
                resizeTips();
                scrollTips();
              });

            };

            var wrapper = elem,
            container = plugin.settings.container,
            title = plugin.settings.title,
            exclude = plugin.settings.exclude;

            scrollTip(wrapper,container,title,exclude);

            // onCreate callback
            plugin.settings.onCreate.call(this);

        };

        plugin.init();

    };

    $.fn.scrollTips = function(options) {

        return this.each(function() {
            if (undefined === $(this).data("scrollTips")) {
                var plugin = new $.scrollTips(this, options);
                $(this).data("scrollTips", plugin);
            }
        });

    };

})(jQuery);