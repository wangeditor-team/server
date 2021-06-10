# 服务端

提供文件上传接口，用于测试。

## 开发环境

`npm run dev`

## 测试环境

### 发布到测试机

代码 push 到 `main` 分支，即可自动发布到测试机 https://github.com/wangeditor-team/server/actions

待执行完之后，可访问 `http://106.12.198.214:3000/api/test`

具体可参考 `.github/workflows/deploy.yml`

### 测试机配置

测试机安装 nodejs npm pm2

定时删除文件，配置 crontab 定时执行 `bin/rm.sh`
