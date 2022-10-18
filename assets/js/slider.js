var Swipes = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
    a11y: {
            paginationBulletMessage: "gggg",
    },
});

function autobanner() {
    $('.swiper-button-next').click();
}

var autobannerTimer = setInterval(autobanner, 5000);

$('.swiper-button-next').click(function () {
    clearInterval(autobannerTimer);
    autobannerTimer = setInterval(autobanner, 5000)
});