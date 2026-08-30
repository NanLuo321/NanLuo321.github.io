# -*- coding: utf-8 -*-
import os, re

base = r'd:\Users\南洛\Desktop\NanLuo321.github.io-master\public\w10'
for root, dirs, files in os.walk(base):
    for f in files:
        if f.endswith(('.html', '.css', '.js')):
            p = os.path.join(root, f)
            try:
                with open(p, encoding='utf-8', errors='ignore') as fh:
                    c = fh.read()
                refs = re.findall(r'https?://[^\s\'"]+', c)
                if refs:
                    rel = os.path.relpath(p, base)
                    print(rel, '->', refs)
            except Exception as e:
                print('ERR', p, e)
