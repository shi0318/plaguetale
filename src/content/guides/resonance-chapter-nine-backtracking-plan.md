---
title: "Resonance Chapter IX Backtracking: Recover Crouching and Keep Progress"
heading: "Chapter 9 Crouch Not Working After Backtracking in the Palace"
description: "Fix the Chapter IX crouch failure in the petrified palace area after backtracking, and tell it apart from the Chapter III, XIII and XIV fixes."
category: "guide"
keyword: "resonance plague tale legacy chapter 9 crouch"
status: "official"
order: 3
updatedAt: "2026-11-16"
cover: "/images/ptl-ss-pillar-path.jpg"
preRelease: false
sourceKeys: []
---

<figure>
  <img src="/images/ptl-ss-pillar-path.jpg" alt="A pillar path in the Chapter IX palace of Resonance" width="1400" height="788" loading="lazy" decoding="async" />
  <figcaption>The petrified palace area in Chapter IX is where crouching could fail after a backtrack.</figcaption>
</figure>

The October 6 bug-fix update names a specific Chapter IX problem: after backtracking in the palace, Sophia might not be able to crouch in a petrified area. If a stealth line there failed because crouch would not register, that was this bug, not the game deciding the room is a brawl. The fix is in the update, so the first step is always to install it and go back to the same spot.

## What the bug looked like

The listed combination is narrow: Chapter IX, the palace, a petrified area, and a crouch that will not take after you have walked back through. A different chapter, a different object, or an action other than crouching is a different issue. Keeping that distinction saves you from replaying chapters to chase a problem that was never there.

## How to check it on the updated build

1. Make sure the update has finished installing.
2. Load the save from the palace backtrack, not a random fight elsewhere. If your platform lets you, back up that save first so you keep the original state.
3. Walk back to the petrified area and crouch once.
4. If Sophia crouches, the listed bug is gone for your save. Continue the stealth line the room was built for.
5. If she does not, check whether crouching works anywhere nearby. That tells you whether the problem is local to the area or affects your input everywhere.

One reload on the current build is the whole check. Ten reloads on the launch build only reproduce the bug the patch closed. Change one thing at a time: rebinding controls, lowering the difficulty, and loading another chapter in the same attempt makes it impossible to know what helped. Difficulty affects damage, not whether an input works, so lowering it will not fix crouching.

## Other fixes that are not this room

The same update lists separate fixes for other chapters. They have their own checks:

| Chapter | Fixed problem | Where to look |
| --- | --- | --- |
| III | Leni's lens interaction could not be triggered | [Leni lens puzzle checklist](/resonance-leni-lens-puzzle-checklist/) |
| IX | Crouch failed in a petrified area after a palace backtrack | This page |
| XIII | Progression could not be saved after an earlier corrupted squeeze-through | [October 6 update](/resonance-plague-tale-legacy-october-6-update/) |
| XIV | The Book became unusable after the credits | [The book after the credits](/resonance-book-after-credits/) |

The patch also fixed numerous object-interaction blocks and collision issues. Those are useful context, but they do not guarantee that every stuck spot in the palace has the same cause. Focus Attack and Prism rebinding were separate lines in the notes too; if your problem is a control binding rather than this area, see [Focus Attack and Prism controls](/resonance-focus-prism-input-planning/).

## If crouch works and the room is still a fight

Then it is a fight. A working crouch does not make every palace room optional combat. If a guard flanks you, turn to face the second one and parry rather than trying to crouch out of it; the [combat guide](/combat/) covers flanks and parry timing.

The same update also fixed enemies surviving after being pushed off a ledge, so a shove near an edge should now finish the enemy. That is a separate change from the crouch fix; the [October combat fixes guide](/resonance-october-combat-bugfix-guide/) covers it.

## Stutter in the palace

The PC requirements call for **75 GB** of SSD space. A hitch that swallows the crouch input while an area loads is a streaming problem, not a new puzzle. If the palace stutters, check the install drive first; the [October PC patch guide](/resonance-october-pc-patch-settings-guide/) covers stutter and the SSD requirement.

## Collectibles while you are back there

Backtracking often mixes three goals: the story objective, an earlier route, and something you missed. Finish the objective first, then sweep. Chapter 9 holds one Blade, three Artefacts and two Charms (see the [collectibles by chapter table](/plague-tale-legacy-collectibles-by-chapter/)). Check the counters in the Artefacts and Sophia menus rather than trusting whether an object still looks present, especially after a reload. Resonance Points only save at the next checkpoint, so reach one before you reload to test anything.

## If the problem persists

Keep the affected save and write a short reproduction: Chapter IX, palace backtrack, petrified area, whether crouch works elsewhere, and what happened after updating. Add your platform and input device. Do not delete progress to make a report look more serious. For general navigation habits, see the [exploration and traversal guide](/island-exploration-encounter-guide/).
