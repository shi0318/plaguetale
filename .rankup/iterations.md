# 迭代记录

## 2026-08-28 — 发售后内容与状态切换

- 目标：在 Steam 已 released 后，让首页、旧页面和新增文章不再把游戏写成未发售，同时保持真实证据边界。
- 证据：Steam App 2713000 于 2026-08-28 核验为 released；发布日期为 August 27, 2026。
- 操作：切换 `SITE.releaseStatus`；清理首页、hub、FAQ、下载、平台、演示、系统和攻略页的旧口径；新增 20 个 Markdown guide 页面；复用官方 Steam 图像素材；将修改页面的 sitemap `lastmod` 设为 2026-08-28。
- 边界：没有把媒体 preview、社区报告或系列推断写成本站个人零售版实测；没有删除 `/pre-launch-checklist/` 旧 URL。
- 验证：待本轮 `npm test`、`npm run build`、GitHub 推送和线上回归完成后补充最终证据。
- 下一轮唯一改进：以 GSC 的实际展示词和未收录原因选择下一批更新，不用 `site:` 结果替代 GSC。

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

## 2026-08-27 — GitHub 推送与线上回归

- 操作：将本轮代码与发布记录推送到 GitHub `main`，远端提交为 `2737324733caee72b2e33f15e55224569e7f0a1c`。
- 线上证据：首页、关键 hub、robots、sitemap-index、sitemap-0 与 PNG favicon 均返回预期状态；线上 28 个页面 URL 与本地构建一致。
- 结论：发布链路完成；GSC 登录态和索引状态仍需在 Search Console 中单独核验，Steam 解锁前不发布零售版实测内容。
- 下一轮唯一改进：Steam 状态变为可玩后，重新验证零售版事实，再将对应页面从预发布框架升级。
