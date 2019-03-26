$(document).ready(function(){

  $("#navabout").hover(function(){
    $(this).css('cursor','pointer');
  })
  $("#navcv").hover(function(){
    $(this).css('cursor','pointer');
  })
  $("#navportfolio").hover(function(){
    $(this).css('cursor','pointer');
  })

  $('.cvheader').hover(function(){
    $(this).css('cursor','pointer');
  })

    $(".box").hide();
    $("#cvbox").hide();
    $("#contactbox").hide();
    $("#navabout").addClass("active");
    $("#educationheader").addClass("active");
    $("#educationbox").delay(500).show();


    $("#navcv").click(function(){
        $(".cvheader").removeClass("active");
        $("#educationheader").addClass("active");
	      $("#navabout").removeClass("active");
	      $("#navcv").addClass("active");
	      $(".box").hide(500);
	      $("#cvbox").delay(500).fadeIn('fast');
        $("#educationbox").delay(500).show('fast');
	      $("#aboutbox").fadeOut(500);
	      $("#contactbox").fadeOut(500);
	});
    $("#navabout").click(function(){
      	$("#navabout").addClass("active");
      	$("#navcv").removeClass("active");
      	$(".box").hide(500);
      	$("#aboutbox").delay(500).fadeIn('fast');
      	$("#cvbox").fadeOut('fast');
      	$("#contactbox").fadeOut('fast');
	});

    $("#navportfolio").click(function(){
        window.location.href = "http://joshuahudelson.com/portfolio.html";
	});

    $("#educationheader").click(function(){
      $(".cvheader").removeClass("active");
  	  $("#educationheader").addClass("active");
      $(".box").slideUp('fast');
      $("#educationbox").slideDown('fast');
	});

    $("#teachingheader").click(function(){
      $(".cvheader").removeClass("active");
    	$("#teachingheader").addClass("active");
	    $(".box").slideUp('fast');
	    $("#teachingbox").slideDown('fast');
	});

    $("#publicationsheader").click(function(){
      $(".cvheader").removeClass("active");
    	$("#publicationsheader").addClass("active");
      $(".box").slideUp('fast');
      $("#publicationsbox").slideDown('fast');
	});

    $("#awardsheader").click(function(){
      $(".cvheader").removeClass("active");
    	$("#awardsheader").addClass("active");
      $(".box").slideUp('fast');
      $("#awardsbox").slideDown('fast');
	});

    $("#relatedheader").click(function(){
      $(".cvheader").removeClass("active");
    	$("#relatedheader").addClass("active");
      $(".box").slideUp('fast');
      $("#relatedbox").slideDown('fast');
	});
});
