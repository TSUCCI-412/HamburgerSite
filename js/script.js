$(function() {
  //読み込み時とブラウザサイズを変更した時に処理
    $(window).on('load resize', function(){
  //ウィンドウサイズを取得する
      var w = $(window).width();
  //ウィンドウサイズが1024より小さい場合
      if (window.matchMedia( "(max-width: 1024px)" ).matches) {
  
        $(".c-btn--sp").on("click",function() {
          $(".is-open").toggleClass("active");  
          $('.is-menu').animate({'marginRight':'300px'},400);
          $('.is-fade').toggleClass("cover");
        
        })  
  
        $(".c-toggle--line").on("click",function() {
          $(".is-open").removeClass("active");  
          $('.is-menu').animate({'marginRight':'-300px'},400);
          $('.is-fade').removeClass("cover");
        
        })
  
      } else{ (window.matchMedia( "(min-width: 1025px)" ).matches)
          $(".is-open").removeClass("active"); 
          $('.is-fade').removeClass("cover");
      
      }    
    });
  });
  