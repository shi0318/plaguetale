# 当前架构

- 框架：Astro 5 静态站点，使用 Tailwind CSS 与 content collection。
- 内容：`src/content/guides/` 保存 Markdown 指南；`src/pages/[...slug].astro` 统一渲染指南文章。
- 页面：首页、指南分页、角色、收藏品、技能、walkthrough、资讯页和站点信息页。
- SEO：`src/layouts/Layout.astro` 统一输出 title、description、canonical、Open Graph、Twitter、JSON-LD、favicon 与 sitemap link。
- sitemap：`astro.config.mjs` 生成 `sitemap-index.xml`；文章的 `updatedAt` 与静态 hub 日期分别控制 lastmod。
- 资产：`public/images/` 保存 Steam 页面相关的本地图片及 PNG/ICO/SVG 图标。
- 运行时：没有数据库、鉴权或用户生成内容。
