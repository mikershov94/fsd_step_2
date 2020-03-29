(function($) {

    $.fn.likeButton = function() {
        return this.each(function() {
            $(this).each(function() {
                if ($(this).attr('data-state') === 'liked') {
                    $(this).addClass('like-button_liked');
                    $(this).children('i').addClass('like-button__icon_liked');
                    $(this).children('i').text('favorite');
                    $(this).children('.like-button__count').addClass('like-button__count_liked')
                }
            })
    
            $(this).on('click', function() {
                const likeState = $(this).attr('data-state');

                if (likeState === 'liked') {
                    $(this).attr('data-state', '');
                    $(this).removeClass('like-button_liked');
                    $(this).children('i').removeClass('like-button__icon_liked');
                    $(this).children('i').text('favorite_border');
                    $(this).children('.like-button__count').removeClass('like-button__count_liked')
                } else {
                    $(this).attr('data-state', 'liked');
                    $(this).addClass('like-button_liked');
                    $(this).children('i').addClass('like-button__icon_liked');
                    $(this).children('i').text('favorite');
                    $(this).children('.like-button__count').addClass('like-button__count_liked')
                }

                
            })
        });
    }

})(jQuery);



$(document).ready(function() {
    $('.like-button').likeButton();
});