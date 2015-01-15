<?php
/**
 * The template for displaying Author Archive pages
 *
 * Used to display archive-type pages for posts by an author.
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

					<h1><?php printf( __( '%s的作品：' ), get_the_author() ); ?></h1>
					<div id="authorsay"><?php the_author_meta( 'description' ); ?></div>

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