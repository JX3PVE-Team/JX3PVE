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
<div class="box">
	<div class="main souhong">
		<!-- 居中内容wrap -->
		<div class="wp">
		
			<!-- 内容区 -->
			<div class="primary">
					<!--#文章头部-->
					<div class="content1">
						
						<div class="banner souhongtop"><script type="text/javascript" src="http://www.jx3pve.com/api.php?mod=js&bid=685"></script></div>
						
						<div class="somacro-1">
							<h1 >
								<?php printf( __( '%s'), '' . single_cat_title( '', false ) . '' ); ?>
							</h1>
						</div>
		           
						<div class="macronav">
								<!--分类引导-->
							<div class="cat">
								<ul class="ingame">
									<li class="smcat-bx"><a href="<?php bloginfo('url'); ?>/cloud/category/qixiu" title="" class="button bx serif skew glossy" data-icon="☂">七秀</a></li>
									<li class="smcat-qc"><a href="<?php bloginfo('url'); ?>/cloud/category/qichun" title="" class="button qc serif skew glossy" data-icon="☯">气纯</a></li>	
									<li class="smcat-dj"><a href="<?php bloginfo('url'); ?>/cloud/category/dujing" title="" class="button dj serif skew glossy" data-icon="☣">毒经</a></li>
									<li class="smcat-tl"><a href="<?php bloginfo('url'); ?>/cloud/category/tianluo" title="" class="button tl serif skew glossy" data-icon="✪">天罗</a></li>
									
									<li class="smcat-tc"><a href="<?php bloginfo('url'); ?>/cloud/category/tiance" title="" class="button tc serif skew glossy" data-icon="♬">天策</a></li>	
									<li class="smcat-mz"><a href="<?php bloginfo('url'); ?>/cloud/category/mingjiao" title="" class="button mz serif skew glossy" data-icon="☪">明教</a></li>
									<li class="smcat-hs"><a href="<?php bloginfo('url'); ?>/cloud/category/shaolin" title="" class="button hs serif skew glossy" data-icon="☀">少林</a></li>

									<li class="smcat-hj"><a href="<?php bloginfo('url'); ?>/cloud/category/wanhua" title="" class="button hj serif skew glossy" data-icon="✿">万花</a></li> 
									<li class="smcat-jc"><a href="<?php bloginfo('url'); ?>/cloud/category/jianchun" title="" class="button jc serif skew glossy" data-icon="✝">剑纯</a></li>
									<li class="smcat-bt"><a href="<?php bloginfo('url'); ?>/cloud/category/butian" title="" class="button bt serif skew glossy" data-icon="ஐ">补天</a></li>
									<li class="smcat-jy"><a href="<?php bloginfo('url'); ?>/cloud/category/jingyu" title="" class="button jy serif skew glossy" data-icon="➷">惊羽</a></li>

									<li class="smcat-cj"><a href="<?php bloginfo('url'); ?>/cloud/category/cangjian" title="" class="button cj serif skew glossy" data-icon="♫">藏剑</a></li>
									<li class="smcat-gb"><a href="<?php bloginfo('url'); ?>/cloud/category/gaibang" title="" class="button gb serif skew glossy" data-icon="♨">丐帮</a></li>	
									<li class="smcat-fy"><a href="<?php bloginfo('url'); ?>/cloud/category/tongyong" title="" class="button fy serif skew glossy" data-icon="❤">通用</a></li>
								</ul>		
							</div>
						</div>
				
					</div><!-- #content1 -->
						
					<div class="cat-table">				
						<?php if ( have_posts() ) :?>
							<div class="cat-macro-list-title">
								<span class="cat-cloudid2">云端ID</span>
								<span class="cat-time2" style="text-align:center">更新日期</span>
								<span class="cat-title2" style="text-align:center">标 题</span>
								<span class="cat-author2">作 者</span>	
								<span class="cat-xunzhang2"><!--勋 章--></span>
							</div>
						
						<?php while ( have_posts("orderby=modified","order=DESC") ) : the_post();  ?>
						<?php  /* Start the Loop */ ?>
							<div class="cat-macro-list-tr">
								<a href="<?php the_permalink(); ?>" rel="bookmark">
									<p>
										<span class="cat-cloudid"><?php the_ID(); ?></span>   
										<span class="cat-time">[ <?php the_modified_time('Ymd'); ?> ]</span>		   
										<span class="cat-title1">&reg; <?php the_title(); ?></span>
										<span class="cat-author"><?php the_author(); ?></span>	
									</p>
								</a>
							</div>
						<?php endwhile;?>  
					</div>
						<!-- 分页 -->
				<div id="macro-list-page"><?php wp_pagenavi(); ?></div>
					<?php endif; ?>

				<!-- 底部banner -->
				<div class="banner souhongbot"><script type="text/javascript" src="http://www.jx3pve.com/api.php?mod=js&bid=684"></script></div>
			</div><!-- #primary -->

		</div>
	</div>
</div>
<?php get_footer(); ?>