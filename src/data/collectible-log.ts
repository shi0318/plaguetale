import { CHAPTERS } from './chapter-guide';

export const COLLECTIBLE_TOTALS = {
  blades: 8,
  charms: 30,
  artefacts: 37,
  resonantPoints: 200,
} as const;

export const COLLECTIBLE_TYPES = [
  {
    name: 'Blades from the Heroes’ Graves',
    count: COLLECTIBLE_TOTALS.blades,
    how: 'Grave-adjacent rooms and hero sites. Leave the main trail when the notebook mentions a burial or a named hero.',
    where: 'Island graves, Heroes’ Graves objective rooms, late maze annexes. Eight total.',
  },
  {
    name: 'Charms',
    count: COLLECTIBLE_TOTALS.charms,
    how: 'Small pickups near light pedestals, offering tables, and side alcoves. Separate tracker from Blades.',
    where: 'Venice side rooms, Patera tables, night-trail shrines. Thirty total.',
  },
  {
    name: 'Artefacts',
    count: COLLECTIBLE_TOTALS.artefacts,
    how: 'Larger historical objects — orrery-class devices, seal stones, relics of present and past. Interact, do not sprint past.',
    where: 'Minoan courts, beneath-island workshops, parallel-path branches. Thirty-seven total.',
  },
  {
    name: 'Resonant Points',
    count: COLLECTIBLE_TOTALS.resonantPoints,
    how: 'The volume collectible. Sweep dead-end ledges, cliff trails, and rooms after a fight. Story Select for leftover hundreds.',
    where: 'Every chapter. Two hundred total — treat as a running counter, not one chest.',
  },
] as const;

export const CHAPTER_COLLECTIBLE_HINTS = CHAPTERS.map((ch) => ({
  number: ch.number,
  title: ch.title,
  slug: ch.slug,
  hint: ch.collectibles,
}));
