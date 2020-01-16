import './main.sass';
import 'jquery-mask-plugin';
import './components/form-elements/textfield-masked/textfield-masked.js';
import './components/form-elements/filter-dropdown/filter-dropdown.js';
import './components/form-elements/date-dropdown/date-dropdown.js';

import noUiSlider from 'nouislider';

$(document).ready(function() {
    $('.like-button').each(function() {
        if ($(this).attr('data-state') === 'liked') {
            $(this).addClass('like-button_liked');
            $(this).children('i').addClass('like-button__icon_liked');
            $(this).children('i').text('favorite');
            $(this).children('.like-button__count').addClass('like-button__count_liked')
        }
    })

    $('.like-button').on('click', function() {
        $(this).attr('data-state', 'liked');
        $(this).addClass('like-button_liked');
        $(this).children('i').addClass('like-button__icon_liked');
        $(this).children('i').text('favorite');
        $(this).children('.like-button__count').addClass('like-button__count_liked')
    })
});

var slider = document.getElementById('slider');
console.log(slider)

noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }
});