// 站点全局常量 —— 单一数据源，避免各页面硬编码不一致
import { SOURCES } from './sources';

export const SITE = {
  name: 'Plague Tale Legacy Guide',
  shortName: 'PTL Guide',
  url: 'https://plaguetaleguide.com',
  // Official release date (Steam store page, App 2713000)
  releaseDate: '2026-08-27',
  tagline: 'Verified Pre-release Guide',
  description:
    'Independent Resonance: A Plague Tale Legacy guide with source-tracked pages for the story, characters, collectibles, combat, and skills. Every fact carries a confirmation status.',
  locale: 'en',
  // Full game name used in schema / VideoGame entity
  gameName: 'Resonance: A Plague Tale Legacy',
  developer: 'Asobo Studio',
  publisher: 'Focus Entertainment',
  contactEmail: 'nmlkareem161@gmail.com',
  // Official channels
  steamAppId: '2713000',
  steamUrl: 'https://store.steampowered.com/app/2713000/Resonance_A_Plague_Tale_Legacy/',
  officialSite: 'https://www.plaguetale.com/',
  // Full title used in headings / schema
  fullTitle: 'Resonance: A Plague Tale Legacy',
  protagonist: 'Sophia',
  setting: "the Minotaur's Island",
  priceUsd: '$49.99',
  platforms: ['Steam (PC)'] as const,
  // Prequel timing (confirmed: 15 years before A Plague Tale: Requiem)
  prequelGap: '15 years before A Plague Tale: Requiem',
  lastVerified: '2026-07-27',
} as const;

export const NAV = [
  { label: 'Guide', href: '/guide/' },
  { label: 'Characters', href: '/characters/' },
  { label: 'Romance Guide', href: '/romance-guide/' },
  { label: 'Collectibles', href: '/collectibles/' },
  { label: 'Platforms', href: '/platforms/' },
  { label: 'Skills', href: '/skills/' },
  { label: 'Walkthrough', href: '/walkthrough/' },
  { label: 'Release Date', href: '/release-date/' },
  { label: 'Download', href: '/download/' },
] as const;

export function isReleased(now: Date = new Date()): boolean {
  return now >= new Date(SITE.releaseDate + 'T00:00:00Z');
}

export function daysUntilRelease(now: Date = new Date()): number {
  const target = new Date(SITE.releaseDate + 'T00:00:00Z').getTime();
  const diff = target - now.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

// Facts confirmed by official sources (Steam store page, App 2713000).
// Every entry links back to the source used, matching the site's verified-facts positioning.
export const OFFICIAL_FACTS = [
  {
    label: 'Release date',
    value: 'Steam lists Resonance: A Plague Tale Legacy as coming August 27, 2026.',
    source: SOURCES.steam,
  },
  {
    label: 'Developer / publisher',
    value: 'Developed by Asobo Studio and published by Focus Entertainment.',
    source: SOURCES.steam,
  },
  {
    label: 'Where it sits in the timeline',
    value: 'Set 15 years before A Plague Tale: Requiem, as an original prequel story.',
    source: SOURCES.steam,
  },
  {
    label: 'Who you play',
    value: 'You play as Sophia, a fierce young plunderer uncovering the secrets of her past.',
    source: SOURCES.steam,
  },
  {
    label: 'Setting',
    value: "Sophia's journey leads to the Minotaur's Island, a maze of deadly trials, trails, and puzzles.",
    source: SOURCES.steam,
  },
  {
    label: 'Combat',
    value: 'Dynamic, violent melee combat built around agility, parries, and powerful strikes.',
    source: SOURCES.steam,
  },
  {
    label: 'Puzzles',
    value: 'A stolen Minoan sphere lets you manipulate light to solve puzzles across the island.',
    source: SOURCES.steam,
  },
  {
    label: 'Platform & price',
    value: 'Listed on Steam for Windows PC at $49.99, with full controller support.',
    source: SOURCES.steam,
  },
] as const;

// Core guide map surfaced on the home page and guide hub.
export const REQUIRED_GUIDES = [
  {
    href: '/walkthrough/',
    title: 'Walkthrough',
    description:
      'Chapter-by-chapter walkthrough framework for the Minotaur’s Island, filled with verified routes after launch.',
    priority: 'P0',
  },
  {
    href: '/collectibles/',
    title: 'Collectibles',
    description:
      'Collectible tracker scaffold for every chapter, ready for confirmed locations on release day.',
    priority: 'P0',
  },
  {
    href: '/characters/',
    title: 'Characters',
    description:
      'Character hub built from official Steam story text: Sophia, the pursuers, and the myth behind the island.',
    priority: 'P1',
  },
  {
    href: '/skills/',
    title: 'Skills & Combat',
    description:
      'Combat and skill planning page covering parries, strikes, and the Minoan light sphere.',
    priority: 'P1',
  },
  {
    href: '/guide/',
    title: 'Guide Hub',
    description:
      'Everything we know before launch, organized so official facts stay separate from post-release notes.',
    priority: 'P2',
  },
  {
    href: '/release-date/',
    title: 'Release Date',
    description:
      'Confirmed August 27, 2026 launch, countdown, editions, and platform details from Steam.',
    priority: 'P2',
  },
] as const;
