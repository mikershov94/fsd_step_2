(function($) {

    $.fn.filterDropdown = function() {
        
        const bedroomsPanel = $(this).find('#bedrooms .filter-dropdown__count');
        const bedsPanel = $(this).find('#beds .filter-dropdown__count');
        const bathroomsPanel = $(this).find('#bathrooms .filter-dropdown__count');
        
        let bedrooms = bedroomsPanel.attr('data-value');
        let beds = bedsPanel.attr('data-value');
        let bathrooms = bathroomsPanel.attr('data-value');

        
        //обработчик клика Bedrooms Increment
        $(this).on('click', '#bedrooms .filter-dropdown__btn_inc', function() {
            bedrooms++;
            bedroomsPanel.attr('data-value', bedrooms);
            bedroomsPanel.empty()
            bedroomsPanel.html(bedrooms);
        })

        //обработчик клика Bedrooms Decrement
        $(this).on('click', '#bedrooms .filter-dropdown__btn_dec', function() {
            bedrooms--;
            bedroomsPanel.attr('data-value', bedrooms);
            bedroomsPanel.empty()
            bedroomsPanel.html(bedrooms);
        })

        //обработчик клика Beds Increment
        $(this).on('click', '#beds .filter-dropdown__btn_inc', function() {
            beds++;
            bedsPanel.attr('data-value', beds);
            bedsPanel.empty()
            bedsPanel.html(beds);
        })

        //обработчик клика Beds Decrement
        $(this).on('click', '#beds .filter-dropdown__btn_dec', function() {
            beds--;
            bedsPanel.attr('data-value', beds);
            bedsPanel.empty()
            bedsPanel.html(beds);
        })

        //обработчик клика Bedrooms Increment
        $(this).on('click', '#bathrooms .filter-dropdown__btn_inc', function() {
            bathrooms++;
            bathroomsPanel.attr('data-value', bathrooms);
            bathroomsPanel.empty()
            bathroomsPanel.html(bathrooms);
        })

        //обработчик клика Bedrooms Decrement
        $(this).on('click', '#bathrooms .filter-dropdown__btn_dec', function() {
            bathrooms--;
            bathroomsPanel.attr('data-value', bathrooms);
            bathroomsPanel.empty()
            bathroomsPanel.html(bathrooms);
        })
    
        
        //обработчик клика по Dropdown
        $(this).on('click', function(e) {

            $('.filter-dropdown').children('.filter-dropdown__list').removeClass('filter-dropdown__list_expanded');
            $(this).children('.filter-dropdown__list').addClass('filter-dropdown__list_expanded');

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