// Character data — pre-release.
// Confirmed names come from the Steam store description (App 2713000). Anything drawn from
// the earlier A Plague Tale games is labelled `prequel` and will be verified at launch.
import type { ConfidenceStatus } from './confidence';

export interface Character {
  slug: string;
  name: string;
  role: string;
  summary: string;
  knownFacts: string[];
  status: ConfidenceStatus;
  sourceNote: string;
}

export const CHARACTERS: Character[] = [
  {
    slug: 'sophia',
    name: 'Sophia',
    role: 'Protagonist / playable character',
    summary:
      'A fierce, agile young plunderer on the run, determined to uncover the secrets of her past. She is the sole confirmed playable character.',
    knownFacts: [
      'Officially named as the protagonist on the Steam store page',
      'Skilled, agile, and strong-willed; engages in dynamic, violent melee combat',
      "Journeys to the Minotaur's Island, pursued by an army drawn to a mysterious treasure",
      'Relies on agility, tricks, and sharp reflexes — parrying and striking to survive',
      'Guided by knowledge safeguarded in her notebook',
    ],
    status: 'official',
    sourceNote: 'Steam store description, App 2713000.',
  },
  {
    slug: 'the-second-hero',
    name: 'The second hero (Minoan era)',
    role: 'Fate-linked figure',
    summary:
      "Official text describes \"the entwined destinies of two heroes linked by fate\" across Sophia's Middle Ages and ancient Minoan times. The second hero is confirmed to exist but not yet named publicly.",
    knownFacts: [
      'Steam text references two heroes linked by fate and the Macula’s legacy',
      'The game shifts between Sophia’s era and ancient Minoan times',
      'Name and full role are not disclosed on the store page',
    ],
    status: 'official',
    sourceNote: 'Steam store description — existence confirmed, identity not yet revealed.',
  },
  {
    slug: 'the-presence',
    name: 'The Presence (the myth behind the Minotaur)',
    role: 'Antagonist / hunter',
    summary:
      'A restless presence lurking in the shadows that hunts Sophia through the island depths, seemingly knowing her every move. It is the terrifying creature hidden behind the myth.',
    knownFacts: [
      'Officially described as a restless presence that follows and hunts the player',
      'Tied to the Minotaur myth at the heart of a devastating curse',
      'You cannot fight it head-on early — you hide, outsmart, and push forward',
    ],
    status: 'official',
    sourceNote: 'Steam store description, App 2713000.',
  },
  {
    slug: 'daedalus',
    name: 'Daedalus',
    role: 'Mythological figure (lore)',
    summary:
      "Named in official text as the craftsman who wove light into the island's very heart — the force Sophia manipulates with a stolen Minoan sphere to solve puzzles.",
    knownFacts: [
      'Referenced by name on the Steam store page',
      'Associated with the light-manipulation puzzle mechanic',
      'A figure from Greek myth tied to the Minoan setting',
    ],
    status: 'official',
    sourceNote: 'Steam store description, App 2713000.',
  },
];
