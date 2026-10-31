---
title: "Resonance October Combat Fixes: Knockback, Enemy Reactions, and Skill Checks"
heading: "How to Retest Resonance Combat After the October Update"
description: "A focused Resonance combat guide for the October update: enemy reactions, knockback kills, chapter-specific blockers, and a clean way to verify fixes."
category: guide
keyword: "resonance plague tale legacy combat update"
status: official
sourceKeys: []
preRelease: false
order: 2
updatedAt: "2026-10-30"
cover: "/images/ptl-sophia-combat.webp"
---

<figure>
  <img src="/images/ptl-sophia-combat.webp" alt="Sophia preparing for a melee encounter in Resonance" width="1400" height="788" loading="lazy" decoding="async" />
  <figcaption>The October update included targeted combat fixes; a controlled retest helps separate them from normal encounter variation.</figcaption>
</figure>

The October 6 update for **Resonance: A Plague Tale Legacy** included several fixes that can affect how combat feels: enemies pushed off an edge should no longer survive incorrectly, enemies should react to Sophia after a restart, and a number of collisions in specific fights were corrected. The same update also improved Nemesis navigation and adjusted NPC behavior in multiple chapters. If you are revisiting the game, this is a practical way to test the changes without turning one encounter into a theory about the entire combat system.

## Verify the installed version first

The first step is to confirm that your platform has installed the October update. If you are playing on PC, check the client before loading the save. Console players should verify that the patch has completed rather than resuming during an update. Then load the affected chapter or encounter and note the checkpoint. A clean test uses the same chapter, enemy, difficulty, and approach as the original report.

Do not compare a first attempt from one version with a late-game attempt on another difficulty and assume the difference is caused by the fix. Keep the conditions as close as possible. If the encounter has randomized enemy movement or you changed weapons, perform more than one attempt before drawing a conclusion.

## When an enemy survives a knockback

The update fixed a case where enemies could survive after being pushed off an edge. To check a suspected occurrence, identify the enemy type, the ledge, and the direction of the push. Watch whether the enemy falls out of the combat space and whether the encounter state updates. A survivor who lands on a lower platform or remains reachable is not necessarily the same bug as an enemy that disappears but keeps the fight active.

Use the game's normal combat tools and avoid repeating a knockback at a different ledge until you know the original location is resolved. If the issue persists, capture a brief clip showing the edge, the push, and the enemy's state afterward. This is more useful than describing the entire chapter as “broken,” and it gives support a reproducible test.

## Check enemy reactions after a restart

Another fix addressed enemies that would not react to Sophia's presence or attacks after a restart. When you encounter an unresponsive enemy, first distinguish a deliberate alert state from a frozen AI state. Move into view, use a clear attack, and wait for the enemy's response. If it remains idle, reload the checkpoint once and repeat the same action. Avoid restarting repeatedly before you have recorded the state; the update specifically concerned a post-restart behavior, so knowing whether the enemy was already active before loading matters.

For a reliable report, note whether the restart followed a death, a menu load, or a chapter selection. Record whether other enemies react normally. If one enemy is stuck but the rest of the fight works, the location and enemy type may matter more than a global control problem.

## Use parry and Focus as separate tests

The patch also corrected a case where the “New skill available” popup might not appear after earning Resonance points following combat sequences, and it fixed menu inputs for Focus Attack and Prism unlock. If a skill unlock is not visible, open the relevant menu and verify the available point total before repeating combat for more points. A missing notification does not by itself prove the reward was lost.

For combat practice, test one mechanic at a time. Use a parry attempt to learn a single readable enemy tell, then switch to a Focus Attack test after you have enough resource. Record whether the input is accepted, whether the skill executes, and what the HUD displays. This helps separate a control-binding problem from a timing miss. The patch fixed the ability to edit certain inputs; it did not change the basic need to perform the action at the correct time.

## Chapter-specific behavior still matters

The October fixes include a Chapter III case where Leni's lens interaction could fail to trigger, and a Chapter IX case where Sophia might be unable to crouch in a petrified area after backtracking in the palace. They also address a Chapter XIII progression save issue and an unusable book in Chapter XIV after the credits. These are location-specific conditions. If you are returning for cleanup, note the chapter before trying a combat workaround.

When an interaction is blocked, approach it once from the intended side and check whether a nearby objective or dialogue is still active. If the trigger remains absent, leave the area only if the game allows you to return safely. Do not assume that changing combat difficulty will fix a progression trigger. For Leni's lens interaction, see the [lens puzzle checklist](/resonance-leni-lens-puzzle-checklist/) and use the chapter guide to confirm your current step.

## Retest improvements without overclaiming

The patch notes describe “numerous minor fixes” to collisions in specific fights, not every wall or arena boundary in the game. If Sophia gets caught on geometry, note the exact move, camera angle, and nearby object. Try the same route again after the update and compare. If the collision is gone, keep the note tied to that build and location; do not turn it into a claim that all collision issues are fixed.

The same caution applies to enemy navigation and NPC behavior. A better path does not mean every character reacts identically in every scene. Combat encounters mix animation timing, level geometry, and story triggers. A precise report is more actionable than a global label.

## Quick return-to-combat checklist

Update the game, load the same encounter, note the chapter and checkpoint, and test the original action once. For a knockback issue, watch the enemy and encounter state after the fall. For an unresponsive enemy, test presence and one attack after the restart. For a missing skill prompt, check the menu and available Resonance points. For a control problem, verify the saved input in settings. Keep a short record of what happened and what did not.

This method protects your progress and gives you a clean answer about the October fixes. For a broader overview of Sophia's combat choices, continue to the [combat hub](/combat/) and [parry basics](/combat-parry-basics/).
