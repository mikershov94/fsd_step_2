(function($) {
    $.fn.datepicker.language['ru'] = {
        days: ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
        daysShort: ['Вос','Пон','Вто','Сре','Чет','Пят','Суб'],
        daysMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
        months: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        monthsShort: ['янв','фев','мар','апр','май','июн','июл','авг','сен','окт','ноя','дек'],
        today: 'Сегодня',
        clear: 'Очистить',
        dateFormat: 'dd M',
        timeFormat: 'hh:ii',
        firstDay: 1
    }
})(jQuery)

$(document).ready(() => {
    $('.filter-date-dropdown').children('.filter-date-dropdown__box').children('.filter-date-dropdown__input').datepicker({
        language: 'ru'
    })
})