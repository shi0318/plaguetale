# 密钥登记

| name | purpose | environment | provider/storage location | owner | access status | rotated at | next rotation |
|---|---|---|---|---|---|---|---|
| deployment credentials | 发布站点 | production | GitHub/hosting provider secret store | site owner | restricted | never | review on ownership change |

只记录密钥元数据；真实令牌、密码和授权头不进入项目文件或 Git。
