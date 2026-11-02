# Старый сайт Дани: разбор и что переносим в v2

Источник: 24 скриншота `danylochuprov.framer.website` от 2026-11-02 (папка проекта Claude `danylo old site/`). Сайт сделан на Framer, только английский, две страницы: главная и About.

Это не сайт v0.1 из ветки `legacy-v0.1`, а более ранний, публичный сайт-визитка Дани как фрилансера и студии.

Короткий вывод: из старого сайта берём **факты** (клиенты, проекты, город, ссылки, фото) и **8 клиентских сайтов в галерею**. Тон «агентства» («Scale your Brand…»), аккордеон навыков, диаграмму Design Thinking и визуальный стиль не переносим.

---

## 1. Что было на сайте

### Шапка и футер (на всех страницах)

- Чёрная шапка: логотип-кружок с градиентом + «Danylo» слева, справа `About` и `DM to Danylo`.
- Футер: «©2025 Huemax Digital, Sole Proprietor FOP, Odesa, Ukraine.» и «"Art is theft." — Pablo Picasso».
- Перед футером большой CTA-блок: «Scale your Brand. Boost Valuation. Streamline UX. Drive Engagement.» + кнопка «DM to Danylo».

### Главная

| Блок | Содержание |
|---|---|
| Hero | Градиентные «пузыри» во весь экран. «Hi! My name is Danylo, i'm product & web designer». Кнопки «My work», «About me» |
| Позиционирование | «I help early-stage founders, product companies and businesses of all kinds to strategize (UX), ship clear landing pages and product (UI) that feel engaging, enjoyable to use and actually convert.» Справа бегущая строка логотипов клиентов (видно TANU) |
| Core expertise | 1. Product design 2. Website development 3. Marketing design 4. Business presentations |
| Коротко о себе | Фото ч/б. «Danylo Chuprov is Multidisciplinary Product Designer originally from Odesa, Ukraine. With 4+ years of leading complex enterprise, government projects and locals as well as helping startups achieve PMF.» «Worked with: Beeezo, DataArt, Razom, Safeline, TANU, MyRecoveryConnect, Synergetica.» |
| Проекты | 9 карточек одна под другой: название, тег отрасли, тип работы, большой скрин сайта (таблица в разделе 3) |

### About

| Блок | Содержание |
|---|---|
| Hero | Чёрный фон, ч/б фото Дани за рабочим столом. «DANYLO CHUPROV». «Multidisciplinary Product Designer originally from Odesa, with 5 years of experience building digital products from 0 → 1 startups to growing global companies.» «Danylo works with founders to shape the product vision through rapid prototyping, collaborating with engineering teams to iterate until the right market fit is reached.» |
| Capabilities | Аккордеон из 6 пунктов (тексты в разделе 5) |
| Design Thinking Process | «Working inside chaos and creating clarity.» «Danylo's deep expertise in Product / UX strategy and tested design patterns enable him to move faster and with greater precision than other design agencies.» + диаграмма Венна Desirability / Feasibility / Viability |
| Links | CV / Resume, LinkedIn, Dribbble, Twitter |

---

## 2. Решение по каждому блоку

