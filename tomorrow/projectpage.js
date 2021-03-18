//  tomorrow project page · by saestrah · march 2021

$(document).ready(function() {
    //  mobile navigation
    $(".mobilenav").on("click", function() {
        $("iconlinks").show();
        $(".mobilenav").hide();
        $(".stclose").show();
    });
    
    $(".stclose").on("click", function() {
        $("iconlinks").hide();
        $(".mobilenav").show();
        $(".stclose").hide();
    });

    //  tabs
    $("#tabs li a:not(:#tab1)").addClass("inactive");
    $(".container").hide();
    $(".container:nth-of-type(1)").show();

    $("#tabs li a").click(function(){
        var t = $(this).attr("id");
        if($(this).hasClass("inactive")){
            $("#tabs li a").addClass("inactive");
            $(this).removeClass("inactive");
            $(".container").hide();
            $("#" + t + "C").fadeIn("slow");
        }
    });

    //  nightmode
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
