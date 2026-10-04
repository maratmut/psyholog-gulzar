# Изображения и шрифты

Все исходные фотографии, шесть скриншотов отзывов и десять фотографий раздела «До / После» взяты с публичного psyholog-gulzar.com для запрошенного пользователем редизайна. Карта URL и файлов: `reference/assets.json`. Оптимизированные WebP: `assets/source-01.webp` … `assets/source-23.webp`.

Портрет для первого экрана подготовлен встроенным image_gen (навык imagegen, без CLI). Сохранён в `assets/hero-cutout.png` и оптимизирован в `assets/hero-cutout.webp`. Оригинальная фотография сохранена в `assets/source-16.webp`. Прозрачность проверена; результат визуально просмотрен перед интеграцией. Это обработанная версия оригинального портрета, а не новая фотография.

Точный запрос к инструменту:

> Use case: background-extraction. Asset type: transparent portrait cutout for a personal psychologist website. Precisely remove ONLY the room, wall, curtains and plant background from the supplied original photo. Preserve the actual photographed woman EXACTLY: same facial identity, every facial feature, expression, hair shape and hair strands, pose, hands, fingers, earrings, rings, black pinstripe jacket and white shirt, colors, lighting and framing. Do not regenerate, beautify, retouch, relight, extend or redraw the woman. Keep the same foreground photographic pixels as closely as possible. Produce clean natural hair edges and fully transparent alpha background, no shadow, no halo, no text, no border.

Графические обложки, кольца и значки созданы в CSS/SVG. Книжная композиция — иллюстрация набора, а не фотография физического товара.

Шрифты Oranienbaum и Manrope загружены из Google Fonts, размещены локально. Лицензии SIL Open Font License находятся в `assets/`.
