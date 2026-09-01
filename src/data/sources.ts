export type SourceStatus = 'official' | 'platform' | 'official-media' | 'community' | 'press';

export interface SourceRef {
  label: string;
  url: string;
  publisher: string;
  status: SourceStatus;
  lastChecked: string;
  note: string;
}

export const LAST_CHECKED = '2026-08-28';

export const SOURCES = {
  steam: {
    label: 'Steam store page',
    url: 'https://store.steampowered.com/app/2713000/Resonance_A_Plague_Tale_Legacy/',
    publisher: 'Valve / Steam',
    status: 'platform',
    lastChecked: '2026-08-28',
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
  steamCommunity: {
    label: 'Steam community reports',
    url: 'https://store.steampowered.com/app/2713000/Resonance_A_Plague_Tale_Legacy/#app_reviews_hash',
    publisher: 'Steam players',
    status: 'community',
    lastChecked: '2026-08-28',
    note: 'Recent English player reviews and discussions. Completion time, chapter count, Story Select, persistence, structure, traversal, and performance observations are player reports rather than official specifications.',
  },
  steamNews: {
    label: 'Official Steam devblogs and FAQ',
    url: 'https://store.steampowered.com/news/app/2713000',
    publisher: 'Asobo Studio / Focus Entertainment',
    status: 'official',
    lastChecked: LAST_CHECKED,
    note: 'First-party posts on the Steam news hub for App 2713000: the Resonance FAQ (platforms: "PC, Xbox Series X|S and PS5"), plus DEVBLOG #1 Sophia’s Story, #2 Anna Demetriou interview, #3 "Into The Myth", #4 Olivier Derivière interview.',
  },
  steamAchievements: {
    label: 'Steam global achievement stats',
    url: 'https://steamcommunity.com/stats/2713000/achievements/',
    publisher: 'Valve / Steam',
    status: 'platform',
    lastChecked: '2026-09-01',
    // Valve 自己发布的成就名称、公开描述与全球解锁率。隐藏成就在这个页面上描述为空，
    // 不能据此推断其条件 —— 页面里把它们标为 hidden，而不是编一个要求。
    note: 'The public achievement stats page for App 2713000: 36 achievement names, the descriptions Valve publishes, and the global unlock percentage of each. 19 entries are hidden, meaning Valve publishes the name but not the requirement. Percentages are a snapshot read on 2026-09-01 and drift as more accounts play.',
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
