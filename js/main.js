$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    
    $('.bulb img').css({
      'transform' : 'translate(0px, '+ Math.min($('.desktop').offset().top - 110,wScroll) +'%)'
    });
    console.log(wScroll);
/*    if (wScroll > $('.desktop_img img').offset().top - ($(window).height() / 1.2)) {

    $('.bulb img').css({
      'transform' : 'translate(-'+ x +'px, '+ wScroll +'%)'
    });

  }*/
});

$('#map').click(function () {
    $('#map iframe').css("pointer-events", "auto");
});