# 当前计划

- 目标：在不虚构攻略数据的前提下新增发售后搜索意图页并完成本地技术 SEO 回归；本轮不提交或推送 GitHub。
- 更新时间：2026-08-31T17:21:00+08:00

| 优先级 | 工作项 | 负责人 | 状态 | 验收标准 | 依赖 |
|---|---|---|---|---|---|
| P0 | 修复过期日期校验误报 | Codex | done | `node scripts/seo-check.mjs` 通过 | 无 |
| P0 | 核验 Steam 发售状态并切换页面口径 | Codex | done | 页面显示 released；日期为 August 27, 2026 | Steam 状态 |
| P1 | 完善统一 SEO 图片与 robots 元数据 | Codex | done | 构建 HTML 含 image alt 与 max-image-preview | 无 |
| P1 | 补齐发售后内容与搜索意图入口 | Codex | done | 20 个新增页面有图片和证据边界，URL 可生成 | 真实来源 |
| P1 | 新增 missable achievements 搜索意图页 | Codex | done | 新页生成、进 guide 列表、不进 NAV、日期与图片通过定向回归 | 项目已有事实 |
| P1 | 测试与本地构建回归 | Codex | done | `npm test` 与 Astro build 通过，TDK/H1/来源面板/图片检查通过 | 无 |
| P1 | 提交并推送 main | Site owner | deferred | 本轮按用户要求不提交、不推送 | 用户发布决定 |
| P2 | 推送后 GSC/sitemap 线上核验 | Site owner | pending | GSC 真实报告与线上 HTML 记录 | 登录态 |

## 阻塞项

- 本轮不做 GitHub 推送或线上部署；GSC 登录态不在本任务中，不能宣称索引或排名已改善。零售版实测文章仍需逐条有证据后再升级。
