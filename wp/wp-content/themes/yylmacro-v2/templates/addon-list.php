<?php
/**
 * Template Name: == 插件导航 ==
 * @www.shadowsky.cn
 */
get_header(); ?>
<div id="pt" class="bm cl">
<div class="z"><a href="http://www.jx3pve.com" class="nvhm" title="首页">剑网3PVE官方站</a><em>»</em><a href="http://www.jx3pve.com/interface">插件站</a></div>
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
<div class="clear"></div>
</div>
<div id="main" class="addonpage">
	<div id="primary">
		<div id="content" class="addon-page" role="main">

        <div id="addon-content" class="addon-content-wp">
			<?php while ( have_posts() ) : the_post(); ?>
			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
		</div>

			<!--插件图标-->	
			<div id="addon-icon"><script type="text/javascript" src="http://www.jx3pve.com/api.php?mod=js&bid=718"></script></div>

			<!--插件描述-->
			<div class="addon-nav-content">
				<div id="addon-qcin"><?php the_content(); ?>
						<ul>
							<li id="addon-qcin-1"><a href="http://www.jx3pve.com/forum.php?mod=viewthread&tid=3308"></a></li>
							<li id="addon-qcin-2"><a href="http://www.jx3pve.com/forum.php?mod=forumdisplay&fid=72"></a></li>
							<li id="addon-qcin-3"><a href="http://www.jx3pve.com/forum.php?mod=viewthread&tid=88"></a></li>
							<li id="addon-qcin-4"><a href="http://www.jx3pve.com/addon/pbaddon/"></a></li>
							<li id="addon-qcin-5"><a href="http://www.jx3pve.com/portal.php?mod=topic&topicid=13"></a></li>
						</ul>
						<div class="clear"></div>
				</div>
				<div id="addon-ac"><span id="fav-heart">♥</span> 精品插件 轻松游戏 <span id="fav-heart">♥</span></div>
			<div id="addon-1" class="addon-list-index"><h2>团队副本</h2><p>Raid & Fam</p><?php the_field('addon-1'); ?><div class="clear"></div></div>
			<div id="addon-2" class="addon-list-index"><h2>战斗辅助</h2><p>Combat</p><?php the_field('addon-2'); ?><div class="clear"></div></div>
			<div id="addon-3" class="addon-list-index"><h2>界面美化</h2><p>Landscaping</p><?php the_field('addon-3'); ?><div class="clear"></div></div>
			<div id="addon-4" class="addon-list-index"><h2>实用工具</h2><p>Other Tools</p><?php the_field('addon-4'); ?><div class="clear"></div></div>
			<div id="addon-5" class="addon-list-index"><h2>配装辅助</h2><p>Professional</p><?php the_field('addon-5'); ?><div class="clear"></div></div>
			<div id="addon-6" class="addon-list-index"><h2>按键辅助</h2><p>Press Tools</p><?php the_field('addon-6'); ?><div class="clear"></div></div>
			<div id="clear"></div>
			</div><!-- .entry-content -->
			</article><!-- #post -->
			<?php endwhile; // end of the loop. ?>
        </div>
        
		</div><!-- #content -->
		
	</div><!-- #primary -->
</div>
<?php get_footer(); ?>