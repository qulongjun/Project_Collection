<template>
    <div class="row_spacer clearfix">
        <div class="hm_filter_wrapper four_blocks project_text_nav boxed_portos has_sapce_portos upper_title">
            <div id="options" class="sort_options clearfix">
                <ul data-option-key="filter" class="option-set clearfix" id="filter-by">
                    <li><a data-option-value="*" class="selected" href="#"><span>全部</span><span class="num"></span></a>
                    </li>
                    <li><a data-option-value=".design" class="" href="#"><span>Design</span><span
                            class="num"></span></a>
                    </li>
                    <li><a data-option-value=".photography" class="" href="#"><span>Photography</span><span
                            class="num"></span></a></li>
                    <li><a data-option-value=".video" class="" href="#"><span>Video</span><span class="num"></span></a>
                    </li>
                    <li><a data-option-value=".printing" class="" href="#"><span>Printing</span><span
                            class="num"></span></a></li>
                    <li><a data-option-value=".wordpress" class="" href="#"><span>Wordpress</span><span
                            class="num"></span></a>
                    </li>
                </ul>
                <div class="sort_list">
                    <a href="#" class="sort_selecter">
                        <span class="text">排序</span>
                        <span class="arrow"><i class="ico-arrow-back"></i></span>
                    </a>
                    <ul data-option-key="sortBy" class="option-set clearfix" id="sort-by">
                        <li><a data-option-value="name" href="#" class=""><span class="text">按名称</span></a></li>
                        <li><a data-option-value="number" href="#" class=""><span class="text">按完成日期</span></a></li>
                        <li><a data-option-value="like_counter" href="#" class=""><span class="text">按访问数</span></a>
                        </li>
                    </ul>
                </div>
                <ul data-option-key="sortAscending" class="option-set clearfix" id="sort-direction">
                    <li><a class="selected" data-option-value="true" href="#">
                        <span><i class="ico-keyboard-arrow-up"></i></span></a>
                    </li>
                    <li><a data-option-value="false" href="#" class="">
                        <span><i class="ico-keyboard-arrow-down"></i></span></a>
                    </li>
                </ul>
            </div>

            <div class="hm_filter_wrapper_con">
                <div class="filter_item_block video">
                    <div class="porto_block">
                        <div class="porto_type">
                            <a data-rel="magnific-popup" href="http://cdn.qulongjun.cn/default_cover.jpg">
                                <img src="../images/portfolio/porto1.jpg" alt="Portfolio Name">
                            </a>
                            <div class="porto_nav">
                                <a href="#" class="icon_expand"><span><i class="ico-maximize"></i></span></a>
                                <a href="#" class="icon_expand"><span><i class="ico-open"></i></span></a>
                                <a href="#" class="icon_expand"><span><i class="ico-link2"></i></span></a>
                            </div>
                        </div>
                        <div class="porto_desc">
                            <h6 class="name">Flat Logo Design</h6>
                            <div class="porto_meta clearfix">
                                <span class="porto_date"><span class="number">20141213</span>2014/12/13</span>
                                <span class="porto_nums">
							<span class="comm"><i class="ico-comments"></i><span class="comm_counter">45</span></span>
							<span class="like"><i class="ico-heart2"></i><span class="like_counter">120</span></span>
						    </span>
                            </div>
                        </div>
                    </div>
                </div><!-- Item -->

                <div class="filter_item_block design video printing wordpress">
                    <div class="porto_block">
                        <div class="porto_type">
                            <a data-rel="magnific-popup" href="http://cdn.qulongjun.cn/default_cover.jpg">
                                <img src="../images/portfolio/porto2.jpg" alt="Portfolio Name">
                            </a>
                            <div class="porto_nav">
                                <a href="#" class="icon_expand"><span><i class="ico-maximize"></i></span></a>
                                <a href="#" class="icon_expand"><span><i class="ico-open"></i></span></a>
                                <a href="#" class="icon_expand"><span><i class="ico-link2"></i></span></a>
                            </div>
                        </div>
                        <div class="porto_desc">
                            <h6 class="name">Dawn of Justice</h6>
                            <div class="porto_meta clearfix">
                                <span class="porto_date"><span class="number">20141215</span>2014/12/15</span>
                                <span class="porto_nums">
							<span class="comm"><i class="ico-comments"></i><span class="comm_counter">12</span></span>
							<span class="like"><i class="ico-heart2"></i><span class="like_counter">100</span></span>
						    </span>
                            </div>
                        </div>
                    </div>
                </div><!-- Item -->

                <div class="filter_item_block design wordpress">
                    <div class="porto_block">
                        <div class="porto_type">
                            <a data-rel="magnific-popup" href="http://cdn.qulongjun.cn/default_cover.jpg">
                                <img src="../images/portfolio/porto3.jpg" alt="Portfolio Name">
                            </a>
                            <div class="porto_nav">
                                <a href="#" class="icon_expand"><span><i class="ico-maximize"></i></span></a>
                                <a href="#" class="icon_expand"><span><i class="ico-open"></i></span></a>
                                <a href="#" class="icon_expand"><span><i class="ico-link2"></i></span></a>
                            </div>
                        </div>
                        <div class="porto_desc">
                            <h6 class="name">Fly On the sky</h6>
                            <div class="porto_meta clearfix">
                                <span class="porto_date"><span class="number">20141210</span>2014/12/10</span>
                                <span class="porto_nums">
							<span class="comm"><i class="ico-comments"></i><span class="comm_counter">20</span></span>
							<span class="like"><i class="ico-heart2"></i><span class="like_counter">263</span></span>
						    </span>
                            </div>
                        </div>
                    </div>
                </div><!-- Item -->

                <div class="filter_item_block design photography printing">
                    <div class="porto_block">
                        <div class="porto_type">
                            <a data-rel="magnific-popup" href="http://cdn.qulongjun.cn/default_cover.jpg">
                                <img src="../images/portfolio/porto4.jpg" alt="Portfolio Name">
                            </a>
                            <div class="porto_nav">
                                <a href="#" class="icon_expand"><span><i class="ico-maximize"></i></span></a>
                                <a href="#" class="icon_expand"><span><i class="ico-open"></i></span></a>
                                <a href="#" class="icon_expand"><span><i class="ico-link2"></i></span></a>
                            </div>
                        </div>
                        <div class="porto_desc">
                            <h6 class="name">Need For Speed</h6>
                            <div class="porto_meta clearfix">
                                <span class="porto_date"><span class="number">20141220</span>2014/12/20</span>
                                <span class="porto_nums">
							<span class="comm"><i class="ico-comments"></i><span class="comm_counter">32</span></span>
							<span class="like"><i class="ico-heart2"></i><span class="like_counter">520</span></span>
						    </span>
                            </div>
                        </div>
                    </div>
                </div><!-- Item -->

                <div class="filter_item_block design wordpress photography printing">
                    <div class="porto_block">
                        <div class="porto_type">
                            <a data-rel="magnific-popup" href="http://cdn.qulongjun.cn/default_cover.jpg">
                                <img src="../images/portfolio/porto6.jpg" alt="Portfolio Name">
                            </a>
                            <div class="porto_nav">
                                <a href="#" class="icon_expand"><span><i class="ico-maximize"></i></span></a>
                                <a href="#" class="icon_expand"><span><i class="ico-open"></i></span></a>
                                <a href="#" class="icon_expand"><span><i class="ico-link2"></i></span></a>
                            </div>
                        </div>
                        <div class="porto_desc">
                            <h6 class="name">Star Lord</h6>
                            <div class="porto_meta clearfix">
                                <span class="porto_date"><span class="number">20141110</span>2014/11/10</span>
                                <span class="porto_nums">
							<span class="comm"><i class="ico-comments"></i><span class="comm_counter">23</span></span>
							<span class="like"><i class="ico-heart2"></i><span class="like_counter">256</span></span>
						    </span>
                            </div>
                        </div>
                    </div>
                </div><!-- Item -->

                <div class="filter_item_block design wordpress photography">
                    <div class="porto_block">
                        <div class="porto_type">
                            <a data-rel="magnific-popup" href="http://cdn.qulongjun.cn/default_cover.jpg">
                                <img src="../images/portfolio/porto7.jpg" alt="Portfolio Name">
                            </a>
                            <div class="porto_nav">
                                <a href="#" class="icon_expand"><span><i class="ico-maximize"></i></span></a>
                                <a href="#" class="icon_expand"><span><i class="ico-open"></i></span></a>
                                <a href="#" class="icon_expand"><span><i class="ico-link2"></i></span></a>
                            </div>
                        </div>
                        <div class="porto_desc">
                            <h6 class="name">Into the light</h6>
                            <div class="porto_meta clearfix">
                                <span class="porto_date"><span class="number">20141011</span>2014/10/11</span>
                                <span class="porto_nums">
							<span class="comm"><i class="ico-comments"></i><span class="comm_counter">125</span></span>
							<span class="like"><i class="ico-heart2"></i><span class="like_counter">766</span></span>
						    </span>
                            </div>
                        </div>
                    </div>
                </div><!-- Item -->

                <div class="filter_item_block design wordpress printing">
                    <div class="porto_block">
                        <div class="porto_type">
                            <a data-rel="magnific-popup" href="http://cdn.qulongjun.cn/default_cover.jpg">
                                <img src="../images/portfolio/porto8.jpg" alt="Portfolio Name">
                            </a>
                            <div class="porto_nav">
                                <a href="#" class="icon_expand"><span><i class="ico-maximize"></i></span></a>
                                <a href="#" class="icon_expand"><span><i class="ico-open"></i></span></a>
                                <a href="#" class="icon_expand"><span><i class="ico-link2"></i></span></a>
                            </div>
                        </div>
                        <div class="porto_desc">
                            <h6 class="name">Dont be Shy</h6>
                            <div class="porto_meta clearfix">
                                <span class="porto_date"><span class="number">20141015</span>2014/10/15</span>
                                <span class="porto_nums">
							<span class="comm"><i class="ico-comments"></i><span class="comm_counter">221</span></span>
							<span class="like"><i class="ico-heart2"></i><span class="like_counter">345</span></span>
						    </span>
                            </div>
                        </div>
                    </div>
                </div><!-- Item -->

                <div class="filter_item_block design wordpress printing">
                    <div class="porto_block">
                        <div class="porto_type">
                            <a data-rel="magnific-popup" href="http://cdn.qulongjun.cn/default_cover.jpg">
                                <img src="../images/portfolio/porto8.jpg" alt="Portfolio Name">
                            </a>
                            <div class="porto_nav">
                                <a href="#" class="icon_expand"><span><i class="ico-maximize"></i></span></a>
                                <a href="#" class="icon_expand"><span><i class="ico-open"></i></span></a>
                                <a href="#" class="icon_expand"><span><i class="ico-link2"></i></span></a>
                            </div>
                        </div>
                        <div class="porto_desc">
                            <h6 class="name">Dont be Shy</h6>
                            <div class="porto_meta clearfix">
                                <span class="porto_date"><span class="number">20141015</span>2014/10/15</span>
                                <span class="porto_nums">
							<span class="comm"><i class="ico-comments"></i><span class="comm_counter">221</span></span>
							<span class="like"><i class="ico-heart2"></i><span class="like_counter">345</span></span>
						    </span>
                            </div>
                        </div>
                    </div>
                </div><!-- Item -->

                <div class="filter_item_block design wordpress printing">
                    <div class="porto_block">
                        <div class="porto_type">
                            <a data-rel="magnific-popup" href="http://cdn.qulongjun.cn/default_cover.jpg">
                                <img src="../images/portfolio/porto8.jpg" alt="Portfolio Name">
                            </a>
                            <div class="porto_nav">
                                <a href="#" class="icon_expand"><span><i class="ico-maximize"></i></span></a>
                                <a href="#" class="icon_expand"><span><i class="ico-open"></i></span></a>
                                <a href="#" class="icon_expand"><span><i class="ico-link2"></i></span></a>
                            </div>
                        </div>
                        <div class="porto_desc">
                            <h6 class="name">Dont be Shy</h6>
                            <div class="porto_meta clearfix">
                                <span class="porto_date"><span class="number">20141015</span>2014/10/15</span>
                                <span class="porto_nums">
							<span class="comm"><i class="ico-comments"></i><span class="comm_counter">221</span></span>
							<span class="like"><i class="ico-heart2"></i><span class="like_counter">345</span></span>
						    </span>
                            </div>
                        </div>
                    </div>
                </div><!-- Item -->

                <div class="filter_item_block design wordpress printing">
                    <div class="porto_block">
                        <div class="porto_type">
                            <a data-rel="magnific-popup" href="http://cdn.qulongjun.cn/default_cover.jpg">
                                <img src="../images/portfolio/porto8.jpg" alt="Portfolio Name">
                            </a>
                            <div class="porto_nav">
                                <a href="#" class="icon_expand"><span><i class="ico-maximize"></i></span></a>
                                <a href="#" class="icon_expand"><span><i class="ico-open"></i></span></a>
                                <a href="#" class="icon_expand"><span><i class="ico-link2"></i></span></a>
                            </div>
                        </div>
                        <div class="porto_desc">
                            <h6 class="name">Dont be Shy</h6>
                            <div class="porto_meta clearfix">
                                <span class="porto_date"><span class="number">20141015</span>2014/10/15</span>
                                <span class="porto_nums">
							<span class="comm"><i class="ico-comments"></i><span class="comm_counter">221</span></span>
							<span class="like"><i class="ico-heart2"></i><span class="like_counter">345</span></span>
						    </span>
                            </div>
                        </div>
                    </div>
                </div><!-- Item -->

                <div class="filter_item_block design wordpress printing">
                    <div class="porto_block">
                        <div class="porto_type">
                            <a data-rel="magnific-popup" href="http://cdn.qulongjun.cn/default_cover.jpg">
                                <img src="../images/portfolio/porto8.jpg" alt="Portfolio Name">
                            </a>
                            <div class="porto_nav">
                                <a href="#" class="icon_expand"><span><i class="ico-maximize"></i></span></a>
                                <a href="#" class="icon_expand"><span><i class="ico-open"></i></span></a>
                                <a href="#" class="icon_expand"><span><i class="ico-link2"></i></span></a>
                            </div>
                        </div>
                        <div class="porto_desc">
                            <h6 class="name">Dont be Shy</h6>
                            <div class="porto_meta clearfix">
                                <span class="porto_date"><span class="number">20141015</span>2014/10/15</span>
                                <span class="porto_nums">
							<span class="comm"><i class="ico-comments"></i><span class="comm_counter">221</span></span>
							<span class="like"><i class="ico-heart2"></i><span class="like_counter">345</span></span>
						    </span>
                            </div>
                        </div>
                    </div>
                </div><!-- Item -->

                <div class="filter_item_block design wordpress printing">
                    <div class="porto_block">
                        <div class="porto_type">
                            <a data-rel="magnific-popup" href="http://cdn.qulongjun.cn/default_cover.jpg">
                                <img src="../images/portfolio/porto8.jpg" alt="Portfolio Name">
                            </a>
                            <div class="porto_nav">
                                <a href="#" class="icon_expand"><span><i class="ico-maximize"></i></span></a>
                                <a href="#" class="icon_expand"><span><i class="ico-open"></i></span></a>
                                <a href="#" class="icon_expand"><span><i class="ico-link2"></i></span></a>
                            </div>
                        </div>
                        <div class="porto_desc">
                            <h6 class="name">Dont be Shy</h6>
                            <div class="porto_meta clearfix">
                                <span class="porto_date"><span class="number">20141015</span>2014/10/15</span>
                                <span class="porto_nums">
							<span class="comm"><i class="ico-comments"></i><span class="comm_counter">221</span></span>
							<span class="like"><i class="ico-heart2"></i><span class="like_counter">345</span></span>
						    </span>
                            </div>
                        </div>
                    </div>
                </div><!-- Item -->

                <div class="filter_item_block design wordpress printing">
                    <div class="porto_block">
                        <div class="porto_type">
                            <a data-rel="magnific-popup" href="http://cdn.qulongjun.cn/default_cover.jpg">
                                <img src="../images/portfolio/porto8.jpg" alt="Portfolio Name">
                            </a>
                            <div class="porto_nav">
                                <a href="#" class="icon_expand"><span><i class="ico-maximize"></i></span></a>
                                <a href="#" class="icon_expand"><span><i class="ico-open"></i></span></a>
                                <a href="#" class="icon_expand"><span><i class="ico-link2"></i></span></a>
                            </div>
                        </div>
                        <div class="porto_desc">
                            <h6 class="name">Dont be Shy</h6>
                            <div class="porto_meta clearfix">
                                <span class="porto_date"><span class="number">20141015</span>2014/10/15</span>
                                <span class="porto_nums">
							<span class="comm"><i class="ico-comments"></i><span class="comm_counter">221</span></span>
							<span class="like"><i class="ico-heart2"></i><span class="like_counter">345</span></span>
						    </span>
                            </div>
                        </div>
                    </div>
                </div><!-- Item -->

                <div class="filter_item_block design wordpress printing">
                    <div class="porto_block">
                        <div class="porto_type">
                            <a data-rel="magnific-popup" href="http://cdn.qulongjun.cn/default_cover.jpg">
                                <img src="../images/portfolio/porto8.jpg" alt="Portfolio Name">
                            </a>
                            <div class="porto_nav">
                                <a href="#" class="icon_expand"><span><i class="ico-maximize"></i></span></a>
                                <a href="#" class="icon_expand"><span><i class="ico-open"></i></span></a>
                                <a href="#" class="icon_expand"><span><i class="ico-link2"></i></span></a>
                            </div>
                        </div>
                        <div class="porto_desc">
                            <h6 class="name">Dont be Shy</h6>
                            <div class="porto_meta clearfix">
                                <span class="porto_date"><span class="number">20141015</span>2014/10/15</span>
                                <span class="porto_nums">
							<span class="comm"><i class="ico-comments"></i><span class="comm_counter">221</span></span>
							<span class="like"><i class="ico-heart2"></i><span class="like_counter">345</span></span>
						    </span>
                            </div>
                        </div>
                    </div>
                </div><!-- Item -->

                <div class="filter_item_block design wordpress printing">
                    <div class="porto_block">
                        <div class="porto_type">
                            <a data-rel="magnific-popup" href="http://cdn.qulongjun.cn/default_cover.jpg">
                                <img src="../images/portfolio/porto8.jpg" alt="Portfolio Name">
                            </a>
                            <div class="porto_nav">
                                <a href="#" class="icon_expand"><span><i class="ico-maximize"></i></span></a>
                                <a href="#" class="icon_expand"><span><i class="ico-open"></i></span></a>
                                <a href="#" class="icon_expand"><span><i class="ico-link2"></i></span></a>
                            </div>
                        </div>
                        <div class="porto_desc">
                            <h6 class="name">Dont be Shy</h6>
                            <div class="porto_meta clearfix">
                                <span class="porto_date"><span class="number">20141015</span>2014/10/15</span>
                                <span class="porto_nums">
							<span class="comm"><i class="ico-comments"></i><span class="comm_counter">221</span></span>
							<span class="like"><i class="ico-heart2"></i><span class="like_counter">345</span></span>
						    </span>
                            </div>
                        </div>
                    </div>
                </div><!-- Item -->

                <div class="filter_item_block design wordpress printing">
                    <div class="porto_block">
                        <div class="porto_type">
                            <a data-rel="magnific-popup" href="http://cdn.qulongjun.cn/default_cover.jpg">
                                <img src="../images/portfolio/porto8.jpg" alt="Portfolio Name">
                            </a>
                            <div class="porto_nav">
                                <a href="#" class="icon_expand"><span><i class="ico-maximize"></i></span></a>
                                <a href="#" class="icon_expand"><span><i class="ico-open"></i></span></a>
                                <a href="#" class="icon_expand"><span><i class="ico-link2"></i></span></a>
                            </div>
                        </div>
                        <div class="porto_desc">
                            <h6 class="name">Dont be Shy</h6>
                            <div class="porto_meta clearfix">
                                <span class="porto_date"><span class="number">20141015</span>2014/10/15</span>
                                <span class="porto_nums">
							<span class="comm"><i class="ico-comments"></i><span class="comm_counter">221</span></span>
							<span class="like"><i class="ico-heart2"></i><span class="like_counter">345</span></span>
						    </span>
                            </div>
                        </div>
                    </div>
                </div><!-- Item -->

            </div>
        </div>
        <!-- End Filter Content -->
    </div>
