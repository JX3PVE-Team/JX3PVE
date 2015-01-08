//清除冲突
jQuery.noConflict();

jQuery(function($){

	//白皮书作者换行
	$(".bps-content .module li a").each(function(){
		var book_name = $(this).html();
		var book_arr = book_name.split('|');
		var book_newname = book_arr.join('<br />');
		$(this).html(book_newname);
	})

	//白皮书折叠展开
	$('.bps-content span .toggle').on('click',function(e){
		e.preventDefault();
		$(this).parent('span').siblings('h4,div').slideToggle();
	})

	//宏库
	var url = window.location.href;
	var macro_url = url.search('fid=294');
	var macro_cat = url.search('k_type=1');
	if(macro_url!=-1 && macro_cat!=-1){
		$('.star_hd h1 a:first').html('云端宏');
	}
	$('.macro-list tr:odd').addClass('even');





})