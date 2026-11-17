// Figures with their own profile page who are not in the official Steam store text.
// Roles below come from Asobo's DEVBLOG #3 or from player walkthrough notes on this site
// (plague-tale-legacy-all-bosses, resonance-king-minos-boss-guide); the status reflects that.
export interface CastMember {
  slug: string;
  name: string;
  role: string;
  status: 'official' | 'community';
  fact: string;
  gap: string;
  image: string;
  imageAlt: string;
}

export const EXTRA_CAST: CastMember[] = [
  {
    slug: 'faro',
    name: 'Faro',
    role: 'Chapter 9 boss, then ally',
    status: 'community',
    fact: 'Walkthrough notes place Faro as the palace-courtyard boss of Chapter 9, Night Has Come. Sophia refuses the killing blow and he joins her for the next two chapters.',
    gap: 'He is not named in the Steam store text or Asobo’s devblogs.',
    image: '/images/ptl-ss-melee-clash.jpg',
    imageAlt: 'Close melee in a camp yard — fight texture, not a portrait of Faro',
  },
  {
    slug: 'asterion',
    name: 'Asterion',
    role: 'The Minotaur — Chapter 13 final boss',
    status: 'official',
    fact: 'Asterion is the classical personal name of the Minotaur. Asobo’s DEVBLOG #3 retells the Minotaur myth, and walkthrough notes list Asterion, the Minotaur, as the final boss in Chapter 13, As One.',
    gap: 'Asobo’s posts call it the Minotaur; the name Asterion comes from myth and player notes.',
    image: '/images/ptl-ss-bull-statue.jpg',
    imageAlt: 'Colossal bull statue over a ritual court — the Minotaur’s island image',
  },
  {
    slug: 'ariadne',
    name: 'Ariadne',
    role: 'Minos’s daughter — playable in the King Minos fight',
    status: 'official',
    fact: 'DEVBLOG #3, “Into The Myth,” retells Ariadne as Minos’s daughter who gives Theseus a thread, then is abandoned. Asobo’s line is that Resonance begins the moment the thread vanishes. Players report you control her in the Chapter 12 King Minos fight.',
    gap: 'Her playable fight comes from player reports, not from the official posts.',
    image: '/images/ptl-ss-minoan-arena.jpg',
    imageAlt: 'Minoan arena duel — the court era of the myth Asobo retells, not a portrait of Ariadne',
  },
];
