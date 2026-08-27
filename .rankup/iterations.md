# 迭代记录

## 2026-08-27 — 发售前 SEO 与状态修正

- 目标：让首页承接 guide intent，并避免按日历误报已发售。
- 观察：Steam appdetails 核验仍为预购/Coming Soon，预计日期为 August 27, 2026。
- 操作：更新首页 title/H1/description、预发布文案、日期事实、sitemap lastmod；加入手动 releaseStatus；修复日期校验器误报；压缩过长内页 title；补充 robots 与图片 alt 元数据。
- 验证：`node scripts/seo-check.mjs` 通过；`npm run build` 通过并生成 29 个页面；全部页面 title/H1 游戏名检查通过。
- 决定：不发布零售版 walkthrough、收藏品位置或“已发售”声明。
- 下一轮唯一改进：推送后用真实线上 HTML 与 GSC 数据核验抓取和索引。

## 2026-08-27 — 日期事实复核与元数据收紧

- 证据：2026-08-27 通过 Steam 美国地区 appdetails 重新核验 App 2713000，返回 `coming_soon=true`、`Aug 27, 2026` 和 $49.99。
- 修正：撤销此前的 August 28 日期残留；继续保留手动预发布闸门，避免日历日期自动显示已发售。
- 修正：首页 title/description、若干内页 description 与分页描述收紧到搜索结果可读长度；同步实际修改内容页的 `updatedAt`/静态 `lastmod`。
- 验证：SEO 检查、3 个 Plague Tale 测试和 Astro `build --force` 均通过，生成 29 个页面，title/description 审计无超限项。
- 下一轮唯一改进：推送后重新核验线上版本；Steam 解锁前不发布零售版实测内容。
