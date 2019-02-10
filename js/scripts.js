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
    });

    $('.menu ul li a').click(function(){
      $('.menu').css('left', '-100vw');
    });
});
