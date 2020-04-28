$(() => {
    if ($('.order-room').length === 0) return;

    const orderDateInputFrom = $(".date-dropdown__input._from").datepicker({
        offset: 11,
        inline: true,
        range: true,
        onSelect: function(formattedDate, date, inst) {
            const dateFrom = (date instanceof Array) ? date[0] : date;
            const dateTo = (date instanceof Array) ? date[1] : undefined;

            if (dateFrom) {
                const dateFromStringDay = (String(dateFrom.getDate()).length < 2) ? ('0' + String(dateFrom.getDate())) : (String(dateFrom.getDate()));
                const dateFromStringMonth = (String(dateFrom.getMonth() + 1).length < 2) ? ('0' + String(dateFrom.getMonth() + 1)) : (String(dateFrom.getMonth() + 1));
                const dateFromStringYear = String(dateFrom.getFullYear());
                const dateFromString = dateFromStringDay + '.' + dateFromStringMonth + '.' + dateFromStringYear;
                inst.el.value = dateFromString;
            }
            
            if (dateTo) {
                const dateToStringDay = (String(dateTo.getDate()).length < 2) ? ('0' + String(dateTo.getDate())) : (String(dateTo.getDate()));
                const dateToStringMonth = (String(dateTo.getMonth() + 1).length < 2) ? ('0' + String(dateTo.getMonth() + 1)) : (String(dateTo.getMonth() + 1));
                const dateToStringYear = String(dateTo.getFullYear());
                const dateToString = dateToStringDay + '.' + dateToStringMonth + '.' + dateToStringYear;
                
                const inputTo = inst.$el.closest('.order-room__range').find('.date-dropdown__input._to');
                inputTo.get(0).value = dateToString;
            }

            if (!(dateFrom && dateTo)) {
                const inputTo = inst.$el.closest('.order-room__range').find('.date-dropdown__input._to');
                inputTo.get(0).value = "";
            }

        }
    }).data('datepicker');
    
    const orderDateInputTo = $(".date-dropdown__input._to").datepicker().data('datepicker');
    orderDateInputTo.destroy();

    orderDateInputTo.$el.click(() => {
        orderDateInputFrom.show();
    });

});