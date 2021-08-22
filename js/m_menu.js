$(function(){
  //모바일메뉴보이기
  $('.btn').click(function(){
    $('.m_menu').slideToggle();
    $(this).hide();
    $('.close').show();
  })
  $('.close').click(function(){
    $(this).hide();
    $('.m_menu').slideToggle();
    $('.btn').show();
  });
	//모바일메뉴 스크립트
  $(".main > li").click(function(){
		$(this).find('.sub').slideToggle();
		$(this).siblings().children('.sub').slideUp();
	return false;
	});
});