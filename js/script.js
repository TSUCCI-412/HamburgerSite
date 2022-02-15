$(function(){

  $('.c-btn--sp').on('click',function(){
    //1024px以下なら
    if (window.matchMedia( "(max-width: 1024px)" ).matches) {
    
      $(".is-open").addClass("active");  
      $('.is-menu').addClass('on-menu');
      $('.is-fade').addClass("cover");

    }
  })

  $(".c-toggle--line").on("click",function() {
    if (window.matchMedia( "(max-width: 1024px)" ).matches) {
   
    $(".is-open").toggleClass("active");  
    $('.is-menu').toggleClass('on-menu');
    $('.is-fade').toggleClass("cover");
    }
  })

  var timer = 0;
 
  window.onresize = function () {
    if (timer > 0) {
      clearTimeout(timer);
    }
 
    timer = setTimeout(function () {
      var w = $(window).width();
            //ここにリサイズした後に実行したい処理を記述
            if( w > 1023 ) {

              $('.is-open').hasClass('active');
              $('.is-open').removeClass('active');
              $('.c-toggle--btn').show;
      
              $('.is-fade').hasClass('cover');
              $('.is-fade').removeClass('cover');
      
              $('.is-menu').hasClass('on-menu');
              $('.is-menu').removeClass('on-menu');
            }

            else if( w < 1025) {

              $('.is-open').hasClass('active');
              $('.is-open').removeClass('active');
              $('.c-btn--sp').show;

              $('.is-fade').hasClass('cover');
              $('.is-fade').removeClass('cover');

              $('.is-menu').hasClass('on-menu');
              $('.is-menu').removeClass('on-menu');
            }
      
    }, 200);
  };
 
        
}); //最後のカッコ


