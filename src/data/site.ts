// 站点全局常量 —— 单一数据源，避免各页面硬编码不一致
import { SOURCES } from './sources';

export type ReleaseStatus = 'pre-release' | 'released';

export const SITE = {
  name: 'Plague Tale Legacy Guide',
  shortName: 'PTL Guide',
  url: 'https://plaguetaleguide.com',
  // Official release date (Steam store page, App 2713000)
  releaseDate: '2026-08-27',
  // Steam App 2713000 is confirmed released (checked 2026-08-28).
  releaseStatus: 'released' as ReleaseStatus,
  tagline: 'Verified Post-Launch Guide',
  description:
    'Independent Resonance: A Plague Tale Legacy guide with release-state facts, walkthrough and collectibles coverage, combat tips, story context, and current platform details.',
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
  // 官方 Resonance FAQ（Steam 新闻中心 App 2713000）明确 "PC, Xbox Series X|S and PS5"。
  // Game Pass 与 Switch 至今无第一方公告，故不列入。
  platforms: ['Steam (PC)', 'PlayStation 5', 'Xbox Series X|S'] as const,
  // Prequel timing (confirmed: 15 years before A Plague Tale: Requiem)
  prequelGap: '15 years before A Plague Tale: Requiem',
  // Latest date on which the official Steam / publisher material was checked.
  lastVerified: '2026-08-28',
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

export function isReleased(_now: Date = new Date()): boolean {
  // Do not infer release status from the calendar: regional unlock times and delays exist.
  return SITE.releaseStatus === 'released';
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
    value: 'Resonance: A Plague Tale Legacy is available on Steam after its August 27, 2026 release.',
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
    value: 'Available on Steam for Windows PC at $49.99, with full controller support.',
    source: SOURCES.steam,
  },
  {
    label: 'Console platforms',
    value:
      'Official Resonance information confirms PC, Xbox Series X|S, and PS5. Game Pass and Switch remain unannounced.',
    source: SOURCES.steamNews,
  },
] as const;

// Core guide map surfaced on the home page and guide hub.
export const REQUIRED_GUIDES = [
  {
    href: '/walkthrough/',
    title: 'Walkthrough',
    description:
      'Post-launch walkthrough coverage for the Minotaur’s Island, with spoiler-aware route guidance and clearly attributed player reports.',
    priority: 'P0',
  },
  {
    href: '/collectibles/',
    title: 'Collectibles',
    description:
      'Post-launch collectible guidance covering artifacts, exploration, and clearly labelled retail-build and community evidence.',
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
      'Release-state facts and Steam community reports organized so official features stay separate from player-reported experience.',
    priority: 'P2',
  },
  {
    href: '/release-date/',
    title: 'Release Date',
    description:
      'Confirmed August 27, 2026 release date, USD 49.99 Steam price, developer, publisher, and platform details.',
    priority: 'P2',
  },
] as const;
