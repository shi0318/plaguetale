# 发布记录

## 862f3c09b1cdfc8a2d5f161469c28b0437215cb9 — 2026-08-27T19:01:48+08:00

- 环境：production source / GitHub main，push pending
- 变更：预发布状态、guide-intent SEO、Steam 日期事实、title/description、日期校验器、sitemap lastmod 与统一图片/robots 元数据。
- 部署目标：plaguetaleguide.com
- 数据迁移：无
- 线上验证：线上 sitemap-index 此前 HEAD 200；本 commit 尚未推送，线上 HTML 尚未作为新版本验证。
- 监控：推送后复核首页与关键 URL，再看 GSC。
- 回滚点：上一稳定 Git commit `ce73d5b`。
- 证据：Steam 美国地区 appdetails 于 2026-08-27 返回 `coming_soon=true` 与 Aug 27, 2026；本地 SEO/test/build 均通过。
- 结论：pending
