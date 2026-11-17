// Sophia's six skills and their masteries, as documented in
// src/content/guides/plague-tale-legacy-skills-unlock-order.md (community walkthrough notes).
// The six-branch structure itself is confirmed by the Steam achievement "Like a warrior"
// ("Unlock the 6 mastery branches"). Do not add skill names that are not in that guide.
export interface Skill {
  name: string;
  effect: string;
  masteries: string;
  when: string;
}

export const SKILLS: Skill[] = [
  {
    name: 'Aegean Deflect',
    effect: 'A last-moment parry deals double stun damage.',
    masteries: 'Parry red attacks; extra sword damage after a deflect.',
    when: 'Buy first, then the red-attack mastery as soon as you can afford it. Every boss from Faro in Chapter 9 onward throws red attacks in volume.',
  },
  {
    name: 'Bullbreaker Kick',
    effect: 'The second kick pushes even an unstunned enemy.',
    masteries: 'More reliable push on heavies; bonus stun on collisions.',
    when: 'Second. Shielded soldiers and Brutes are the standard camp encounter, and the kick breaks guard.',
  },
  {
    name: "Hero's Step",
    effect: 'Double-tap dodge for a second chained dodge.',
    masteries: 'Shorter recovery between dodges; longer invulnerability on the second dodge.',
    when: 'Third. Chained dodges are how you survive King Minos in Chapter 12, where Ariadne cannot parry red attacks.',
  },
  {
    name: "Echo's Return",
    effect: 'Grab a normal or yellow attacker and throw them into the group, stunning everyone.',
    masteries: 'Two upgrade paths, including red-attack handling.',
    when: 'Fourth. It is the route to the Skilled maneuverer achievement (stun three enemies at once).',
  },
  {
    name: 'Heroic Surge',
    effect: 'A dagger critical kill grants an extra health point that soaks the next hit.',
    masteries: 'Longer duration; wider trigger conditions.',
    when: 'Fifth. Good, not urgent; it rewards a playstyle you will already have by the late chapters.',
  },
  {
    name: 'Fated Cast',
    effect: 'Store a picked-up throwable on your belt and throw it later.',
    masteries: 'Makes throwables a planned tool instead of a pickup.',
    when: 'Last. Throwables are useful but situational.',
  },
];
