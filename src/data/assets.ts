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
  islandOverlook: {
    src: '/images/ptl-ss-island-overlook.jpg',
    alt: 'Sophia overlooking Minoan cliff temples, a carved bull head, and ships in a blue bay',
    width: 1920,
    height: 1080,
    credit: STEAM_CREDIT,
  },
  meleeClash: {
    src: '/images/ptl-ss-melee-clash.jpg',
    alt: 'Sophia kicking a shielded fighter while swinging a sabre in a dusty camp yard',
    width: 1920,
    height: 1080,
    credit: STEAM_CREDIT,
  },
  spherePuzzle: {
    src: '/images/ptl-ss-sphere-puzzle.jpg',
    alt: 'Sophia holding the Minoan sphere as cyan light traces a floor puzzle, with a crew ally watching',
    width: 1920,
    height: 1080,
    credit: STEAM_CREDIT,
  },
  minoanArena: {
    src: '/images/ptl-ss-minoan-arena.jpg',
    alt: 'A leaping bronze-age champion facing a horned Minoan fighter in a torchlit arena',
    width: 1920,
    height: 1080,
    credit: STEAM_CREDIT,
  },
  bullStatue: {
    src: '/images/ptl-ss-bull-statue.jpg',
    alt: 'A colossal bull statue over a ritual court with a bronze sphere on a pedestal',
    width: 1920,
    height: 1080,
    credit: STEAM_CREDIT,
  },
  goldChamber: {
    src: '/images/ptl-ss-gold-chamber.jpg',
    alt: 'Sophia in a gold-ringed underground chamber looking toward a lit doorway',
    width: 1920,
    height: 1080,
    credit: STEAM_CREDIT,
  },
  swordUndead: {
    src: '/images/ptl-ss-sword-undead.jpg',
    alt: 'Sophia holding a long sword toward undead figures, Minoan sphere on her hip',
    width: 1920,
    height: 1080,
    credit: STEAM_CREDIT,
  },
  sophiaPortrait: {
    src: '/images/ptl-ss-sophia-portrait.jpg',
    alt: 'Sophia standing in blue light with dual blades among glowing crystal growths',
    width: 1920,
    height: 1080,
    credit: STEAM_CREDIT,
  },
  pillarPath: {
    src: '/images/ptl-ss-pillar-path.jpg',
    alt: 'Sophia walking a wet stone path between towering pillars toward grey daylight',
    width: 1920,
    height: 1080,
    credit: STEAM_CREDIT,
  },
  ireneCamp: {
    src: '/images/ptl-crop-irene-camp.jpg',
    alt: 'Camp still life — barrel, crate of bottles, and cookware on the cliff above the island ruins',
    width: 960,
    height: 540,
    credit: STEAM_CREDIT,
  },
  ezraShips: {
    src: '/images/ptl-crop-ezra-ships.jpg',
    alt: 'Bay and wrecked ships around a stone lookout — the navigator’s view of the island crossing',
    width: 960,
    height: 540,
    credit: STEAM_CREDIT,
  },
  chapterFourteenTemples: {
    src: '/images/ptl-crop-ch14-temples.jpg',
    alt: 'Empty cliff temples after the story — What Remains',
    width: 960,
    height: 540,
    credit: STEAM_CREDIT,
  },
  weaponBlade: {
    src: '/images/ptl-crop-weapon-blade.jpg',
    alt: 'Close-up of Sophia’s long sword and off-hand knife',
    width: 960,
    height: 540,
    credit: STEAM_CREDIT,
  },
  weaponParry: {
    src: '/images/ptl-crop-weapon-parry.jpg',
    alt: 'Sabre and round shield in a camp-yard melee',
    width: 960,
    height: 540,
    credit: STEAM_CREDIT,
  },
  weaponSphere: {
    src: '/images/ptl-crop-weapon-sphere.jpg',
    alt: 'Bronze Minoan sphere on a pedestal in the ritual court',
    width: 960,
    height: 540,
    credit: STEAM_CREDIT,
  },
  weaponGraves: {
    src: '/images/ptl-crop-weapon-graves.jpg',
    alt: 'Bronze-age blade raised in the Minoan arena — Heroes’ Graves era steel',
    width: 960,
    height: 540,
    credit: STEAM_CREDIT,
  },
  notebookMaze: {
    src: '/images/ptl-crop-notebook-maze.jpg',
    alt: 'Gold maze disc on a stone wall — island memory / notebook texture',
    width: 960,
    height: 540,
    credit: STEAM_CREDIT,
  },
} as const satisfies Record<string, SiteImage>;
