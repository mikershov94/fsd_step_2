(function($) {

    $.fn.filterDropdown = function() {

        //обработчик клика по Dropdown
        $(this).on('click', function() {

            const stateDropdown = $(this).attr('data-expand');
            if (stateDropdown === 'expanded') {
                $(this).children('.filter-dropdown__list').removeClass('filter-dropdown__list_expanded');
                $(this).attr('data-expand', '');
            } else {
                $('.filter-dropdown').children('.filter-dropdown__list').removeClass('filter-dropdown__list_expanded');
                $('.filter-dropdown').attr('data-expand', '');
                $(this).children('.filter-dropdown__list').addClass('filter-dropdown__list_expanded');
                $(this).attr('data-expand', 'expanded');
            }

        })

        //обработчик клика за пределами Dropdown
        $(document).click(function(e) {
            if ($(e.target).closest('.filter-dropdown').length) return;
            $('.filter-dropdown').children('.filter-dropdown__list').removeClass('filter-dropdown__list_expanded');
            e.stopPropagation()
        })

    }

})(jQuery)

$(document).ready(() => {
    $('.filter-dropdown').filterDropdown();
})