//  tomorrow  //  by saestrah  //  march 2021

//  sidebar tabs
$(document).ready(function() {
    $(".mobilenav").on("click", function() {
        $("sidebar").show();
        $("header").hide();
        $("iconlinks").show();
        $(".mobilenav").hide();
        $(".stclose").show();
        $(".rightwrap").hide();
        $(".home").addClass("active")
    });
    
    $(".stclose").on("click", function() {
        $("sidebar").hide();
        $("header").show();
        $("iconlinks").hide();
        $(".mobilenav").show();
        $(".stclose").hide();
        $(".rightwrap").show();
    });
    
    $(".icon1").on("click", function() {
        $("sidebar").show();
        $("#sidetab0C").hide();
        $("#sidetab1C").show();
        $("#sidetab2C").hide();
        $("#sidetab3C").hide();
        $("#sidetab4C").hide();
        $(".home").removeClass("active")
        $(".icon1").addClass("active")
        $(".icon2").removeClass("active")
        $(".icon3").removeClass("active")
        $(".icon4").removeClass("active")
    });
    
    $(".icon2").on("click", function() {
        $("sidebar").show();
        $("#sidetab0C").hide();
        $("#sidetab1C").hide();
        $("#sidetab2C").show();
        $("#sidetab3C").hide();
        $("#sidetab4C").hide();
        $(".home").removeClass("active")
        $(".icon1").removeClass("active")
        $(".icon2").addClass("active")
        $(".icon3").removeClass("active")
        $(".icon4").removeClass("active")
    });
    
    $(".icon3").on("click", function() {
        $("sidebar").show();
        $("#sidetab0C").hide();
        $("#sidetab1C").hide();
        $("#sidetab2C").hide();
        $("#sidetab3C").show();
        $("#sidetab4C").hide();
        $(".home").removeClass("active")
        $(".icon1").removeClass("active")
        $(".icon2").removeClass("active")
        $(".icon3").addClass("active")
        $(".icon4").removeClass("active")
    });
    
    $(".icon4").on("click", function() {
        $("sidebar").show();
        $("#sidetab0C").hide();
        $("#sidetab1C").hide();
        $("#sidetab2C").hide();
        $("#sidetab3C").hide();
        $("#sidetab4C").show();
        $(".home").removeClass("active")
        $(".icon1").removeClass("active")
        $(".icon2").removeClass("active")
        $(".icon3").removeClass("active")
        $(".icon4").addClass("active")
    });
});

//  navigation tab
$(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        var links = this.el.find(".navtitle");
        
        links.on("click", {
            el: this.el,
            multiple: this.multiple
        }, this.dropdown)
    }

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass("active");

        if (!e.data.multiple) {
            $el.find(".navtags").not($next).slideUp().parent().removeClass("active");
        };
    }

    var accordion = new Accordion($("#accordion"), false);
});

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
