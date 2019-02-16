$( document ).ready(function() {
    // Adding active class to Example Menu items
    $('.usageExamples ul li').click(function(){
      $('.usageExamples ul li').removeClass('active');
      $(this).addClass('active');
    });


    // Changing image depending on li actived
    $('.weddingLink').click(function(){
      $('.imgExample img').attr('src', 'img/boda_pajarita.jpeg');
    });

    $('.carWalkLink').click(function(){
      $('.imgExample img').attr('src', 'img/coche.jpeg');
    });

    $('.snowLink').click(function(){
      $('.imgExample img').attr('src', 'img/lady_scarf02.jpeg');
    });

    $('.kidLink').click(function(){
      $('.imgExample img').attr('src', 'img/chiquillo_pajarita.jpeg');
    });

    // Handling Menu
    $('.menu-button').click(function(){
      $('.menu').css('left', '0');
      $('.menu-button').css('right', '-200px');
      $('.menu-corbata').css('top', '20px');
    });

    $('.menu-corbata').click(function(){
      $('.menu').css('left', '-100vw');
      $('.menu-button').css('right', '-0');
      $('.menu-corbata').css('top', '-200px');
    });

    $('.menu ul li a').click(function(){
      $('.menu').css('left', '-100vw');
      $('.menu-button').css('right', '-0');
      $('.menu-corbata').css('top', '-200px');
    });

    // Responsive usage section
    $('#usage-examples').click(function(){
      var value = $('#usage-examples option:selected').val();
      if(value === 'weddingLink') {
        $('.imgExample img').attr('src', 'img/boda_pajarita.jpeg');
      } else if (value === 'kidLink') {
        $('.imgExample img').attr('src', 'img/chiquillo_pajarita.jpeg');
      } else if (value === 'snowLink') {
        $('.imgExample img').attr('src', 'img/lady_scarf02.jpeg');
      } else {
        $('.imgExample img').attr('src', 'img/coche.jpeg');
      }
    });

    // Handling responsive instructions picture
    if ($(window).width() < 1024) {
      $('.instructionsKnots img').attr('src', 'img/instrucciones_mediano_nopubli.jpg');
    } else if ($(window).width() < 768) {
      $('.instructionsKnots img').attr('src', 'img/instrucciones-peque_nopubli.jpg');
    } else {
      $('.instructionsKnots img').attr('src', 'img/instrucciones_grande_nopubli.jpg');
    }
    $(window).resize(function(){
      if($(window).width() < 1024) {
        $('.instructionsKnots img').attr('src', 'img/instrucciones_mediano_nopubli.jpg');
      } else if ($(window).width() < 768) {
        $('.instructionsKnots img').attr('src', 'img/instrucciones-peque_nopubli.jpg');
      } else {
        $('.instructionsKnots img').attr('src', 'img/instrucciones_grande_nopubli.jpg');
      }
    });
});
