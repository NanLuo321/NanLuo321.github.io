import io
import subprocess

s = io.open(r'E:\NanLuo321.github.io-main\public\_melt-test.html', encoding='utf-8').read()
i = s.index('<script>') + len('<script>')
j = s.index('</script>')
code = s[i:j]
out = r'E:\NanLuo321.github.io-main\.workbuddy\tmp\melt-test-script.mjs'
io.open(out, 'w', encoding='utf-8', newline='\n').write(code)
print('script bytes', len(code))
r = subprocess.run(
    [r'C:\Users\NanLuo\.workbuddy\binaries\node\versions\22.22.2-3\node.exe', '--check', out],
    capture_output=True, text=True,
)
print('exit', r.returncode)
print(r.stdout[-2000:])
print(r.stderr[-3000:])
