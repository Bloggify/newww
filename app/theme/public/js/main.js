"use strict";

var $ = require("jquery");
window.$ = window.jQuery = $;
var bootstrap = require("bootstrap");
var waypoints = require("./jquery.waypoints.min.js");
delete window.$;
delete window.jQuery;

$(function () {

    var $window = $(window),
        $body = $("body"),
        $bodyAndHtml = $("body,html"),
        $jsFullHeight = $(".js-full-height"),
        $navbar = $("#navbar"),
        windowHeight = $window.height(),
        windowWidth = $window.width();

    // iPad and iPod detection
    var isiPad = !!~navigator.platform.indexOf("iPad");
    var isiPhone = !!~(navigator.platform.indexOf("iPhone") !== -1) || !!~(navigator.platform.indexOf("iPod") !== -1);

    // Full height
    var fullHeight = function fullHeight() {
        var setMinHeight = function setMinHeight() {
            $jsFullHeight.css('min-height', windowHeight < 550 && windowWidth > 350 && windowWidth < 600 ? 450 : windowHeight);
            $(".full-height").animate({ opacity: 1 });
        };
        setMinHeight();
        $window.resize(setMinHeight);
    };

    // Scroll Next
    var ScrollNext = function ScrollNext() {
        $body.on('click', '.scroll-btn', function (e) {
            e.preventDefault();
            $bodyAndHtml.animate({
                scrollTop: $(this).closest('[data-next="yes"]').next().offset().top
            }, 1000);
            return false;
        });
    };

    // Burger Menu
    var burgerMenu = function burgerMenu() {
        $body.on('click', '.js-fh5co-nav-toggle', function (event) {
            if ($navbar.is(':visible')) {
                $(this).removeClass('active');
            } else {
                $(this).addClass('active');
            }
            event.preventDefault();
        });
    };

    // Off Canvass
    var offCanvass = function offCanvass() {
        if ($('#fh5co-offcanvass').length == 0) {
            if ($('.fh5co-nav-style-1').length > 0) {
                $('body').prepend('<div id="fh5co-offcanvass" />');

                $('.fh5co-link-wrap').each(function () {
                    $('#fh5co-offcanvass').append($(this).find('[data-offcanvass="yes"]').clone());
                });
                $('#fh5co-offcanvass').find('.js-fh5co-mobile-toggle').remove();
                $('#fh5co-offcanvass, #fh5co-page').addClass($('.fh5co-nav-style-1').data('offcanvass-position'));
                $('#fh5co-offcanvass').addClass('offcanvass-nav-style-1');
            }

            if ($('.fh5co-nav-style-2').length > 0) {
                $('body').prepend('<div id="fh5co-offcanvass" />');

                $('.fh5co-link-wrap').each(function () {
                    $('#fh5co-offcanvass').append($(this).find('[data-offcanvass="yes"]').clone());
                });
                $('#fh5co-offcanvass').find('.js-fh5co-mobile-toggle').remove();
                $('#fh5co-offcanvass, #fh5co-page').addClass($('.fh5co-nav-style-2').data('offcanvass-position'));
                $('#fh5co-offcanvass').addClass('offcanvass-nav-style-2');
            }
        }

        $('body').on('click', '.js-fh5co-mobile-toggle', function (e) {
            var $this = $(this);
            $this.toggleClass('active');
            $('html').toggleClass('mobile-menu-expanded');
        });

        if ($window.width() < 769) {
            $('body, html').addClass('fh5co-overflow');
        }

        $window.resize(function () {
            if ($window.width() < 769) {
                $('body, html').addClass('fh5co-overflow');
            }
            if ($window.width() > 767) {
                if ($('html').hasClass('mobile-menu-expanded')) {
                    $('.js-fh5co-mobile-toggle').removeClass('active');
                    $('html').removeClass('mobile-menu-expanded');
                }
            }
        });
    };

    $("a[data-popup='toggle']").click(function () {
        $bodyAndHtml.scrollTop(0);
        $($(this).attr("href")).toggle();
        $body.addClass("disable-scroll");
        return false;
    });

    $(".close-icon").click(function () {
        $(this).closest(".full-screen-popup").hide();
        $body.removeClass("disable-scroll");
    });

    fullHeight();
    ScrollNext();
    burgerMenu();
    offCanvass();
});