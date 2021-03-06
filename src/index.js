import './components/font-type/fonts.css';
import './main.sass';
import 'jquery'
import 'jquery-mask-plugin';
import 'slick-carousel';

import './components/form-elements/filter-dropdown/filter-dropdown.js';
import './components/form-elements/date-dropdown/date-dropdown.js';
import './components/form-elements/filter-date-dropdown/filter-date-dropdown.js';
import './components/form-elements/like-button/like-button.js';

import './components/form-elements/range-slider/range-slider.js';
import './components/form-elements/pagination/pagination.js';

import './components/form-elements/guest-dropdown/guest-dropdown.js';

import './components/form-elements/checkbox-expandable/checkbox-expandable.js';

import './components/cards/calendar/calendar.js';
import './components/cards/room-preview/room-preview.js';

$(document).ready(() => {

    $('.text-field_masked input').mask("99.99.9999", {placeholder: "ДД.ММ.ГГГГ"});
    $('.checkbox-expandable').checkboxExpandable();

    $('.offer__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    });

});

import './components/cards/search-room/search-room.js';
import './components/cards/order-room/order-room.js';