//清除冲突
jQuery.noConflict();

jQuery(function($){

	//宏库单页
	//------------------------------------------
		if($('.macro-ct').length!=0){

			//宏语法高亮
			var data_simple= $('#macro-ct1').text().trim();
			new Sytax("#macro-ct1",data_simple);
			var data_full = $('#macro-ct2').text().trim();
			new Sytax("#macro-ct2",data_full);

			//辅助工具
			var macro_tools_link = $('#macro_tools').attr('href');
			if(macro_tools_link==''){
				$('#macro_tools').attr('href','http://www.jx3pve.com/jx3/tools/keypress/');
			}

			//非必填字段为空隐藏
			$('.role-info').each(function(i,item){
				if($(this).children('.content').length!=0){
					var content_length = $(this).children('.content').html().trim();
				}
				if(content_length==''){
					$(this).remove();
				}
			})
		}

	//工具单页
	//------------------------------------------
		if($('.tool-info-primary').length!=0){
			//非必填字段为空隐藏
			$('.tool-info').each(function(i,item){
				if($(this).children('.content').length!=0){
					var content_length = $(this).children('.content').html().trim();
				}
				if(content_length==''){
					$(this).remove();
				}
			})
			//下载地址写入
			$('.down_url').each(function(i,item){
				var url_from = $(this).text();
				//需回复可见
				if( url_from.indexOf('回复可见') !=-1){
					$('.down').eq(i).click(function(e) {
						e.preventDefault();
						alert('本地址需要回复可见');
					});
					return;
				}else{
				//正常下载地址
					$('.down').eq(i).attr('href',url_from);
				}
			})

			//-----修改dialog样式,for vip
			//-----回复后再次点击时弹窗空白bug，提示请刷新

			//打开方式
			$('.down').click(function(){
				var url = $(this).attr('href').trim();
				var url_to = $(this).is('a[href^="http://www.jx3pve.com"]');
				if(url==''){
					//没有下载地址
					$(this).click(function(e){
						e.preventDefault();
						alert('作者未填写此条快速下载地址！');
					})
				}else if(url_to){
					//站内地址
					$(this).attr('target','_self');
				}else{
					//站外地址
					return;
				}
			})
		}
	

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
		//$('#postlist').children('div').eq(0).find('.t_fsz').find('.t_f').css('padding-top', '80px');
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