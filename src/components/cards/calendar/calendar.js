$(() => {
    $(".datepicker-here").datepicker({
        prevHtml: '<span class="material-icons">arrow_back</span>',
        nextHtml: '<span class="material-icons">arrow_forward</span>',
        language: {
            daysMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб']
        },
        clearButton: true,
        onShow: function(dp, animationCompleted) {
            if (animationCompleted) {
                $('.datepicker').find('.datepicker--button-apply').on('click', function() {
                    dp.hide();
                }); 
            }
        },

    });

    $(".datepicker--buttons").html('<span class="datepicker--button-apply" data-action="apply">Применить</button');

    const calendar = $(".calendar").datepicker({
        range: true,
    });
    calendar.data('datepicker').selectDate([new Date(2019, 7, 19), new Date(2019, 7, 23)]);
})