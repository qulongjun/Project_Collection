<template>
    <div>
        <!-- Page Title -->
        <section class="content_section page_title">
            <div class="content clearfix">
                <h1 class="">项目详情</h1>
                <div class="breadcrumbs">
                    <a href="#">项目类别</a>
                    <span class="crumbs-spacer"><i class="ico-angle-right"></i></span>
                    <a href="javascript:;">项目名称</a>
                </div>
            </div>
        </section>
        <!-- End Page Title -->
        <!-- Section -->
        <section class="content_section">
            <span class="section_icon"><i class="ico-picture"></i></span>
            <div class="content row_spacer">
                <!--<div class="main_title centered upper">
                    <h2><span class="line"><span class="dot"></span></span>Project Details</h2>
                </div> -->

                <!-- Columns Container -->
                <div class="rows_container clearfix">
                    <!-- grid 6-->
                    <div class="col-md-6">
                        <!-- Gallery -->
                        <div class="thumbs_gall_slider_con content_thumbs_gall gall_arrow2 clearfix">
                            <div class="thumbs_gall_slider_larg owl-carousel">
                                <template v-for="material in details.materials">
                                    <div class="item">
                                        <a :href="material">
                                            <img :src="material+'?imageMogr2/auto-orient/thumbnail/650x395!/blur/1x0/quality/75|imageslim'"
                                                 alt="项目图片">
                                        </a>
                                    </div>
                                </template>
                            </div>
                            <div class="gall_thumbs owl-carousel">
                                <template v-for="material in details.materials">
                                    <div class="item"><img
                                            :src="material+'?imageMogr2/auto-orient/thumbnail/82x56!/interlace/1/blur/1x0/quality/75|imageslim'"
                                            alt="项目缩略图"></div>
                                </template>

                            </div>
                        </div>
                        <!-- End Gallery -->
                    </div>
                    <!-- End grid 6-->

                    <!-- grid 6-->
                    <div class="col-md-6">
                        <h2 class="title1 upper">{{details.name}}</h2>
                        <div class="typo"><p>{{details.info}}</p></div>
                        <!-- Social Share-->
                        <div>
                            <div class="social_media clearfix">
                                <span class="social_share_btn">Follow :</span>
                                <a href="http://github.com/qulongjun" target="_blank"
                                   class="github"><i class="ico-github6"></i></a> <a
                                    href="https://www.linkedin.com/in/qulongjun" target="_blank" class="linkedin"><i
                                    class="ico-linkedin3"></i></a> <a href="http://cv.qulongjun.cn" target="_blank"
                                                                      class="user"><i class="ico-user"></i></a> <a
                                    href="tel:17717567217" target="_blank" class="phone"><i class="ico-phone"></i></a>
                                <a href="mailto:qulongjun12@163.com" target="_blank" class="email"><i
                                        class="ico-mail6"></i></a>
                            </div>
                        </div>
                        <!-- End Social Share-->
                        <span class="spacer30"></span>
                        <div>
                            <a class="btn_a color2 medium_btn bottom_space" target="_blank" :href="summary.index_site">
							<span>
								<i class="in_left ico-open"></i>
								<span>查看详情</span>
								<i class="in_right ico-open"></i>
							</span>
                            </a>
                        </div>
                    </div>
                    <!-- End grid 6-->
                </div>
                <!-- End Columns Container -->
            </div>
        </section>
        <!-- End Section -->
        <!-- Section -->
        <section class="content_section bg_gray">
            <span class="section_icon"><i class="ico-bargraph"></i></span>
            <div class="content row_spacer">
                <!-- Tabs Container -->
                <div class="hm-tabs tabs1 ver_tabs upper_title">
                    <nav>
                        <ul class="tabs-navi">
                            <li>
                                <a data-content="details" class="selected" href="javascript:;">
                                    <span><i class="ico-laptop4"></i></span>项目概述
                                </a>
                            </li>
                            <li>
                                <a data-content="features" href="javascript:;">
                                    <span><i class="ico-eye3"></i></span>功能特性
                                </a>
                            </li>
                            <li>
                                <a data-content="info" href="#">
                                    <span><i class="ico-anchor2"></i></span>技术背景
                                </a>
                            </li>
                            <li>
                                <a data-content="history" href="javascript:;">
                                    <span><i class="ico-pie-graph"></i></span>历史版本
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <ul class="tabs-body">
                        <li data-content="details" class="selected">
                            <!-- <h2 class="title1 title_color2 upper">Project Details</h2> -->

                            <ul class="list4">
                                <li>
                                    <i class="ico-check4"></i>
                                    <b>所属类别: </b>
                                    <template v-for="m in summary.category">
                                        <span class="label label-primary upper"
                                              style="margin-left: 5px;">{{m.name}}</span>
                                    </template>
                                </li>
                                <li>
                                    <i class="ico-check4"></i>
                                    <b>当前状态: </b> <span
                                        class="label"
                                        :class="summary.state==1?'label-success':'label-danger'"> {{summary.state == 1 ? '已结束' : '开发中'}}</span>

                                </li>
                                <li>
                                    <i class="ico-check4"></i>
                                    <b>参与者: </b>
                                    <template v-for="name in summary.participator">
                                        <span class="label label-info upper" style="margin-left: 5px;">{{name}}</span>
                                    </template>
                                </li>
                                <li>
                                    <i class="ico-check4"></i>
                                    <b>创建时间: </b> {{summary.create_date}}
                                </li>
                                <li>
                                    <i class="ico-check4"></i>
                                    <b>项目主页: </b> <a :href="summary.index_site"
                                                     target="_blank">{{summary.index_site}}</a>
                                </li>
                            </ul>

                        </li>

                        <li data-content="features">
                            <ul class="list1 clearfix">
                                <template v-for="feature in features">
                                    <li>{{feature}}</li>
                                </template>
                            </ul>
                        </li>

                        <li data-content="info">
                            <ul class="list3 clearfix">
                                <template v-for="skill in skills">
                                    <li>{{skill}}</li>
                                </template>
                            </ul>
                        </li>

                        <li data-content="history">
                            <div class="table-responsive">
                                <table class="table table-bordered">
                                    <thead>
                                    <tr>
                                        <th class="text-center">序号</th>
                                        <th class="text-center">版本号</th>
                                        <th class="text-center">发布时间</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <template v-for="(item,index) in details.history">
                                        <tr>
                                            <td scope="row" class="text-center">{{index + 1}}</td>
                                            <th class="text-center">{{item.ver_id}}</th>
                                            <td class="text-center">{{item.ver_date}}</td>
                                        </tr>
                                    </template>
                                    </tbody>
                                </table>
                            </div>
                        </li>
                    </ul>
                </div>
                <!-- End Tabs Container -->
            </div>
        </section>
        <!-- End Section -->
    </div>
