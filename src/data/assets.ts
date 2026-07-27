// Official media catalog for the Resonance: A Plague Tale Legacy guide.
// Source: Steam store page (App 2713000) screenshots + header art.
// Fan-site usage with attribution; not affiliated with Asobo Studio / Focus Entertainment.

export interface SiteImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  credit: string;
}

const STEAM_CREDIT = 'Steam store screenshot | Resonance: A Plague Tale Legacy';

export const ASSETS = {
  hero: {
    src: '/images/ptl-hero-banner.webp',
    alt: 'Sophia overlooking a sun-bleached Mediterranean island coastline in Resonance: A Plague Tale Legacy',
    width: 1920,
    height: 1080,
    credit: STEAM_CREDIT,
  },
  sophiaCombat: {
    src: '/images/ptl-sophia-combat.webp',
    alt: 'Sophia in dynamic melee combat against armoured soldiers in Resonance: A Plague Tale Legacy',
    width: 1920,
    height: 1080,
    credit: STEAM_CREDIT,
  },
  islandTrail: {
    src: '/images/ptl-island-trail.webp',
    alt: "A treacherous cliffside trail on the Minotaur's Island in Resonance: A Plague Tale Legacy",
    width: 1920,
    height: 1080,
    credit: STEAM_CREDIT,
  },
  minoanRuins: {
    src: '/images/ptl-minoan-ruins.webp',
    alt: 'Ancient Minoan ruins bathed in golden light in Resonance: A Plague Tale Legacy',
    width: 1920,
    height: 1080,
    credit: STEAM_CREDIT,
  },
  lightPuzzle: {
    src: '/images/ptl-light-puzzle.webp',
    alt: 'Sophia manipulating light with a Minoan sphere to solve a puzzle in Resonance: A Plague Tale Legacy',
    width: 1920,
    height: 1080,
    credit: STEAM_CREDIT,
  },
  enemyEncounter: {
    src: '/images/ptl-enemy-encounter.webp',
    alt: 'Sophia staying one step ahead of the army pursuing her in Resonance: A Plague Tale Legacy',
    width: 1920,
    height: 1080,
    credit: STEAM_CREDIT,
  },
  creatureShadow: {
    src: '/images/ptl-creature-shadow.webp',
    alt: 'A restless presence lurking in the shadows of the island depths in Resonance: A Plague Tale Legacy',
    width: 1920,
    height: 1080,
    credit: STEAM_CREDIT,
  },
  header: {
    src: '/images/ptl-header.webp',
    alt: 'Resonance: A Plague Tale Legacy Steam header art',
    width: 460,
    height: 215,
    credit: 'Steam header art | Resonance: A Plague Tale Legacy',
  },
  capsule: {
    src: '/images/ptl-capsule.webp',
    alt: 'Resonance: A Plague Tale Legacy Steam capsule art',
    width: 616,
    height: 353,
    credit: 'Steam capsule art | Resonance: A Plague Tale Legacy',
  },
} as const satisfies Record<string, SiteImage>;
