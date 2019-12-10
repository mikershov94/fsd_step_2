(function($) {

    $.fn.filterDropdown = function() {

        $(this).on('click', function() {

            const stateDropdown = $(this).attr('data-expand');
            if (stateDropdown === 'expanded') {
                $(this).children('.filter-dropdown__list').removeClass('filter-dropdown__list_expanded');
                $(this).attr('data-expand', '');
            } else {
                $(this).children('.filter-dropdown__list').addClass('filter-dropdown__list_expanded');
                $(this).attr('data-expand', 'expanded');
            }

        })
    }

})(jQuery)

$(document).ready(() => {
    $('.filter-dropdown').filterDropdown();
})