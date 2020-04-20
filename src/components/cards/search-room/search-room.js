$(() => {

    const dateInputFrom = $(".date-dropdown__input._from").datepicker({
        range: true,
        onSelect: function(formattedDate, date, inst) {
            this.selectDate(date[0])
            dateInputTo.selectDate(date[date.length-1])
        }
    }).data('datepicker');
    const dateInputTo = $(".date-dropdown__input._to").datepicker().data('datepicker');
    dateInputTo.destroy();

    dateInputTo.$el.click(() => {
        dateInputFrom.show();
    });

});