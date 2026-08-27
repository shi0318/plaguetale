# 当前计划

- 目标：在不虚构发售状态或攻略数据的前提下完成本轮技术 SEO 修正，并将两站改动推到 GitHub。
- 更新时间：2026-08-27T18:55:30+08:00

| 优先级 | 工作项 | 负责人 | 状态 | 验收标准 | 依赖 |
|---|---|---|---|---|---|
| P0 | 修复过期日期校验误报 | Codex | done | `node scripts/seo-check.mjs` 通过 | 无 |
| P0 | 保持 Steam 解锁前的预发布闸门 | Codex | done | 页面不显示 Out now，日期仍显示 August 27, 2026 | Steam 状态 |
| P1 | 完善统一 SEO 图片与 robots 元数据 | Codex | done | 构建 HTML 含 image alt 与 max-image-preview | 无 |
| P1 | 测试、构建、提交并推送 main | Codex | done | 两仓库 build/test 通过且远端 main 更新 | GitHub 网络 |
| P2 | 推送后 GSC/sitemap 线上核验 | Site owner | pending | GSC 真实报告与线上 HTML 记录 | 登录态 |

## 阻塞项

- GSC 登录态不在本任务中；不能替用户宣称索引或排名已改善。
