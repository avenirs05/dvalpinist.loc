$(document).ready(function() {
    if (!device.tablet() && !device.mobile()) {
        $('[name="phone"]').mask("+7 (999) 999-99-99");
        $('[name="phone_f"]').mask("+7 (999) 999-99-99");
    }
});
$(window).load(function () {
    wow = new WOW(
        {  
            boxClass: 'wow',      // default
            animateClass: 'animated', // default
            offset: 100,          // default
            mobile: false          // default
        }
    )
    wow.init();
    $('.fancybox-modal').fancybox({padding: 0});
    $('.slider_done_job').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
    });
    $('.slider_done_sert').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true
    });
    var options = {
        delegation: true,
        clearForm: true,
        resetForm: true,
        type: 'post',
        beforeSubmit: function () {
            $.fancybox.close();
        },
        success: function () {
            $.fancybox({href: "#popupThanks", type: 'inline',padding: 0});
        },
        error: function () {
            $.fancybox({href: "#popupError", type: 'inline',padding: 0});
        }
    };
    $('#form1').ajaxForm(options);
    $('#form2').ajaxForm(options);
    $('#form3').ajaxForm(options);
    $('#popup1Form').ajaxForm(options);
    $("#form1").validate({
        rules: {
            name: {required: true, maxlength: 100,},
            email: {required: false, maxlength: 100, email: true,},
            phone: {required: true, minlength: 1, maxlength: 25,},
        },
        messages: {
            name: {required: "", maxlength: "",},
            email: {required: "", maxlength: "",},
            phone: {required: "", minlength: "", maxlength: "",},
        }
    });
    $("#form2").validate({
        rules: {
            name: {required: true, maxlength: 100,},
            email: {required: false, maxlength: 100, email: true,},
            phone: {required: true, minlength: 1, maxlength: 25,},
        },
        messages: {
            name: {required: "", maxlength: "",},
            email: {required: "", maxlength: "",},
            phone: {required: "", minlength: "", maxlength: "",},
        }
    });
    $("#form3").validate({
        rules: {
            name: {required: true, maxlength: 100,},
            email: {required: false, maxlength: 100, email: true,},
            phone: {required: true, minlength: 1, maxlength: 25,},
        },
        messages: {
            name: {required: "", maxlength: "",},
            email: {required: "", maxlength: "",},
            phone: {required: "", minlength: "", maxlength: "",},
        }
    });
    $("#popup1Form").validate({
        rules: {
            name: {required: true, maxlength: 100,},
            email: {required: false, maxlength: 100, email: true,},
            phone: {required: true, minlength: 1, maxlength: 25,},
        },
        messages: {
            name: {required: "", maxlength: "",},
            email: {required: "", maxlength: "",},
            phone: {required: "", minlength: "", maxlength: "",},
        }
    });
    
    function scrollToElement(element, offset) {
        $(element).click(function (e) {
            var elementClick = $(this).attr("href");
            var destination = $(elementClick).offset().top;
            if (destination < 0) {
                destination = 0;
            }
            $('html, body').animate({scrollTop: destination - offset}, "slow");
            e.preventDefault();
        });
    }
    scrollToElement("a[href='#f0']", 0);
    scrollToElement("a[href='#goto_yls']", 0);

});
$( ".howWork .item1" ).on('click', function() {
    $(".howWork .item" ).removeClass( "active" );
    $(".howWork .item1" ).addClass( "active" );
    $(".howWork .item_right_all" ).removeClass( "active" );
    $(".howWork .item_right_all_1" ).addClass( "active" );
});
$( ".howWork .item2" ).on('click', function() {
    $(".howWork .item" ).removeClass( "active" );
    $(".howWork .item2" ).addClass( "active" );
    $(".howWork .item_right_all" ).removeClass( "active" );
    $(".howWork .item_right_all_2" ).addClass( "active" );
});
$( ".howWork .item3" ).on('click', function() {
    $(".howWork .item" ).removeClass( "active" );
    $(".howWork .item3" ).addClass( "active" );
    $(".howWork .item_right_all" ).removeClass( "active" );
    $(".howWork .item_right_all_3" ).addClass( "active" );
});
$( ".howWork .item4" ).on('click', function() {
    $(".howWork .item" ).removeClass( "active" );
    $(".howWork .item4" ).addClass( "active" );
    $(".howWork .item_right_all" ).removeClass( "active" );
    $(".howWork .item_right_all_4" ).addClass( "active" );
});
$( ".howWork .item5" ).on('click', function() {
    $(".howWork .item" ).removeClass( "active" );
    $(".howWork .item5" ).addClass( "active" );
    $(".howWork .item_right_all" ).removeClass( "active" );
    $(".howWork .item_right_all_5" ).addClass( "active" );
});
$( ".howWork .item6" ).on('click', function() {
    $(".howWork .item" ).removeClass( "active" );
    $(".howWork .item6" ).addClass( "active" );
    $(".howWork .item_right_all" ).removeClass( "active" );
    $(".howWork .item_right_all_6" ).addClass( "active" );
});
$( ".howWork .item7" ).on('click', function() {
    $(".howWork .item" ).removeClass( "active" );
    $(".howWork .item7" ).addClass( "active" );
    $(".howWork .item_right_all" ).removeClass( "active" );
    $(".howWork .item_right_all_7" ).addClass( "active" );
});


