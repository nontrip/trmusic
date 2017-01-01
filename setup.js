$(document).ready(function(){

  $(window).scroll(function(){
            var scr = $(this).scrollTop();
          if (scr>$(window).height()-$(window).height()/2){
          	$("#1").removeClass('active-slide');
          	$("#2").addClass('active-slide');
          	$("#3").removeClass('active-slide');
          	$("#4").removeClass('active-slide');

          } if (scr<$(window).height()-$(window).height()/2){
          	$("#3").removeClass('active-slide');
          	$('#2').removeClass('active-slide');
          	$('#1').addClass('active-slide');
          	$("#4").removeClass('active-slide');

          } if (scr>$(window).height()*2-$(window).height()/2){
          	$("#1").removeClass('active-slide');
          	$('#2').removeClass('active-slide');
          	$('#3').addClass('active-slide');
          	$("#4").removeClass('active-slide');

          } if (scr>$(window).height()*3-$(window).height()/2){
          	$("#1").removeClass('active-slide');
          	$("#2").removeClass('active-slide');
          	$("#3").removeClass('active-slide');
          	$("#4").addClass('active-slide');

          }
      });

      $("ul li, #menu_heading").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

  function abso(el) {
    $(el).css({
      height: $(window).height()
    });
  }

  $(window).resize(function() {
    abso($('.slide'));
    abso($('#menubar'));
    $('#heading').css('padding-top', $(window).height()/2.4-$('#heading').height()/2)
    $('#description').css('margin-left', $(window).width()/2.5+$('#menubar').width()-$('#description').width()/2)
    $('#description').css('margin-top', $(window).height()/2-$('#slide3_heading').height()-$('#description').height()/1.5)
  });

    abso($('.slide'));
    abso($('#menubar'));
    $('#heading').css('padding-top', $(window).height()/2.4-$('#heading').height()/2);
    $('#heading').css('margin-left', $(window).width()/2+$('#menubar').width()-$('#heading').width()/2);
    $('#description').css('margin-left', $(window).width()/2.5+$('#menubar').width()-$('#description').width()/2);
    $('#description').css('margin-top', $(window).height()/2-$('#slide3_heading').height()-$('#description').height()/1.5);

  $("ol").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

});
