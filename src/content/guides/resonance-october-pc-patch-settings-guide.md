---
title: "Resonance October PC Patch: Nemesis Stutter, 21:9, SSD and Frame Generation"
heading: "Resonance PC Fixes After the October Update: Stutter, Ultrawide and Anti-Lag"
description: "What the October 6 Resonance update fixed on PC: Nemesis-area stutter, 21:9 support, AMD Anti-Lag with Frame Generation off, and why the 75 GB SSD rule still applies."
category: guide
keyword: "resonance plague tale legacy october pc patch"
status: official
sourceKeys: []
preRelease: false
order: 1
updatedAt: "2026-11-16"
cover: "/images/ptl-capsule.webp"
---

<figure>
  <img src="/images/ptl-capsule.webp" alt="Resonance: A Plague Tale Legacy PC edition artwork" width="1400" height="788" loading="lazy" decoding="async" />
  <figcaption>The October 6 update fixed several display and performance issues. Test one setting at a time.</figcaption>
</figure>

The October 6 update for **Resonance: A Plague Tale Legacy** fixed three PC display and performance problems: it reduced stutter when approaching a new Nemesis area, fixed **21:9** aspect-ratio support, and fixed AMD Anti-Lag not working when Frame Generation was disabled. The useful question is not "is performance fixed?" but whether your symptom matches one of those lines and whether the current build is installed.

## What the update changed

| Fix in the notes | What to check |
| --- | --- |
| Reduced stutter when approaching a new Nemesis area | The hitch at the boundary of a pursuer's zone |
| Fixed 21:9 support | A cut-off or stretched image on an ultrawide |
| AMD Anti-Lag not working with Frame Generation disabled | Input feel on AMD with Frame Generation off |
| PSSR settings not saved (PS5) | A console upscaler setting; not a PC fix |
| Improved crowd audio in Chapter II; German voice lines that could accelerate in Chapters IV and IX | Audio, not frame pacing |
| Improved Nemesis navigation | A pursuer taking a different path |

Three PC fixes means three separate tests. Stacking them into one complaint makes it impossible to tell which one held.

## Nemesis-area stutter

A hitch when a new Nemesis area loads is not a parry window. The notes say this stutter was **reduced**, not removed. To tell the two apart, stand at the entrance of a Nemesis area you have already seen and do not roll as the zone starts. A loading hitch arrives with the area, before any swing is animated. An attack arrives with a body.

If the freeze is gone, play the fight as a fight and parry the swing you can see. Drop the habit of pre-rolling the doorway; a habit built on a hitch will throw you into a real hit once the hitch is gone. If the freeze is still there, check your machine against the requirements below before deciding the patch did nothing.

The same update improved Nemesis navigation, so a pursuer that no longer clips a corner you used as a safe pocket is the navigation fix, not a faster enemy. Find a new pocket.

## Ultrawide (21:9)

After updating, select your native ultrawide resolution and check both gameplay and menus: subtitles, the chapter book, cutscenes, and interface panels near the screen edges. Confirm the output resolution in your operating system too, since the game can only select modes the display and driver expose. Do not reach for a third-party scaling tool first when the patch explicitly fixed aspect-ratio support.

A stretched frame and a Nemesis hitch can land in the same second and look like one problem. Set the aspect ratio, approach the door again, and only then judge the stutter.

## AMD Anti-Lag and Frame Generation

The fix covers a specific combination: Anti-Lag not working when Frame Generation was **disabled**. It is not a blanket promise that every GPU and setting combination improves. If you turned Frame Generation off and frame time or input feel got worse, retest Anti-Lag on the updated build. Compare with a repeatable camera pan and a short combat sequence at the same resolution, and judge input feel as well as smoothness.

## The SSD rule still applies

The patch did not change the requirements. The Steam store page lists:

| | Minimum | Recommended |
| --- | --- | --- |
| OS | Windows 10 or 11 | Windows 10 or 11 |
| CPU | Ryzen 3 3100 or Core i3-12100 | Ryzen 5 5600X or Core i5-12400F |
| RAM | 16 GB | — |
| GPU | 6 GB RX 5500 XT or GTX 1060 | 8 GB RX 6700 XT or RTX 3060 Ti |
| Storage | 75 GB, SSD required | 75 GB, SSD required |
| Target | About 30 fps at 1080p on Low | — |

The additional notes require a DX12.1 GPU and a CPU with 4 cores and 8 threads. Seventy-five gigabytes on an SSD is the number to clear before blaming the patch. The stutter reduction assumes the disk the spec names; if a Nemesis door still freezes on a hard drive, move the install and test again. The full breakdown is on the [PC requirements and settings page](/pc-system-requirements/).

## A setup order

1. Confirm **75 GB** free on an SSD and move the install if needed.
2. Install the October 6 update, then fully close and relaunch the game.
3. Set the aspect ratio and walk one known path. Judge the edges.
4. Approach one Nemesis area without rolling. If the hitch remains on a machine that meets the spec, you have something worth reporting. If it remains on a hard drive, the spec is the problem.
5. On AMD with Frame Generation off, retest Anti-Lag.
6. Change one graphics option at a time and keep your previous configuration so you can return to a baseline.

Before comparing, write down resolution, refresh rate, preset, frame cap, upscaler, and Frame Generation state. Make a second pass over the same route, because the first can be skewed by caching, background downloads or shader compilation.

## Controls fixed in the same update

The update also fixed Book navigation inputs that could not be modified, a Focus Attack input that could not be changed, a Prism unlock input that could not be changed, and a joystick-swap preference that was not saved after a relaunch. Change one binding, relaunch once, and confirm it stuck. See the [Focus Attack and Prism controls guide](/resonance-focus-prism-input-planning/).

## If it still stutters or crashes

The update included broad stability fixes, but no patch list covers every hardware combination. Restore the default preset before lowering individual options, then reintroduce changes gradually. Note the exact point of failure, whether Frame Generation was on, and the step before it. If the problem only appears after alt-tabbing or changing resolution, say so in your report. Keep save backups and do not delete configuration or save files unless official support tells you to.

The notes do not publish a universal preset or promise a frame rate at any resolution. For combat changes from the same update, see the [October combat fixes guide](/resonance-october-combat-bugfix-guide/); for Steam Deck, see the [Steam Deck guide](/resonance-plague-tale-legacy-steam-deck/).
