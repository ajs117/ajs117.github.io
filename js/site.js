$(function () {
    var vid = document.getElementById("bgvid");
    vid.playbackRate = 0.5;

    $("#toplogo").hide();

    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 500,
        speedAsDuration: true
    });

    $(document).ready(function () {
        $(".slick-carousel").slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            centerMode: true,
            autoplay: true,
            autoplaySpeed: 1000,
            arrows: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        centerPadding: "40px",
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        centerPadding: "40px",
                        slidesToShow: 1
                    }
                }
            ]
        });
    });

    // tooltip
    $("[data-toggle=tooltip]").tooltip({
        placement: "bottom"
    });

    function indexResize() {
        // resize above the fold
        var homecentralcontainer = $("#homecentralicon").parent();
        var softdevMarginTop =
            $(window).height() -
            (homecentralcontainer.offset().top + homecentralcontainer.height() + 20);
        if (softdevMarginTop > 600) {
            softdevMarginTop = 600;
        }
        $("#softdevtopdivider").css("marginTop", softdevMarginTop);

        // resize lead services triangles
        $(".top-angle").css({
            borderRightWidth: $(window).width() / 2.0,
            borderLeftWidth: $(window).width() / 2.0,
            borderLeftStyle: "solid",
            borderRightStyle: "solid",
            borderLeftColor: "transparent",
            borderRightColor: "transparent"
        });

        $(".bottom-angle").css({
            borderRightWidth: $(window).width() / 2.0,
            borderLeftWidth: $(window).width() / 2.0,
            borderLeftStyle: "solid",
            borderRightStyle: "solid",
            borderLeftColor: "transparent",
            borderRightColor: "transparent"
        });

        $("#footerdivider").css({
            borderRightWidth: $(window).width() / 2.0,
            borderLeftWidth: $(window).width() / 2.0,
            borderLeftStyle: "solid",
            borderRightStyle: "solid",
            borderLeftColor: "transparent",
            borderRightColor: "transparent"
        });
    }

    function resize() {
        $("#footerdivider").css({
            borderRightWidth: $(window).width() / 2.0,
            borderLeftWidth: $(window).width() / 2.0,
            borderLeftStyle: "solid",
            borderRightStyle: "solid",
            borderLeftColor: "transparent",
            borderRightColor: "transparent"
        });
    }

    if ($("body").is("#index")) {
        $(indexResize); // resize on load
        $(window).resize(indexResize); // resize on resize

        // on scroll make nav less transparent
        $(window).scroll(function () {
            if ($(window).scrollTop()) {
                $("#topnav").addClass("scrolled");
                $("#toplogo").show();
            } else {
                $("#topnav").removeClass("scrolled");
                $("#toplogo").hide();
            }
        });
    } else {
        $(resize); // resize on load
        $(window).resize(resize); // resize on resize
    }

    (function () {
        "use strict";
        if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
            var msViewportStyle = document.createElement("style");
            msViewportStyle.appendChild(
                document.createTextNode("@-ms-viewport{width:auto!important}")
            );
            document.querySelector("head").appendChild(msViewportStyle);
        }
    })();
});