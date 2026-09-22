export interface SkillNode {
  name: string;
  note: string;
}

export interface MasteryBranch {
  name: string;
  focus: string;
  base: SkillNode;
  paths: [SkillNode, SkillNode][];
}

export const MASTERY_BRANCHES: MasteryBranch[] = [
  {
    name: 'Blade',
    focus: 'Melee damage and finishing a stunned enemy.',
    base: { name: 'Measured Cut', note: 'Cleaner light strings so a parry actually leads into damage.' },
    paths: [
      [
        { name: 'Riposte Edge', note: 'A successful parry feeds a heavier follow-up.' },
        { name: 'Blood Tempo', note: 'Keep striking after a stagger instead of resetting the camera.' },
      ],
      [
        { name: 'Wide Arc', note: 'Safer when two guards share a doorway.' },
        { name: 'Last Grain', note: 'Finish a wounded enemy before the next one arrives.' },
      ],
    ],
  },
  {
    name: 'Guard',
    focus: 'Parries, posture, surviving a bad read.',
    base: { name: 'Firm Wrist', note: 'The parry window becomes something you can practice, not guess.' },
    paths: [
      [
        { name: 'Iron Answer', note: 'A perfect parry hurts the attacker, not only you.' },
        { name: 'Second Chance', note: 'A late parry still costs less than a full hit.' },
      ],
      [
        { name: 'Brace', note: 'Survive the hit you failed to read.' },
        { name: 'Reset Step', note: 'Leave the clash instead of eating the next swing.' },
      ],
    ],
  },
  {
    name: 'Shadow',
    focus: 'Stealth, detection, moving past patrols.',
    base: { name: 'Soft Foot', note: 'Noise and visibility drop in camp and carnival crowds.' },
    paths: [
      [
        { name: 'Blind Corner', note: 'Break line of sight and stay broken.' },
        { name: 'Quiet Takedown', note: 'Remove one guard without starting the room.' },
      ],
      [
        { name: 'Crowd Veil', note: 'Use people as cover in Venice beats.' },
        { name: 'Fade', note: 'Drop aggression after a mistake.' },
      ],
    ],
  },
  {
    name: 'Sphere',
    focus: 'Minoan sphere, light puzzles, opening a path.',
    base: { name: 'Kindled Glass', note: 'The sphere holds a beam long enough to walk it.' },
    paths: [
      [
        { name: 'Split Ray', note: 'Light two short paths instead of one long guess.' },
        { name: 'Anchor', note: 'A beam stays while you parry.' },
      ],
      [
        { name: 'Flare', note: 'A burst to read a dark room.' },
        { name: 'Afterglow', note: 'The puzzle state does not collapse the instant you sprint.' },
      ],
    ],
  },
  {
    name: 'Motion',
    focus: 'Traversal, climbs, not dying to the island.',
    base: { name: 'Sure Grip', note: 'Ledges and ropes punish less.' },
    paths: [
      [
        { name: 'Sprint Cut', note: 'Close a gap before a patrol turns.' },
        { name: 'Drop Soft', note: 'Falls and slides cost less.' },
      ],
      [
        { name: 'Island Sense', note: 'Read a dead-end faster.' },
        { name: 'Second Wind', note: 'Recover after a failed jump instead of a full reload.' },
      ],
    ],
  },
  {
    name: 'Craft',
    focus: 'Notebook, tools, making a room solvable.',
    base: { name: 'Marginalia', note: 'The notebook marks what you actually saw.' },
    paths: [
      [
        { name: 'Field Kit', note: 'Tools last through a longer room.' },
        { name: 'Quick Bind', note: 'A trap or block goes down faster.' },
      ],
      [
        { name: 'Crew Memory', note: 'Follow footsteps without backtracking the whole hall.' },
        { name: 'Salvage', note: 'You leave a room with more than you entered.' },
      ],
    ],
  },
];
