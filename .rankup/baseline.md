# 基线 — 2026-08-28

## 技术与内容

- 本地构建基线待本轮测试完成后写入；当前源码有 38 个 Markdown guide 条目，其中 20 个为本轮新增发售后内容。
- sitemap 只给实际修改页面写入真实 `lastmod`；静态 hub 与本轮修改文章使用 2026-08-28，未改页面不统一伪造日期。
- 全部构建页面的 title、H1 均包含 Resonance 或 A Plague Tale 语义；canonical 使用 HTTPS 与尾斜杠。
- 推送前线上仍是上一版本；推送后重新读取 `sitemap-index.xml` 与 `sitemap-0.xml`，不能用本地构建代替线上证据。

## 流量与索引

- Steam App 2713000：2026-08-28 核验为 released，发布日期为 August 27, 2026。
- GSC 真实点击、查询词和索引状态：本任务未取得登录态，待核验。
- 不用 `site:` 结果替代 GSC 数据，也不把本地构建成功描述为 Google 已收录。
