# 技术 SEO 审计 — 2026-08-28

## 已通过

- Astro 静态 SSR 输出正常，核心路由与 404 页面均生成。
- HTTPS、尾斜杠 canonical、robots sitemap 声明与 JSON-LD 均在本地构建中存在。
- 全部页面 title/H1 包含游戏名语义；统一布局补充 `robots=index, follow, max-image-preview:large`、Open Graph image alt 与 Twitter image alt。
- Steam 当前状态已核验为 released；发售日文案为 August 27, 2026，页面不再展示预发布提示。
- 过长的内页 title 已压缩为“完整游戏名 + 单一搜索意图”，URL、正文和 H1 结构不变。

## 本轮修复

- `scripts/seo-check.mjs` 不再把“checked on August 27, 2026”核验日期误判成旧发售声明。
- 过期日期检查改为递归扫描 `src` 中的 Astro、Markdown、TypeScript 和模块文件。
- 按解码后的输出检查 title/description；本轮页标题不超过 60 字符，描述控制在 110–160 字符。
- `story`、`steam-features-controller-cloud` 等本轮修改的内容页已把 frontmatter `updatedAt` 同步为 2026-08-28，生成的 sitemap 只更新实际修改页面。
- 发售后补入 20 个有独立搜索意图的内容页，复用官方 Steam 媒体素材；未有零售版证据的部分保留“官方事实 / dated preview / community report”边界。
- 修正 guide hub、walkthrough hub、FAQ、平台与价格措辞，删除会把已发售游戏写成未发售的公开文案；静态 hub 的 sitemap `lastmod` 更新为 2026-08-28。

## 待线上复核

- 推送后检查首页、`/release-date/`、`/walkthrough/`、`/collectibles/` 的 HTML、canonical、robots、OG 图片和 JSON-LD。
- 推送后检查首页、关键 hub、新增文章、sitemap、robots、canonical、OG 图片、JSON-LD 和 PNG favicon；GSC 收录仍需在后台单独确认。