| Блок старого сайта | В v2 | Куда и как |
|---|---|---|
| Hero «Hi! My name is Danylo…» | **Переделать** | Фраза в третьем лице, как у Рейчел: одна строка про то, кто Даня и что делает. Обращение «Hi!», строчное «i'm» и две кнопки убираем |
| Позиционирование «I help early-stage founders…» | **Взять смысл** | Идея «от нуля до MVP, стратегия + интерфейс» уходит в hero или в первый абзац «Обо мне». Формулировку пишем заново на русском |
| Core expertise (4 пункта) | **Убрать как список** | У Рейчел списка навыков нет. «Маркетинговый дизайн» и «презентации» показываем делом: кейс 4 и карточки в галерее |
| Фото ч/б | **Взять** | Группа «01 / Я» на «Обо мне». Нужен исходник в высоком разрешении |
| Био (Одесса, опыт) | **Взять факты, переписать** | Первый абзац «Обо мне»: 7 лет в ИТ, 5 в дизайне (раздел 4) |
| «Worked with: …» | **Взять** | Колонка «Раньше» на главной и таблица опыта на «Обо мне». Компании ссылками с превью при наведении (SPEC 7.1.1) |
| Бегущая строка логотипов | **Убрать** | Заменяется ссылками с превью |
| Проект Beeezo | **Взять, расширить** | Это кейсы 1–5 из `portfolio-plan/beeezo-cases.md`. Скрин Framer-сайта Beeezo уходит в кейс 3 «Сайт на Framer» |
| Остальные 8 проектов | **Взять в галерею** | Карточки галереи с тегами и ссылкой ↗ на живой сайт (раздел 3) |
| CTA «Scale your Brand…» + «DM to Danylo» | **Убрать** | Тон агентства не подходит к портфолио продуктового дизайнера. Вместо него строка о доступности в конце «Обо мне» («Открыт к …») и контакты в футере |
| Capabilities (аккордеон) | **Убрать со страницы** | Тексты общие («Visionary Leader», «Craft and Quality»). Если что-то нужно, 2–3 мысли уходят в текст «Обо мне» и в `assistant.json → facts`, чтобы ассистент мог отвечать «как Даня работает» |
| Design Thinking + диаграмма Венна | **Убрать** | Шаблонная схема, не про Даню. Фразу «Working inside chaos and creating clarity» можно оставить как ответ ассистента на вопрос про подход |
| Links | **Взять** | Футер и `content/site/settings.json → contacts`. Резюме отдельной ссылкой `Резюме ↗` справа вверху |
| Футер ©Huemax Digital, ФОП | **Под вопросом** | По умолчанию убираем с сайта (это реквизиты студии, а не портфолио) |
| Цитата Пикассо | **Убрать** | |
| Визуальный стиль (градиентные пузыри, чёрная шапка, Framer) | **Не переносим** | Визуальный дизайн v2 делает Даня, шрифт Onest |

---

## 3. Проекты со старого сайта → галерея v2

Порядок и подписи как на старом сайте. Тег в галерее предлагается по типу работы, а не по отрасли: фильтр «E-commerce / HoReCa / HR» мало говорит рекрутеру, «Сайт / Дизайн-система / Shopify» говорит больше.

| Проект | Отрасль (старый тег) | Работа (как было) | Что на скрине | Тег галереи (предложение) | Вопрос к Дане |
|---|---|---|---|---|---|
| Beeezo | Decentralized Finance | 0 → MVP, Web App | Framer-сайт Beeezo, «Interactive marketing solutions» | — (это кейсы 1–5) | — |
| Avtocase | E-commerce | 0 → 1 UX/UI Design | Сайт «Преміум аксесуари для авто» | Сайт | Ссылка жива? |
| Safeline | Human Resources | 0 → MVP, Webflow Development | Сайт рекрутинга «Рекрутинг нового рівня» | Сайт, Webflow | Ссылка жива? |
| Nommy | E-commerce | Design System Web / iOS | Доставка еды, «Вилки палки стали Nommy» | Дизайн-система | Есть материалы ДС на отдельный кейс? |
| ESHO | E-commerce | 0 → MVP, Design System Web | Доставка еды, каталог с иконками | Дизайн-система | Связь с Nommy (похожий интерфейс)? |
| TANU | HoReCa | Website Development | Кафе-морозиво в Одессе | Сайт | |
| Shelest | HoReCa | Website Design | Загородный отдых под Киевом, «Місце, де чутно думки» | Сайт | |
| Goodcups | E-commerce | Shopify Web Development | Магазин многоразовых капсул для кофе | Сайт, Shopify | Цифры со скрина («1M+ happy customers») это данные клиента, не результат Дани. В подпись не берём |
| Furn Object | E-commerce | Shopify Web Development | Магазин мебели и предметов | Сайт, Shopify | |

Что нужно для каждой карточки: обложка (скрин первого экрана в высоком разрешении или короткая петля прокрутки до 4 MB), подпись в одну строку (что делал Даня), год, ссылка на живой сайт, если он жив.

