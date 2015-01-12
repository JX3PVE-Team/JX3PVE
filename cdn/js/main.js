//清除冲突
jQuery.noConflict();

jQuery(function($){


	//Header
	//------------------------------------------
		//导航
		$('#nav-folder').click(function(event) {
			$(this).toggleClass('gray');
			$('#menu').slideToggle().toggleClass('menufolder');;
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

	//BBS-VIEW
	//------------------------------------------
		//第一篇文章的padding-top，预留快速回复
		$('#postlist').children('div').eq(0).find('.t_fsz').find('.t_f').css('padding-top','80px');
		//加载文档后提示
		$('#vfastpostform').find('.fullvfastpost').addClass('tipsforfastpost');


	//BBS-LIST
	//------------------------------------------
		//列表间色
		$('.macro-list tr:odd').addClass('even');


	//ZT
	//------------------------------------------
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

	





})