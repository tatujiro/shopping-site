$(document).ready(function(){
  $(".owl-carousel").owlCarousel(
       {
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            autoplay: true
        }
      );
  $("#menu").click(function(){
    $(".sp_menu_toggle").slideToggle();
  });
});

$(window).load(function(){
$(".products_box img").click(function(){
    var img_src = $(this).attr("src");
    $(".products_image img").attr("src", img_src);
  });
});