</template>
<script type="es6">
    import detail from '../demo/detail.json';
    module.exports = {
        data(){
            return {
                details: {},
                summary: {},
                features: [],
                skills: []
            }
        },
        mounted(){
            const me = this;
            me._fetchDetail();
        },
        methods: {
            _fetchID(){
                const me = this;
                const params = me.$route.params;
                return params.id;
            },
            _fetchDetail(){
                const me = this;
                const data = detail;
                me.details = data;
                me.summary = data.summary;
                me.features = data.features;
                me.skills = data.skills;
                me.$nextTick(() => {
                    me._initPlugins();
                    me._initTabs();
                    me._initGallery();
                })
            },
            _initPlugins(){
                const site_dir = "ltr";
                $(".thumbs_gall_slider_con").each(function (index, element) {
                    var gall_con = $(this);
                    var sync1 = $(gall_con).find(".thumbs_gall_slider_larg");
                    var sync2 = $(gall_con).find(".gall_thumbs");
                    sync1.owlCarousel({
                        direction: site_dir,
                        items: 1,
                        itemsDesktop: false,
                        itemsDesktopSmall: false,
                        itemsTablet: false,
                        itemsTabletSmall: false,
                        itemsMobile: false,
                        slideSpeed: 1000,
                        autoPlay: 4000,
                        autoHeight: true,
                        navigation: true,
                        navigationText: [
                            "<span class='enar_owl_p'><i class='ico-angle-left'></i></span>",
                            "<span class='enar_owl_n'><i class='ico-angle-right'></i></span>"],
                        pagination: false,
                        afterAction: syncPosition,
                        responsiveRefreshRate: 200,
                    });

                    sync2.owlCarousel({
                        direction: site_dir,
                        items: 6,
                        itemsDesktop: false,
                        itemsDesktopSmall: false,
                        itemsTablet: false,
                        itemsTabletSmall: false,
                        itemsMobile: false,
                        pagination: false,
                        //responsiveRefreshRate : 100,
                        afterInit: function (el) {
                            el.find(".owl-item").eq(0).addClass("current_thumb");
                        }
                    });

                    function syncPosition(el) {
                        var current = this.currentItem;
                        $(sync2).find(".owl-item").removeClass("current_thumb").eq(current).addClass("current_thumb");
                        if ($(sync2).data("owlCarousel") !== undefined) {
                            center(current);
                        }
                    }

                    $(sync2).on("click", ".owl-item", function (e) {
                        e.preventDefault();
                        var number = $(this).data("owlItem");
                        sync1.trigger("owl.goTo", number);
                    });

                    function center(number) {
                        var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
                        var num = number;
                        var found = false;
                        for (var i in sync2visible) {
                            if (num === sync2visible[i]) {
                                found = true;
                            }
                        }

                        if (found === false) {
                            if (num > sync2visible[sync2visible.length - 1]) {
                                sync2.trigger("owl.goTo", num - sync2visible.length + 2);
                            } else {
                                if (num - 1 === -1) {
                                    num = 0;
                                }
                                sync2.trigger("owl.goTo", num);
                            }
                        } else if (num === sync2visible[sync2visible.length - 1]) {
                            sync2.trigger("owl.goTo", sync2visible[1]);
                        } else if (num === sync2visible[0]) {
                            sync2.trigger("owl.goTo", num - 1);
                        }
                    }
                });
            },
            _initGallery(){
                $('.thumbs_gall_slider_larg').magnificPopup({
                    delegate: 'a',
                    type: 'image',

                    gallery: {
                        enabled: true
                    },
                    removalDelay: 500,
                    callbacks: {
                        beforeOpen: function () {
                            this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                            this.st.mainClass = /*this.st.el.attr('data-effect')*/ "mfp-zoom-in";
                        }
                    },
                    closeOnContentClick: true,
                    // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source
                    midClick: true,
                    retina: {
                        ratio: 1,
                        replaceSrc: function (item, ratio) {
                            return item.src.replace(/\.\w+$/, function (m) {
                                return '@2x' + m;
                            });
                        }
                    }

                });
            },
            _initTabs(){
                $('.hm-tabs').each(function (index) {
                    var $allparent = $(this);
                    var all_width = $allparent.width();
                    var all_lis = 0;
                    $allparent.find(".tabs-navi > li").each(function (index, element) {
                        var li_width = $(this).outerWidth();
                        all_lis += li_width;
                    });
                    if (all_lis >= all_width) {
                        $allparent.addClass("tabs_mobile");
                    } else {
                        $allparent.removeClass("tabs_mobile");
                    }
                });
                $('.hm-tabs').each(function (index) {
                    var allparent = $(this);
                    var all_width = allparent.width();

                    var tabItems = allparent.find('.tabs-navi a'),
                        tabContentWrapper = allparent.find('.tabs-body');

                    tabItems.on('click', function (event) {
                        event.preventDefault();

                        var selectedItem = $(this);
                        var parentlist = selectedItem.parent();

                        if (parentlist.index() === 0) {
                            selectedItem.parent().siblings("li").removeClass('prev_selected');
                        } else {
                            selectedItem.parent().prev().addClass('prev_selected').siblings("li").removeClass('prev_selected');
                        }

                        if (!selectedItem.hasClass('selected')) {
                            var selectedTab = selectedItem.data('content'),
                                selectedContent = tabContentWrapper.find('li[data-content="' + selectedTab + '"]'),
                                slectedContentHeight = selectedContent.innerHeight();

                            tabItems.removeClass('selected');
                            selectedItem.addClass('selected');
                            selectedContent.addClass('selected').siblings('li').removeClass('selected');
                            //animate tabContentWrapper height when content changes
                            tabContentWrapper.animate({
                                'height': slectedContentHeight
                            }, 200);
                        }
                    });

                    //hide the .hm-tabs::after element when tabbed navigation has scrolled to the end (mobile version)
                    checkScrolling($('.hm-tabs nav'));
                    $(window).on('resize', function () {
                        checkScrolling($('.hm-tabs nav'));
                        tabContentWrapper.css('height', 'auto');
                    });
                    $('.hm-tabs nav').on('scroll', function () {
                        checkScrolling($(this));
                    });

                    function checkScrolling(tabs) {
                        var totalTabWidth = parseInt(tabs.children('.tabs-navi').width()),
                            tabsViewport = parseInt(tabs.width());
                        if (tabs.scrollLeft() >= totalTabWidth - tabsViewport) {
                            tabs.parent('.hm-tabs').addClass('is-ended');
                        } else {
                            tabs.parent('.hm-tabs').removeClass('is-ended');
                        }
                    }

                });
            }
        }
    }
</script>