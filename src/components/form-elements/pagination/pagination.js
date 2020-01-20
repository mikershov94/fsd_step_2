import './jquery.simplePagination';

$(document).ready(() => {
    $('.pagination').pagination({
        items: 10,
        itemsOnPage: 2,
        cssStyle: 'light-theme'
    })
})