$( ".done_jobs .case1" ).on('click', function() {
    $(".done_jobs .case" ).removeClass( "active" );
    $(".done_jobs .case1" ).addClass( "active" );
    $(".done_jobs .sliders_all" ).removeClass( "active" );
    $(".done_jobs .slider_big1" ).addClass( "active" );
});
$( ".done_jobs .case2" ).on('click', function() {
    $(".done_jobs .case" ).removeClass( "active" );
    $(".done_jobs .case2" ).addClass( "active" );
    $(".done_jobs .sliders_all" ).removeClass( "active" );
    $(".done_jobs .slider_big2" ).addClass( "active" );
});
$( ".done_jobs .case3" ).on('click', function() {
    $(".done_jobs .case" ).removeClass( "active" );
    $(".done_jobs .case3" ).addClass( "active" );
    $(".done_jobs .sliders_all" ).removeClass( "active" );
    $(".done_jobs .slider_big3" ).addClass( "active" );
});
$( ".done_jobs .case4" ).on('click', function() {
    $(".done_jobs .case" ).removeClass( "active" );
    $(".done_jobs .case4" ).addClass( "active" );
    $(".done_jobs .sliders_all" ).removeClass( "active" );
    $(".done_jobs .slider_big4" ).addClass( "active" );
});
$( ".done_jobs .case5" ).on('click', function() {
    $(".done_jobs .case" ).removeClass( "active" );
    $(".done_jobs .case5" ).addClass( "active" );
    $(".done_jobs .sliders_all" ).removeClass( "active" );
    $(".done_jobs .slider_big5" ).addClass( "active" );
});
$( ".done_jobs .case6" ).on('click', function() {
    $(".done_jobs .case" ).removeClass( "active" );
    $(".done_jobs .case6" ).addClass( "active" );
    $(".done_jobs .sliders_all" ).removeClass( "active" );
    $(".done_jobs .slider_big6" ).addClass( "active" );
});
$( ".done_jobs .case7" ).on('click', function() {
    $(".done_jobs .case" ).removeClass( "active" );
    $(".done_jobs .case7" ).addClass( "active" );
    $(".done_jobs .sliders_all" ).removeClass( "active" );
    $(".done_jobs .slider_big7" ).addClass( "active" );
});
$( ".done_jobs .case8" ).on('click', function() {
    $(".done_jobs .case" ).removeClass( "active" );
    $(".done_jobs .case8" ).addClass( "active" );
    $(".done_jobs .sliders_all" ).removeClass( "active" );
    $(".done_jobs .slider_big8" ).addClass( "active" );
});
$( ".done_jobs .case9" ).on('click', function() {
    $(".done_jobs .case" ).removeClass( "active" );
    $(".done_jobs .case9" ).addClass( "active" );
    $(".done_jobs .sliders_all" ).removeClass( "active" );
    $(".done_jobs .slider_big9" ).addClass( "active" );
});
$( ".done_jobs .case10" ).on('click', function() {
    $(".done_jobs .case" ).removeClass( "active" );
    $(".done_jobs .case10" ).addClass( "active" );
    $(".done_jobs .sliders_all" ).removeClass( "active" );
    $(".done_jobs .slider_big10" ).addClass( "active" );
});
$( ".done_jobs .case11" ).on('click', function() {
    $(".done_jobs .case" ).removeClass( "active" );
    $(".done_jobs .case11" ).addClass( "active" );
    $(".done_jobs .sliders_all" ).removeClass( "active" );
    $(".done_jobs .slider_big11" ).addClass( "active" );
});
$( ".done_jobs .case12" ).on('click', function() {
    $(".done_jobs .case" ).removeClass( "active" );
    $(".done_jobs .case12" ).addClass( "active" );
    $(".done_jobs .sliders_all" ).removeClass( "active" );
    $(".done_jobs .slider_big12" ).addClass( "active" );
});
$( ".done_jobs .case13" ).on('click', function() {
    $(".done_jobs .case" ).removeClass( "active" );
    $(".done_jobs .case13" ).addClass( "active" );
    $(".done_jobs .sliders_all" ).removeClass( "active" );
    $(".done_jobs .slider_big13" ).addClass( "active" );
});

$( ".item_vnutr" ).on('click', function() {

    var num_active = $(this).data('index');
    $(".item_vnutr.item_vnutr" ).removeClass( "active" );
    $(".item_vnutr.item_vnutr"+num_active ).addClass( "active" );
    $(".right_big.right_big" ).removeClass( "active" );
    $(".right_big.right_big"+num_active ).addClass( "active" );
});