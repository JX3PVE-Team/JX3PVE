<?php
/**
 * The template for displaying Tag pages
 *
 * Used to display archive-type pages for posts in a tag.
 *
 * @link http://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */

get_header(); ?>
<div id="main" class="yz-main">
	<section id="primary" class="site-content">
		<div id="content" class="macro-list"role="main">

		<?php if ( have_posts() ) : ?>
				<h1 class="archive-title"><?php printf( __( 'About: %s' ), '<span>' . single_tag_title( '', false ) . '</span>' ); ?></h1>

            <ul>
			<?php /* Start the Loop */ ?>
			<?php while ( have_posts() ) : the_post(); ?>
				<a href="<?php the_permalink(); ?>" rel="bookmark"><li><?php the_title(); ?></li></a>
			<?php endwhile; ?>
            </ul>
			<div id="macro-list-page"><?php wp_pagenavi(); ?></div>

		<?php endif; ?>

		</div><!-- #content -->
	</section><!-- #primary -->
</div>
<?php get_footer(); ?>