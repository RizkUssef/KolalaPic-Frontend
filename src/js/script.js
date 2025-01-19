$().ready(function () {
    // Initialize the Owl Carousel
    var owl = $(".owl-carousel").owlCarousel({
        items: 1,             // Number of items to display
        loop: true,           // Infinite loop
        margin: 0,            // Margin between items
        nav: false,           // Disable default navigation buttons
        dots: false,          // Disable default dots
        autoplay: true,       // Enable autoplay
        autoplayTimeout: 10000 // Autoplay interval (3 seconds)
    });
    $(".customNextBtn").on("click", function (e) {
        e.preventDefault();
        owl.trigger("next.owl.carousel", [1000]);
    });


    $(".customPrevBtn").on("click", function (e) {
        e.preventDefault();
        owl.trigger("prev.owl.carousel", [1000]);
    });


// hover explain
    $('.image_container').hover(
        function () {
            $(this).find('.image_overlay').removeClass('hidden');
            $(this).find("a .save").on("click",function (e) {
                e.preventDefault();
                if($(this).hasClass("fa-regular")) {
                    $(this).removeClass("fa-regular").addClass('fa-solid');
                }else{
                    $(this).removeClass("fa-solid").addClass('fa-regular');
                }
            });
        },
        function () {
            $(this).find('.image_overlay').addClass('hidden');
        }
    );



});



