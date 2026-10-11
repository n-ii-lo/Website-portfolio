// Page chrome in three languages. Content texts come from src/data (admin export).
export const LANGS = ['ru', 'uk', 'en'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'ru';

export const LANG_LABEL: Record<Lang, string> = { ru: 'RU', uk: 'UA', en: 'EN' };
export const LANG_NAME: Record<Lang, string> = { ru: 'Русский', uk: 'Українська', en: 'English' };

const ui = {
  ru: {
    'nav.work': 'Работы',
    'nav.about': 'Обо мне',
    'nav.contact': 'Контакты',
    'nav.lang': 'Язык',
    'home.title': 'Портфолио',
    'home.work': 'Избранные работы',
    'home.experience': 'Опыт',
    'case.back': '← Назад',
    'case.toc': 'Содержание',
    'case.next': 'Следующий кейс',
    'case.meta': ['Роль', 'Сроки', 'Команда', 'Навыки'],
    'case.before': 'Как было',
    'case.current': 'Сейчас',
    'case.ba': ['До', 'После'],
    'case.draft': 'Черновик',
    'case.noImage': 'Картинка не загружена',
    'about.title': 'Обо мне',
    'about.experience': 'Опыт',
    'about.contacts': 'Контакты',
    'about.empty': '[нужны данные: текст обо мне]',
    'about.noContacts': '[нужны данные: почта, Telegram, Behance]',
    'notFound.title': 'Страница не найдена',
    'notFound.home': 'На главную',
    'skip': 'К содержимому',
    status: { shipped: 'Выпущено', prod: 'В продакшене', handed: 'Передано в разработку', concept: 'Концепт', contract: 'Контракт', wip: 'В работе' },
  },
  uk: {
    'nav.work': 'Роботи',
    'nav.about': 'Про мене',
    'nav.contact': 'Контакти',
    'nav.lang': 'Мова',
    'home.title': 'Портфоліо',
    'home.work': 'Вибрані роботи',
    'home.experience': 'Досвід',
    'case.back': '← Назад',
    'case.toc': 'Зміст',
    'case.next': 'Наступний кейс',
    'case.meta': ['Роль', 'Терміни', 'Команда', 'Навички'],
    'case.before': 'Як було',
    'case.current': 'Зараз',
    'case.ba': ['До', 'Після'],
    'case.draft': 'Чернетка',
    'case.noImage': 'Зображення не завантажено',
    'about.title': 'Про мене',
    'about.experience': 'Досвід',
    'about.contacts': 'Контакти',
    'about.empty': '[потрібні дані: текст про мене]',
    'about.noContacts': '[потрібні дані: пошта, Telegram, Behance]',
    'notFound.title': 'Сторінку не знайдено',
    'notFound.home': 'На головну',
    'skip': 'До вмісту',
    status: { shipped: 'Випущено', prod: 'У продакшені', handed: 'Передано в розробку', concept: 'Концепт', contract: 'Контракт', wip: 'У роботі' },
  },
  en: {
    'nav.work': 'Work',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.lang': 'Language',
    'home.title': 'Portfolio',
    'home.work': 'Selected work',
    'home.experience': 'Experience',
    'case.back': '← Back',
    'case.toc': 'Contents',
    'case.next': 'Next case',
    'case.meta': ['Role', 'Timeline', 'Team', 'Skills'],
    'case.before': 'Before',
    'case.current': 'Current',
    'case.ba': ['Before', 'After'],
    'case.draft': 'Draft',
    'case.noImage': 'Image not uploaded',
    'about.title': 'About',
    'about.experience': 'Experience',
    'about.contacts': 'Contact',
    'about.empty': '[data needed: about text]',
    'about.noContacts': '[data needed: email, Telegram, Behance]',
    'notFound.title': 'Page not found',
    'notFound.home': 'Back home',
    'skip': 'Skip to content',
    status: { shipped: 'Shipped', prod: 'In production', handed: 'Handed off', concept: 'Concept', contract: 'Contract', wip: 'In progress' },
  },
} as const;

export type UI = (typeof ui)['ru'];
export const useUI = (lang: Lang): UI => ui[lang] as unknown as UI;
export const isLang = (v: unknown): v is Lang => LANGS.includes(v as Lang);

// Same page in another language: /ru/work/x/ -> /en/work/x/
export function swapLang(pathname: string, to: Lang): string {
  const parts = pathname.split('/');
  if (isLang(parts[1])) parts[1] = to;
  else return `/${to}/`;
  return parts.join('/');
}
