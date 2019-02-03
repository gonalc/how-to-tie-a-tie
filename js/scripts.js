$( document ).ready(function() {
    // Adding active class to Example Menu items
    $('.usageExamples ul li').click(function(){
      $('.usageExamples ul li').removeClass('active');
      $(this).addClass('active');
    });
});
