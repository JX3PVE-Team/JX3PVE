<?php
/**
 * Template Name: == 插件单页 ==
 * @www.shadowsky.cn
 */
get_header(); ?>

<div id="pt" class="bm cl">
<div class="z"><a href="http://www.jx3pve.com" class="nvhm" title="首页">剑网3PVE官方站</a><em>»</em><a href="http://www.jx3pve.com/interface">插件站</a></div>
<div class="clear"></div>
</div>
<div id="main" class="addonpage">
	<div id="primary">
		<div id="content" class="addon-page" role="main">

        <div id="addon-content1" class="addon-content-wp">
			<?php while ( have_posts() ) : the_post(); ?>
			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

			<div id="addon-title">
			<!--插件标题-->
			<h1 style="float:left;"><?php the_title(); ?></h1>
					<div>
					<!--分享传播-->
						<div class="bdsharebuttonbox" id="addon-share">
						<a href="#" class="bds_more" data-cmd="more"></a>
						<a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>
						<a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a>
						</div>
						<script>window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"0","bdSize":"16"},"share":{}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];</script>
						<span id="addon_help">
						<?php edit_post_link( __( '【编辑】' ));?>
						<a href="http://www.jx3pve.com/forum.php?mod=viewthread&tid=3308" title="如何安装与使用插件？" target="_blank">安装帮助</a> |
						<a href="http://www.jx3pve.com/interface/help3" title="如何对插件进行设置？" target="_blank">插件入口</a> |
						<a href="http://www.jx3pve.com/interface/help2" title="如何保存对插件的设置？" target="_blank">数据同步</a> |
						<a href="http://www.jx3pve.com/forum.php?mod=forumdisplay&fid=72">插件论坛</a>
						</span>
					</div>
				<div class="clear"></div>
			</div>
			
			<div id="addon-icon"><script type="text/javascript" src="http://www.jx3pve.com/api.php?mod=js&bid=718"></script></div>

			<!--插件标签-->
			<div id="addon-meta">
				<span class="yylmacro-meta">更新日期</span> <?php the_modified_time('Ymd'); ?>
				<span class="yylmacro-meta">插件作者</span> <?php the_field('addon_author'); ?>
				<span class="yylmacro-meta">插件版本</span> <?php the_field('addon_version'); ?>
				<span class="yylmacro-meta">界面入口</span> <?php the_field('addon_ui'); ?>
				<span class="yylmacro-meta">捐助作者</span> <a class="redtips" href="<?php the_field('addon-love'); ?>" target="_blank">点击捐助</a>
				<div id="addon-down"><a href="<?php the_field('addon_down'); ?>" title="加入VIP免费下载·无需回复查看隐藏内容·多项特权·支持我们!"></a></div>
			</div>

			<!--插件描述-->
			<div class="entry-content">
				<div id="addon-content2">
				<?php the_content(); ?>
				</div>

				<!--历史版本-->
				<div id="addon-list">
					<div id="addon-sidebar">
					<script type="text/javascript" src="http://www.jx3pve.com/api.php?mod=js&bid=821"></script>
					<script type="text/javascript" src="http://www.jx3pve.com/api.php?mod=js&bid=719"></script>
					</div>

					<h1>历史版本 &raquo;</h1>
					<?php the_field('addon_list'); ?>
					<div><script type="text/javascript" src="http://www.jx3pve.com/api.php?mod=js&bid=822"></script></div>
				</div>

				<div id="clear"></div>

				<div id="page-comment">
				<!--
					<script type="text/javascript">
						(function(){
						var url = "http://widget.weibo.com/distribution/comments.php?width=0&url=auto&border=1&fontsize=12&skin=2&iframskin=2&dpc=1";
						document.write('<iframe id="WBCommentFrame" src="' + url + '" scrolling="no" frameborder="0" style="width:100%"></iframe>');
						})();
						</script>
						<script src="http://tjs.sjs.sinajs.cn/open/widget/js/widget/comment.js" type="text/javascript" charset="utf-8"></script>
						<script type="text/javascript">
						window.WBComment.init({
							"id": "WBCommentFrame"
						});
						</script>
					-->
				</div>

			</div><!-- .entry-content -->
			</article><!-- #post -->
			<?php endwhile; // end of the loop. ?>
			<div class="clear"></div>
        </div>
        
		</div><!-- #content -->
		
	</div><!-- #primary -->
</div>
<?php get_footer(); ?>