$(function () {
    const vid = $("#bgvid")[0];
    vid.playbackRate = 0.5;

    const $topLogo = $("#toplogo");
    $topLogo.hide();

    function initCarousel() {
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
    }

    function initTooltip() {
        $("[data-toggle=tooltip]").tooltip({
            placement: "bottom"
        });
    }

    function resizeFooterDivider() {
        const width = $(window).width() / 2.0;
        $("#footerdivider").css({
            borderRightWidth: width,
            borderLeftWidth: width,
            borderStyle: "solid",
            borderColor: "transparent"
        });
    }

    function resizeIndex() {
        const windowHeight = $(window).height();
        const $container = $("#homecentralicon").parent();
        const margin = windowHeight - ($container.offset().top + $container.height() + 20);
        const leadServicesMarginTop = Math.min(margin, 600);

        $("#leadservicestopdivider").css("marginTop", leadServicesMarginTop);

        $(".top-angle, .bottom-angle").css({
            borderRightWidth: $(window).width() / 2.0,
            borderLeftWidth: $(window).width() / 2.0,
            borderStyle: "solid",
            borderColor: "transparent"
        });

        resizeFooterDivider();
    }

    function resize() {
        resizeFooterDivider();
    }

    function handleScroll() {
        const $topNav = $("#topnav");
        const scrollTop = $(window).scrollTop();

        if (scrollTop) {
            $topNav.addClass("scrolled");
            $topLogo.show();
        } else {
            $topNav.removeClass("scrolled");
            $topLogo.hide();
        }
    }

    if ($("body").is("#index")) {
        initCarousel();
        initTooltip();
        resizeIndex();
        $(window).on("resize", resizeIndex);
        $(window).on("scroll", handleScroll);
    } else {
        initTooltip();
        resize();
        $(window).on("resize", resize);
    }

    (function () {
        if (navigator.userAgent.match(/IEMobile/10.0 /)) {
            const msViewportStyle = document.createElement("style");
            msViewportStyle.appendChild(
                document.createTextNode("@-ms-viewport{width:auto!important}")
            );
            document.querySelector("head").appendChild(msViewportStyle);
        }
    })();
});