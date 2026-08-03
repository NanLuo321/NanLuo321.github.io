@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo Mineradio 独立静态版正在启动...
echo.
echo 访问地址: http://127.0.0.1:8787/START_HERE.html
echo 如果浏览器没有自动打开，请复制上面的地址。
echo.
start "" "http://127.0.0.1:8787/START_HERE.html"
where py >nul 2>nul
if %errorlevel%==0 (
  py -m http.server 8787
  goto :eof
)
where python >nul 2>nul
if %errorlevel%==0 (
  python -m http.server 8787
  goto :eof
)
echo 没找到 Python。请安装 Python，或用其他静态服务器打开本文件夹。
pause
