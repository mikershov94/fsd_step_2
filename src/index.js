import './main.sass';
import 'jquery-mask-plugin';

import './components/form-elements/textfield-masked/textfield-masked.js';
import './components/form-elements/filter-dropdown/filter-dropdown.js';
import './components/form-elements/date-dropdown/date-dropdown.js';
import './components/form-elements/filter-date-dropdown/filter-date-dropdown.js';
import './components/form-elements/like-button/like-button.js';

import './components/form-elements/range-slider/range-slider.js';
import './components/form-elements/pagination/pagination.js';

import './components/form-elements/guest-dropdown/guest-dropdown.js';

import './components/form-elements/checkbox-expandable/checkbox-expandable.js'

$(document).ready(function() {
    
    $('.checkbox-expandable').checkboxExpandable();

    const filterDateDropdown = $('.filter-date-dropdown').find('.filter-date-dropdown__input').datepicker().data('datepicker');
    filterDateDropdown.selectDate([new Date(2020, 7, 19), new Date(2020, 7, 23)]);

});