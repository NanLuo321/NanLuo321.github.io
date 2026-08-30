# -*- coding: utf-8 -*-
import re

with open(r'd:\Users\南洛\Desktop\NanLuo321.github.io-master\src\pages\w10.html', encoding='utf-8') as f:
    lines = f.readlines()

# Find renderAppContent vlc/rtmp section boundaries
for i, l in enumerate(lines):
    if "type === 'vlc'" in l or "type === 'rtmp'" in l or "type === 'cam'" in l or "case 'vlc'" in l or "case 'rtmp'" in l:
        print(i + 1, ':', l.strip()[:120])
