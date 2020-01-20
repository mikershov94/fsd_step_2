import './jquery.simplePagination';

$(document).ready(() => {
    $('.pagination').pagination({
        items: 10,
        itemsOnPage: 2,
        hrefTextPrefix: '?page=',
        cssStyle: 'pagination_toxin',
        prevText: '',
        nextText: 'arrow_forward',
    })
})