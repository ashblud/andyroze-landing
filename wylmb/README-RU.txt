SMART LINK — ANDY ROZE / WILL YOU LEAVE ME BLEEDING

1. Открой файл links.js.
2. Вставь адрес каждого сервиса в поле url.
3. Сервисы с пустым url не отображаются.
4. Залей все четыре файла в одну папку на сайте:
   - index.html
   - style.css
   - links.js
   - cover-wylmb.jpg

ДИПЛИНКИ

В большинстве случаев достаточно вставить обычную официальную ссылку вида:
https://open.spotify.com/track/...
https://music.apple.com/...
https://music.youtube.com/...

Это universal links: на телефоне они открывают приложение, когда оно установлено,
а иначе открываются в браузере.

Если сервис или дистрибьютор выдал отдельный app deep link, вставь его в appUrl.
Страница попробует открыть appUrl и через 1,1 секунды вернётся к обычному url,
если приложение не открылось.

ВАЖНО

Не переименовывай cover-wylmb.jpg, либо замени это имя одновременно в index.html
и style.css.

Для корректной обложки при публикации ссылки в соцсетях лучше заменить относительный
адрес cover-wylmb.jpg в og:image и twitter:image на полный адрес изображения после
загрузки сайта, например:
https://andyroze.com/bleeding/cover-wylmb.jpg

ФИРМЕННЫЕ ШРИФТЫ
-----------------
Andy Roze: Againts
Will You Leave Me Bleeding: AnniversDemo

В CSS уже настроена загрузка этих шрифтов. Если на сервере рядом с index.html
лежат ваши исходные файлы Againts.otf и AnniversDemo.ttf, сайт использует их.
Также предусмотрен резервный веб-источник, чтобы оформление не пропало.
