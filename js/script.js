$(document).ready(function() {

    var parallax = debounce(function() {
        no_of_elements = 0;
        $('.parallax').each(function() {
            var $elem = $(this);

            if (isElementInViewport($elem)) {
                var parent_top = $elem.offset().top;
                var window_bottom = $(window).scrollTop();
                var $image = $elem.find('.parallax-background img')
                var $oVal = ((window_bottom - parent_top) / 3);
                $image.css('margin-top', $oVal + 'px');
            }
        });
    }, 6)

    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this,
                args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            }, wait);
            if (immediate && !timeout) func.apply(context, args);
        };
    };


    function isElementInViewport(elem) {
        var $elem = $(elem);

        // Get the scroll position of the page.
        var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
        var viewportTop = $(scrollElem).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        // Get the position of the element on the page.
        var elemTop = Math.round($elem.offset().top);
        var elemBottom = elemTop + $elem.height();

        return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
    }

    $(window).on('scroll', function() {
        var responsive = $(window).width();
        if (responsive >= 768) {
            parallax();
        }
    });
    Donate({
        container: ".donate"
      , prefix: "$"
      , classes: {
            active: "active"
        }
      , amounts: [
            1
          , 5
          , 10
          , 50
          , 100
          , 300
          , 500
        ]
      , custom: true
      , format: function (val) {
          return val > 1000
               ? (val = val.toString()).substring(0, 1) + "," + val.substring(1)
               : val
               ;
        }
      , onChange: function (val, li, e) {
            document.querySelector("[name=amount]").value = val;
        }
      , defaultValue: 10
    });
});
