import './main.sass';
import 'jquery-mask-plugin';

import './components/form-elements/textfield-masked/textfield-masked.js';
import './components/form-elements/filter-dropdown/filter-dropdown.js';
import './components/form-elements/date-dropdown/date-dropdown.js';

import './components/form-elements/range-slider/range-slider.js';
import './components/form-elements/pagination/pagination.js';

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