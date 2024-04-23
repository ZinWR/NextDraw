#!/usr/bin/env python3

import sys
from git_filter_repo import Blob

def callback(blob: Blob, metadata):
    if blob.type == b'commit':
        return
    if blob.size > 100 * 1024 * 1024:  # 100 MB
        blob.skip()

# Register the callback
sys.setrecursionlimit(30000)
with open(sys.argv[1], 'rb') as f:
    Blob.register_callback(f, callback)
