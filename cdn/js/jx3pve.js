/*
 * Some Function
 ------------------------------------------------------*/
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


/*
* Menu v0.1
* $wrap > li > ul > li
* https://github.com/iRuxu
* update 2015.1.16
------------------------------------------------------*/
	//arg : delay time
	(function($) {
		$.fn.extend({
			'menu': function(delay) {
				var wrap = this;
				if (delay == undefined) delay = 0;
				wrap.children('li').hover(
					function() {
						var self = $(this);
						var mousein = setTimeout(function() {
							wrap.find('ul').hide();
							self.children('ul').slideDown();
							mousein = null;
						}, delay);
					}, function() {
						var self = $(this);
						var mouseout = setTimeout(function() {
							self.children('ul').slideUp();
							mouseout = null;
						}, delay);
					});
				return this;
			}
		})
	})(jQuery);
/*
* Current Animation v0.1
* https://github.com/iRuxu
* update 2015.1.16
------------------------------------------------------*/
	//arg==null -> self
	//arg!=null -> self + childrenselector[just children]
	(function($) {
		$.fn.extend({
			'cur': function(childrenselector) {
				if (childrenselector == undefined) {
					this.hover(
						function() {
							$(this).addClass('cur');
						}, function() {
							$(this).removeClass('cur');
						});
				} else {
					this.hover(
						function() {
							$(this).addClass('cur').children(childrenselector).addClass('cur');
						}, function() {
							$(this).removeClass('cur').children(childrenselector).removeClass('cur');
						});
				}
				return this;
			}
		})
	})(jQuery);
/*
* fixSidebar v0.3
* fix the sidebar when window scroll
* https://github.com/iRuxu
* update 2015.2.1
------------------------------------------------------*/
	//args:
	//selector: #target 
	//top + bottom: margin to window for fix header or footer
	//triggerScroll : while scroll distance bigger than this and trigger the fix state
	(function($){ 
		//定义
		function fixSidebar(selector,top,bottom,triggerScroll){

			//无参数时返回空
			if(selector==undefined){return;}

			//传入元素不正确时
			if($(selector).length==0){return;}

			//参数定义检测
			if(top==undefined){top=0;}
			if(bottom==undefined){bottom=0;}
			if(triggerScroll==undefined){triggerScroll=20;}

			//获取相关尺寸与滚动发生距离
			$(window).scroll(function(){

				//获取尺寸
				var scrollHeight = $(window).scrollTop(),
					screenHeight = $(window).height(),
					sidebarHeight = $(selector).height(),
					ct_Height = screenHeight - top - bottom;

				//水平坐标
				function getLeft(selector){ 
					var offset=selector.offsetLeft; 
					if(selector.offsetParent!=null) offset+=getLeft(selector.offsetParent); 
					return offset; 
				}
				var side_margin = getLeft($(selector)[0]);
				var top_margin = 0;
				//垂直坐标
				if(sidebarHeight<ct_Height){
					top_margin = top;
					if(scrollHeight>triggerScroll){
						$(selector).css({
							'position':'fixed',
							'top':top_margin,
							'left':side_margin
						});
					}else{
						$(selector).css({
							'position':'static'
						});
					}
				}else{
					top_margin = -(sidebarHeight-screenHeight+bottom);
					if(scrollHeight+screenHeight>sidebarHeight && scrollHeight>triggerScroll){
						$(selector).css({
							'position':'fixed',
							'top':top_margin,
							'left':side_margin
						});
						console.log(scrollHeight);
						console.log(screenHeight);
						console.log(sidebarHeight);
					}else{
						$(selector).css({
							'position':'static'
						});
					}
				}
			});
		}
		//触发事件
		window.onload = function(){
			$(window).trigger('scroll');
		}
		$(window).resize(function(){
			$(window).trigger('scroll');
		})

		window.fixSidebar = fixSidebar;

	})(jQuery);


