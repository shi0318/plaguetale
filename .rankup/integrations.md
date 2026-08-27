# Integrations and verification board

| Area | Status | Evidence / next check |
|---|---|---|
| Robots and sitemap | ✅ | 本地构建生成 sitemap-index 与 sitemap-0；线上 sitemap-index HEAD 200（2026-08-27）。|
| Canonical / HTTPS / trailing slash | ✅ | Astro 配置使用生产 HTTPS 与 `trailingSlash: 'always'`；构建 sitemap URL 均带斜杠。|
| Title / description / OG | ✅ | 全部构建 HTML 通过本地元数据检查；推送后复核线上首页和关键页。|
| JSON-LD | ✅ | Layout 输出 Organization、WebSite/Article/CollectionPage、VideoGame 与 BreadcrumbList。|
| Favicon / logo assets | ✅ | favicon PNG、ICO、SVG、apple-touch-icon 和 logo-512.png 均存在；推送后复核 HTTP 200。|
| Google Search Console | ⬜ | 本任务没有 GSC 登录态；推送后用真实 property 检查 sitemap 与索引。|
| Bing Webmaster / IndexNow | ⬜ | 当前没有可核验记录。|
| Cloudflare Web Analytics | ⬜ | 当前没有可核验 beacon。|
| GA4 / Microsoft Clarity | ⬜ | 当前未接入或未核验。|
| Ahrefs Web Analytics | ⬜ | 当前没有可核验记录。|
| Yandex / Naver verification | ⬜ | 当前没有可核验记录。|
