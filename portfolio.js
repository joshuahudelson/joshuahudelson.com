
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

$(document).ready(function(){
  $(window).scrollTop(0);
  $("body").css("background-color", "WhiteSmoke");
  $("#statfeedpage").fadeOut();
  $("#shiftshaperpage").fadeOut();
  $("#statfeed").animate({margin: '14 14 14 50'}, 1400);
  $("#FiniteType").animate({margin: '14 200 14 14'}, 1450);
  $("#silencer").animate({margin: '14 160 14 14'}, 1500);
  $("#IATF").delay(500).animate({margin: '14 14 14 100'}, 1100);
  $("#sculpture").animate({margin: '14 120 14 14'}, 1550);
  $("#Shiftshaper").animate({margin: '14 14 14 -100'}, 1550);
  $("#BELLA").animate({margin: '14 180 14 14'}, 1270);

  $("#backbutton").click(function(){
    window.location.replace("http://joshuahudelson.com/portfolio.html")
  });

  $("#statfeed").click(function(){
    blowup();
    $("#statfeedpage").delay(1000).fadeIn(1000);
  });

  $("#Shiftshaper").click(function(){
    blowup();
    $("#shiftshaperpage").delay(1000).fadeIn(1000);
  });



});
