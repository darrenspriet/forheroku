set myvar='';
for /f %%a in (README.md) do (
set myvar=%myvar% %%a;
  echo line=%%a
)
pause
echo %myvar% > lines.txt
