---
title: "Resonance Chapter 3 Leni's Lens Fix and Save Progression Update"
heading: "Chapter III Leni's Lens Fix: What to Retest After the October Update"
description: "The October 6 Resonance update fixes the Chapter III Leni lens interaction, Chapter XIII save progression, and other chapter blockers."
category: news
keyword: "resonance chapter 3 leni lens fix"
status: official
sourceKeys: []
preRelease: false
order: 1
updatedAt: "2026-10-15"
cover: "/images/ptl-hot-3.webp"
---

<figure>
  <img src="/images/ptl-hot-3.webp" alt="A character aiming in a Resonance interior" width="1400" height="788" loading="lazy" decoding="async" />
  <figcaption>An aiming still from the same build. The Chapter III lens is an interaction prompt, not a new puzzle solution.</figcaption>
</figure>

The October 6, 2026 **Bug Fixes update** addresses several progression blockers that could make a chapter look incomplete. One clearly documented fix concerns the **Chapter III Leni lens interaction**: the update fixes the case where the interaction could not be triggered. It also names a Chapter XIII save-progression block, a Chapter IX backtracking issue, and a Chapter XIV book interaction after the credits.

## Chapter III: Leni's lens interaction

Load the affected save after the game has finished updating, then return to the Chapter III scene where Leni's lens should be usable. The update specifically fixes the interaction trigger, so the prompt should be available in the same story context instead of requiring a new file. Check the interaction before replaying unrelated chapters.

The fix does not publish a new button mapping, a hidden item location, or a different puzzle solution. If the scene still has no prompt, first confirm that the game restarted into the updated build and that you are at the same object or story state that previously failed.

## Other chapter-specific fixes in the same update

| Chapter | Fixed problem | Retest target |
| --- | --- | --- |
| III | Leni's lens interaction could not be triggered | Return to the lens scene and check for the interaction prompt |
| IX | Crouching could fail in the petrified area after palace backtracking | Backtrack through the palace route and test crouch in the affected area |
| XIII | Progression could fail after an earlier corrupted squeeze-through state | Load the affected save and confirm the next progression step can be saved |
| XIV | The book could become unusable after the credits | Reopen the book interaction after the credits sequence |

The update also improves **Nemesis navigation**, NPC behaviour in multiple chapters, and several blocking object interactions. Those changes matter when an enemy or an interactable appears to stop the story even though the chapter objective is still visible.

## A safe retest order

1. Let Steam finish the update and restart the game. Record the platform and display mode before testing so a performance issue is not confused with a story blocker.
2. Load the save that showed the problem. Test Chapter III's lens, Chapter IX's petrified-area crouch, or Chapter XIII's save step in the original context before starting a new run.
3. If the chapter now advances, make a fresh manual save at the next stable point. Keep the old file until the chapter is confirmed clear.
4. If the interaction still fails, separate it from Nemesis navigation, collision, or a general input-setting problem. The [October 6 update guide](/resonance-plague-tale-legacy-october-6-update/) covers the wider stability and settings list, while the [Story Select cleanup guide](/story-select-cleanup/) explains the reported chapter-replay route.

These are fixes for named blockers, not a promise that every progression issue in every save is gone. Keep the chapter, scene, platform, and exact interaction in your report when a repeatable problem remains.
