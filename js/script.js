$(function() {
  $(".c-toggle").on("click",function(){//メニューボタンをクリックしたとき
    //$(".p-gnav__list").toggle(400);//0.4秒で表示したり非表示にしたりする
    $(".is-open").toggleClass("active"); //Menuと✖の切り替え
    $(".is-fade").toggleClass("cover");
    if($('.p-gnav').hasClass('is-menu')){　　//横からメニュースライド
      $('.p-gnav').removeClass('is-menu');
      $(".p-gnav").animate({'marginRight':'300px'},300).addClass('on-menu');
    }else{
      $('.p-gnav').addClass('is-menu');
      $(".p-gnav").animate({'marginRight':'0px'},300);
    };


   

});
    
  
     console.log ("成功");
  });


  

  

  




