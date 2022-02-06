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

  $(document).ready(function() {
    var checkResize;
    $(window).on('load resize', function() {
        clearTimeout( checkResize );
        checkResize = setTimeout( resizing, 100 );
    });
  
    //リサイズ完了時に実行する処理
    function resizing() {
      var w = $(window).width();
  
      //ウィンドウサイズが1023より大きい場合の処理
      if( w > 1023 ) {

        $('.is-open').hasClass('active');
        $('.is-open').removeClass('active');

        $('.is-fade').hasClass('cover');
        $('.is-fade').removeClass('cover');

        $('.is-menu').hasClass('on-menu');
        $('.is-menu').removeClass('on-menu');

        
  
      //ウィンドウサイズが1025以下の場合の処理
      } else {
        console.log('ウィンドウサイズは1025以下です。');
      }
    }
  });

}); //最後のカッコ


