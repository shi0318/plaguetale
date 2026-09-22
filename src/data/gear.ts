export const WEAPONS = [
  {
    name: 'Sophia’s melee blade',
    type: 'Melee',
    note: 'Default close combat. Parries and powerful strikes, not a sling-first kit like Amicia.',
    image: '/images/ptl-crop-weapon-blade.jpg',
    imageAlt: 'Close-up of Sophia’s long sword and off-hand knife',
  },
  {
    name: 'Parry / off-hand defence',
    type: 'Defence',
    note: 'Timing tool. Perfect parries feed the Blade and Guard mastery branches.',
    image: '/images/ptl-crop-weapon-parry.jpg',
    imageAlt: 'Sabre meeting a round shield in a camp-yard melee',
  },
  {
    name: 'Minoan sphere',
    type: 'Tool',
    note: 'Stolen light. Puzzles first. Not treated here as a damage stat stick.',
    image: '/images/ptl-crop-weapon-sphere.jpg',
    imageAlt: 'Bronze Minoan sphere on a pedestal — the light tool, not a damage stick',
  },
  {
    name: 'Blades from the Heroes’ Graves',
    type: 'Collectible arms',
    note: 'Eight named grave blades. They are a completion set, not eight extra loadout slots you swap in a menu.',
    image: '/images/ptl-crop-weapon-graves.jpg',
    imageAlt: 'Bronze-age blade raised in the arena — Heroes’ Graves era steel, not eight menu icons',
  },
  {
    name: 'Notebook',
    type: 'Progression',
    note: 'Crew footsteps, island memory, mastery context. Not a gun.',
    image: '/images/ptl-crop-notebook-maze.jpg',
    imageAlt: 'Gold maze disc on stone — notebook / island memory texture',
  },
] as const;

export const MAP_REGIONS = [
  {
    name: 'Venice lagoon camp',
    era: 'Early 14th century',
    note: 'Plunderer camp, Alec’s world, Blood Ties opening. Wooden walkways, hanging cloth, boats.',
    image: '/images/ptl-ss-melee-clash.jpg',
    imageAlt: 'Dusty camp-yard melee — closest official still to the plunderer camp',
  },
  {
    name: 'Venice and the carnival',
    era: 'Early 14th century',
    note: 'Felons chapter streets, crowds, alleys. Architecture from preserved Venice, carnival density is the hard part.',
    image: '/images/ptl-ss-sophia-portrait.jpg',
    imageAlt: 'Sophia in blue light — city-night / carnival-adjacent still',
  },
  {
    name: 'Minotaur’s Island — courts',
    era: 'Both eras',
    note: 'Visible Minoan courts, Patera, desolation halls. Sophia and Theseus walk the same stone in different centuries.',
    image: '/images/ptl-ss-bull-statue.jpg',
    imageAlt: 'Colossal bull statue over a ritual court on the Minotaur’s Island',
  },
  {
    name: 'Minotaur’s Island — beneath',
    era: 'Both eras',
    note: 'Cisterns, workshops, What Lies Beneath. Artefacts hide behind water and collapsed floors.',
    image: '/images/ptl-ss-gold-chamber.jpg',
    imageAlt: 'Gold-ringed underground chamber — the island beneath',
  },
  {
    name: 'Labyrinth / night trails',
    era: 'Ancient and cursed present',
    note: 'Night Has Come, fading light, Presence hunt. Sphere puzzles double as survival.',
    image: '/images/ptl-ss-pillar-path.jpg',
    imageAlt: 'Sophia on a wet pillar path toward grey daylight',
  },
] as const;
