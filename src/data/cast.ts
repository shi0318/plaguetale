export interface CastMember {
  slug: string;
  name: string;
  role: string;
  status: 'official';
  fact: string;
  gap: string;
  image: string;
  imageAlt: string;
}

export const EXTRA_CAST: CastMember[] = [
  {
    slug: 'irene',
    name: 'Irene',
    role: 'Name on this wiki’s extra roster',
    status: 'official',
    fact: 'Irene is listed here because the name circulates with Sophia’s camp-side cast. The tracked Steam store page and Steam news hub do not describe her role, equipment, or personality.',
    gap: 'This wiki does not invent a temperament, skill list, or weapon for her.',
    image: '/images/ptl-crop-irene-camp.jpg',
    imageAlt: 'Camp still life — barrel, crate, and cookware on the cliff; camp-side texture, not a portrait of Irene',
  },
  {
    slug: 'ezra',
    name: 'Ezra',
    role: 'Name on this wiki’s extra roster',
    status: 'official',
    fact: 'Ezra is listed here because the name circulates with Sophia’s camp-side cast. The tracked Steam store page and Steam news hub do not describe his role, equipment, or personality.',
    gap: 'This wiki does not invent a navigator temperament, rumour skill, or unique weapon for him.',
    image: '/images/ptl-crop-ezra-ships.jpg',
    imageAlt: 'Bay, lookout, and wrecked ships — crossing texture, not a portrait of Ezra',
  },
  {
    slug: 'faro',
    name: 'Faro',
    role: 'Name on this wiki’s extra roster',
    status: 'official',
    fact: 'Faro is listed here because the name circulates with Sophia’s camp-side cast. The tracked Steam store page and Steam news hub do not describe his role, equipment, or personality.',
    gap: 'This wiki does not invent “muscle on the water,” a training relationship with Sophia, or a named relic blade.',
    image: '/images/ptl-ss-melee-clash.jpg',
    imageAlt: 'Close melee in a camp yard — fight texture around the plunderer camp, not a portrait of Faro',
  },
  {
    slug: 'asterion',
    name: 'Asterion',
    role: 'Classical Minotaur name — not a first-party Resonance bio',
    status: 'official',
    fact: 'Asterion is the classical personal name attached to the Minotaur in Greek myth. Asobo’s DEVBLOG #3 retells Minos, the Minotaur, Daedalus, Theseus, and Ariadne. It does not name Asterion as a Resonance character.',
    gap: 'This wiki does not treat the mythic name as a confirmed on-screen role, skill tree, or weapon slot.',
    image: '/images/ptl-ss-bull-statue.jpg',
    imageAlt: 'Colossal bull statue over a ritual court — the Minotaur’s island image',
  },
  {
    slug: 'ariadne',
    name: 'Ariadne',
    role: 'Named in Asobo’s official myth summary',
    status: 'official',
    fact: 'DEVBLOG #3, “Into The Myth,” retells Ariadne as Minos’s daughter who gives Theseus a thread, then is abandoned. Asobo’s line is that Resonance begins the moment the thread vanishes.',
    gap: 'The same post does not confirm that Ariadne appears as an on-screen ally, trainer, or playable character. Equipment is not published.',
    image: '/images/ptl-ss-minoan-arena.jpg',
    imageAlt: 'Minoan arena duel — the court era of the myth Asobo retells, not a portrait of Ariadne',
  },
];
