/*
* JX3PVE JS Module
* By iRuxu
*/

/*
* Menu v0.1
* $wrap > li > ul > li
* https://github.com/iRuxu
* update 2015.1.16
------------------------------------------------------*/
	//arg : delay time
	(function($){ 
		$.fn.extend({ 
			'menu':function(delay){
				var wrap = this;
				if(delay == undefined) delay = 0;
				wrap.children('li').hover(
				function() {
					var self = $(this);
					var mousein = setTimeout(function(){
						wrap.find('ul').hide();
						self.children('ul').slideDown();
						mousein = null;
					},delay);
				}, function() {
					var self = $(this);
					var mouseout = setTimeout(function(){
						self.children('ul').slideUp();
						mouseout = null;
					},delay);
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
	(function($){ 
		$.fn.extend({ 
			'cur':function(childrenselector){
				if(childrenselector==undefined){
					this.hover(
					function() {
						$(this).addClass('cur');
					}, function() {
						$(this).removeClass('cur');
					});
				}else{
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
* fixSidebar v0.1
* fix the sidebar when window scroll
* https://github.com/iRuxu
* update 2015.1.15
------------------------------------------------------*/
	//args:
	//sidebar name: #target 
	//[top value] : 100(top-margin-window)
	(function($){ 
		//定义
		function fixSidebar(sidebar,top){
			//获取相关尺寸与滚动发生距离
			$(window).scroll(function(){

				//获取尺寸
				var scrollHeight = $(window).scrollTop(),
					screenHeight = $(window).height(),
					sidebarHeight = $(sidebar).height();

				//水平坐标
				function getLeft(e){ 
					var offset=e.offsetLeft; 
					if(e.offsetParent!=null) offset+=getLeft(e.offsetParent); 
					return offset; 
				}
				var side_margin = getLeft($(sidebar)[0]);
				
				//垂直坐标
				var top_margin=0;
				if(sidebarHeight<screenHeight){
					if(top == undefined){
						top = 0;
					}else{
						top_margin = top;
					}
					if(scrollHeight>1){
						$(sidebar).css({
							'position':'fixed',
							'top':top_margin,
							'left':side_margin
						});
					}else{
						$(sidebar).css({
							'position':'static'
						});
					}
				}else{
					top_margin = -(sidebarHeight-screenHeight);
					if(scrollHeight+screenHeight>sidebarHeight){
						$(sidebar).css({
							'position':'fixed',
							'top':top_margin,
							'left':side_margin
						});
					}else{
						$(sidebar).css({
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


	