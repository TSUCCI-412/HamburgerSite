$(function() {
  $(".p-gnav__list").hide();
  $(".c-toggle").on("click",function(){//メニューボタンをクリックしたとき
    $(".p-gnav__list").toggle(300);//0.3秒で表示したり非表示にしたりする
    $(".c-toggle--line").toggleClass("active");
 

});
    
  
     console.log ("成功");
  });

  

  




