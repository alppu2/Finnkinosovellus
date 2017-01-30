$(function(){
	// dropdown script
	$(".dropdown-menu li a").click(function(){
		var valittu = $(this).text();
		$(this).parents('.btn-group').find('.dropdown-toggle').html(valittu+' <span class="caret"></span>');
		console.log(valittu);
	});
	
	//datepicker script
	$('#datetimepicker').datetimepicker({
		format: 'DD.MM.YYYY'
	});
	
	//etsi-napin script
	$("#btnSearch").click(function(){
		alert($('#dropTeatteri').text()+", "+$('#datetimepicker').text());
	});
});