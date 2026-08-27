# 技术 SEO 审计 — 2026-08-27

## 已通过

- Astro 静态 SSR 输出正常，核心路由与 404 页面均生成。
- HTTPS、尾斜杠 canonical、robots sitemap 声明与 JSON-LD 均在本地构建中存在。
- 全部页面 title/H1 包含游戏名语义；统一布局补充 `robots=index, follow, max-image-preview:large`、Open Graph image alt 与 Twitter image alt。
- Steam 当前发售日文案更新为 August 27, 2026；预发布状态由手动开关控制。
- 过长的内页 title 已压缩为“完整游戏名 + 单一搜索意图”，URL、正文和 H1 结构不变。

## 本轮修复

- `scripts/seo-check.mjs` 不再把“checked on August 27, 2026”核验日期误判成旧发售声明。
- 过期日期检查改为递归扫描 `src` 中的 Astro、Markdown、TypeScript 和模块文件。
- 按解码后的输出检查 title/description；本轮页标题不超过 60 字符，描述控制在 110–160 字符。
- `story`、`steam-features-controller-cloud` 等本轮修改的内容页已把 frontmatter `updatedAt` 同步为 2026-08-27，生成的 sitemap 只更新实际修改页面。

## 待线上复核

- 推送后检查首页、`/release-date/`、`/walkthrough/`、`/collectibles/` 的 HTML、canonical、robots、OG 图片和 JSON-LD。
- Steam 解锁后重新检查所有预发布提示，只有零售版可复现内容才升级为正式实测。
