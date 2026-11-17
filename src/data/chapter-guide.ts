// Chapter walkthrough data. Every fact here is drawn from a guide already on this site:
// counts → plague-tale-legacy-collectibles-by-chapter, blades → plague-tale-legacy-all-blade-locations,
// bosses → plague-tale-legacy-all-bosses / resonance-king-minos-boss-guide, fixes → the October 6
// bug-fix update pages, settings → locations (DEVBLOG #3). Do not add route detail without a source.

export interface ChapterLink {
  href: string;
  label: string;
}

export interface ChapterBoss {
  name: string;
  // Where/as whom the fight happens — only what the boss guides state
  context: string;
  // True for the final boss, which is not a parry duel
  mechanicsFight?: boolean;
  tips: string[];
  guide: ChapterLink;
}

export interface ChapterBeat {
  slug: string;
  number: number;
  title: string;
  // One-line setting used on hub cards and the maps page
  setting: string;
  // What this chapter is, in two or three sentences
  summary: string;
  counts: { blades: number; artefacts: number; charms: number };
  // Short collectible hint reused by the collectibles hub
  collectibles: string;
  blade?: { name: string; where: string };
  boss?: ChapterBoss;
  notes: string[];
  fixes?: string[];
  achievements?: string[];
  related: ChapterLink[];
  image: string;
  imageAlt: string;
}

const BOSS_LIST: ChapterLink = { href: '/plague-tale-legacy-all-bosses/', label: 'all six boss fights' };
const BUGFIX: ChapterLink = { href: '/resonance-plague-tale-legacy-october-6-update/', label: 'October 6 bug-fix update' };
const BLADES: ChapterLink = { href: '/plague-tale-legacy-all-blade-locations/', label: 'all eight Blade locations' };
const COUNTS: ChapterLink = { href: '/plague-tale-legacy-collectibles-by-chapter/', label: 'collectibles by chapter' };

