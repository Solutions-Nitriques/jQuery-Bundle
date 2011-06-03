/* 
* Part of Nitriques Solutions inc. (http://www.nitriques.com) jQuery plug-in bundle
* Liscence under the The Code Project Open License (CPOL)
* http://www.codeproject.com/info/cpol10.aspx

* Name: jquery.center.js
* Date: 2010-01-08
* Version: 1.0

* Pre-requisites: none;

* Copyrights (c) Tony L.
* Found on 2010-01-08 at http://stackoverflow.com/questions/210717/what-is-the-best-way-to-center-a-div-on-the-screen-using-jquery

* Added -40px to the top, it gives a better effect
* Changed plugin declaration, function name
*/
jQuery.fn.extend({ // jQuery plugin
    ntr$center: function() {
        this.css("position", "absolute");
        this.css("top", ($(window).height() - this.height()) / 2 + $(window).scrollTop() - 40 + "px");
        this.css("left", ($(window).width() - this.width()) / 2 + $(window).scrollLeft() + "px");
        return this;
    }
});