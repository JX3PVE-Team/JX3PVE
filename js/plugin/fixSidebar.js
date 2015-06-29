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
//(function($){ 
require(['jquery-private'], function($) {
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
})
//})(jQuery);

