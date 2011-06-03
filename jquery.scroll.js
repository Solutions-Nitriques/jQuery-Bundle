/* 
* Part of Nitriques Solutions inc. (http://www.nitriques.com) jQuery plug-in bundle
* Liscence under the The Code Project Open License (CPOL)
* http://www.codeproject.com/info/cpol10.aspx

* Name: jquery.scroll.js
* Date: 2010-01-08
* Version: 1.0

* Pre-requisites: none;

* Copyrights (c) Solutions Nitriques inc.
*/
jQuery.fn.extend({ // jQuery plugin
    ntr$scroll: function() {
        this.css("position", "absolute");
        this.css("top", ($(window).scrollTop() + "px"));
        this.css("left", ($(window).scrollLeft() + "px"));
        return this;
    }
});