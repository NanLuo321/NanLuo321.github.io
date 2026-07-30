@echo off
chcp 65001 >nul
echo ====================
echo 执行 git add .
git add .
echo ====================
echo 执行提交
git commit -m "修复了已知问题"
echo ====================
echo 推送远程仓库
git push
echo ====================
echo 全部命令执行完毕！
pause