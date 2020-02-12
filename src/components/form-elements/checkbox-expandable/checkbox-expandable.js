(function($) {

    $.fn.checkboxExpandable = function() {

        const insertValToHtml = (val, block) => {
            block.empty()
            block.html(val);
        };
        
        return this.each(function() {


            $(this).on('click', '.checkbox-expandable__string', function() {
                const list = $(this).parent('.checkbox-expandable').children('.checkbox-expandable__list');
                const listState = list.attr('data-state');
                
                if (listState === 'expand') {
                    list.removeClass('checkbox-expandable__list_expanded');
                    list.attr('data-state', '');
                    insertValToHtml('expand_more', $(this).children('.checkbox-expandable__arrow'));
                } else {
                    list.addClass('checkbox-expandable__list_expanded');
                    list.attr('data-state', 'expand')
                    insertValToHtml('expand_less', $(this).children('.checkbox-expandable__arrow'));
                }
            })

        })

    };

})(jQuery);