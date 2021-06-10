#!/bin/bash
# 定时删除上传的文件，用于 crontab 调用

cd /home/work/wangEditor-team/server/upload-files # 测试机的 path
rm -rf *