</template>
<script type="es6">
    import {getScreenWidth} from '../script/js-utils'
    module.exports = {
        data(){
            return {}
        },
        mounted(){
            const me = this;


            me.$nextTick(() => {
                me._initPlugins();
                me._expandImage();
            });
        },
        methods: {
            _expandImage(){
                $('.porto_block').each(function (index, element) {
                    var gall_con = $(this);
                    var expander = $(this).find("a.expand_img");
                    var expander_b = $(this).find("a.icon_expand");
                    expander.click(function () {
                        gall_con.find("a:first").click();
                        return false;
                    });
                    expander_b.click(function () {
                        gall_con.find("a:first").click();
                        return false;
                    });
                });
                $(".magnific-popup, a[data-rel^='magnific-popup']").magnificPopup({
                    type: 'image',
                    mainClass: 'mfp-with-zoom', // this class is for CSS animation below
                    zoom: {
                        enabled: true,
                        duration: 300,
                        easing: 'ease-in-out',
                        opener: function (openerElement) {
                            return openerElement.is('img') ? openerElement : openerElement.find('img');
                        }
                    }

                });
            },
            _initPlugins(){
                $(".hm_filter_wrapper").each(function (index, element) {
                    var main_parent = $(this);
                    var filter_buttons = main_parent.find('#filter-by');
                    var filtered_parent = main_parent.find('.hm_filter_wrapper_con');

                    var col_width = main_parent.hasClass("masonry_porto") ? 1 : 0;

                    main_parent.find("#filter-by li a").each(function (index, element) {
                        var get_class = $(this).attr("data-option-value");
                        var lenghty = main_parent.find(".hm_filter_wrapper_con > " + get_class).length;
                        $(this).find(".num").html(lenghty);
                    });
                    main_parent.find(".sort_list a.sort_selecter").click(function () {
                        return false;
                    });

                    main_parent.find(".porto_nums > span.like i").click(function () {
                        var par = $(this).parent();
                        par.addClass('added');

                        var sib = $(this).siblings(".like_counter");
                        var sib_int = parseInt($(this).siblings(".like_counter").text(), 10);
                        ++sib_int;
                        sib.html(sib_int);
                    });

                    main_parent.find("#sort-by li a").click(function () {
                        var this_a = $(this);
                        var $asc_desc = this_a.closest('.sort_list').siblings("#sort-direction");
                        $asc_desc.css({"opacity": "1"});
                        var this_text = this_a.find('.text').text();
                        var writed = this_a.closest('.sort_list').find('a.sort_selecter .text');
                        writed.html(this_text);
                    });

                    var $container = main_parent.find('.hm_filter_wrapper_con');
                    var col_width_mobile = 0;

                    if (getScreenWidth() >= 1022) {
                        col_width_mobile = 5;
                    } else if (getScreenWidth() >= 766) {
                        col_width_mobile = 4;
                    } else if (getScreenWidth() >= 478) {
                        col_width_mobile = 2;
                    } else {
                        col_width_mobile = 1;
                    }

                    if (!main_parent.hasClass('content_filter')) { //-------------->
                        if (main_parent.hasClass('masonry_porto')) {
                            $container.isotope({
                                itemSelector: '.filter_item_block',
                                layoutMode: 'masonry',
                                resizable: false, // disable normal resizing
                                masonry: {
                                    columnWidth: $container.width() / col_width_mobile,
                                },
                                getSortData: {
                                    name: '.name',
                                    like_counter: '.like_counter parseInt',
                                    number: '.number parseInt',
                                    comm_counter: '.comm_counter parseInt',
                                },
                            });
                            $(window).resize(function () {
                                var col_width_mobile = 0;
                                if (getScreenWidth() >= 1022) {
                                    col_width_mobile = 5;
                                } else if (getScreenWidth() >= 766) {
                                    col_width_mobile = 4;
                                } else if (getScreenWidth() >= 478) {
                                    col_width_mobile = 2;
                                } else {
                                    col_width_mobile = 1;
                                }
                                $container.isotope({
                                    masonry: {columnWidth: $container.width() / col_width_mobile}
                                });
                            });
                        } else {
                            $container.isotope({
                                itemSelector: '.filter_item_block',
                                layoutMode: 'masonry',
                                resizable: false, // disable normal resizing
                                masonry: {
                                    columnWidth: col_width,
                                },
                                getSortData: {
                                    name: '.name',
                                    like_counter: '.like_counter parseInt',
                                    number: '.number parseInt',
                                    comm_counter: '.comm_counter parseInt',
                                },
                            });
                        }

                        var $optionSets = main_parent.find('#options .option-set'),
                            $optionLinks = $optionSets.find('a');

                        $optionLinks.click(function () {
                            var $this = $(this);
                            // don't proceed if already selected
                            if ($this.hasClass('selected')) {
                                return false;
                            }
                            var $optionSet = $this.parents('.option-set');
                            $optionSet.find('.selected').removeClass('selected');
                            $this.addClass('selected');

                            // make option object dynamically, i.e. { filter: '.my-filter-class' }
                            var options = {},
                                key = $optionSet.attr('data-option-key'),
                                value = $this.attr('data-option-value');
                            // parse 'false' as false boolean
                            value = value === 'false' ? false : value;
                            options[key] = value;
                            if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
                                // changes in layout modes need extra logic
                                changeLayoutMode($this, options);
                            } else {
                                // otherwise, apply new options
                                $container.isotope(options);
                            }

                            return false;
                        });
                    } else {
                        filtered_parent.find('.content_filter_item').each(function (index, element) {
                            var filtered_parent_item = $(this);
                            var item_height = filtered_parent_item.find('.enar_accordion').outerHeight();

                            filtered_parent_item.animate({
                                height: item_height + 10 + 'px',
                            }, 300);
                        });

                        filter_buttons.find('li a').click(function (event) {
                            var i_sel = $(this).attr('data-option-value');
                            event.preventDefault();

                            if (!$(this).hasClass('selected')) {
                                filter_buttons.find('li a').removeClass('selected');
                                $(this).addClass('selected');

                                filtered_parent.children().not(i_sel).each(function (index, element) {
                                    var this_occy = $(this);
                                    var child_occ = this_occy.find(".enar_occ_container");

                                    this_occy.animate({height: 0}).addClass('content_hidden');

                                    child_occ.removeClass("occ_expanded");
                                    child_occ.find(".enar_occ_content").stop(true, true).animate({
                                        height: '0px',
                                    }, 300);

                                });

                                filtered_parent.children(i_sel).each(function (index, element) {
                                    var this_occy = $(this);
                                    var heighty = $(this).find(".enar_accordion").outerHeight() + 10;
                                    this_occy.animate({height: heighty + 'px'}).removeClass('content_hidden');
                                });

                            }
                        });
                    }


                });
            }
        }
    }
</script>