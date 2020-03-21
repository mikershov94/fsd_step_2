(function($) {

    $.fn.guestDropdown = function() {

        return this.each(function() {
            //функция, обновляющая строку дропдауна
            const updateDropdownContent = (sum) => {
                let str
                if (sum === 1) {
                    str = ' гость'
                }
                str = ' гостей'

                return sum + str
            };

            //функция, которая вставляет значение в HTML-блок
            const insertValToHtml = (val, block) => {
                block.empty()
                block.html(val);
            };


            //функция, вставляющая строку
            const clearAndInsert = (block) => {
                block.parent('.guest-dropdown__panel').parent('.guest-dropdown__counter').parent('.guest-dropdown__list').parent('.guest-dropdown__box').find('.guest-dropdown__content').empty();
                block.parent('.guest-dropdown__panel').parent('.guest-dropdown__counter').parent('.guest-dropdown__list').parent('.guest-dropdown__box').find('.guest-dropdown__content').html(cutString);
            };

            //инициализируем строку дропдауна
            let cutString = 'Сколько гостей';
            $(this).find('.guest-dropdown__content').empty();
            $(this).find('.guest-dropdown__content').html(cutString);
            let valueLine = $(this).children('.guest-dropdown__value-line').children('.guest-dropdown__content')
            let guestSum = valueLine.attr('data-sum');

            //обработчик клика Adults Increment
            $(this).on('click', '#adults .guest-dropdown__btn_inc', function (e) {
                if ($(this).hasClass('guest-dropdown__btn_disabled')) return;

                const adultsPanel = $(this).parent('.guest-dropdown__panel');
                let adults = adultsPanel.children('.guest-dropdown__count').attr('data-value');
                adults++;
                guestSum++;
                adultsPanel.children('.guest-dropdown__count').attr('data-value', adults);
                valueLine.attr('data-sum', guestSum);

                if (adults === 1) {
                    $(this).parent('.guest-dropdown__panel').children('.guest-dropdown__btn_dec').removeClass('guest-dropdown__btn_disabled');
                    $(this).parent('.guest-dropdown__panel').parent('.guest-dropdown__counter').parent('.guest-dropdown__panel').parent('.guest-dropdown__list').children('.guest-dropdown__clear').removeClass('guest-dropdown__clear_disabled');
                    $(this).parent('.guest-dropdown__panel').parent('.guest-dropdown__counter').parent('.guest-dropdown__list').children('.guest-dropdown__buttons').children('.guest-dropdown__clear').removeClass('guest-dropdown__clear_disabled');
                } 
                if (adults === 10) {
                    $(this).addClass('guest-dropdown__btn_disabled');
                }

                cutString = updateDropdownContent(guestSum);

                insertValToHtml(adults, adultsPanel.children('.guest-dropdown__count'));
                clearAndInsert($(this));
                e.stopPropagation();
            });

            //обработчик клика Adults Decrement
            $(this).on('click', '#adults .guest-dropdown__btn_dec', function(e) {
                if ($(this).hasClass('guest-dropdown__btn_disabled')) return;

                const adultsPanel = $(this).parent('.guest-dropdown__panel');
                let adults = adultsPanel.children('.guest-dropdown__count').attr('data-value');
                adults--;
                guestSum --;
                console.log(guestSum)
                adultsPanel.children('.guest-dropdown__count').attr('data-value', adults);

                if (adults === 9) {
                    $(this).parent('.guest-dropdown__panel').children('.guest-dropdown__btn_inc').removeClass('guest-dropdown__btn_disabled');
                } 
                if (adults === 0) {
                    $(this).addClass('guest-dropdown__btn_disabled');

                    const kids = $(this).parent('.guest-dropdown__panel').parent('.guest-dropdown__counter').parent('.guest-dropdown__list').children('#kids').children('.guest-dropdown__panel').children('.guest-dropdown__count').attr('data-value')
                    const babies = $(this).parent('.guest-dropdown__panel').parent('.guest-dropdown__counter').parent('.guest-dropdown__list').children('#babies').children('.guest-dropdown__panel').children('.guest-dropdown__count').attr('data-value')
                    if ((babies == 0) && (kids == 0)) {
                        $(this).parent('.guest-dropdown__panel').parent('.guest-dropdown__counter').parent('.guest-dropdown__list').children('.guest-dropdown__buttons').children('.guest-dropdown__clear').addClass('guest-dropdown__clear_disabled');
                    }
                }
                
                cutString = updateDropdownContent(guestSum);

                insertValToHtml(adults, adultsPanel.children('.guest-dropdown__count'));
                clearAndInsert($(this))
                e.stopPropagation();
            })

            //обработчик клика Kids Increment
            $(this).on('click', '#kids .guest-dropdown__btn_inc', function(e) {
                if ($(this).hasClass('guest-dropdown__btn_disabled')) return;

                const kidsPanel = $(this).parent('.guest-dropdown__panel');
                let kids = kidsPanel.children('.guest-dropdown__count').attr('data-value');
                kids++;
                guestSum ++;
                kidsPanel.children('.guest-dropdown__count').attr('data-value', kids);

                if (kids === 1) {
                    $(this).parent('.guest-dropdown__panel').children('.guest-dropdown__btn_dec').removeClass('guest-dropdown__btn_disabled');
                    $(this).parent('.guest-dropdown__panel').parent('.guest-dropdown__counter').parent('.guest-dropdown__panel').parent('.guest-dropdown__list').children('.guest-dropdown__clear').removeClass('.guest-dropdown__clear_disabled');
                    $(this).parent('.guest-dropdown__panel').parent('.guest-dropdown__counter').parent('.guest-dropdown__list').children('.guest-dropdown__buttons').children('.guest-dropdown__clear').removeClass('guest-dropdown__clear_disabled');
                } 
                if (kids === 10) {
                    $(this).addClass('guest-dropdown__btn_disabled');
                }

                cutString = updateDropdownContent(guestSum);

                insertValToHtml(kids, kidsPanel.children('.guest-dropdown__count'));
                clearAndInsert($(this));
                e.stopPropagation();
            })

            //обработчик клика Kids Decrement
            $(this).on('click', '#kids .guest-dropdown__btn_dec', function(e) {
                if ($(this).hasClass('guest-dropdown__btn_disabled')) return;

                const kidsPanel = $(this).parent('.guest-dropdown__panel');
                let kids = kidsPanel.children('.guest-dropdown__count').attr('data-value');
                kids--;
                guestSum--;
                kidsPanel.children('.guest-dropdown__count').attr('data-value', kids);

                if (kids === 9) {
                    $(this).parent('.guest-dropdown__panel').children('.guest-dropdown__btn_inc').removeClass('guest-dropdown__btn_disabled');
                } 
                if (kids === 0) {
                    $(this).addClass('guest-dropdown__btn_disabled');

                    const babies = $(this).parent('.guest-dropdown__panel').parent('.guest-dropdown__counter').parent('.guest-dropdown__list').children('#babies').children('.guest-dropdown__panel').children('.guest-dropdown__count').attr('data-value')
                    const adults = $(this).parent('.guest-dropdown__panel').parent('.guest-dropdown__counter').parent('.guest-dropdown__list').children('#adults').children('.guest-dropdown__panel').children('.guest-dropdown__count').attr('data-value')
                    if ((adults == 0) && (babies == 0)) {
                        $(this).parent('.guest-dropdown__panel').parent('.guest-dropdown__counter').parent('.guest-dropdown__list').children('.guest-dropdown__buttons').children('.guest-dropdown__clear').addClass('guest-dropdown__clear_disabled');
                    }
                }
                
                cutString = updateDropdownContent(guestSum);

                insertValToHtml(kids, kidsPanel.children('.guest-dropdown__count'));
                clearAndInsert($(this));
                e.stopPropagation()
            })

            //обработчик клика Babies Increment
            $(this).on('click', '#babies .guest-dropdown__btn_inc', function(e) {
                if ($(this).hasClass('guest-dropdown__btn_disabled')) return;

                const babiesPanel = $(this).parent('.guest-dropdown__panel');
                let babies = babiesPanel.children('.guest-dropdown__count').attr('data-value');
                babies++;
                guestSum++;
                babiesPanel.children('.guest-dropdown__count').attr('data-value', babies);

                if (babies === 1) {
                    $(this).parent('.guest-dropdown__panel').children('.guest-dropdown__btn_dec').removeClass('guest-dropdown__btn_disabled');
                    $(this).parent('.guest-dropdown__panel').parent('.guest-dropdown__counter').parent('.guest-dropdown__panel').parent('.guest-dropdown__list').children('.guest-dropdown__clear').removeClass('.guest-dropdown__clear_disabled');
                    $(this).parent('.guest-dropdown__panel').parent('.guest-dropdown__counter').parent('.guest-dropdown__list').children('.guest-dropdown__buttons').children('.guest-dropdown__clear').removeClass('guest-dropdown__clear_disabled');
                } 
                if (babies === 5) {
                    $(this).addClass('guest-dropdown__btn_disabled');
                }
                
                cutString = updateDropdownContent(guestSum);

                insertValToHtml(babies, babiesPanel.children('.guest-dropdown__count'));
                clearAndInsert($(this));
                e.stopPropagation()
            })

            //обработчик клика Babies Decrement
            $(this).on('click', '#babies .guest-dropdown__btn_dec', function(e) {
                if ($(this).hasClass('guest-dropdown__btn_disabled')) return;

                const babiesPanel = $(this).parent('.guest-dropdown__panel');
                let babies = babiesPanel.children('.guest-dropdown__count').attr('data-value');
                babies--;
                guestSum--;
                babiesPanel.children('.guest-dropdown__count').attr('data-value', babies);

                if (babies === 4) {
                    $(this).parent('.guest-dropdown__panel').children('.guest-dropdown__btn_inc').removeClass('guest-dropdown__btn_disabled');
                } 
                if (babies === 0) {
                    $(this).addClass('guest-dropdown__btn_disabled');

                    const kids = $(this).parent('.guest-dropdown__panel').parent('.guest-dropdown__counter').parent('.guest-dropdown__list').children('#kids').children('.guest-dropdown__panel').children('.guest-dropdown__count').attr('data-value')
                    const adults = $(this).parent('.guest-dropdown__panel').parent('.guest-dropdown__counter').parent('.guest-dropdown__list').children('#adults').children('.guest-dropdown__panel').children('.guest-dropdown__count').attr('data-value')
                    if ((adults == 0) && (kids == 0)) {
                        $(this).parent('.guest-dropdown__panel').parent('.guest-dropdown__counter').parent('.guest-dropdown__list').children('.guest-dropdown__buttons').children('.guest-dropdown__clear').addClass('guest-dropdown__clear_disabled');
                    }
                }
                
                cutString = updateDropdownContent(guestSum);

                insertValToHtml(babies, babiesPanel.children('.guest-dropdown__count'));
                clearAndInsert($(this));
                e.stopPropagation()
            })

            //обработчик клика по Dropdown
            $(this).on('click', '.guest-dropdown__value-line', function(e) {
                $('.filter-dropdown').find('.guest-dropdown__list').removeClass('guest-dropdown__list_expanded');
                $(this).closest('.guest-dropdown').find('.guest-dropdown__list').addClass('guest-dropdown__list_expanded');
                e.stopPropagation()
            })


            //обработчик клика за пределами Dropdown
            $(document).click(function(e) {
                if ($(e.target).closest('.guest-dropdown').length) return;
                $('.guest-dropdown').children('.guest-dropdown__box').children('.guest-dropdown__list').removeClass('guest-dropdown__list_expanded');
                e.stopPropagation()
            })

            //обработчик кнопки Очистить
            $(this).on('click', '.guest-dropdown__clear', function(e) {
                const list = $(this).parent('.guest-dropdown__buttons').parent('.guest-dropdown__list');
                const valueLine = list.parent('.guest-dropdown').children('.guest-dropdown__value-line')

                guestSum = 0;

                list.children('ul').children('li').children('.guest-dropdown__panel').children('.guest-dropdown__count').attr('data-value', 0);
                valueLine.children('.guest-dropdown__content').attr('data-sum', 0);
                list.children('ul').children('li').children('.guest-dropdown__panel').children('.guest-dropdown__btn_dec').addClass('guest-dropdown__btn_disabled');
                list.children('ul').children('li').children('.guest-dropdown__panel').children('.guest-dropdown__btn_inc').removeClass('guest-dropdown__btn_disabled')
                list.children('.guest-dropdown__buttons').children('.guest-dropdown__clear').addClass('guest-dropdown__clear_disabled');

                cutString = 'Сколько гостей';

                const kids = $(this).parent('.guest-dropdown__buttons').parent('.guest-dropdown__list').find('li#kids')
                const adults = $(this).parent('.guest-dropdown__buttons').parent('.guest-dropdown__list').find('li#adults')
                const babies = $(this).parent('.guest-dropdown__buttons').parent('.guest-dropdown__list').find('li#babies')

                kids.children('.guest-dropdown__panel').children('.guest-dropdown__count').attr('data-value', 0);
                adults.children('.guest-dropdown__panel').children('.guest-dropdown__count').attr('data-value', 0);
                babies.children('.guest-dropdown__panel').children('.guest-dropdown__count').attr('data-value', 0);
            
                kids.children('.guest-dropdown__panel').children('.guest-dropdown__btn_dec').addClass('guest-dropdown__btn_disabled');
                adults.children('.guest-dropdown__panel').children('.guest-dropdown__btn_dec').addClass('guest-dropdown__btn_disabled');
                babies.children('.guest-dropdown__panel').children('.guest-dropdown__btn_dec').addClass('guest-dropdown__btn_disabled');

                insertValToHtml(guestSum, kids.children('.guest-dropdown__panel').children('.guest-dropdown__count'));
                insertValToHtml(guestSum, adults.children('.guest-dropdown__panel').children('.guest-dropdown__count'));
                insertValToHtml(guestSum, babies.children('.guest-dropdown__panel').children('.guest-dropdown__count'));
                $(this).parent('.guest-dropdown__buttons').parent('.guest-dropdown__list').parent('.guest-dropdown__box').find('.guest-dropdown__content').empty();
                $(this).parent('.guest-dropdown__buttons').parent('.guest-dropdown__list').parent('.guest-dropdown__box').find('.guest-dropdown__content').html(cutString);
            })
        });
    }

})(jQuery)

$(document).ready(() => {
    $('.guest-dropdown').children('.guest-dropdown__box').guestDropdown();
})