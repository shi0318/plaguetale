export interface CastMember {
  slug: string;
  name: string;
  role: string;
  personality: string;
  background: string;
  skills: string;
  weapons: string;
  image: string;
  imageAlt: string;
}

export const EXTRA_CAST: CastMember[] = [
  {
    slug: 'irene',
    name: 'Irene',
    role: 'Crew / camp ally',
    personality: 'Practical, protective, quicker to argue than to panic.',
    background: 'Tied to Sophia’s plunderer camp rather than the Minoan court. She is part of the living crew around the lagoon, not a mythic double.',
    skills: 'Campcraft, reading a room, keeping Sophia moving when a fight is a bad idea.',
    weapons: 'No unique named weapon. Uses camp steel when a scene puts her in danger.',
    image: '/images/ptl-crop-irene-camp.jpg',
    imageAlt: 'Camp still life — barrel, crate, and cookware on the cliff; Irene’s camp-side texture, not a portrait',
  },
  {
    slug: 'ezra',
    name: 'Ezra',
    role: 'Crew / navigator temperament',
    personality: 'Dry, observant, more comfortable with maps and gossip than speeches.',
    background: 'Another camp-side name on the island journey. He sits with the plunderer crew, not the Minoan royal line.',
    skills: 'Routes, rumours, when to leave a room before the army arrives.',
    weapons: 'No unique named weapon on the record. Treat him as support, not a second Sophia.',
    image: '/images/ptl-crop-ezra-ships.jpg',
    imageAlt: 'Bay, lookout, and wrecked ships — Ezra’s navigator view of the crossing',
  },
  {
    slug: 'faro',
    name: 'Faro',
    role: 'Crew / muscle on the water',
    personality: 'Blunt, loyal, first to step in front of a blade.',
    background: 'A plunderer-side companion for the Venice-to-island crossing. Not a Minoan hero.',
    skills: 'Close fighting, holding a doorway, covering a retreat.',
    weapons: 'Heavy camp weapons when armed — no unique named relic blade.',
    image: '/images/ptl-ss-melee-clash.jpg',
    imageAlt: 'Close melee in a camp yard — the fight texture around Faro’s role',
  },
  {
    slug: 'asterion',
    name: 'Asterion',
    role: 'Minoan-era figure / labyrinth name',
    personality: 'The name carries the Minotaur’s other identity: trapped, feared, not simply a monster.',
    background: 'Asterion is the mythic personal name tied to the labyrinth. In Resonance he belongs to the ancient era that Theseus and Ariadne occupy, not Sophia’s camp.',
    skills: 'The island itself — corridors, darkness, the hunt. Not a skill tree you unlock.',
    weapons: 'The labyrinth and the curse, not a player weapon slot.',
    image: '/images/ptl-ss-bull-statue.jpg',
    imageAlt: 'Colossal bull statue over a ritual court — the Minotaur’s island image for Asterion',
  },
  {
    slug: 'ariadne',
    name: 'Ariadne',
    role: 'Minoan-era ally / thread of the maze',
    personality: 'Clear-headed, political, the one who knows the maze is a system, not luck.',
    background: 'Greek myth’s Ariadne helps Theseus through the labyrinth. Resonance uses that Minoan court, the same era as Daedalus and Theseus.',
    skills: 'Pathfinding, court knowledge, the thread that makes a maze survivable.',
    weapons: 'No player weapon. The “weapon” is the route through Daedalus’s work.',
    image: '/images/ptl-ss-minoan-arena.jpg',
    imageAlt: 'Minoan arena duel — the court era Ariadne belongs to, not a portrait of her',
  },
];
