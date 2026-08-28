// Official confirmed facts only — pulled from the Steam store page (App 2713000, checked 2026-08-28)
// and Focus Entertainment. Used on the homepage and release-date page trust surfaces.
import { SITE } from './site';

export interface OfficialFact {
  label: string;
  value: string;
  sourceLabel: string;
  sourceUrl: string;
}

export const OFFICIAL_FACTS: OfficialFact[] = [
  {
    label: 'Full title',
    value: 'Resonance: A Plague Tale Legacy',
    sourceLabel: 'Steam',
    sourceUrl: SITE.steamUrl,
  },
  {
    label: 'Release date',
    value: 'Released August 27, 2026; standard Steam price is USD 49.99',
    sourceLabel: 'Steam',
    sourceUrl: SITE.steamUrl,
  },
  {
    label: 'Developer / publisher',
    value: 'Asobo Studio / Focus Entertainment',
    sourceLabel: 'Steam',
    sourceUrl: SITE.steamUrl,
  },
  {
    label: 'Price',
    value: 'USD 49.99 (standard edition)',
    sourceLabel: 'Steam',
    sourceUrl: SITE.steamUrl,
  },
  {
    label: 'Platforms',
    value: 'PC via Steam (DirectX 12, 64-bit), plus PlayStation 5 and Xbox Series X|S',
    sourceLabel: 'Steam store page + official Resonance FAQ',
    sourceUrl: 'https://store.steampowered.com/news/app/2713000',
  },
  {
    label: 'Story framing',
    value: 'Original prequel set 15 years before A Plague Tale: Requiem',
    sourceLabel: 'Steam description',
    sourceUrl: SITE.steamUrl,
  },
  {
    label: 'Protagonist',
    value: 'Sophia, a fierce young plunderer on the run, uncovering the secrets of her past',
    sourceLabel: 'Steam description',
    sourceUrl: SITE.steamUrl,
  },
  {
    label: 'Setting',
    value: "The Minotaur's Island — shifting between Sophia's Middle Ages and ancient Minoan times",
    sourceLabel: 'Steam description',
    sourceUrl: SITE.steamUrl,
  },
  {
    label: 'Combat',
    value: 'Dynamic, violent melee — agility, tricks, parries, and powerful strikes',
    sourceLabel: 'Steam description',
    sourceUrl: SITE.steamUrl,
  },
  {
    label: 'Signature mechanic',
    value: 'A stolen Minoan sphere manipulates light — a force woven by Daedalus into the island',
    sourceLabel: 'Steam description',
    sourceUrl: SITE.steamUrl,
  },
];

// Steam genre / tag list (verified from the store page)
export const STEAM_TAGS = [
  'Action',
  'Adventure',
  'Action-Adventure',
  'Puzzle',
  'Third Person',
  'Atmospheric',
  'Emotional',
  'Fantasy',
  'Historical',
  'Medieval',
  'Mythology',
  'Supernatural',
  'Female Protagonist',
  'Combat',
  'PvE',
] as const;

// Supported store features (Steam categories)
export const STEAM_FEATURES = [
  'Single-player',
  'Steam Achievements',
  'Full controller support',
  'DualSense controller support',
  'Steam Cloud',
  'HDR available',
  'Family Sharing',
] as const;
