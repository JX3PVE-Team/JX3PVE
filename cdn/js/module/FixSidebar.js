/*
* FixSidebar v0.1
* fix the sidebar when window scroll
* https://github.com/iRuxu
* update 2015.1.15
*/

//args:
//sidebar name: #target 
//[top value] : 100(top-margin-window)
function FixSidebar(sidebar,top){

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
		var side_num = getLeft($(sidebar)[0]);

		//垂直坐标
		var top_margin=0;
		if(sidebarHeight<screenHeight){
			if(top == undefined){
				top = 0;
			}else{
				top_margin = top;
			}
		}else{
			top_margin = -(sidebarHeight-screenHeight);
		}

		//绑定事件
		if(scrollHeight+screenHeight>sidebarHeight){
			$(sidebar).css({
				'position':'fixed',
				'top':top_margin,
				'left':side_num
			});
		}else{
			$(sidebar).css({
				'position':'static'
			});
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

