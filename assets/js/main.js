(function ($) {
    "use strict";

    $(window).on("load", function () {
        $("#gx-overlay").fadeOut("slow");
    });
    $(document).ready(function () {        

       /*========== side-menu ===========*/

        var currentActiveTab = localStorage.getItem('currentActiveTab') ?? null;

        $(".gx-drop-toggle").on("click", function (e) {
            var senderElement = e.target;

            if ($(senderElement).hasClass('gx-sub-drop-toggle')) return;
            if ($(senderElement).hasClass('gx-page-link')) return;
            if ($(senderElement).hasClass('condense') && $(senderElement).parents('.gx-sub-drop-toggle').length > 0) return;

            var parent = $(this).parents('.sb-drop-item');
            currentActiveTab = $(parent).find('.gx-drop-toggle span.condense').text();

            if ($(parent).hasClass('load-active')) {
                $(parent).find(".gx-sb-drop").slideUp();
                $(parent).removeClass('load-active');
                localStorage.setItem('currentActiveTab', '');
                localStorage.setItem('currentActiveSubTab', '');
            } else {
                $('.load-active').removeClass('load-active');
                $(".gx-sb-drop").slideUp();
                $(parent).addClass('load-active');
                $(parent).find(".gx-sb-drop").slideDown();
                localStorage.setItem('currentActiveTab', currentActiveTab);
            }
        });

        /*========== Structure dowpdown ===========*/
        $('.gx-hide').slideUp();
        $('.gx-struct-drop').on("click", function () {
            $(this).parent("li").children("ul").slideToggle();
            $(this).parent().parent("ul").toggleClass("active");
        });

        /*========== Search Remix icon page ===========*/
        $('[data-search-icon]').on('keyup', function () {
            var searchVal = $(this).val().toLowerCase();
            var filterItems = $('[data-search-item]');
            var filterItemsText = $('[data-search-item]').text().toLowerCase();
            var a = $('[data-search-item]:contains(' + searchVal + ')');
            if (searchVal != '') {
                filterItems.closest(".remix-unicode-icon").addClass('hide');
                $('[data-search-item]:contains(' + searchVal + ')').closest(".remix-unicode-icon").removeClass('hide');
            } else {
                filterItems.closest(".remix-unicode-icon").removeClass('hide');
            }
        });

        /*========== Search Material icon page ===========*/
        $('[data-search-material]').on('keyup', function () {
            var searchVal = $(this).val().toLowerCase();
            var filterItems = $('.material-search-item');
            var filterItemsText = $('.material-search-item').text().toLowerCase();
            var a = $('.material-search-item:contains(' + searchVal + ')');
            if (searchVal != '') {
                filterItems.closest(".material-icon-item").addClass('hide');
                $('.material-search-item:contains(' + searchVal + ')').closest(".material-icon-item").removeClass('hide');
            } else {
                filterItems.closest(".material-icon-item").removeClass('hide');
            }
        });
    });

    /*========== On ckick card zoom (full screen) ===========*/
    $(".gx-full-card").on("click", function () {
        $(this).hide();
        $(this).parent(".header-tools").append('<a href="javascript:void(0)" class="m-l-10 gx-full-card-close"><i class="ri-close-fill"></i></a>');
        $(this).closest(".gx-card").parent().toggleClass("gx-full-screen");
        $(this).closest(".gx-card").parent().parent().append('<div class="gx-card-overlay"></div>');
    });
    $("body").on("click", ".gx-card-overlay, .gx-full-card-close", function () {
        $(".gx-card").find(".gx-full-card-close").remove();
        $(".gx-card").find(".gx-full-card").show();
        $(".gx-card").parent().removeClass("gx-full-screen");
        $(".gx-card-overlay").remove();
    });

})(jQuery);