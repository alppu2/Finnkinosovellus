$(function(){
	$(".dropdown-menu li a").click(function(){
	  var valittu = $(this).text();
	  $(this).parents('.btn-group').find('.dropdown-toggle').html(valittu+' <span class="caret"></span>');
	});

	$("#btnSearch").click(function(){
		alert($('.btn-select').text()+", "+$('.btn-select2').text());
	});
});