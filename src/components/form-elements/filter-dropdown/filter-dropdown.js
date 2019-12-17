(function($) {

    $.fn.filterDropdown = function() {

        const updateDropdownContent = (i, value, str) => {
            filterState[i] = value + ' ' + str;
            if (value === 0) {
                filterState[i] = '';
            }
            if (filterState[1] !== '' || filterState[2] !== '') {
                if (filterState[0] !== '') {
                    filterState[0] = filterState[0].replace(/,\s/, '') + ', ';    
                }
                
            } else {
                filterState[0].replace(/,\s/, '');
            }
            if (filterState[2] !== '') {
                if (filterState[1] !== '') {
                    filterState[1] = filterState[1].replace(/,\s/, '') + ', ';
                }
            } else {
                filterState[1].replace(/,\s/, '');
            }
            filterString = filterState[0] + filterState[1] + filterState[2];
            
        };

        const cuttingString = (str) => {

            if (str.length > 20) {
                return str.substr(0, 19) + '...';
            } else {
                return str;
            }

        }
        
        const bedroomsPanel = $(this).find('#bedrooms .filter-dropdown__count');
        const bedsPanel = $(this).find('#beds .filter-dropdown__count');
        const bathroomsPanel = $(this).find('#bathrooms .filter-dropdown__count');
        
        let bedrooms = bedroomsPanel.attr('data-value');
        let beds = bedsPanel.attr('data-value');
        let bathrooms = bathroomsPanel.attr('data-value');

        //инициализируем строку дропдауна
        let filterString = '';
        let cutString = 'Сколько комнат';
        $(this).find('.filter-dropdown__content').empty();
        $(this).find('.filter-dropdown__content').html(cutString);

        const filterState = ['', '', ''];

        
        //обработчик клика Bedrooms Increment
        $(this).on('click', '#bedrooms .filter-dropdown__btn_inc', function() {
            bedrooms++;
            bedroomsPanel.attr('data-value', bedrooms);
            //склоняем "Спальни"
            if (bedrooms === 1) {
                bedroomsStr = 'спальня'
            } else if (bedrooms > 1 && bedrooms < 5) {
                bedroomsStr = 'спальни'
            } else {
                bedroomsStr = 'спален'
            }

            updateDropdownContent(0, bedrooms, bedroomsStr);
            cutString = cuttingString(filterString);

            bedroomsPanel.empty()
            bedroomsPanel.html(bedrooms);
            $(this).closest('.filter-dropdown').find('.filter-dropdown__content').empty();
            $(this).closest('.filter-dropdown').find('.filter-dropdown__content').html(cutString);
        })

        //обработчик клика Bedrooms Decrement
        $(this).on('click', '#bedrooms .filter-dropdown__btn_dec', function() {
            bedrooms--;
            bedroomsPanel.attr('data-value', bedrooms);
            //склоняем "Спальни"
            if (bedrooms === 1) {
                bedroomsStr = 'спальня'
            } else if (bedrooms > 1 && bedrooms < 5) {
                bedroomsStr = 'спальни'
            } else {
                bedroomsStr = 'спален'
            }

            updateDropdownContent(0, bedrooms, bedroomsStr);
            cutString = cuttingString(filterString);

            bedroomsPanel.empty()
            bedroomsPanel.html(bedrooms);
            $(this).closest('.filter-dropdown').find('.filter-dropdown__content').empty();
            $(this).closest('.filter-dropdown').find('.filter-dropdown__content').html(cutString);
        })

        //обработчик клика Beds Increment
        $(this).on('click', '#beds .filter-dropdown__btn_inc', function() {
            beds++;
            bedsPanel.attr('data-value', beds);
            //склоняем "Кровати"
            if (beds === 1) {
                bedsStr = 'кровать'
            } else if (beds > 1 && beds < 5) {
                bedsStr = 'кровати'
            } else {
                bedsStr = 'кроватей'
            }

            updateDropdownContent(1, beds, bedsStr);
            cutString = cuttingString(filterString);

            bedsPanel.empty()
            bedsPanel.html(beds);
            $(this).closest('.filter-dropdown').find('.filter-dropdown__content').empty();
            $(this).closest('.filter-dropdown').find('.filter-dropdown__content').html(cutString);
        })

        //обработчик клика Beds Decrement
        $(this).on('click', '#beds .filter-dropdown__btn_dec', function() {
            beds--;
            bedsPanel.attr('data-value', beds);
            //склоняем "Кровати"
            if (beds === 1) {
                bedsStr = 'кровать'
            } else if (beds > 1 && beds < 5) {
                bedsStr = 'кровати'
            } else {
                bedsStr = 'кроватей'
            }

            updateDropdownContent(1, beds, bedsStr);
            cutString = cuttingString(filterString);

            bedsPanel.empty()
            bedsPanel.html(beds);
            $(this).closest('.filter-dropdown').find('.filter-dropdown__content').empty();
            $(this).closest('.filter-dropdown').find('.filter-dropdown__content').html(cutString);
        })

        //обработчик клика Bathrooms Increment
        $(this).on('click', '#bathrooms .filter-dropdown__btn_inc', function() {
            bathrooms++;
            let bathroomsStr = bathroomsPanel.attr('data-string');
            bathroomsPanel.attr('data-value', bathrooms);
            //склоняем "Ванные комнаты"
            if (bathrooms === 1) {
                bathroomsStr = 'ванная комната'
            } else if (bathrooms > 1 && bathrooms < 5) {
                bathroomsStr = 'ванные комнаты'
            } else {
                bathroomsStr = 'ванных комнат'
            }

            updateDropdownContent(2, bathrooms, bathroomsStr);
            cutString = cuttingString(filterString);

            bathroomsPanel.attr('data-string', bathroomsStr);
            bathroomsPanel.empty()
            bathroomsPanel.html(bathrooms);
            $(this).closest('.filter-dropdown').find('.filter-dropdown__content').empty();
            $(this).closest('.filter-dropdown').find('.filter-dropdown__content').html(cutString);
        })

        //обработчик клика Bathrooms Decrement
        $(this).on('click', '#bathrooms .filter-dropdown__btn_dec', function() {
            bathrooms--;
            bathroomsPanel.attr('data-value', bathrooms);
            //склоняем "Ванные комнаты"
            if (bathrooms === 1) {
                bathroomsStr = 'ванная комната'
            } else if (bathrooms > 1 && bathrooms < 5) {
                bathroomsStr = 'ванные комнаты'
            } else {
                bathroomsStr = 'ванных комнат'
            }

            updateDropdownContent(2, bathrooms, bathroomsStr);
            cutString = cuttingString(filterString);

            bathroomsPanel.empty()
            bathroomsPanel.html(bathrooms);
            $(this).closest('.filter-dropdown').find('.filter-dropdown__content').empty();
            $(this).closest('.filter-dropdown').find('.filter-dropdown__content').html(cutString);
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