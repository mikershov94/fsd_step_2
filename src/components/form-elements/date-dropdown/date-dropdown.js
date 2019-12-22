import 'air-datepicker/dist/js/datepicker.min';

$(document).ready(function() {
    $('.date-dropdown').on('click', function(e) {
        console.log($(this))
        $(this).addClass('datepicker-here');
    })

    $(document).click(function(e) {
        if ($(e.target).closest('.date-dropdown').length) return;
        $('.date-dropdown').removeClass('datepicker-here');
        e.stopPropagation()
    })
})