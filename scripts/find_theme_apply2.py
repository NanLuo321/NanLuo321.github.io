# -*- coding: utf-8 -*-
import re

with open(r'd:\Users\南洛\Desktop\NanLuo321.github.io-master\src\pages\w10.html', encoding='utf-8') as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    for k in ['settingsTheme', 'settingsBgColor', 'settingsResolution', 'applyAllSettings', 'window.w10', 'body.dataset', 'bgColor', 'body.style']:
        if k in l:
            print(i + 1, ':', l.strip()[:120])
