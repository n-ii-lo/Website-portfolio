// Content layer. JSON files in src/data mirror the admin's database documents one-to-one:
//   src/data/site.json            <- site/settings
//   src/data/projects/<id>.json   <- projects/<id>   (file name = URL slug)
// Text fields are {ru, uk, en} or a plain string (read as Russian).
import type { Lang } from '../i18n/ui';
import { config } from '../site.config';

export type L10n = string | Partial<Record<Lang, string>> | undefined | null;
export type Image = { src?: string; id?: string; alt?: string } | string | undefined | null;

export interface Block { type: string; [k: string]: any }
export interface Section { title: L10n; inToc?: boolean; blocks?: Block[] }
export interface Project {
  slug: string;
  title: L10n; company?: string; status?: string; year?: string;
  kind?: 'full' | 'short' | 'closed'; summary?: L10n;
  cover?: Image; coverNote?: string; accent?: string;
  role?: L10n; timeline?: L10n; team?: L10n; skills?: L10n;
  order?: number | string; published?: boolean;
  sections?: Section[];
}
export interface Site {
  name?: L10n; roleLine?: L10n; hero?: L10n; about?: L10n; footer?: L10n;
  experience?: { year?: string; company?: string; discipline?: L10n }[];
  contacts?: { label?: L10n; value?: string }[];
}

import siteJson from '../data/site.json';
export const site = siteJson as Site;

const files = import.meta.glob<{ default: Omit<Project, 'slug'> }>('../data/projects/*.json', { eager: true });

export const projects: Project[] = Object.entries(files)
  .map(([path, mod]) => ({ ...mod.default, slug: path.split('/').pop()!.replace(/\.json$/, '') }))
  .filter((p) => config.showDrafts || p.published)
  .sort((a, b) => Number(a.order ?? 999) - Number(b.order ?? 999));

/** Text in the requested language, falling back to Russian. */
export function tr(v: L10n, lang: Lang): { text: string; fallback: boolean } {
  if (v == null) return { text: '', fallback: false };
  if (typeof v === 'string') return { text: v, fallback: lang !== 'ru' && !!v };
  const own = (v[lang] || '').trim();
  if (own) return { text: own, fallback: false };
  const ru = (v.ru || '').trim();
  return { text: ru, fallback: lang !== 'ru' && !!ru };
}
export const t = (v: L10n, lang: Lang) => tr(v, lang).text;

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

/** Inline markup used in the admin: **bold**, *italic*, [нужны данные …] markers. Returns safe HTML. */
export function inline(s: string): string {
  let h = esc(s)
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>');
  h = config.showMarkers
    ? h.replace(/\[(нужн[^\]]*|потрібн[^\]]*|data needed[^\]]*|проверьте[^\]]*|черновик[^\]]*)\]/gi, '<mark>[$1]</mark>')
    : h.replace(/\s*\[(нужн[^\]]*|потрібн[^\]]*|data needed[^\]]*|проверьте[^\]]*|черновик[^\]]*)\]/gi, '');
  return h.replace(/\n/g, '<br>');
}

/** Localized inline HTML; a Russian fallback on uk/en pages is tagged lang="ru". */
export function html(v: L10n, lang: Lang): string {
  const { text, fallback } = tr(v, lang);
  if (!text) return '';
  const body = inline(text);
  if (!fallback) return body;
  return `<span lang="ru"${config.showMarkers ? ' class="no-tr" title="Нет перевода"' : ''}>${body}</span>`;
}

/** Paragraphs split on blank lines. */
export function paras(v: L10n, lang: Lang): string[] {
  const { text, fallback } = tr(v, lang);
  return text.split(/\n\s*\n/).map((x) => x.trim()).filter(Boolean)
    .map((x) => (fallback ? `<span lang="ru">${inline(x)}</span>` : inline(x)));
}

/** One item per line (role, team, skills, notes). */
export const lines = (v: L10n, lang: Lang) => t(v, lang).split(/\n+/).map((x) => x.trim()).filter(Boolean);

export const isHex = (s?: string) => !!s && /^#[0-9a-f]{6}$/i.test(s);

/** Static image path, or null when the admin only has a blob id (not exportable yet). */
export function imageSrc(img: Image): string | null {
  if (!img) return null;
  if (typeof img === 'string') return img;
  return img.src || null;
}
