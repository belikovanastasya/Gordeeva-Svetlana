$('.bxslider').bxSlider({
  minSlides: 3,
  maxSlides: 4,
  slideWidth: 250,
  slideMargin: 10
});
$(function() {
		$(".fancybox").fancybox();
	});


$ ('.nav a,.navbar-header a').click(function(e){
e.preventDefault();	
var href=$(this).attr('href'), speed=1200;
$('html, body').animate({ scrollTop: $(href).offset().top-110 }, speed);

});

$(".navbar-collapse a").click(function() {
 
  if (!$(this).hasClass("dropdown-toggle")) {
   
    $(".navbar-collapse").collapse('hide');
  }
});