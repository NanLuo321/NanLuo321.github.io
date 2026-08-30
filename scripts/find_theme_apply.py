# -*- coding: utf-8 -*-
import re

with open(r'd:\Users\南洛\Desktop\NanLuo321.github.io-master\src\pages\w10.html', encoding='utf-8') as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    for k in ['w10_settings_theme', 'w10_settings_bgcolor', '_settingsTheme', '_settingsBgColor', 'document.body.style.background', 'applySettings', 'settings_bg']:
        if k in l:
            print(i + 1, ':', l.strip()[:120])
