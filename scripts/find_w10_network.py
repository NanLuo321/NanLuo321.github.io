# -*- coding: utf-8 -*-
import re

with open(r'd:\Users\南洛\Desktop\NanLuo321.github.io-master\src\pages\w10.html', encoding='utf-8') as f:
    lines = f.readlines()

keys = [
    'wifi', 'WiFi', 'network', 'Network', 'networkPanel', 'netPanel',
    'renderNetwork', 'netList', 'networkList', 'connected', '安全', '已连接',
]
for i, l in enumerate(lines):
    for k in keys:
        if k in l:
            print(i + 1, ':', l.strip()[:120])
            break
