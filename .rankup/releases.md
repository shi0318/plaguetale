# 发布记录

## 17b3009 — 2026-08-28T13:40:00+08:00

- 环境：production source / GitHub main，已推送
- 变更：发售后状态、20 篇新 guide、分页目录、内容证据边界、title/description、canonical/JSON-LD/图片元数据与真实 `lastmod`。
- 部署目标：plaguetaleguide.com
- 数据迁移：无
- 本地验证：SEO check 通过；Astro production build 通过并生成 52 个页面；清理 `.astro` 缓存后无重复内容 ID 警告。
- 线上验证：2026-08-28 通过本地代理 GET 检查：首页、`/launch-status/`、`/guide/page/5/`、sitemap-index、sitemap-0、robots、favicon 均返回预期状态；sitemap-0 含 51 个 URL；不存在的测试 URL 返回 404。
- 监控：在 GSC 检查 sitemap 与索引状态；Google 收录不由本地构建或 GitHub push 自动证明。
- 回滚点：`0fdfaa8`。
- 结论：本轮代码已推送且线上部署已同步；GSC 仍需外部后台复核。

## 2737324733caee72b2e33f15e55224569e7f0a1c — 2026-08-27T19:01:48+08:00

- 环境：production source / GitHub main，已推送
- 变更：预发布状态、guide-intent SEO、Steam 日期事实、title/description、日期校验器、sitemap lastmod 与统一图片/robots 元数据。
- 部署目标：plaguetaleguide.com
- 数据迁移：无
- 线上验证：2026-08-27T19:21+08:00 线上首页、/guide/、/walkthrough/、/collectibles/ 均 200；sitemap-index 与 sitemap-0 均 200；线上 sitemap 的 28 个页面 URL 与本地构建完全一致；首页 canonical、JSON-LD、robots、og:image 与 favicon-96.png 均可读取。
- 监控：继续在 GSC 检查 sitemap 与索引状态；Steam 解锁后复核商店状态。
- 回滚点：上一稳定 Git commit `ce73d5b`。
- 证据：Steam 美国地区 appdetails 于 2026-08-27 返回 `coming_soon=true` 与 Aug 27, 2026；本地 SEO/test/build 均通过。
- 结论：已推送并完成线上回归；Steam 解锁前继续保持预发布口径。
