// Character data — release-state facts and clearly bounded story context.
// Confirmed names come from the Steam store description and official Steam news for App 2713000.
// We keep roles narrow when the first-party material does not confirm playability or fate.
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
    role: 'Protagonist / named playable perspective',
    summary:
      'A fierce, agile young plunderer on the run, determined to uncover the secrets of her past. She is the named protagonist; the public material also describes Theseus-era sections without publishing the final control structure.',
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
    slug: 'leni',
    name: 'Leni',
    role: 'Sophia’s friend / confirmed ally',
    summary:
      'Leni is the friend named in the official release announcement. The post says she helps Sophia face dangerous enemies and deadly trials, but it does not confirm whether she is playable or how her story ends.',
    knownFacts: [
      'Officially described as Sophia’s friend',
      'Helps Sophia face dangerous enemies and deadly trials',
      'Playability, equipment, and fate are not disclosed in the tracked announcement',
    ],
    status: 'official',
    sourceNote: 'Official Resonance release announcement on the Steam news hub, App 2713000.',
  },
  {
    slug: 'alec',
    name: 'Alec',
    role: 'Sophia’s father / plunderer-camp leader',
    summary:
      'Alec is Sophia’s father. The official Sophia’s Story devblog places him at the head of the plunderer camp where she grew up, while stopping short of describing his role in every present-day scene.',
    knownFacts: [
      'Named as Sophia’s father in the official developer story post',
      'Led the plunderer camp where Sophia spent her childhood',
      'The scope of his present-day appearance is not confirmed',
    ],
    status: 'official',
    sourceNote: 'Official Sophia’s Story devblog on the Steam news hub, App 2713000.',
  },
  {
    slug: 'theseus',
    name: 'Theseus',
    role: 'Minoan-era hero / fate-linked perspective',
    summary:
      'The official gameplay announcement identifies the presence resonating within Sophia as the legendary hero Theseus. It says players experience further trials through Theseus’s eyes, making him the named counterpart to Sophia’s era.',
    knownFacts: [
      'Named as the legendary hero Theseus in an official gameplay announcement',
      'Lived centuries before Sophia’s time in the Minoan-era story',
      'The announcement describes trials experienced through his eyes',
      'The exact controls and switching rules are not stated in the announcement',
    ],
    status: 'official',
    sourceNote: 'Official Resonance gameplay announcement on the Steam news hub, App 2713000.',
  },
  {
    slug: 'the-presence',
    name: 'The terrifying entity',
    role: 'Antagonist / island hunter',
    summary:
      'The official store description separates the hunter from Sophia’s fate-linked ally: a restless presence lurks in the shadows, follows her through the island depths, and seems to know her every move.',
    knownFacts: [
      'Officially described as a restless presence that follows and hunts the player',
      'Tied to the Minotaur myth at the heart of a devastating curse',
      'The official survival instruction is to hide, outsmart it, and push forward',
      'The announcement does not publish its name, health, weaknesses, or encounter order',
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
