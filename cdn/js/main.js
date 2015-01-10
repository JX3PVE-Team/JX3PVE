//清除冲突
jQuery.noConflict();

jQuery(function($){

	//导航
	$('#nav-folder').click(function(event) {
		$(this).toggleClass('gray');
		$('#menu').slideToggle().toggleClass('menufolder');;
		if($('#menu').is('.menufolder')){
			$('.box').css('margin-top','38px');
		}else{
			$('.box').css('margin-top','76px');
		}
	});

	//菜单
	$('#menu-list li').hover(
	function() {
		$(this).children('a').addClass('cur').children('span').addClass('cur');
	}, function() {
		$(this).children('a').removeClass('cur').children('span').removeClass('cur');
	});

	//二级菜单
	$('#menu-list').children('li').hover(function() {
		$(this).children('ul').slideDown();
	}, function() {
		$(this).children('ul').slideUp();
	});

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