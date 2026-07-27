// Content confidence system for the Resonance: A Plague Tale Legacy guide.
// Pre-release, every fact is tagged so readers know how reliable it is.
// After launch (2026-08-27) the trailer/prequel tags are replaced with verified play data.

export type ConfidenceStatus = 'official' | 'trailer' | 'prequel' | 'unconfirmed';

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
  trailer: {
    label: 'Trailer / preview',
    icon: '▶',
    classes: 'bg-wheat/15 text-wheat border-wheat/35',
    description: 'Seen in an official trailer, screenshot, or hands-on preview, but full details are not yet documented.',
  },
  prequel: {
    label: 'Series-based',
    icon: '❖',
    classes: 'bg-blood/15 text-bone border-blood/35',
    description: 'Inferred from A Plague Tale: Innocence and Requiem. To be verified after launch.',
  },
  unconfirmed: {
    label: 'Unconfirmed',
    icon: '?',
    classes: 'bg-white/5 text-fog border-white/15',
    description: 'Circulating in the community without an official source. Not used as primary content.',
  },
};

export const INDEXABLE_STATUS: ConfidenceStatus[] = ['official', 'trailer', 'prequel'];
