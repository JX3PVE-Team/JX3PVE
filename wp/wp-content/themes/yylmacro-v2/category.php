<?php
/**
 * The template for displaying Category pages
 *
 * Used to display archive-type pages for posts in a category.
 *
 * @link http://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */

get_header(); ?>
<!--
<div id="pt" class="bm cl">
<div class="z"><a href="http://www.jx3pve.com" class="nvhm" title="首页">剑网3PVE官方站</a><em>»</em><a href="http://www.jx3pve.com/cloud">云端宏</a></div><div class="clear"></div>
</div> -->
<div id="main" class="souhong">

	<div id="primary">
		<div id="content" class="cat-macro-list" role="main">

			<div id="mihong-content1" role="main">
			<div class="macrolist-top"><script type="text/javascript" src="http://www.jx3pve.com/api.php?mod=js&bid=685"></script></div>
			
				<div class="somacro-1">
				<h1 class="cat-macro-title">
					<?php printf( __( '%s'), '' . single_cat_title( '', false ) . '' ); ?>
				</h1>
			</div>
           
				<div class="macronav">
						<!--分类引导-->
				<div id="mihong-cat">
					<ul id="catmenpai-ingame">
						<li id="smcat-bx"><a href="<?php bloginfo('url'); ?>/cloud/category/qixiu" title="" class="button bx serif skew glossy" data-icon="☂">七秀</a></li>
						<li id="smcat-qc"><a href="<?php bloginfo('url'); ?>/cloud/category/qichun" title="" class="button qc serif skew glossy" data-icon="☯">气纯</a></li>	
						<li id="smcat-dj"><a href="<?php bloginfo('url'); ?>/cloud/category/dujing" title="" class="button dj serif skew glossy" data-icon="☣">毒经</a></li>
						<li id="smcat-tl"><a href="<?php bloginfo('url'); ?>/cloud/category/tianluo" title="" class="button tl serif skew glossy" data-icon="✪">天罗</a></li>
						
						<li id="smcat-tc"><a href="<?php bloginfo('url'); ?>/cloud/category/tiance" title="" class="button tc serif skew glossy" data-icon="♬">天策</a></li>	
						<li id="smcat-mz"><a href="<?php bloginfo('url'); ?>/cloud/category/mingjiao" title="" class="button mz serif skew glossy" data-icon="☪">明教</a></li>
						<li id="smcat-hs"><a href="<?php bloginfo('url'); ?>/cloud/category/shaolin" title="" class="button hs serif skew glossy" data-icon="☀">少林</a></li>

						<li id="smcat-hj"><a href="<?php bloginfo('url'); ?>/cloud/category/wanhua" title="" class="button hj serif skew glossy" data-icon="✿">万花</a></li> 
						<li id="smcat-jc"><a href="<?php bloginfo('url'); ?>/cloud/category/jianchun" title="" class="button jc serif skew glossy" data-icon="✝">剑纯</a></li>
						<li id="smcat-bt"><a href="<?php bloginfo('url'); ?>/cloud/category/butian" title="" class="button bt serif skew glossy" data-icon="ஐ">补天</a></li>
						<li id="smcat-jy"><a href="<?php bloginfo('url'); ?>/cloud/category/jingyu" title="" class="button jy serif skew glossy" data-icon="➷">惊羽</a></li>

						<li id="smcat-cj"><a href="<?php bloginfo('url'); ?>/cloud/category/cangjian" title="" class="button cj serif skew glossy" data-icon="♫">藏剑</a></li>
						<li id="smcat-gb"><a href="<?php bloginfo('url'); ?>/cloud/category/gaibang" title="" class="button gb serif skew glossy" data-icon="♨">丐帮</a></li>	
						<li id="smcat-fy"><a href="<?php bloginfo('url'); ?>/cloud/category/tongyong" title="" class="button fy serif skew glossy" data-icon="❤">通用</a></li>
						<div class="clear"></div>
					</ul>		
					<div class="clear"></div>
				</div>
				</div>
		
				<div class="clear"></div>
			</div><!-- #content1 -->
				
			<div id="cat-table">				
					<div class="cat-table">
					 <?php if ( have_posts() ) :?>
					 <div id="cat-macro-list-title">
					   <span class="cat-macro-list-td1" id="cat-cloudid2">云端ID</span>
					   <span class="cat-macro-list-td1" id="cat-time2" style="text-align:center">更新日期</span>
					   <span class="cat-macro-list-td1" id="cat-title2" style="text-align:center">标 题</a></span>
					   <span class="cat-macro-list-td1" id="cat-author2">作 者</span>	
					   <span class="cat-macro-list-td1" id="cat-xunzhang2"><!--勋 章--></span>
					 </div>
				
					   <?php while ( have_posts("orderby=modified","order=DESC") ) : the_post();  ?>
					   <?php  /* Start the Loop */ ?>
						<div id="cat-macro-list-tr">
							<a href="<?php the_permalink(); ?>" rel="bookmark">
								<p>
								   <span class="cat-macro-list-td" id="cat-cloudid"><?php the_ID(); ?></span>   
								   <span class="cat-macro-list-td" id="cat-time">[ <?php the_modified_time('Ymd'); ?> ]</span>		   
								   <span class="cat-macro-list-td" id="cat-title1">&reg; <?php the_title(); ?></span>
								   <span class="cat-macro-list-td" id="cat-author"><?php the_author(); ?></span>	
							   </p>
						   </a>
					   </div>
						<?php endwhile;?>  
					
					</div>
				</div>

		<div id="macro-list-page"><?php wp_pagenavi(); ?></div>
		<?php endif;  ?>
		<div id="macrolist-bottom"><script type="text/javascript" src="http://www.jx3pve.com/api.php?mod=js&bid=684"></script></div>
		</div><!-- #content -->
	</div><!-- #primary -->
</div>
<?php get_footer(); ?>