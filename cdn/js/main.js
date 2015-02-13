//清除冲突
jQuery.noConflict();

jQuery(function($){

	//对话框模块
	//------------------------------------------
		//开启对话框
		function loadDialog(seletor){
			var ele = $(seletor);
			ele.show();
			$('#dialog-content').html('').append(ele);
			$('#dialog,#mask').show();
		}

		function loadDialogs(string){
			$('#dialog-content').html('').append(string);
			$('#dialog,#mask').show();
		}

		//关闭对话框
		$('#dialog-close').on('click', function() {
			$('#dialog,#mask').hide();
		});

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
				if ($('#dialog-important').html().length > 2) {
					$('#dialog-content').html('').append($('#dialog-important'));
					$('#dialog-important').show();
					$('#dialog,#mask').show();
				}
			}
	
	//Sidebar
	//------------------------------------------
		if($('.macro').length!=0){
			fixSidebar('.sidebar-wrap',96,96,100);
		}
		if($('.zTD').length!=0){
			fixSidebar('.sidebar-wrap',96,96,250);
		}

	//下载模块
	//------------------------------------------
		if($('#mod-down').length!=0){

			//下载地址写入
			$('.down_url').each(function(i,item){
				var url_data = $(this).text().trim();
				if(url_data == ''){
				//地址未填
					$('.down').eq(i).attr('href',0);
				}else if( url_data.indexOf('回复可见') != -1){
				//需回复可见
					$('.down').eq(i).attr('href',1);
				}else{
				//正常下载地址
					$('.down').eq(i).attr('href',url_data);
				}
			})

			//下载事件绑定
			$('.down').click(function(e){
				var url = $(this).attr('href');
				if(url==0){
					e.preventDefault();
					loadDialogs('抱歉，作者太懒了，没有填写此条快速下载地址！请在文中寻找。^^');
				}else if(url==1){
					e.preventDefault();
					loadDialog('#dialog-vip')
				}else{
					//打开方式
					var url_to = $(this).is('a[href^="http://www.jx3pve.com"]');
					if(url_to){
						//站内地址
						$(this).attr('target','_self');
					}
				}
			})
		}

	//宏库单页
	//------------------------------------------
		if($('.macro-ct').length!=0){

			//宏语法高亮
			var data_simple = $('#macro-ct1').text().trim();
			if(data_simple.indexOf('回复可见') == -1){
				new Sytax("#macro-ct1",data_simple);
			}
			var data_full = $('#macro-ct2').text().trim();
			if(data_full.indexOf('回复可见') == -1){
				new Sytax("#macro-ct2",data_full);
			}
			
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

			//显示查看次数
			$('.macro-views').show();
		}
	
	//用户中心
	//------------------------------------------
		if($('#nv_home').length !=0){
		
			$('#user-nav h3').click(function(event) {
				$(this).next('ul').slideToggle();
			});

			$('.user-os-profile .verf a').each(function(i,item){
				if( $(this).children('img').length == 0){
					$(this).remove();
				}
			})

			var user_email_status = $('#user-email-status').text().trim().indexOf('已验证') != -1;
			if(user_email_status){
				$('.user-os-profile .usermail').addClass('validate');
				$('#user-email-status a').css('color','green');
			}else{
				$('.user-os-profile .usermail').addClass('novalidate');
				$('#user-email-status a').css('color','#FF7D00');
				$('#user-email-status').wrap('<a href="http://www.jx3pve.com/home.php?mod=spacecp&ac=profile&op=password"></a>');
			}

		}

	//副本团队招募
	//------------------------------------------
		$('#raid-sp').on('click',function(e){
			var raid_url = $(this).attr('href');
			if(raid_url == '' || raid_url.indexOf('http')==-1){
				e.preventDefault();
				loadDialogs('该团队未创建团队专栏');
			}
		})

		$('#fam-primary a').on('click',function(e){
			var fam_url = $(this).attr('href');
			if(fam_url == '' || fam_url.indexOf('http')==-1){
				e.preventDefault();
				loadDialogs('作者遗忘填写或未创建');
			}
		})

	//反馈帮助
	//------------------------------------------
		if($('.faq-primary').length != 0){
			$('#postsubmit span').text('提交');
		}
		if($('.pg_faq').length !=0){
			$('.umh').first().addClass('umn');
			$('.um').first().css('display','none');
		}

	//视频
	//------------------------------------------
		if($('.video').length != 0){
			var video_cat = getRequest('fcid');
			//console.log(video_cat);
			switch(video_cat){
				case '1':
					$('.video .nav li').eq(0).removeClass('on');
					$('.video .nav li').eq(1).addClass('on');
					break;
				case '3':
					$('.video .nav li').eq(0).removeClass('on');
					$('.video .nav li').eq(2).addClass('on');
					break;
				case '2':
					$('.video .nav li').eq(0).removeClass('on');
					$('.video .nav li').eq(3).addClass('on');
					break;
				case '7':
					$('.video .nav li').eq(0).removeClass('on');
					$('.video .nav li').eq(4).addClass('on');
					break;
				default:
					$('.video .nav li').eq(0).removeClass('on');
					$('.video .nav li').eq(0).addClass('on');
			}
			var video_page = getRequest('mod');
			//console.log(video_page);
			if(video_page == 'p'){
				$('.video .nav li').eq(0).removeClass('on');
				$('.video .nav li').eq(6).addClass('on');
			}
		}
	
	//BBS
	//------------------------------------------
		//第一篇文章的padding-top，预留快速回复
		//$('#postlist').children('div').eq(0).find('.t_fsz').find('.t_f').css('padding-top', '80px');
		//加载文档后提示
		$('#vfastpostform').find('.fullvfastpost').addClass('tipsforfastpost');
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