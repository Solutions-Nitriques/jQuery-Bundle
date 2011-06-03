/* 
* Part of Nitriques Solutions inc. (http://www.nitriques.com) jQuery plug-in bundle
* Liscence under the The Code Project Open License (CPOL)
* http://www.codeproject.com/info/cpol10.aspx

* Name: jquery.modal.loader.js
* Date: 2010-10-30
* Version: 1.0

* Version 1.0 : First release
                Simplify the add of a modal loading panel for MS AJAX Requests

* Pre-requisites: 
*   jquery.modal.js version 1.1
*   jquery.center.js version 1.0
*   jquery.scroll.js version 1.0

* Copyrights (c) Solutions Nitriques inc.
*/
(function ($) {

    var s = false, 
        t = null,
        int = 100,
        l = "#loader";

    function show() {
        if (!s) {
            $.ntr$modal.show(l);
            s = true;
        }
    }

    function beginRequest() {
        t = setTimeout(show, int);
    }

    function endRequest() {
        if (s) {
            $.ntr$modal.hide(l);
            s = false;
        } else {
            clearTimeout(t);
        }
    }

    $(function () {
        // Hook up modal panel
        $(l).ntr$modal();

        // Register for Ajax posts
        Sys.WebForms.PageRequestManager.getInstance().add_beginRequest(beginRequest)
        Sys.WebForms.PageRequestManager.getInstance().add_endRequest(endRequest)
    });
})(jQuery);