//  entity · by saestrah · january 2021

//  nightmode
$(document).ready(function(){
var nightMode;
    if (localStorage.getItem('nightmode')) {
        nightMode = localStorage.getItem('nightmode');
    } else {
    nightMode = 'day';
    }
    localStorage.setItem('nightmode', nightMode);

    if (localStorage.getItem('nightmode') == 'night') {
        $('body').addClass('night');
        $('.nightbtn').hide();
        $('.daybtn').show();
    }

    $('.nightbtn').on('click', function() {
        $('.nightbtn').hide();
        $('.daybtn').show();
        $('body').addClass('night');
        localStorage.setItem('nightmode', 'night');
    });

    $('.daybtn').on('click', function() {
        $('.daybtn').hide();
        $('.nightbtn').show();
        $('body').removeClass('night');
        localStorage.setItem('nightmode', 'day');
    });

//  font widget
var legibleMode;
    if (localStorage.getItem('legiblemode')) {
        legibleMode = localStorage.getItem('legiblemode');
    } else {
    legibleMode = 'notsolegible';
    }
    localStorage.setItem('legiblemode', legibleMode);

    if (localStorage.getItem('legiblemode') == 'legible') {
        $('body').addClass('legible');
        $('.bfontbtn').hide();
        $('.sfontbtn').show();
    }

    $('.bfontbtn').on('click', function() {
        $('.bfontbtn').hide();
        $('.sfontbtn').show();
        $('body').addClass('legible');
        localStorage.setItem('legiblemode', 'legible');
    });

    $('.sfontbtn').on('click', function() {
        $('.sfontbtn').hide();
        $('.bfontbtn').show();
        $('body').removeClass('legible');
        localStorage.setItem('legiblemode', 'notsolegible');
    });
});

//  mobile navigation
$(function() {
    var linksmenu = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        var links = this.el.find('.linksbutton');

        links.on('click', {
            el: this.el,
            multiple: this.multiple
        }, this.dropdown)
    }

    linksmenu.prototype.dropdown = function(e) {
        var $el = e.data.el;
            $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.mobilelinksbox').not($next).slideUp().parent().removeClass('open');
        };
    }

    var linksmenu = new linksmenu($('.linksmenu'), false);
});
