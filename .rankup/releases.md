# 发布记录

## Working tree — 2026-08-27T18:05:00+08:00

- 环境：production source / GitHub main pending
- 变更：预发布状态、guide-intent SEO、日期校验器与统一图片/robots 元数据。
- 部署目标：plaguetaleguide.com
- 数据迁移：无
- 线上验证：sitemap-index HEAD 200；本轮代码尚未推送，线上 HTML 尚未作为新版本验证。
- 监控：推送后复核首页与关键 URL，再看 GSC。
- 回滚点：上一稳定 Git commit `ce73d5b`。
- 证据：本地 `seo-check` 与 `npm run build` 通过。
- 结论：pending
