//清除冲突
jQuery.noConflict();

jQuery(function($) {

	//公共
	//------------------------------------------
	

	//Header
	//------------------------------------------
		//导航fix控制
		$('#nav-folder').click(function() {
			$(this).toggleClass('gray');
			$('#menu').slideToggle();
			$('.box').toggleClass('menufolder');;
		});

		//百度搜索文字隐藏
		$('#bdcs').find('#bdcs-search-form-submit').val('');

		//菜单图标动画
		$('#menu-list li').cur('a');
		$('#menu-list li a').cur('span');

		//判断是否为嵌入头部
			var is_yylheader;
			if($('base').attr('target')=='_blank'){
				is_yylheader = true;
			}else{
				is_yylheader = false;
			}
			//wp系统头部效果
			if(is_yylheader){
				$('.header .nav .app').children('i').remove();
			//dz系统头部效果
			}else{
				//导航滑动效果
				$('#menu-list').menu();
				//警告框
				var mask_layout = $('#dialog-important,#mask');
				if ($('#dialog-content').html().length > 30) {
					mask_layout.css('display', 'block');
				}
				$('#dialog-close').on('click', function() {
					mask_layout.hide();
				});
			}
	
	//Sidebar
	//------------------------------------------
		fixSidebar('.sidebar-wrap', 96);

	//BBS-VIEW
	//------------------------------------------
		//第一篇文章的padding-top，预留快速回复
		$('#postlist').children('div').eq(0).find('.t_fsz').find('.t_f').css('padding-top', '80px');
		//加载文档后提示
		$('#vfastpostform').find('.fullvfastpost').addClass('tipsforfastpost');

	//BBS-LIST
	//------------------------------------------
	//列表间色
	//$('.macro-list tr:odd').addClass('even');

	//ZT
	//------------------------------------------
		//白皮书作者换行
		$(".bps-content .module li a").each(function() {
			var book_name = $(this).html();
			var book_arr = book_name.split('|');
			var book_newname = book_arr.join('<br />');
			$(this).html(book_newname);
		})

		//白皮书折叠展开
		$('.bps-content span .toggle').on('click', function(e) {
			e.preventDefault();
			$(this).parent('span').siblings('h4,div').slideToggle();
		})



})