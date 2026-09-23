#!/usr/bin/env python3
"""Generate branded PWA icons for Souk Al-Mubarakiya from the site logo mark.

Produces:
  public/icons/icon-192.png          (512 -> 192, square coffee tile + brass mark)
  public/icons/icon-512.png          (512 square coffee tile + brass mark)
  public/icons/icon-512-maskable.png (full-bleed coffee + centred mark, safe-zone safe)
"""
import math
import os
from PIL import Image, ImageDraw

OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "icons")
os.makedirs(OUT_DIR, exist_ok=True)

COFFEE = (58, 36, 24)      # #3a2418
BRASS = (199, 155, 85)     # #c79b55
SAND = (242, 230, 208)     # #f2e6d0

# Mark local coords (from the <g translate(42 24)> paths of logo.svg).
# Center of the mark in local space:
MCX, MCY = 76, 84


def cubic(p0, c1, c2, p3, steps=24):
    pts = []
    for i in range(steps + 1):
        t = i / steps
        mt = 1 - t
        x = (mt**3) * p0[0] + 3 * (mt**2) * t * c1[0] + 3 * mt * (t**2) * c2[0] + (t**3) * p3[0]
        y = (mt**3) * p0[1] + 3 * (mt**2) * t * c1[1] + 3 * mt * (t**2) * c2[1] + (t**3) * p3[1]
        pts.append((x, y))
    return pts


def transform(pts, cx, cy, s):
    return [(cx + s * (x - MCX), cy + s * (y - MCY)) for (x, y) in pts]


def render(size, maskable):
    img = Image.new("RGBA", (size, size), COFFEE if maskable else COFFEE)
    d = ImageDraw.Draw(img)

    # Mark occupies 62% (regular) or 50% (maskable safe zone) of the canvas height.
    mark_h = (0.50 if maskable else 0.62) * size
    s = mark_h / 152.0
    cx, cy = size / 2, size / 2
    lw = max(2, int(12 * s))

    # Arch outline: left pillar -> top bezier -> right pillar
    arch = []
    arch += [(12, 160), (12, 76)]                                   # left pillar
    arch += cubic((12, 76), (12, 35), (40, 8), (76, 8))             # first bezier
    arch += cubic((76, 8), (112, 8), (140, 27), (140, 76))          # smooth bezier
    arch += [(140, 160)]                                            # right pillar
    arch_t = transform(arch, cx, cy, s)
    d.line(arch_t, fill=BRASS, width=lw, joint="curve")

    # Baseline
    d.line(transform([(26, 160), (126, 160)], cx, cy, s), fill=BRASS, width=lw)

    # Small tick at the crown
    d.line(transform([(76, 48), (76, 68)], cx, cy, s), fill=BRASS, width=lw)

    # Central filled trapezoid (doorway)
    trap = [(92, 92), (144, 92), (137, 142), (99, 142)]
    d.polygon(transform(trap, cx, cy, s), fill=BRASS)

    # Knob circle (sand) on the right pillar, matching logo
    c = transform([(118, 125)], cx, cy, s)[0]
    r = max(2, int(9 * s))
    d.ellipse([c[0] - r, c[1] - r, c[0] + r, c[1] + r], fill=SAND)

    return img


render(192, False).save(os.path.join(OUT_DIR, "icon-192.png"), "PNG")
render(512, False).save(os.path.join(OUT_DIR, "icon-512.png"), "PNG")
render(512, True).save(os.path.join(OUT_DIR, "icon-512-maskable.png"), "PNG")
print("PWA icons written to", os.path.abspath(OUT_DIR))
