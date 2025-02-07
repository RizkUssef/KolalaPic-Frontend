$().ready(function () {
    slider();

    $('.image_container').hover(
        function () {
            $(this).find('.image_overlay').removeClass('hidden');
            $(this).find("a .save").on("click", function (e) {
                e.preventDefault();
                if ($(this).hasClass("fa-regular")) {
                    $(this).removeClass("fa-regular").addClass('fa-solid');
                } else {
                    $(this).removeClass("fa-solid").addClass('fa-regular');
                }
            });
        },
        function () {
            $(this).find('.image_overlay').addClass('hidden');
        }
    );

    let profile_offset = $('#profile').offset().top;
    navBG(profile_offset)

    // search show
    $('#search_btn').on('click', function (e) {
        e.preventDefault();
        $('#search_input').removeClass("hidden").addClass("flex")
    });


    $('.profile_ico').on("click", function () {
        $('.profile_ico').css("background-color", "#F1F0E8");
        $(this).css("background-color", "white");
    })

});



function navBG(offset) {
    $(window).on("scroll", function () {
        let scroll = $(this).scrollTop();
        if (scroll > offset) {
            $('.nav').css({ "background-color": "#B3C8CF" })
        } else {
            $('.nav').css({ "background-color": "transparent" })

        }
    })
}

function slider() {
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
}

// ! register
csrfRegister();
async function csrfRegister() {
    let reg = await fetch("http://127.0.0.1/KolalaPic/public/apiRegister/registerCsrf", {
        method: "GET",
        credentials: "include"
    });
    let csrf = await reg.json();
    $('#csrf_register').attr('value', csrf.csrf_register);
    return csrf.csrf_register;
}

getRegData();
function getRegData() {
    let form_data;
    $('#reg_form').on('submit', function (e) {
        e.preventDefault();
        form_data = {
            name: $("#name").val(),
            email: $("#email").val(),
            password: $("#password").val(),
            password_confirmation: $("#password_confirmation").val(),
            csrf_register: $("#csrf_register").val(),
        };
        // console.log(form_data);
        register(form_data);
    })
}

async function register(form_data) {
    fetch("http://127.0.0.1/KolalaPic/public/apiRegister/registerHandle", {
        headers: {
            "Content-Type": "application/json",
        },
        method: "post",
        body: JSON.stringify(form_data),
        credentials: "include",
    }).then(function (res) {
        return res.text();
    }).then(function (data) {
        let errors = JSON.parse(data)
        if (Array.isArray(errors)) {
            $("#response_err").removeClass('hidden');
            let cont = "";
            for (let i = 0; i < errors.length; i++) {
                cont += `<p>${errors[i]}</p>`;
                $("#response_err").html(cont);
            }
        }else{
            $("#response_succ").removeClass('hidden');
            $("#response_succ").html(`<p>${errors}</p>`);
        }
    })
}

// ! login
csrfLogin();
async function csrfLogin() {
    let reg = await fetch("http://127.0.0.1/KolalaPic/public/apiLogin/loginCsrf", {
        method: "GET",
        credentials: "include"
    });
    let csrf = await reg.json();
    $('#csrf_login').attr('value', csrf.csrf_login);
    return csrf.csrf_login;
}

getLoginData();
function getLoginData() {
    let form_data;
    $('#login_form').on('submit', function (e) {
        e.preventDefault();
        form_data = {
            email: $("#email").val(),
            password: $("#password").val(),
            csrf_register: $("#csrf_register").val(),
        };
        login(form_data);
    })
}

async function login(form_data) {
    fetch("http://127.0.0.1/KolalaPic/public/apiLogin/loginHandle", {
        headers: {
            "Content-Type": "application/json",
        },
        method: "post",
        body: JSON.stringify(form_data),
        credentials: "include",
    }).then(function (res) {
        return res.text();
    }).then(function (data) {
        let user_token =JSON.parse(data);
        if (user_token!=null) {
            const home = "http://127.0.0.1:5501/src/pages/index.html";
            window.location.href = home;
        }else{
            window.location.href = "http://127.0.0.1:5501/src/pages/Auth/login.html";
        }

    })
}
