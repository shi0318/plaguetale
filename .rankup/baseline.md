# 基线 — 2026-08-27

## 技术与内容

- 本地 `npm run build` 通过，生成 29 个静态页面。
- 本地生成的 sitemap-0 包含 29 个 `<loc>`，首页、核心 hub 与实际更新的文章才带 lastmod。
- 全部构建页面的 title、H1 均包含 Resonance 或 A Plague Tale 语义；canonical 使用 HTTPS 与尾斜杠。
- 线上 `https://plaguetaleguide.com/sitemap-index.xml` HEAD 返回 200；本轮推送前线上内容仍需重新读取。

## 流量与索引

- GSC 真实点击、查询词和索引状态：本任务未取得登录态，待核验。
- 不用 `site:` 结果替代 GSC 数据，也不把本地构建成功描述为 Google 已收录。