export const CHAPTERS: ChapterBeat[] = [
  {
    slug: 'chapter-1-blood-ties',
    number: 1,
    title: 'Blood Ties',
    setting: 'The plunderers’ camp in the lagoons near Venice, where Sophia grew up under her father Alec.',
    summary:
      'The campaign opens in the raiders’ camp in the Venice lagoon. Asobo’s DEVBLOG #3 describes it as rough and poor but full of life, built out from the Red City Arena of A Plague Tale: Requiem with worn fabrics and hanging cloth, and DEVBLOG #1 places Sophia’s childhood here, in a camp led by her father Alec. This is the training chapter: it hands you a sword and teaches the melee basics the rest of the game builds on.',
    counts: { blades: 1, artefacts: 1, charms: 0 },
    collectibles: 'One Blade (the Rusty Sword, given during training) and one Artefact. No Charms.',
    blade: { name: 'Rusty Sword', where: 'Given automatically during training — you cannot miss it.' },
    notes: [
      'There are no Charms in this chapter, so the only optional pickup to look for is the single Artefact. Like every Artefact, it counts in Story Select after the credits, so nothing in the training chapter is permanently missable.',
      'Learn the colour rule early: a normal swing can be parried, a yellow flash is a parry-and-counter opportunity, and a red flash means dodge until you own the mastery that parries red.',
    ],
    related: [
      { href: '/locations/', label: 'Locations and the lagoon camp' },
      { href: '/characters/alec/', label: 'Alec, Sophia’s father' },
      { href: '/combat/', label: 'Combat and parry basics' },
      COUNTS,
    ],
    image: '/images/ptl-ss-melee-clash.jpg',
    imageAlt: 'Camp-yard melee — Blood Ties opening fights',
  },
  {
    slug: 'chapter-2-felons',
    number: 2,
    title: 'Felons',
    setting: 'Venice and its carnival — dense crowds in a city largely preserved from the era.',
    summary:
      'Felons takes Sophia into Venice. The developers note that the architecture was the straightforward part because Venice is still largely preserved from the period; the hard part was the carnival, with huge crowds that had to feel real rather than idealised. This chapter also hands you your second sword and the Grapnel.',
    counts: { blades: 1, artefacts: 2, charms: 2 },
    collectibles: 'One Blade (the Falchion, automatic), two Artefacts and two Charms. Watch the full carnival puppet show for Theater enthusiast.',
    blade: { name: 'Falchion', where: 'Automatic: the barrel by the boat, the same place you get the Grapnel.' },
    notes: [
      'A carnival with dense crowds is a new commitment for a series that has historically favoured tight, low-population set pieces. Expect busier streets than anything in Innocence or Requiem.',
      'The Grapnel arrives here alongside the Falchion. Later Blades (Xiphos in Chapter 10) and the final boss both rely on it.',
      'If the Falchion vanished from your inventory after installing the Heritage Pack DLC, that was a listed inventory bug marked fixed in the October update — update before replaying the chapter.',
    ],
    achievements: [
      'Theater enthusiast — watch the entire puppet show at the carnival in Chapter 2. It is missed by walking past, not by difficulty.',
    ],
    related: [
      { href: '/resonance-falchion-after-dlc/', label: 'Falchion missing after the DLC' },
      { href: '/missable-achievements-guide/', label: 'Missable achievements' },
      { href: '/locations/', label: 'Venice and the carnival' },
      COUNTS,
    ],
    image: '/images/ptl-ss-sophia-portrait.jpg',
    imageAlt: 'Sophia in blue night light — Felons city texture',
  },
  {
    slug: 'chapter-3-those-before-us',
    number: 3,
    title: 'Those Before Us',
    setting: 'The Artefact chapter: six Artefacts, four Charms, no combat, and Leni’s lens interaction.',
    summary:
      'Those Before Us is the quietest chapter in combat terms and the busiest for Artefacts. The collectibles count puts six Artefacts and four Charms here and no fights at all, so there is no reason to rush. It is also the chapter with Leni’s lens interaction — the one the October 6 bug-fix update names as a trigger that could fail.',
    counts: { blades: 0, artefacts: 6, charms: 4 },
    collectibles: 'The Artefact chapter: six Artefacts and four Charms, no Blade. No combat, so sweep every side room.',
    notes: [
      'With no combat in the chapter, every side room can be searched without pressure. Six of the game’s 37 Artefacts are here — the most of any chapter.',
      'If Leni’s lens prompt never appears, you are not missing a puzzle step: install the October 6 update, load a Chapter III save near the lens room, and approach the interaction once on the current build. Only once it starts should you treat the room as a light puzzle.',
    ],
    fixes: ['Chapter III: Leni’s lens interaction could not be triggered — listed as fixed in the October 6 bug-fix update.'],
    related: [
      { href: '/resonance-leni-lens-puzzle-checklist/', label: 'Leni lens puzzle checklist' },
      { href: '/characters/leni/', label: 'Leni' },
      BUGFIX,
    ],
    image: '/images/ptl-ss-sphere-puzzle.jpg',
    imageAlt: 'Minoan sphere puzzle — Those Before Us',
  },
  {
    slug: 'chapter-4-from-hell-it-rose',
    number: 4,
    title: 'From Hell It Rose',
    setting: 'Spike-trap puzzles, a mirror room and the tomb that holds the Kopis.',
    summary:
      'From Hell It Rose mixes trap rooms with light puzzles. Its one Blade sits beyond the spike-trap puzzles and a mirror room, in a tomb you open from a pedestal — the first of the grave Blades you have to go and find rather than being handed.',
    counts: { blades: 1, artefacts: 3, charms: 2 },
    collectibles: 'One Blade (Kopis, in a tomb past the mirror room), three Artefacts and two Charms.',
    blade: {
      name: 'Kopis',
      where: 'After the spike-trap puzzles, go through the mirror room, use the pedestal to open the tomb and take the chest below.',
    },
    notes: [
      'The Kopis is the first Blade you have to earn. Once you hold three different swords, start rotating them: Adaptable asks for one kill with each Blade, and it is faster to clear as you go.',
      'The first two Blades are handed to you automatically, so a Blade tracker that still reads two after this chapter means the Kopis tomb was skipped.',
      'Blades, Artefacts and Charms picked up here all count later in Story Select, so a missed tomb is recoverable after the credits.',
    ],
    related: [BLADES, { href: '/minoan-sphere-light-puzzle-guide/', label: 'Minoan sphere light puzzles' }, COUNTS],
    image: '/images/ptl-ss-sword-undead.jpg',
    imageAlt: 'Sword against undead — From Hell It Rose',
  },
  {
    slug: 'chapter-5-desolation-it-wrought',
    number: 5,
    title: 'Desolation It Wrought',
    setting: 'Theseus’s arena gauntlet, the four-pedestal room and the first boss, Cadmos.',
    summary:
      'Desolation It Wrought is the first chapter with a real boss. You fight as Theseus, inside his memories, through a gauntlet of competing warriors before facing Cadmos. It is also one of the heaviest collectible chapters, with five Artefacts and five Charms.',
    counts: { blades: 1, artefacts: 5, charms: 5 },
    collectibles: 'One Blade (Greek Sword, aligned-lights bull pillar), five Artefacts and five Charms — one of the densest chapters.',
    blade: {
      name: 'Greek Sword',
      where:
        'From the four-pedestal room take the O-with-three-lines exit, cross the bridge, drop the cliff, pass the green gate to the camp with the bull pillar, then align the three lights with the pillar’s gems.',
    },
    boss: {
      name: 'Cadmos',
      context: 'as Theseus, inside his memories, after a gauntlet of competing warriors',
      tips: [
        'He is the tutorial for the rhythm the rest of the game uses: parry the normal string, step out of the red, punish the recovery.',
        'Theseus has his own Focus Attack, and Sophia’s upgrades do not carry into his sections — do not expect your skill tree here.',
      ],
      guide: BOSS_LIST,
    },
    notes: [
      'A player report describes bringing out the light tool in Chapter 5 and not seeing the expected three colours. No verified fix is published; read the current objective first, test one input, and keep a checkpoint before reloading.',
    ],
    related: [
      { href: '/chapter-five-prism-colors-missing/', label: 'Chapter 5 prism colours missing' },
      BOSS_LIST,
      BLADES,
      COUNTS,
    ],
    image: '/images/ptl-ss-island-overlook.jpg',
    imageAlt: 'Empty cliff temples — Desolation It Wrought',
  },
  {
    slug: 'chapter-6-what-lies-beneath',
    number: 6,
    title: 'What Lies Beneath',
    setting: 'Under the island — “The Architect” section, and the first appearance of the creature that hunts Sophia.',
    summary:
      'What Lies Beneath takes the route underground. Its Blade sits in the section called “The Architect”, behind the first green gate. From this chapter onward the creature that hunts Sophia appears — and it is not a boss: it cannot be killed, so every encounter with it is a chase or a stealth section.',
    counts: { blades: 1, artefacts: 2, charms: 3 },
    collectibles: 'One Blade (Sica, in “The Architect”), two Artefacts and three Charms.',
    blade: {
      name: 'Sica',
      where:
        'In “The Architect”: take the first green gate and the small left tunnel to the bull pillar room — green light below the pillar, blue below your own, red onto the back-right pillar.',
    },
    notes: [
      'The creature that hunts Sophia from here on cannot be killed. Stay in the light, use braziers, and never leave a blue trail by sprinting in the dark.',
      'The official survival instruction is “hide, outsmart, and push forward” — treat every creature encounter as a route problem, not a fight.',
      'The Sica puzzle uses all three light colours on different pillars at once. Later bull-pillar Blades — the Khopesh in Chapter 7 and the Xiphos in Chapter 10 — use the same kind of sphere-and-gem alignment.',
    ],
    related: [
      { href: '/characters/the-presence/', label: 'The entity that hunts Sophia' },
      { href: '/stealth-or-combat/', label: 'Stealth or combat' },
      BLADES,
      COUNTS,
    ],
    image: '/images/ptl-ss-gold-chamber.jpg',
    imageAlt: 'Underground gold chamber — What Lies Beneath',
  },
  {
    slug: 'chapter-7-death-it-sowed',
    number: 7,
    title: 'Death It Sowed',
    setting: 'The Black Temple arena, “The Whole Damn Army”, and the champion Cercyon.',
    summary:
      'Death It Sowed returns to Theseus’s memories for the second arena boss, the sword-and-shield champion Cercyon at the end of the Black Temple arena. Its Blade is in the section titled “The Whole Damn Army”, and with four Artefacts and five Charms it is another dense collectible chapter.',
    counts: { blades: 1, artefacts: 4, charms: 5 },
    collectibles: 'One Blade (Khopesh, in “The Whole Damn Army”), four Artefacts and five Charms.',
    blade: {
      name: 'Khopesh',
      where: 'In “The Whole Damn Army”: from the underground exit, head left to the bull pillar and open it with the Sphere.',
    },
    boss: {
      name: 'Cercyon',
      context: 'in Theseus’s memories, at the end of the Black Temple arena',
      tips: [
        'His health bar resets once. The fight is not bugged — you are in phase two.',
        'Phase two leans much harder on red attacks. Stop trying to parry everything and start dodging.',
        'Land one or two hits, then reset your guard. Over-committing after a parry is what ends most attempts.',
      ],
      guide: BOSS_LIST,
    },
    notes: [],
    related: [BOSS_LIST, BLADES, { href: '/combat/', label: 'Combat and parry basics' }, COUNTS],
    image: '/images/ptl-ss-sword-undead.jpg',
    imageAlt: 'Cursed undead court — Death It Sowed',
  },
  {
    slug: 'chapter-8-resonance',
    number: 8,
    title: 'Resonance',
    setting: 'The title chapter — a dream interlude with nothing to collect.',
    summary:
      'Resonance, the chapter that shares the game’s title, is a dream interlude. The collectibles count lists no Blades, Artefacts or Charms here, and no boss fight is recorded for it, so it is a story chapter rather than a cleanup target.',
    counts: { blades: 0, artefacts: 0, charms: 0 },
    collectibles: 'Nothing to collect: no Blades, Artefacts or Charms. Resonance is a dream interlude.',
    notes: [
      'If your trackers look short when you reach this chapter, the gap is in an earlier chapter — nothing here can fill it.',
      'By the end of Chapter 7 the game has already offered six of its eight Blades; the remaining two are in Chapters 9 and 10.',
      'Two of the six bosses — Cadmos and Cercyon — are behind you. The next is Faro in Chapter 9, the fastest human in the game and the fight the red-parry mastery (Aegean Deflect) pays for. If you have the Resonance Points, that mastery is worth buying before you go on.',
    ],
    related: [COUNTS, { href: '/story/', label: 'Story and setting' }, BLADES],
    image: '/images/ptl-ss-sophia-portrait.jpg',
    imageAlt: 'Sophia in resonant blue light — Resonance',
  },
  {
    slug: 'chapter-9-night-has-come',
    number: 9,
    title: 'Night Has Come',
    setting: 'The palace and the “Hunted” section — Faro, the first boss in Sophia’s own era.',
    summary:
      'Night Has Come brings the first boss in Sophia’s own time: Faro, in the palace courtyard, the fastest human in the game. The Blade sits in the section called “Hunted”, and the palace is also where the October 6 update fixed a crouch bug after backtracking.',
    counts: { blades: 1, artefacts: 3, charms: 2 },
    collectibles: 'One Blade (Broken Spear, in “Hunted”), three Artefacts and two Charms.',
    blade: {
      name: 'Broken Spear',
      where: 'In “Hunted”: turn left at the start, take the leftmost path, climb the ledge to the bull pillar, then go downstairs to the chamber.',
    },
    boss: {
      name: 'Faro',
      context: 'as Sophia, in the palace courtyard — the first boss in her own era',
      tips: [
        'He throws long combo chains that interrupt your attacks if you swing into them. Let the combo finish, then parry or dodge the last hit and answer with a Critical Strike.',
        'You must drain his health twice.',
        'This is the fight the red-parry mastery (Aegean Deflect) pays for.',
        'Sophia refuses the killing blow, and Faro joins her for the next two chapters.',
      ],
      guide: BOSS_LIST,
    },
    notes: [],
    fixes: [
      'Chapter IX: Sophia might not be able to crouch in a petrified area after backtracking in the palace — listed as fixed in the October 6 update. Load the backtrack save on the current build and crouch once before changing anything else.',
    ],
    related: [
      { href: '/resonance-chapter-nine-backtracking-plan/', label: 'Chapter IX backtracking plan' },
      BOSS_LIST,
      BLADES,
    ],
    image: '/images/ptl-ss-pillar-path.jpg',
    imageAlt: 'Dark pillar path — Night Has Come',
  },
  {
    slug: 'chapter-10-parallel-paths',
    number: 10,
    title: 'Parallel Paths',
    setting: 'The last Blade, Xiphos, in the far-right corner cave — with Faro now at Sophia’s side.',
    summary:
      'Parallel Paths holds the last of the eight Blades. After the Chapter 9 fight Faro travels with Sophia for this chapter and the next. With four Artefacts and three Charms it is also the last chapter with a sizeable collectible haul.',
    counts: { blades: 1, artefacts: 4, charms: 3 },
    collectibles: 'The last Blade (Xiphos, far-right corner cave), four Artefacts and three Charms.',
    blade: {
      name: 'Xiphos',
      where: 'Far-right corner cave: Grapnel up to the bull statue, smash the vases for the blue gem, then align red left, green middle, blue right.',
    },
    notes: [
      'Only Chapters 3 and 8 come before this one without a Blade, so a tracker short by one here usually points to a skipped grave in Chapters 4 to 9.',
      'Xiphos is the last Blade. Chapters 11 to 14 have none, so if your tracker reads 7 after Parallel Paths you missed one earlier — Story Select can take you back.',
      'Plunderer (collect all Blades) sits at 17.7% on Steam; finishing the set here also lets you complete Adaptable by getting a kill with each sword.',
    ],
    achievements: ['Plunderer — collect all Blades from the Heroes’ Graves.', 'Adaptable — get one kill with each Blade.'],
    related: [BLADES, COUNTS, { href: '/allies-and-crew/', label: 'Allies and crew' }],
    image: '/images/ptl-ss-minoan-arena.jpg',
    imageAlt: 'Two-era arena — Parallel Paths',
  },
  {
    slug: 'chapter-11-patera',
    number: 11,
    title: 'Patera',
    setting: 'The mine exit and the fight with Irene, the traitor.',
    summary:
      'Patera ends with Irene, the traitor, fought after her dagger finds Faro at the mine exit. There are no Blades left by this point, but three Artefacts and two Charms remain in the chapter.',
    counts: { blades: 0, artefacts: 3, charms: 2 },
    collectibles: 'No Blade. Three Artefacts and two Charms.',
    boss: {
      name: 'Irene',
      context: 'in Sophia’s own era, after Irene’s dagger finds Faro at the mine exit',
      tips: [
        'Stage one is heavy on red attacks — parry them with the mastery, or keep your distance and wait out the string.',
        'In stage two she vanishes and throws daggers from the dark. The thrown dagger is a yellow attack: parry it.',
        'Stage three is more of the same until the last health bar empties. If your timing is off, back away; chasing Irene is how the fight goes wrong.',
      ],
      guide: BOSS_LIST,
    },
    notes: [
      'Stage one is where the Aegean Deflect mastery — the one that lets Sophia parry red attacks — pays off again. Without it, distance is the safer answer.',
      'There are no Blades from here to the end. If your Blade tracker is below eight on arrival, the miss is somewhere in Chapters 1 to 10; finish the story and use Story Select rather than turning back.',
    ],
    related: [BOSS_LIST, COUNTS, { href: '/allies-and-crew/', label: 'Allies and crew' }],
    image: '/images/ptl-ss-bull-statue.jpg',
    imageAlt: 'Ritual bull court — Patera',
  },
  {
    slug: 'chapter-12-fading-light',
    number: 12,
    title: 'Fading Light',
    setting: 'Theseus’s memory and King Minos — a fight played as Ariadne.',
    summary:
      'Fading Light contains the King Minos fight, a memory sequence inside Theseus’s past played as Ariadne rather than Sophia. Ariadne cannot parry red attacks, so a plan built on Sophia’s red-parry mastery does not apply. The chapter holds two Artefacts and one Charm.',
    counts: { blades: 0, artefacts: 2, charms: 1 },
    collectibles: 'No Blade. Two Artefacts and one Charm.',
    boss: {
      name: 'King Minos',
      context: 'as Ariadne, inside Theseus’s memory — and Ariadne cannot parry red attacks',
      tips: [
        'Phase one: almost everything is red. Dodge, then punish the heavy axe swing while it is stuck in the ground — briefly, then step away.',
        'Phase two: the axe catches fire and leaves burning ground. Keep moving, never fight in a fire trail, and get behind him after a heavy swing.',
        'Check where each dodge lands; a roll that was safe in phase one can carry you into fire in phase two.',
      ],
      guide: { href: '/resonance-king-minos-boss-guide/', label: 'King Minos boss guide' },
    },
    notes: [
      'Sophia’s upgrades and her red-parry mastery do not apply in this memory sequence. Plan the fight around Ariadne’s dodge, not your Sophia build.',
      'Give yourself room. A close camera makes it hard to see when a heavy swing has committed, and hugging the arena edge leaves no space once phase two adds burning ground.',
      'If you are replaying the fight after the credits, confirm Story Select loaded Chapter 12, Fading Light, before you start.',
    ],
    related: [
      { href: '/resonance-king-minos-boss-guide/', label: 'King Minos boss guide' },
      { href: '/characters/ariadne/', label: 'Ariadne' },
      BOSS_LIST,
      COUNTS,
    ],
    image: '/images/ptl-ss-sphere-puzzle.jpg',
    imageAlt: 'Light puzzle under pressure — Fading Light',
  },
  {
    slug: 'chapter-13-as-one',
    number: 13,
    title: 'As One',
    setting: 'The heart of the Labyrinth and the final boss, Asterion the Minotaur.',
    summary:
      'As One ends at the Minotaur statue in the heart of the Labyrinth. Asterion is a mechanics fight rather than a duel: nothing is parried, and the Grapnel and a light-beam weapon do the work. The chapter holds the last two Artefacts and the last Charm before the epilogue.',
    counts: { blades: 0, artefacts: 2, charms: 1 },
    collectibles: 'No Blade. The last two Artefacts and the last Charm before the epilogue.',
    boss: {
      name: 'Asterion, the Minotaur',
      context: 'before the Minotaur statue at the heart of the Labyrinth',
      mechanicsFight: true,
      tips: [
        'Break the cracked heart with the Grapnel, then take the light-beam weapon from the device at the far end and shoot the heart.',
        'Wounds open on the statue and creatures crawl out — burn them with the beam.',
        'When Ariadne tells you to run, zipline to the raised platform and avoid the corruption slams, then Grapnel the mouth from both platforms to break it open.',
        'After the escape, climb the circular staircase and finish the wounds with the beam. Treat the creatures as a timer, not an enemy list.',
      ],
      guide: BOSS_LIST,
    },
    notes: [],
    fixes: [
      'Chapter XIII: a corrupted squeeze-through could stop progression from saving — listed as fixed in the October 6 update. Load the stuck save on the updated build before starting a new file.',
    ],
    related: [{ href: '/characters/asterion/', label: 'Asterion' }, { href: '/minotaur-myth-explained/', label: 'The Minotaur myth' }, BOSS_LIST, BUGFIX],
    image: '/images/ptl-ss-melee-clash.jpg',
    imageAlt: 'Peak melee — As One',
  },
  {
    slug: 'chapter-14-what-remains',
    number: 14,
    title: 'What Remains',
    setting: 'The epilogue — no collectibles, the book after the credits, and Story Select for cleanup.',
    summary:
      'What Remains is the epilogue. It holds no Blades, Artefacts or Charms, and no boss. What matters here is what comes after: the book interaction after the credits (fixed in the October 6 update) and Story Select, which lets you replay chapters for anything you missed.',
    counts: { blades: 0, artefacts: 0, charms: 0 },
    collectibles: 'Nothing to collect. After the credits, use Story Select for missed Blades, Artefacts and Charms — Resonance Points cannot be recovered that way.',
    notes: [
      'Finishing the story is not 100%. The full sets are 8 Blades, 37 Artefacts, 30 Charms and 200 Resonance Points.',
      'For a Story Select cleanup, start with the densest chapters: Chapter 3 (six Artefacts, four Charms), Chapter 5 (five Artefacts, five Charms) and Chapter 7 (four Artefacts, five Charms). Chapters 8 and 14 hold nothing.',
      'Blades, Artefacts and Charms count in Story Select after the credits, and the chapter menu shows trackers for them. Quitting to the main menu after a late pickup makes it register immediately.',
      'Resonance Points are different: they save only at the next checkpoint, do not carry through Story Select, and reloading an earlier chapter resets the total to what it was then. You need 165 of the 200 for every skill and mastery.',
    ],
    fixes: [
      'Chapter XIV: the book could not be used after the credits — listed as fixed in the October 6 update. Open it once on the current build before replaying the ending.',
    ],
    achievements: [
      'A new beginning — complete all Chapters.',
      'Plunderer (all Blades), Hoarder (all Artefacts), In the name of my kin (the five Pierced Coins, also called Theseus’ Echoes) and Like a warrior (165 Resonance Points) are the collect-all achievements to check once the credits roll.',
    ],
    related: [
      { href: '/resonance-book-after-credits/', label: 'The book after the credits' },
      { href: '/story-select-cleanup/', label: 'Story Select cleanup' },
      COUNTS,
      { href: '/achievements-guide/', label: 'Achievements guide' },
    ],
    image: '/images/ptl-crop-ch14-temples.jpg',
    imageAlt: 'Empty cliff temples after the story — What Remains',
  },
];

export const TOTALS = CHAPTERS.reduce(
  (acc, ch) => ({
    blades: acc.blades + ch.counts.blades,
    artefacts: acc.artefacts + ch.counts.artefacts,
    charms: acc.charms + ch.counts.charms,
  }),
  { blades: 0, artefacts: 0, charms: 0 },
);
