import './jquery.simplePagination';

$(document).ready(() => {
    $('.pagination').pagination({
        items: 100,
        itemsOnPage: 12,
        pages: 15,
        displayedPages: 3,
        edges: 1,
        hrefTextPrefix: '?page=',
        cssStyle: 'pagination_toxin',
        prevText: '',
        nextText: 'arrow_forward',
    })
})