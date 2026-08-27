# 决策记录

## DEC-20260827-01：Steam 解锁前使用手动发布状态闸门

- 状态：accepted
- 日期：2026-08-27
- 背景：Steam 当前仍显示预购/Coming Soon，日历日期不能代替实际解锁状态。
- 备选方案：按日期自动显示 Out now；以 Steam 解锁核验后手动切换；暂时删除发售日期。
- 决定：保留官方日期，但用 `SITE.releaseStatus` 手动控制已发售文案。
- 证据：`src/data/site.ts`、`src/components/Countdown.astro` 与当前 Steam 核验记录。
- 影响：避免时区、延迟或预载状态导致页面误称已发售；解锁后需在核验后切换。
- 复查条件：Steam 页面可购买并可启动后重新检查。

## DEC-20260827-02：首页采用 guide-intent 标题

- 状态：accepted
- 日期：2026-08-27
- 背景：首页需要承接 walkthrough 与 collectibles 意图，同时保留完整游戏名。
- 备选方案：只使用品牌裸词；堆叠全部栏目词；用自然的 guide + 两个核心意图。
- 决定：使用 `Resonance: A Plague Tale Legacy Guide — Walkthrough & Collectibles`。
- 证据：首页 TDK/H1 与现有内容集群匹配；无 GSC 数据时不宣称排名收益。
- 影响：页面主题更清晰，后续以 GSC 展示词复查。
- 复查条件：积累至少一个完整 GSC 观察窗口后评估 CTR 与查询词。
