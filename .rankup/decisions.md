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

## DEC-20260828-01：按 Steam released 状态切换发售后口径

- 状态：accepted
- 日期：2026-08-28
- 背景：Steam App 2713000 已核验为 released；原有预发布提示、未来式发售文案和倒计时会误导读者。
- 决定：保留 August 27, 2026 事实，删除公开的未发售提示；旧 URL 不删除，无法直接验证的攻略继续标明证据边界。
- 证据：本轮 Steam 状态核验、`src/data/site.ts`、`src/components/ReleaseStatus.astro` 与内容清理结果。
- 影响：首页和 hub 承接发售后搜索意图；不把媒体 preview 或社区报告冒充本站零售版实测。
- 复查条件：每次补充章节、收集品或战斗数值前，记录版本和可复现证据。

## DEC-20260831-01：missable achievements 页面保持未确认边界

- 状态：accepted
- 日期：2026-08-31
- 背景：用户搜索会问是否会漏成就以及如何回头清理，但项目记录只有 Steam Achievements、玩家讨论中的 Story Select，没有完整官方 missable 成就表。
- 备选方案：补写猜测的成就清单；只写“未知”而不给流程；提供不虚构名称/条件/章节的记录与 Story Select 复查流程。
- 决定：采用第三种方案；新页使用 `status: unconfirmed`、`sourceKeys: []`，保留正式发售口径，不把玩家讨论伪装成本站实测。
- 证据：`src/content/guides/missable-achievements-guide.md`、既有 `achievements-guide.md` 与 `story-select-cleanup.md`；本地 build/SEO check/HTML 回归均通过。
- 影响：承接真实 completion 搜索意图，同时避免虚构成就名称、解锁条件或章节归属；页面不输出来源面板。
- 复查条件：取得可核验的完整成就列表或可重复的零售版记录后，逐条更新，不以单个社区摘要替代表。