Из «Worked with» есть компании без карточки: DataArt, Razom, MyRecoveryConnect, Synergetica. Для них нужно понять, что это было (место работы, клиент, проект), прежде чем ставить в опыт.

---

## 4. Расхождения в фактах

Ассистент и сайт должны говорить одно и то же. Пока в источниках разное:

| Факт | Старый сайт, главная | Старый сайт, About | Проект Claude |
|---|---|---|---|
| Опыт | «4+ years» | «5 years» | 3 года продуктовым дизайнером в Beeezo |
| **Решено 2026-11-02 (Даня)** | | | **7 лет в ИТ, из них 5 лет в дизайне.** 3 года в Beeezo остаются фактом про Beeezo, а не общим опытом |
| Роль | «product & web designer» | «Multidisciplinary Product Designer» | «Продуктовый дизайнер» |
| Формат работы | Студия / ФОП Huemax Digital, работа с основателями | то же | Наёмный дизайнер в Beeezo, тексты от лица сотрудника |

Везде на сайте и в базе ассистента пишем: 7 лет в ИТ, 5 лет в дизайне. «4+» и «5 years» со старого сайта не используем.

---

## 5. Тексты со старого сайта (дословно, для архива)

Позиционирование:
> I help early-stage founders, product companies and businesses of all kinds to strategize (UX), ship clear landing pages and product (UI) that feel engaging, enjoyable to use and actually convert.

Capabilities:
- **Strategic Alignment.** Tying design outcomes to product strategy, ensuring that customer experiences are both meaningful and aligned with organizational priorities.
- **Collaboration and Communication.** Working cross-functionally within product, engineering, and marketing teams, ensuring alignment and seamless execution of shared goals through clear communication.
- **Product Development Lifecycle.** A deep expertise in the full lifecycle of product development, including collaboration across product, design, engineering and overseeing and developing best in class processes for UX, research, and content teams.
- **Craft and Quality.** Defining and upholding a standard of excellence for polished, user-centered design. Never settling for mediocre result.
- **Visionary Leader.** Encouraging teams to embrace iteration and innovation as tools to create impactful, customer-centered solutions. Align the team around a shared vision for success that fosters a sense of ownership and pride in their work.
- **Design Systems.** Experienced in leveraging and influencing design systems to deliver cohesive and scalable solutions.

Design Thinking Process:
> Working inside chaos and creating clarity. Danylo's deep expertise in Product / UX strategy and tested design patterns enable him to move faster and with greater precision than other design agencies.

---

## 6. Что меняется в спеке

- SPEC 7.3 (Галерея): начальное наполнение = 8 проектов из раздела 3, теги по типу работы.
- SPEC 7.1 и 7.5: компании из «Worked with» идут в «Раньше» и в опыт, когда Даня подтвердит, что с каждой было.
- SPEC 8.4 (база ассистента): Capabilities и Design Thinking не идут в базу дословно. Только то, что Даня подтвердит в `assistant.json → facts`.
- SPEC 5.2 (шрифты): по решению Дани от 2026-11-02 шрифт всего сайта Onest, визуальный дизайн делает Даня.
- Домен: когда v2 выйдет, на `danylochuprov.framer.website` поставить ссылку на новый сайт или снять старый с публикации.

## 7. Вопросы к Дане

1. ~~Сколько лет опыта писать?~~ Ответ: 7 лет в ИТ, 5 в дизайне.
2. Позиционирование v2: продуктовый дизайнер в компании (как в кейсах Beeezo) или дизайнер, который работает с основателями от нуля до MVP (как на старом сайте)? От этого зависит фраза hero.
3. Все 8 клиентских сайтов показываем в галерее, или какие-то убрать?
4. DataArt, Razom, MyRecoveryConnect, Synergetica: что это было и показываем ли?
5. Huemax Digital и ФОП в футере нужны?
6. Dribbble и Twitter (X) ещё живые, оставляем в контактах?
7. Куда вела кнопка «DM to Danylo» (Telegram, почта)? Этот контакт ставим в футер.
