# -*- coding: utf-8 -*-
import re

with open(r'd:\Users\南洛\Desktop\NanLuo321.github.io-master\src\pages\w10.html', encoding='utf-8') as f:
    lines = f.readlines()

print('total lines:', len(lines))

keys = [
    'renderAppContent', 'appMap', "type: 'vlc'", "type: 'cam'", "type: 'settings'",
    'function render', 'function open', 'function start', 'const apps', 'var apps',
    'let apps', 'VLCPanel', 'Personalization', 'Display', 'resolution',
    'CAM', 'VolumePanel', 'NetworkPanel', 'wifi', 'WiFi',
]
for i, l in enumerate(lines):
    for k in keys:
        if k in l:
            print(i + 1, ':', l.strip()[:120])
            break
