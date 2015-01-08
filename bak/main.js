$(function(){
	$(".bps-content .module li a").each(function(){
		var book_name = $(this).html();
		var book_arr = book_name.split('|');
		var book_newname = book_arr.join('<br />');
		$(this).html(book_newname);
	})
})