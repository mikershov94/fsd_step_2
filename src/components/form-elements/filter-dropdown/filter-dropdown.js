(function($) {

    $.fn.filterDropdown = function() {

        //функция, обновляющая строку дропдауна
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

        //функция, обрезающая результирующую строку, которая длинее 20 символов
        const cuttingString = (str) => {

            if (str.length > 20) {
                return str.substr(0, 19) + '...';
            } else {
                return str;
            }

        }

        //функция, которая вставляет значение в HTML-блок
        const insertValToHtml = (val, block) => {
            block.empty()
            block.html(val);
        };

        //функция, склоняющая слово "Спальни"
        const leadBedroomsStr = (val) => {
            if (val === 1) {
                return 'спальня'
            } else if (val > 1 && val < 5) {
                return 'спальни'
            } else {
                return 'спален'
            }
        };

        //функция, склоняющая слово "Кровати"
        const leadBedsStr = (val) => {
            if (val === 1) {
                return 'кровать'
            } else if (val > 1 && val < 5) {
                return 'кровати'
            } else {
                return 'кроватей'
            }
        };

        //функция, склоняющая слово "Ванные комнаты"
        const leadBathroomsStr = (val) => {
            if (val === 1) {
                return 'ванная комната'
            } else if (val > 1 && val < 5) {
                return 'ванные комнаты'
            } else {
                return 'ванных комнат'
            }
        };
        
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
            
            const units = leadBedroomsStr(bedrooms);

            updateDropdownContent(0, bedrooms, units);
            cutString = cuttingString(filterString);

            insertValToHtml(bedrooms, bedroomsPanel);
            $(this).closest('.filter-dropdown').find('.filter-dropdown__content').empty();
            $(this).closest('.filter-dropdown').find('.filter-dropdown__content').html(cutString);
        });

        //обработчик клика Bedrooms Decrement
        $(this).on('click', '#bedrooms .filter-dropdown__btn_dec', function() {
            bedrooms--;
            bedroomsPanel.attr('data-value', bedrooms);
            
            const units = leadBedroomsStr(bedrooms);

            updateDropdownContent(0, bedrooms, units);
            cutString = cuttingString(filterString);

            insertValToHtml(bedrooms, bedroomsPanel);
            $(this).closest('.filter-dropdown').find('.filter-dropdown__content').empty();
            $(this).closest('.filter-dropdown').find('.filter-dropdown__content').html(cutString);
        })

        //обработчик клика Beds Increment
        $(this).on('click', '#beds .filter-dropdown__btn_inc', function() {
            beds++;
            bedsPanel.attr('data-value', beds);
            
            const units = leadBedsStr(beds);

            updateDropdownContent(1, beds, units);
            cutString = cuttingString(filterString);

            insertValToHtml(beds, bedsPanel);
            $(this).closest('.filter-dropdown').find('.filter-dropdown__content').empty();
            $(this).closest('.filter-dropdown').find('.filter-dropdown__content').html(cutString);
        })

        //обработчик клика Beds Decrement
        $(this).on('click', '#beds .filter-dropdown__btn_dec', function() {
            beds--;
            bedsPanel.attr('data-value', beds);
            
            const units = leadBedsStr(beds);

            updateDropdownContent(1, beds, units);
            cutString = cuttingString(filterString);

            insertValToHtml(beds, bedsPanel);
            $(this).closest('.filter-dropdown').find('.filter-dropdown__content').empty();
            $(this).closest('.filter-dropdown').find('.filter-dropdown__content').html(cutString);
        })

        //обработчик клика Bathrooms Increment
        $(this).on('click', '#bathrooms .filter-dropdown__btn_inc', function() {
            bathrooms++;
            bathroomsPanel.attr('data-value', bathrooms);
            
            const units = leadBathroomsStr(bathrooms);

            updateDropdownContent(2, bathrooms, units);
            cutString = cuttingString(filterString);

            insertValToHtml(bathrooms, bathroomsPanel);
            $(this).closest('.filter-dropdown').find('.filter-dropdown__content').empty();
            $(this).closest('.filter-dropdown').find('.filter-dropdown__content').html(cutString);
        })

        //обработчик клика Bathrooms Decrement
        $(this).on('click', '#bathrooms .filter-dropdown__btn_dec', function() {
            bathrooms--;
            bathroomsPanel.attr('data-value', bathrooms);
            
            const units = leadBathroomsStr(bathrooms);

            updateDropdownContent(2, bathrooms, units);
            cutString = cuttingString(filterString);

            insertValToHtml(bathrooms, bathroomsPanel);
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