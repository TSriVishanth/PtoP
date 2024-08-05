$(document).ready(function () {
    $(window).on('load', function () {
        hdSticky();
    });

    $(window).scroll(function () {
        hdSticky();
    });


    function hdSticky() {
        var scroll = $(window).scrollTop();

        if (scroll >= 10) {
            $(".fixed-top ").addClass("add-header-active ");
        } else {
            $(".fixed-top ").removeClass("add-header-active ");
        }
    }

});

// search
function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}

// mobile-view
$(".side-btn-mobile").on('click', function () {
    $('body').toggleClass('side-Open-mobile');
});

// sidebar
$(".side-btn").on('click', function () {
    $('body').toggleClass('side-Open');
});

// SLIDER



// SIDEBAR

function sideBar() {
    var element = document.getElementById("sideBar");
    element.classList.toggle("sidebaropen");
}


// FOOTER
$(document).ready(function () {
    $('.banner-slick').slick({
        infinite: true,
        autoplay: false,
        speed: 300,
        dots: true,
        arrows: false,
        easing: 'ease-in',
        margin: '5px',
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1439,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            
        ]
    })
});
$('.banner-slick').slick({
   
    dots: false,
    arrows:false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll:4,
    responsive: [{
        breakpoint: 992,
        settings: {
            slidesToShow: 1            
        }
    }, {
        breakpoint: 776,
        settings: {
            slidesToShow: 1        
        }
    }]
});
// CUSTOM SCROLL
(function ($) {
    $(window).on("load ", function () {
        $(".scrollcustom ").mCustomScrollbar({
            theme: "light-2 ",
            scrollButtons: {
                enable: true

            },
            mouseWheel: {
                enable: true
            },

        });

    });
})(jQuery);


