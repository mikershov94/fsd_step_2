Задание второго этапа обучения от FSD.

Деплой сделан на бесплатный хостинг от beget.ru.
С GitHub Pages возникли проблемы.
Посмотреть верстку страниц можно по ссылкам

http://s95009ql.beget.tech/                     Главная страница

http://s95009ql.beget.tech/search.html          Страница поиска номеров

http://s95009ql.beget.tech/room-details.html    Страница просмотра номера

http://s95009ql.beget.tech/login.html           Страница входа

http://s95009ql.beget.tech/registration.html    Страница регистрации

Страницы UI-Kit

http://s95009ql.beget.tech/color-and-types.html Цвета и шрифты

http://s95009ql.beget.tech/form-elements.html   Элементы форм

http://s95009ql.beget.tech/cards.html           Карточки

http://s95009ql.beget.tech/headers-footers.html Шапки и подвалы

Структура проекта:

    config - содержит конфигурацию webpack
    
    src - папка с исходным кодом
    
        components - содержит переиспользуемые блоки верстки. Каждый блок - папка, в которой лежат соответствующие pug, sass и js файлы
        
        pages - содержит шаблоны страниц верстки. В папке layouts лежат шаблоны от которых наследуются другие страницы
        
        styles - содержит стили для страниц верстки.
        
        index.js - входной файл
        
        main.sass - главный файл стилей
    
    static - содержит изображение, шрифты, иконки и т.п. Копируется в сборку.
