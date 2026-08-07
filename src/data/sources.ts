export type SourceStatus = 'official' | 'platform' | 'official-media' | 'press';

export interface SourceRef {
  label: string;
  url: string;
  publisher: string;
  status: SourceStatus;
  lastChecked: string;
  note: string;
}

export const LAST_CHECKED = '2026-07-31';

export const SOURCES = {
  steam: {
    label: 'Steam store page',
    url: 'https://store.steampowered.com/app/2713000/Resonance_A_Plague_Tale_Legacy/',
    publisher: 'Valve / Steam',
    status: 'platform',
    lastChecked: '2026-08-07',
    note: 'App id 2713000, developer, publisher, release date, price, genres, categories, languages, screenshots, and the official Steam description.',
  },
  focus: {
    label: 'Focus Entertainment official site',
    url: 'https://www.focus-entmt.com/en/games',
    publisher: 'Focus Entertainment',
    status: 'official',
    lastChecked: LAST_CHECKED,
    note: 'Official publisher of Resonance: A Plague Tale Legacy, developed by Asobo Studio.',
  },
  steamMedia: {
    label: 'Steam official media gallery',
    url: 'https://store.steampowered.com/app/2713000/Resonance_A_Plague_Tale_Legacy/',
    publisher: 'Valve / Steam',
    status: 'official-media',
    lastChecked: LAST_CHECKED,
    note: 'Official screenshots, header art, and trailers published on the Steam store page.',
  },
  steamNews: {
    label: 'Official Steam devblogs and FAQ',
    url: 'https://store.steampowered.com/news/app/2713000',
    publisher: 'Asobo Studio / Focus Entertainment',
    status: 'official',
    lastChecked: LAST_CHECKED,
    note: 'First-party posts on the Steam news hub for App 2713000: the Resonance FAQ (platforms: "PC, Xbox Series X|S and PS5"), plus DEVBLOG #1 Sophia’s Story, #2 Anna Demetriou interview, #3 "Into The Myth", #4 Olivier Derivière interview.',
  },
  ign: {
    label: 'IGN preview coverage',
    url: 'https://www.ign.com/',
    publisher: 'IGN',
    status: 'press',
    lastChecked: LAST_CHECKED,
    note: 'Cited on the Steam page: "This is plainly the best A Plague Tale has ever played." Used only for the review quote.',
  },
} satisfies Record<string, SourceRef>;

export type SourceKey = keyof typeof SOURCES;

export const CORE_SOURCES = [SOURCES.steam, SOURCES.focus, SOURCES.steamMedia] as const;
