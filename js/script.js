$(function() {
  if (window.matchMedia( "(max-width: 1024px)" ).matches) {
  
      $(function() {
        $(".c-toggle").on("click",function() {
          $(".is-open").toggleClass("active");
        //});
      //});  
        if($('.p-gnav').hasClass('is-menu')){　　//横からメニュースライド
          $('.p-gnav').removeClass('is-menu');
          $(".p-gnav").animate({'marginRight':'300px'},300);
        }else{
          $('.p-gnav').addClass('is-menu');
          $(".p-gnav").animate({'marginRight':'0px'},300);
        } 
      })  //.is-open
      })  //.c-toggle
  }  

  if(window.matchMedia( "(min-width: 1025px)" ).matches) {
      $(function() {
        $(".is-open").removeClass("active");
          
        })
    
    }
     
 
  });    //$(function)

