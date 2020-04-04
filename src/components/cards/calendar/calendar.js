$(() => {
    $(".datepicker-here").datepicker({
        prevHtml: '<span class="material-icons">arrow_back</span>',
        nextHtml: '<span class="material-icons">arrow_forward</span>',
        language: {
            daysMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб']
        },
        todayButton: true,
        clearButton: true,

    });

    $(".calendar").datepicker({
        range: true
    })
    $(".calendar").data('datepicker').selectDate([new Date(2019, 7, 19), new Date(2019, 7, 23)])
})