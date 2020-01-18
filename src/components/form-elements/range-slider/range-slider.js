import noUiSlider from 'nouislider';
import wNumb from 'wnumb';

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