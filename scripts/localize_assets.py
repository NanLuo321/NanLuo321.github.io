# -*- coding: utf-8 -*-
import os

base = r'd:\Users\南洛\Desktop\NanLuo321.github.io-master\public\w10'

# Replace bootstrap-icons CDN with local
cdn_bi_19 = "https://cdn.bootcdn.net/ajax/libs/bootstrap-icons/1.9.1/font/bootstrap-icons.css"
cdn_bi_110 = "https://cdn.bootcdn.net/ajax/libs/bootstrap-icons/1.10.3/font/bootstrap-icons.css"
local_bi = "../../assets/bootstrap-icons.css"

# Map of files -> replacements
replacements = [
    (r'windows\apps\explorer\explorer.css', cdn_bi_19, local_bi),
    (r'windows\apps\jisuanqi\jisuanqi.html', cdn_bi_19, local_bi),
    (r'windows\apps\music\index.css', cdn_bi_19, local_bi),
]

# user.html background image
user_bg_src = "url(https://s1.ax1x.com/2022/12/17/zHwsl4.jpg)"
user_bg_dst = "url(../../img/loginbg.jpg)"

for rel, src, dst in replacements:
    p = os.path.join(base, rel)
    with open(p, encoding='utf-8') as f:
        c = f.read()
    if src in c:
        c = c.replace(src, dst)
        with open(p, 'w', encoding='utf-8') as f:
            f.write(c)
        print('REPLACED', rel)
    else:
        print('NOT FOUND', rel, '->', src)

# user.html
p = os.path.join(base, r'windows\pages\user.html')
with open(p, encoding='utf-8') as f:
    c = f.read()
if user_bg_src in c:
    c = c.replace(user_bg_src, user_bg_dst)
    with open(p, 'w', encoding='utf-8') as f:
        f.write(c)
    print('REPLACED user.html bg')
else:
    print('NOT FOUND user.html bg')
