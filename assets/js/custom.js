$(document).ready(function(){
    $(".navbar-toggler").click(function(){
        $(".navbar").toggleClass("expand_mobile")
    });
    $("#navbar_content").click(function(ev){
        if($(ev.target).closest(".navbar-nav").length==0){
            $(".expand_mobile").removeClass("expand_mobile");
        }
    })
    /*service tooltips*/
    $(".service_moreInfoBtn").click(function(){
        var pEl=$(this).closest(".service_moreInfo");
        if(pEl.hasClass("show_moreInfoTips")){
            pEl.removeClass("show_moreInfoTips");
        }else{
            $(".show_moreInfoTips").removeClass("show_moreInfoTips");
            pEl.addClass("show_moreInfoTips");
        }
    });
    $(".btn_moreInfoTip_cls").click(function(){
        $(this).closest(".service_moreInfo").removeClass("show_moreInfoTips");
    });
    //services slider
    $(".service_slider").owlCarousel({
        items:2,
        dots:false,
        nav:true,
        loop:true,
        margin:16,
        navText:['<span class="carousel-control-prev-icon" aria-hidden="true"></span>','<span class="carousel-control-next-icon" aria-hidden="true"></span>'],
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive:{
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });
    //testimonials slider
    $(".tes_slider").owlCarousel({
        items:1,
        dots:false,
        nav:true,
        loop:true,
        navText:['<span class="carousel-control-prev-icon" aria-hidden="true"></span>','<span class="carousel-control-next-icon" aria-hidden="true"></span>'],
        autoplayHoverPause:true,
        autoHeight: true
    });
    //services slider
    $(".events_carousel").owlCarousel({
        items:1,
        dots:true,
        nav:false,
        loop:true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive:{
            768:{
                nav:true,
                navText:['<span class="carousel-control-prev-icon" aria-hidden="true"></span>','<span class="carousel-control-next-icon" aria-hidden="true"></span>'],
            }
        }
    });
    //product slider
    var p_owl;
    p_owl = $('.product_carousel').owlCarousel({
        loop:true,
        autoplay: false,
        nav:false,
        dots:true,
        dotsContainer: '.product_carousel_dots',
        items:1
    });
    $('.product_carousel_dots').on('click', 'li', function(e) {
        p_owl.trigger('to.owl.carousel', [$(this).index(), 300]);
    });
})