# Dockerfile
FROM node:14
WORKDIR /app
COPY . /app

# 定时任务文件
COPY ./bin/we-server-cron /etc/cron.d/we-server-cron

# 定时任务
RUN chmod 0644 /etc/cron.d/we-server-cron
RUN crontab /etc/cron.d/we-server-cron

# 设置时区
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Asia/Shanghai' >/etc/timezone

# 安装 npm 插件
RUN npm set registry https://registry.npm.taobao.org
RUN npm i

# 启动
CMD cron && npm run prd-dev && npx pm2 log
