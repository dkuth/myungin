$(function(){
  $('.visual-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear'
  })
  $('.visual-slider2').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear'
  })
  $('.visual-slider3').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear'
  })
  $('.about-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear'
  })
   $('.product-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 999,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 641,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});
$(function(){
  $('.gototop').click(function(e){
    $.scrollTo(this.hash || 0, 900)
  })

  /* Change CSS with Scroll */
  $(window).scroll(function(){
    if($(window).scrollTop() > 50) {
      $('.gototop').addClass('active')
    }
    else {$('.gototop').removeClass('active')
    }
  })
});

function selectURL(){
  var url=document.form1.addr.options[form1.addr.selectedIndex].value;
  //location.href=url;
  window.open(url);	  
 }