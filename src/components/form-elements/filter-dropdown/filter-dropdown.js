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

        //функция, вставляющая строку
        const clearAndInsert = (block) => {
            block.parent('.filter-dropdown__panel').parent('.filter-dropdown__counter').parent('ul').parent('.filter-dropdown__list').parent('.filter-dropdown').find('.filter-dropdown__content').empty();
            block.parent('.filter-dropdown__panel').parent('.filter-dropdown__counter').parent('ul').parent('.filter-dropdown__list').parent('.filter-dropdown').find('.filter-dropdown__content').html(cutString);
        };

        //инициализируем строку дропдауна
        let filterString = '';
        let cutString = 'Сколько комнат';
        $(this).find('.filter-dropdown__content').empty();
        $(this).find('.filter-dropdown__content').html(cutString);

        const filterState = ['', '', ''];

        //обработчик клика Bedrooms Increment
        $(this).on('click', '#bedrooms .filter-dropdown__btn_inc', function(e) {
            const bedroomsPanel = $(this).parent('.filter-dropdown__panel');
            let bedrooms = bedroomsPanel.children('.filter-dropdown__count').attr('data-value');
            bedrooms++;
            bedroomsPanel.children('.filter-dropdown__count').attr('data-value', bedrooms);
            
            const units = leadBedroomsStr(bedrooms);

            updateDropdownContent(0, bedrooms, units);
            cutString = cuttingString(filterString);

            insertValToHtml(bedrooms, bedroomsPanel.children('.filter-dropdown__count'));
            clearAndInsert($(this));
            e.stopPropagation();
        });

        //обработчик клика Bedrooms Decrement
        $(this).on('click', '#bedrooms .filter-dropdown__btn_dec', function(e) {
            const bedroomsPanel = $(this).parent('.filter-dropdown__panel');
            let bedrooms = bedroomsPanel.children('.filter-dropdown__count').attr('data-value');
            bedrooms--;
            bedroomsPanel.children('.filter-dropdown__count').attr('data-value', bedrooms);
            
            const units = leadBedroomsStr(bedrooms);

            updateDropdownContent(0, bedrooms, units);
            cutString = cuttingString(filterString);

            insertValToHtml(bedrooms, bedroomsPanel.children('.filter-dropdown__count'));
            clearAndInsert($(this))
            e.stopPropagation();
        })

        //обработчик клика Beds Increment
        $(this).on('click', '#beds .filter-dropdown__btn_inc', function(e) {
            const bedsPanel = $(this).parent('.filter-dropdown__panel');
            let beds = bedsPanel.children('.filter-dropdown__count').attr('data-value');
            beds++;
            bedsPanel.children('.filter-dropdown__count').attr('data-value', beds);

            const units = leadBedsStr(beds);

            updateDropdownContent(1, beds, units);
            cutString = cuttingString(filterString);

            insertValToHtml(beds, bedsPanel.children('.filter-dropdown__count'));
            clearAndInsert($(this));
            e.stopPropagation();
        })

        //обработчик клика Beds Decrement
        $(this).on('click', '#beds .filter-dropdown__btn_dec', function(e) {
            const bedsPanel = $(this).parent('.filter-dropdown__panel');
            let beds = bedsPanel.children('.filter-dropdown__count').attr('data-value');
            beds--;
            bedsPanel.children('.filter-dropdown__count').attr('data-value', beds);
            
            const units = leadBedsStr(beds);

            updateDropdownContent(1, beds, units);
            cutString = cuttingString(filterString);

            insertValToHtml(beds, bedsPanel.children('.filter-dropdown__count'));
            clearAndInsert($(this));
            e.stopPropagation()
        })

        //обработчик клика Bathrooms Increment
        $(this).on('click', '#bathrooms .filter-dropdown__btn_inc', function(e) {
            const bathroomsPanel = $(this).parent('.filter-dropdown__panel');
            let bathrooms = bathroomsPanel.children('.filter-dropdown__count').attr('data-value');
            bathrooms++;
            bathroomsPanel.children('.filter-dropdown__count').attr('data-value', bathrooms);
            
            const units = leadBathroomsStr(bathrooms);

            updateDropdownContent(2, bathrooms, units);
            cutString = cuttingString(filterString);

            insertValToHtml(bathrooms, bathroomsPanel.children('.filter-dropdown__count'));
            clearAndInsert($(this));
            e.stopPropagation()
        })

        //обработчик клика Bathrooms Decrement
        $(this).on('click', '#bathrooms .filter-dropdown__btn_dec', function(e) {
            const bathroomsPanel = $(this).parent('.filter-dropdown__panel');
            let bathrooms = bathroomsPanel.children('.filter-dropdown__count').attr('data-value');
            bathrooms--;
            bathroomsPanel.children('.filter-dropdown__count').attr('data-value', bathrooms);
            
            const units = leadBathroomsStr(bathrooms);

            updateDropdownContent(2, bathrooms, units);
            cutString = cuttingString(filterString);

            insertValToHtml(bathrooms, bathroomsPanel.children('.filter-dropdown__count'));
            clearAndInsert($(this));
            e.stopPropagation()
        })

        //обработчик клика по Dropdown
        $(this).on('click', '.filter-dropdown__value-line', function(e) {
            $('.filter-dropdown').find('.filter-dropdown__list').removeClass('filter-dropdown__list_expanded');
            $(this).closest('.filter-dropdown').find('.filter-dropdown__list').addClass('filter-dropdown__list_expanded');
            e.stopPropagation()
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