import noUiSlider from 'nouislider';
import wNumb from 'wnumb';

(function($) {

    $.fn.rangeSlider = function() {
        return this.each(function() {
            const slider = this.querySelector('#slider');
            const rangeValues = [
                this.querySelector('#values__low'),
                this.querySelector('#values__high')
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
                    thousand: ' ',
                    suffix: '₽'
                })
            });

            slider.noUiSlider.on('update', function(values, handle) {
                rangeValues[handle].innerHTML = values[handle];
            });
        });
    }

})(jQuery);

$(document).ready(() => {
    $('.range-slider').rangeSlider();
});