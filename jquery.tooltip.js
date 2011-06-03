/* 
* Part of Nitriques Solutions inc. (http://www.nitriques.com) jQuery plug-in bundle
* Liscence under the The Code Project Open License (CPOL)
* http://www.codeproject.com/info/cpol10.aspx

* Name: jquery.tooltip.js
* Date: 2010-02-15
* Version: 1.0

* Pre-requisites: none;

*/
(function($) {
    $.fn.extend({ // jQuery plugin
        ntr$tooltip: function() {

            var config = {
                tooltipCssClass: 'tooltip',
                tooltipId: 'tooltip',
                startYOffset: 100,
                endYOffset: 30
            };

            var sel = $(this).selector; /* to use with .live() */

            /* element-specific code here */
            //this.each(function() {
                //var t = $(this);
                

                /* functions */
                function on() {
                    var t = $(this);
                    var text = t.attr('alt') ? t.attr('alt') : t.attr('title');
                    
                    
                    /*alert('on ' + text);*/
                    $('body').append('<div id="' + config.tooltipId + '" class="' + config.tooltipCssClass + '">' + text + '</div>');

                    var defaultCss = { opacity: "0", position: 'absolute', maxWidth: '200px', top: (t.offset().top - config.startYOffset) + 'px', left: t.offset().left + 'px' };

                    $('div#' + config.tooltipId)
                        .css(defaultCss)
                        .stop(false, true) /* don't clear queue, do jump to end */
                        .animate({ opacity: "1", top: (t.offset().top - config.endYOffset - $('div#' + config.tooltipId).height()) + 'px' }, "slow");
                    return this;
                };

                function out() {
                    var t = $(this);
                    /*alert('out ' + text);*/
                    $('div#' + config.tooltipId).animate(
                        { opacity: "0", top: (t.offset().top - config.startYOffset) + 'px' },
                        'fast',
                        'swing',
                        function() {
                            /* Once animation completed, remove from DOM */
                            $(this).remove();
                            return this;
                        });
                };

                
                $(sel).live('mouseenter', on); /* live doesn't work */
                $(sel).live('mouseout', out);
                
                //return this;
            //});

            return this;
        }
    });
})(jQuery);