import io

s = io.open(r'E:\NanLuo321.github.io-main\public\_melt-test.html', encoding='utf-8').read()
i = s.index('const FRAG = ')
print(repr(s[i:i + 400]))
print('---- backslash positions ----')
BS = chr(92)
found = 0
for k, ch in enumerate(s):
    if ch == BS:
        print(k, repr(s[max(0, k - 40):k + 40]))
        found += 1
        if found > 6:
            break
print('total backslashes shown:', found)
