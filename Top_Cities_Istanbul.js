$( document ).ready(function() {
  $('.slidemenu').hide();
	$("#hamburgermenu").click(function() {
  		$(".slidemenu").toggle("fast");
	});
	
	$("#hamburgermenu").hover(function(){
		$(".hamburgermenu_li").css("background-color", "#B0B0B0");
	}, function(){
		$(".hamburgermenu_li").css("background-color", "white");

	});
});

