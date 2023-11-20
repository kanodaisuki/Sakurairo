<?php
 
/**
 * Template Name: 说说模版
 */
 
get_header();
?>
 
<div id="primary" class="content-area">
    <main class="site-main" role="main">
    <?php
        $shuoshuo_per_page = iro_opt('shuoshuo_per_page'); //每页显示的说说数量
        $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
        $args = array(
            'post_type' => 'shuoshuo',
            'post_status' => 'publish',
            'posts_per_page' => $shuoshuo_per_page,
            'paged' => $paged
        );
        $shuoshuo_query = new WP_Query($args);
    ?>
	<div class="entry-content">
		<?php the_content( '', true ); ?>
	</div>			
    <div class="cbp_shuoshuo">
        <?php if ($shuoshuo_query->have_posts()) : ?>
            <ul id="main" class="cbp_tmtimeline">
                <?php while ($shuoshuo_query->have_posts()) : $shuoshuo_query->the_post(); ?>
                    <li id="shuoshuo_post">
                        <div class="shuoshuo-content">
                            <div class="shuoshuo-text">
                                <div class="shuoshuo-title">
                                    <?php the_title('<h2>', '</h2>') ?>
                                </div>
                                <div class="shuoshuo-body">
                                    <p><?php echo strip_tags(get_the_content()) ?></p>
                                </div>
                            </div>
                            <div class="shuoshuo-images">
                                <?php
                                    preg_match_all('/<img[^>]+\/>/i', get_the_content(), $shuoshuo_images);
                                    $shuoshuo_images_count = count($shuoshuo_images[0]);
                                    if (!empty($shuoshuo_images_count)) {
                                        switch($shuoshuo_images_count) {
                                            case 1:
                                                $image_html_list = '<span class="image-full">'.$shuoshuo_images[0][0].'</span>';
                                                break;
                                            case 2:
                                                $image_html_list = '<span class="image-two">'.$shuoshuo_images[0][0].'</span>';
                                                $image_html_list.= '<span class="image-two">'.$shuoshuo_images[0][1].'</span>';
                                                break;
                                            case 3:
                                                $image_html_list = '<span class="image-three">'.$shuoshuo_images[0][0].'</span>';
                                                $image_html_list .= '<span class="image-three">'.$shuoshuo_images[0][1].'</span>';
                                                $image_html_list .= '<span class="image-three">'.$shuoshuo_images[0][2].'</span>';
                                                break;
                                            default :
                                                $image_html_list = '<span class="image-four">'.$shuoshuo_images[0][0].'</span>';
                                                $image_html_list .= '<span class="image-four">'.$shuoshuo_images[0][1].'</span>';
                                                $image_html_list .= '<span class="image-four">'.$shuoshuo_images[0][2].'</span>';
                                                $image_html_list .= '<span class="image-four">'.$shuoshuo_images[0][3].'</span>';
                                                break;
                                        }
                                        
                                    } else {
                                        $image_html_list = '<span class="image-full"><img src="' . DEFAULT_FEATURE_IMAGE() . '"/></span>';       
                                    }
                                    remove_filter( 'the_content', 'wpautop' );
                                    $image_html_list = apply_filters( 'the_content', $image_html_list );
                                    echo $image_html_list;
                                ?>
                            </div>
                        </div>
                        <div class="shuoshuo-meta">
                            <div class="shuoshuo-author-image">
                                <?php echo get_avatar(get_the_author_meta('ID'), 96, '','shuoShuo author img', array()) ?>
                            </div>
                            <div class="shuoshuo-author-name">
                                <?php echo get_the_author_meta( 'display_name' ) ?>
                            </div>
                            <div class="shuoshuo-comment-count">
                                <i class="fa-regular fa-comments"></i> <?php comments_number('0', '1', '%') ?>
                            </div>
                            <div class="shuoshuo-date">
                                <i class="fa-regular fa-clock"></i> <?php the_time('Y-m-d H:i'); ?>
                            </div>
                            <div class="shuoshuo-more">
                                <a href="<?php the_permalink(); ?>">
                                    <i class="fa-solid fa-angles-right fa-beat"></i> <?php _e('View Idea','sakurairo') ?>
                                </a>
                            </div>
                        </div>
                        <div class="shuoshuo-feather">
                            <i class="fa-solid fa-feather fa-flip-horizontal fa-2xl"></i>
                        </div>
                    </li>
                <?php endwhile; ?>
                <?php wp_reset_postdata(); ?>
            </ul>
        <?php else : ?>
            <h3 style="text-align: center;">
                <?php _e('You have not posted a comment yet', 'sakurairo') ?>
            </h3>
            <p style="text-align: center;">
                <?php _e('Go and post your first comment now', 'sakurairo') ?>
            </p>
        <?php endif; ?>
    </div>  
    </main><!-- #main -->
    <?php if (iro_opt('pagenav_style') == 'ajax') { ?>
        <div id="pagination">
            <?php next_posts_link(__('Load More', 'sakurairo'), $shuoshuo_query->max_num_pages); ?>
        </div>
        <div id="add_post">
            <span id="add_post_time" style="visibility: hidden;" title="<?php echo iro_opt('page_auto_load', ''); ?>"></span>
        </div>
    <?php } else { ?>
        <nav class="navigator">
            <?php previous_posts_link('<i class="fa-solid fa-angle-left"></i>') ?>
            <?php next_posts_link('<i class="fa-solid fa-angle-right"></i>', $shuoshuo_query->max_num_pages) ?>
        </nav>
    <?php } ?>
</div>
<?php get_footer(); ?>
