# Integrations and verification board

| Area | Status | Evidence / next check |
|---|---|---|
| Robots and sitemap | ✅ | 2026-08-28 线上 robots 声明生产 sitemap；sitemap-index 与 sitemap-0 均 200，sitemap-0 含 51 个 URL，与本地构建（不含 404 页）一致。|
| Canonical / HTTPS / trailing slash | ✅ | Astro 配置使用生产 HTTPS 与 `trailingSlash: 'always'`；线上关键页 canonical 为 HTTPS 带斜杠。|
| Title / description / OG | ✅ | 2026-08-28 线上首页、launch-status、分页页均 200；title、description、canonical、og:image 可读取。|
| JSON-LD | ✅ | 2026-08-28 线上首页可读取 Organization、WebSite、VideoGame 与页面结构化数据。|
| Favicon / logo assets | ✅ | 2026-08-28 线上 favicon-96.png 返回 200 / image/png；favicon、ICO、SVG、apple-touch-icon 与 logo-512.png 均纳入构建。|
| Google Search Console | ⬜ | 本任务没有 GSC 登录态；推送后用真实 property 检查 sitemap 与索引。|
| Bing Webmaster / IndexNow | ⬜ | 当前没有可核验记录。|
| Cloudflare Web Analytics | ⬜ | 当前没有可核验 beacon。|
| GA4 / Microsoft Clarity | ⬜ | 当前未接入或未核验。|
| Ahrefs Web Analytics | ⬜ | 当前没有可核验记录。|
| Yandex / Naver verification | ⬜ | 当前没有可核验记录。|
