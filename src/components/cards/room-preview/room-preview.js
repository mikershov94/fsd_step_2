$(document).ready(() => {
    $('.room-preview__carousel').slick({
        dots: true,
        prevArrow: '<div class="room-preview__container room-preview__container_back"><button class="room-preview__arrow room-preview__arrow_back material-icons">keyboard_arrow_left</button></div>',
        nextArrow: '<div class="room-preview__container room-preview__container_next"><button class="room-preview__arrow room-preview__arrow_next material-icons">keyboard_arrow_right</button></div>'
    });
})