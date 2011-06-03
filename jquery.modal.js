/* 
* Part of Nitriques Solutions inc. (http://www.nitriques.com) jQuery plug-in bundle
* Liscence under the The Code Project Open License (CPOL)
* http://www.codeproject.com/info/cpol10.aspx

* Name: jquery.modal.js
* Date: 2010-10-30
* Version: 1.1

* Version 1.1 : Added multiple instance support
                Added public methods (show, hide, toggle)
                Added ntr$modal dummy namespace
                Added private block declaration
                Added a cancel method

* Version 1.0 : First release

* Pre-requisites: 
*   jquery.center.js version 1.0
*   jquery.scroll.js version 1.0

* Copyrights (c) Solutions Nitriques inc.
*/
(function ($) {

    // dummy namespace function
    $.ntr$modal = function (b) { alert('x ' + b) };

    // actual plugin
    $.fn.ntr$modal = function (b) {

        var vp = 'isVisible',
            th = this,
            bg;

        function setVisible(t, v) { if (!t) t = $(this); else t = $(t); t.data(vp, v); }
        function getVisible(t) { if (!t) t = $(this); else t = $(t); return t.data(vp); }

        function show(t) {
            var o = { opacity: 0.6 };
            var d = { duration: 800 };
            if (!t) t = $(this); else t = $(t);

            // add background to DOM
            bg.appendTo('body');
            //$(bg).click(function () { toggle(t) }); // debug purpose

            // stop all animations
            cancel(t);

            // scroll background
            bg.ntr$scroll();

            // show modal
            t.show();

            // center it: needs jquery.center.js
            t.ntr$center();

            // animate background
            bg.animate(o, d.duration, 'swing', function () { }); // Don't know why, but the other signature creates too much recursion

            // full opacity
            o.opacity = 1;

            // animate modal
            t.animate(o, d);

            // Set flag
            setVisible(t, 1);
            return this;
        }

        $.ntr$modal.show = show;

        function hide(t) {
            return hide(t, 500);
        }
        function hide(t, dur) {
            var o = { opacity: 0 };
            if (!t) t = $(this); else t = $(t);

            // stop all animations
            cancel(t);

            // animate background, then remove it from DOM
            bg.animate(o, dur, 'swing', function () { bg.remove() });

            // animate modal, then hide it
            t.animate(o, dur, 'swing', function () { t.hide(); });

            // Set flag
            setVisible(t, 0);
            return this;
        }

        $.ntr$modal.hide = hide;

        function toggle(t) {
            if (getVisible(t) == 1) { hide(t); } else { show(t); }
            return false;
        }

        $.ntr$modal.toggle = toggle;

        function cancel(t) {
            if (!t) t = $(this); else t = $(t);
            t.stop(true, true); // clear queue, jump to end
            bg.stop(true, true);
        }

        $.ntr$modal.cancel = cancel;

        function createBackground() {
            return $('<div id="ntr$modal$bg" style="width:100%;height:100%;background-color:#000000;position:absolute;top:0;left:0;z-index:999998;"></div>');
        }

        // Dynamic background
        bg = createBackground();

        hide(th, 0); // hide with no delay to set css values

        // register toggle on bouton(s)
        // use anonymus function in order to pass the th param by value not as a ref
        // so changing the th value after wards wont affect the on click event
        $(b).click(function () { toggle(th) });

        //register for scroll
        $(window).scroll(function () {
            bg.ntr$scroll();
            $(th).ntr$center();
        });

        //register for resize
        $(window).resize(function () {
            $(th).ntr$center();
        });

        return this; // return jQuery object
    } // ntr$modal
})(jQuery);     //  private block