import './main.sass';
import 'jquery-mask-plugin';
import './components/form-elements/textfield-masked/textfield-masked.js';
import './components/form-elements/filter-dropdown/filter-dropdown.js';
import './components/form-elements/date-dropdown/date-dropdown.js';

import noUiSlider from 'nouislider';
import wNumb from 'wnumb';

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

const slider = document.getElementById('slider');
const rangeValues = [
    document.getElementById('values__low'),
    document.getElementById('values__high')
];

noUiSlider.create(slider, {
    start: [5000, 10000],
    connect: true,
    range: {
        'min': 0,
        'max': 15000
    },
    format: wNumb({
        decimals: 0,
        suffix: '₽'
    })
});

slider.noUiSlider.on('update', function(values, handle) {
    rangeValues[handle].innerHTML = values[handle];
});