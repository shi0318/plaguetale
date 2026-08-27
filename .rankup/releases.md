# 发布记录

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
