//  change color on click
var item = document.getElementsByClassName('circle');
var colors = ['white'];
for (let i = 0; i < item.length; i++) {
    item[i].style.backgroundColor = colors[i];
}
//layout scrolls
$(function () {
    $('a[href^="#"]').on('click', function (event) {
        event.preventDefault();
        var sc = $(this).attr("href"),
            dn = $(sc).offset().top;
        $('html, body').animate({ scrollTop: dn }, 800);
    });
});
//swiper
var Swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

var swiper = new Swiper('.swiper-block', {
    pagination: {
        el: '.swiper-pagination',
    },
});
//map
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 42.3317600, lng: -71.1211600 },
        zoom: 8
    });
}

var swiper = new Swiper('.swiper-container', {
    cssMode: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
});



