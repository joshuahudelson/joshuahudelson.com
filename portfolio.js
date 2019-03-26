
var blowup = function(){
  $(".holder").fadeOut(750);
  $("#statfeed").animate({margin: '-1111 14 14 -1111'}, 1400);
  $("#FiniteType").animate({margin: '-1111 -1111 14 14'}, 1450);
  $("#silencer").delay(150).animate({margin: '-1111 300 14 14'}, 1500);
  $("#IATF").delay(170).animate({margin: '14 14 14 -555'}, 1600);
  $("#sculpture").delay(100).animate({margin: '14 -555 14 14'}, 1550);
  $("#Shiftshaper").animate({margin: '1111 14 14 -1111'}, 1550);
  $("#BELLA").animate({margin: '500 -1111 14 14'}, 1270);
  $("body").css("background-color", "White");
  $("body").css("overflow", "visible");
};

var fade_pages_out = function(speed){
  $("body").css("background-color", "WhiteSmoke");
  $("#statfeedpage").fadeOut(speed);
  $("#shiftshaperpage").fadeOut(speed);
  $("#QuietTakesPage").fadeOut(speed);
  $("#FiniteTypepage").fadeOut(speed);
  $("#Antennaepage").fadeOut(speed);
  $("#IATFpage").fadeOut(speed);
}

$(document).ready(function(){
  fade_pages_out(0);
  $(window).scrollTop(0);

  $("#statfeed").animate({margin: '14 14 14 120'}, 1400);
  $("#FiniteType").animate({margin: '14 200 14 14'}, 1450);
  $("#silencer").animate({margin: '14 100 14 14'}, 1500);
  $("#IATF").delay(500).animate({margin: '14 14 14 150'}, 1100);
  $("#sculpture").animate({margin: '14 140 14 14'}, 1550);
  $("#Shiftshaper").animate({margin: '14 -14 14 50'}, 1550);
  $("#BELLA").animate({margin: '14 200 14 14'}, 1270);

  $(".backbutton").click(function(){
    fade_pages_out("slow");
    setTimeout(function(){
    window.location.href = "http://joshuahudelson.com/portfolio.html";
  }, 1000);
  });

  $("#signature").click(function(){
    fade_pages_out("slow");
    setTimeout(function(){
    window.location.href = "http://joshuahudelson.com/";
  }, 1000);
  })

  $("#statfeed").click(function(){
    blowup();
    $("#statfeedpage").delay(1000).fadeIn(1000);
  });

  $("#Shiftshaper").click(function(){
    blowup();
    $("#shiftshaperpage").delay(1000).fadeIn(1000);
  });

  $("#silencer").click(function(){
    blowup();
    $("#QuietTakesPage").delay(1000).fadeIn(1000);
  });

  $("#FiniteType").click(function(){
    blowup();
    $("#FiniteTypepage").delay(1000).fadeIn(1000);
  });

  $("#sculpture").click(function(){
    blowup();
    $("#Antennaepage").delay(1000).fadeIn(1000);
  });

  $("#IATF").click(function(){
    blowup();
    $("#IATFpage").delay(1000).fadeIn(1000);
  });

  $("#BELLA").click(function(){
    window.location.href = "https://bellagames.org/";
  });

  $(".backbutton").hover(function(){
    $(this).css('cursor', 'pointer');
  })

  $(".holder").hover(function(){
    $(this).css('cursor', 'pointer');
  })

  $("#signature").hover(function(){
    $(this).css('cursor', 'pointer');
  })

});
