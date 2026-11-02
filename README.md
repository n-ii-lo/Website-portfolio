# Портфолио Дани · v2

Ветка `v2`: новый сайт в духе обновлённого [rachelchen.tech](https://www.rachelchen.tech/). Кода пока нет, есть спека и контент для старта.

| Что | Где |
|---|---|
| Спека на разработку | [docs/SPEC.md](docs/SPEC.md) |
| Скриншоты референса с подписями | [docs/reference/](docs/reference/README.md) |
| Правила для LLM-разработчика | [AGENTS.md](AGENTS.md) |
| Контент и его формат | [content/](content/README.md) |
| Разбор старого сайта на Framer | [docs/OLD-SITE.md](docs/OLD-SITE.md) |
| Старый сайт v0.1 (Astro) | ветка `main`, ветка `legacy-v0.1`, описание в [docs/legacy-v0.1/](docs/legacy-v0.1/README.md) |

## Как идёт работа

1. В проекте Claude планируем и наполняем контент, коммитим его в `content/` этой ветки.
2. Разработку ведёт другая LLM по `docs/SPEC.md`, в этой же ветке или в ветках от неё.
3. В `main` сливаем, когда Даня скажет, что v2 готова.

Стек: Astro на Cloudflare Workers, Workers AI (GLM) для ассистента, D1, R2, Durable Objects, Sveltia CMS. Подробности и обоснование в разделе 3 спеки.
