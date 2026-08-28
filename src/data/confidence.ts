// Content confidence system for the Resonance: A Plague Tale Legacy guide.
// Every fact is tagged so readers can distinguish first-party Steam features,
// official media, series context, and player reports.

export type ConfidenceStatus = 'official' | 'steam-feature' | 'community' | 'trailer' | 'prequel' | 'unconfirmed';

export interface StatusMeta {
  label: string;
  icon: string;
  // Tailwind class fragment for the badge colour
  classes: string;
  description: string;
}

export const STATUS_META: Record<ConfidenceStatus, StatusMeta> = {
  official: {
    label: 'Official',
    icon: '✔',
    classes: 'bg-moss/25 text-sage border-moss/40',
    description: 'Confirmed by Asobo Studio or Focus Entertainment via the Steam store page or official channels.',
  },
  'steam-feature': {
    label: 'Steam feature',
    icon: '◆',
    classes: 'bg-moss/25 text-sage border-moss/40',
    description: 'A feature or fact listed by Steam for App 2713000, such as release status, price, platform, or store category.',
  },
  community: {
    label: 'Steam community reports',
    icon: '◌',
    classes: 'bg-wheat/15 text-wheat border-wheat/35',
    description: 'A player-reported observation from recent Steam community reviews or discussions; it is not an official specification or independent hands-on claim by this site.',
  },
  trailer: {
    label: 'Trailer / preview',
    icon: '▶',
    classes: 'bg-wheat/15 text-wheat border-wheat/35',
    description: 'Seen in official media or preview coverage; it supplements but does not replace retail-build verification.',
  },
  prequel: {
    label: 'Series-based',
    icon: '❖',
    classes: 'bg-blood/15 text-bone border-blood/35',
    description: 'Context inferred from A Plague Tale: Innocence and Requiem; it is not a claim about an undocumented Resonance feature.',
  },
  unconfirmed: {
    label: 'Unconfirmed',
    icon: '?',
    classes: 'bg-white/5 text-fog border-white/15',
    description: 'Circulating in the community without an official source. Not used as primary content.',
  },
};

export const INDEXABLE_STATUS: ConfidenceStatus[] = ['official', 'steam-feature', 'community', 'trailer', 'prequel'];
