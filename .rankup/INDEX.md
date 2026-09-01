# Rankup 项目索引

- 项目：Resonance: A Plague Tale Legacy Guide
- 最近更新：2026-08-31T17:21:00+08:00
- 当前阶段：8（技术 SEO、内容与索引准备）
- 上一个完成的关卡：新增 missable achievements 搜索意图页，并完成本地构建、SEO 校验和成品页回归（2026-08-31）
- 下一步动作：部署后检查新 URL 的线上 HTML、sitemap 与 GSC 索引状态
- 当前阻塞：本任务按要求未提交/推送；GSC 仪表盘状态未实时读取，不能宣称 Google 已收录

## 推荐读取顺序

1. [PROJECT.md](PROJECT.md)
2. [audit.md](audit.md)
3. [decisions.md](decisions.md)
4. [plan.md](plan.md)

## 文件状态

| 文件 | 内容 | 最近核对 | 状态 |
|---|---|---|---|
| PROJECT.md | 定位与编辑边界 | 2026-08-28 | current |
| audit.md | 技术 SEO 与事实边界 | 2026-08-31 | current |
| keywords.md | 目标意图与证据状态 | 2026-08-31 | research |
| integrations.md | 平台和线上核验看板 | 2026-08-28 | current; GSC pending |
| releases.md | 发布记录 | 2026-08-28 | current |

## 最近变化

- 2026-08-28：Steam App 2713000 已核验为 released；将首页、旧内容和 20 个新增发售后文章切换到发售后口径，保留无法直接验证的内容边界。
- 2026-08-28：提交 `17b3009` 已推送到 GitHub main；Cloudflare 随后完成同步，线上 sitemap 含 51 个 URL，关键文章、分页、robots、favicon 和 404 均已回归。
- 2026-08-31：新增 `/missable-achievements-guide/`，只写 Steam Achievements、玩家讨论中的 Story Select 和未确认边界；`sourceKeys` 为空以隐藏文章来源面板，未改 NAV，未推送。
- 2026-08-27：收紧首页及内页 title/description 长度，补齐本轮实际修改页面的 sitemap `lastmod`，保持未改页面不变。
- 2026-08-27：校验器改为区分“核验日期”和“发售声明”，补充全源码过期声明检查。
- 2026-08-27：上一轮 main 分支已推送；本轮改动待推送后再更新线上 URL 与 sitemap 证据。
