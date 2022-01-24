$(function() {
  //読み込み時とブラウザサイズを変更した時に処理
  $(window).on('load resize', function(){
    //ウィンドウサイズを取得する
    var w = $(window).width();
    //ウィンドウサイズが1024より小さい場合
    if (window.matchMedia( "(max-width: 1024px)" ).matches) {

      $(".c-toggle").on("click",function() {
        $(".is-open").toggleClass("active");  
        $('.is-menu').toggleClass('on-menu');
        $('.is-fade').toggleClass("cover");
      
      })  
     //ウィンドウサイズが1025より大きい場合 
    }else{ (window.matchMedia( "(min-width: 1024px)" ).matches) 
      
      $(".c-toggle").on("click",function() {
        $(".is-open").removeClass("active");  
        $('.is-menu').removeClass('on-menu');
      })
    }  
  });
});



