//  evergiven · by saestrah · march 2021

//  evergiven countup timer
window.onload = function() {
  // Month Day, Year Hour:Minute:Second, id-of-element-container
  countUpFromTime("Mar 24, 2021 5:40:00", 'countup1'); // ****** Change this line!
};
function countUpFromTime(countFrom, id) {
  countFrom = new Date(countFrom).getTime();
  var now = new Date(),
      countFrom = new Date(countFrom),
      timeDifference = (now - countFrom);
    
  var secondsInADay = 60 * 60 * 1000 * 24,
      secondsInAHour = 60 * 60 * 1000;
    
  days = Math.floor(timeDifference / (secondsInADay) * 1);
  hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
  mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
  secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);

  var idEl = document.getElementById(id);
  idEl.getElementsByClassName('days')[0].innerHTML = days;
  idEl.getElementsByClassName('hours')[0].innerHTML = hours;
  idEl.getElementsByClassName('minutes')[0].innerHTML = mins;
  idEl.getElementsByClassName('seconds')[0].innerHTML = secs;

  clearTimeout(countUpFromTime.interval);
  countUpFromTime.interval = setTimeout(function(){ countUpFromTime(countFrom, id); }, 1000);
}

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
