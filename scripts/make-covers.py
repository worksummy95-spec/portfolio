"""Generates the six text-free case covers (public/assets/cases-v2/*.svg).

Covers are abstract diagrams derived from each case's documented structure.
They carry no text, so they render identically everywhere and never compete
with the page's own <h1>. Composition keeps the lower-left quiet because the
case title is overlaid there.
"""
import math, os
W, H = 1600, 1000
BG, INK, ACC = "#12100f", "#f2ece4", "#d64f61"
OUT = os.path.join(os.path.dirname(__file__), "..", "public", "assets", "cases-v2")

def frame(body, glow=(1180, 330)):
    gx, gy = glow
    grid = "".join(f'<path d="M{x} 0V{H}"/>' for x in range(0, W + 1, 80)) + \
           "".join(f'<path d="M0 {y}H{W}"/>' for y in range(0, H + 1, 80))
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" preserveAspectRatio="xMidYMid slice">
<defs><radialGradient id="g" cx="{gx/W:.3f}" cy="{gy/H:.3f}" r="0.55"><stop offset="0" stop-color="{ACC}" stop-opacity=".16"/><stop offset="1" stop-color="{ACC}" stop-opacity="0"/></radialGradient></defs>
<rect width="{W}" height="{H}" fill="{BG}"/><rect width="{W}" height="{H}" fill="url(#g)"/>
<g stroke="{INK}" stroke-opacity=".045" stroke-width="1">{grid}</g>
{body}
</svg>'''

def line(x1, y1, x2, y2, o=.28, c=INK, w=1.5, dash=None):
    d = f' stroke-dasharray="{dash}"' if dash else ""
    return f'<path d="M{x1} {y1}L{x2} {y2}" stroke="{c}" stroke-opacity="{o}" stroke-width="{w}" fill="none"{d}/>'

def rect(x, y, w, h, o=.22, c=INK, fill="none", fo=0, r=4, sw=1.5):
    return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{r}" stroke="{c}" stroke-opacity="{o}" stroke-width="{sw}" fill="{fill}" fill-opacity="{fo}"/>'

def dot(x, y, r=5, c=ACC, o=1):
    return f'<circle cx="{x}" cy="{y}" r="{r}" fill="{c}" fill-opacity="{o}"/>'

def ring(x, y, r, o=.3, c=INK, w=1.5, dash=None):
    d = f' stroke-dasharray="{dash}"' if dash else ""
    return f'<circle cx="{x}" cy="{y}" r="{r}" stroke="{c}" stroke-opacity="{o}" stroke-width="{w}" fill="none"{d}/>'

# 01 — Platform governance: layered page frames feeding a data register.
def c01():
    b = []
    for i in range(4):  # stacked page frames
        x, y = 760 + i * 46, 120 + i * 40
        b.append(rect(x, y, 420, 300, o=.12 + i * .07, fill=BG, fo=1))
        b.append(line(x, y + 34, x + 420, y + 34, o=.14 + i * .05))
        for k in range(3): b.append(dot(x + 22 + k * 16, y + 17, 4, INK, .25))
    fx, fy = 898, 240
    for r_ in range(5):
        b.append(rect(fx + 24, fy + 60 + r_ * 36, 180 if r_ % 2 else 260, 12, o=0, fill=INK, fo=.10, r=3))
    b.append(rect(fx + 300, fy + 60, 90, 150, o=.25))
    # register grid (rows x cols) with validated cells
    gx, gy = 1010, 560
    for r_ in range(7):
        for c in range(8):
            on = (r_ * 3 + c * 5) % 7 == 0
            b.append(rect(gx + c * 58, gy + r_ * 40, 48, 28, o=.16, fill=ACC if on else INK, fo=.55 if on else .03, r=3))
    # flow: source -> validate -> website
    b.append(line(1160, 540, 1160, 420, o=.35, c=ACC, w=2, dash="6 8"))
    b.append(dot(1160, 540, 7)); b.append(dot(1160, 420, 5, INK, .6))
    return frame("".join(b), glow=(1150, 420))

# 02 — SEO & growth: rising organic trend over a baseline, five market nodes.
def c02():
    b = []
    x0, y0, x1 = 700, 760, 1520
    for k in range(6): b.append(line(x0, y0 - k * 100, x1, y0 - k * 100, o=.07))
    base = [(x0 + i * 68, y0 - 170 - 22 * math.sin(i * .9)) for i in range(13)]
    grow = [(x0 + i * 68, y0 - 170 - i * 30 - 26 * math.sin(i * 1.3)) for i in range(13)]
    b.append('<path d="M' + " L".join(f"{x:.0f} {y:.0f}" for x, y in base) + f'" stroke="{INK}" stroke-opacity=".28" stroke-width="2" fill="none" stroke-dasharray="4 8"/>')
    area = f"M{grow[0][0]:.0f} {y0} L" + " L".join(f"{x:.0f} {y:.0f}" for x, y in grow) + f" L{grow[-1][0]:.0f} {y0} Z"
    b.append(f'<path d="{area}" fill="{ACC}" fill-opacity=".07"/>')
    b.append('<path d="M' + " L".join(f"{x:.0f} {y:.0f}" for x, y in grow) + f'" stroke="{ACC}" stroke-width="3" fill="none"/>')
    for x, y in grow[::3]: b.append(dot(x, y, 5))
    # five market nodes (international roadmap)
    cx, cy = 1180, 190
    b.append(ring(cx, cy, 120, o=.14, dash="3 7"))
    for i in range(5):
        a = -math.pi / 2 + i * 2 * math.pi / 5
        px, py = cx + 120 * math.cos(a), cy + 120 * math.sin(a)
        b.append(line(cx, cy, px, py, o=.16)); b.append(dot(px, py, 8, ACC, .85)); b.append(ring(px, py, 16, o=.25))
    b.append(dot(cx, cy, 10, INK, .8))
    return frame("".join(b), glow=(1180, 300))

# 03 — Commerce funnel: before (faint) vs after (accent), log-scaled.
def c03():
    b = []
    stages = [(2101, 4624), (670, 3823), (77, 385), (21, 109)]  # clicks, page views, add-to-cart, checkout
    s = lambda v: 55 * math.log10(v) ** 2 / 1.55  # squared log keeps the funnel legible
    cx, y = 1140, 150
    for before, after in stages:
        wa, wb = s(after) * 1.55, s(before) * 1.55
        b.append(rect(cx - wa / 2, y, wa, 64, o=0, fill=ACC, fo=.78, r=3))
        b.append(rect(cx - wb / 2, y + 78, wb, 18, o=0, fill=INK, fo=.18, r=2))
        y += 170
    for k in range(4): b.append(line(cx - 420, 182 + k * 170, cx - 360, 182 + k * 170, o=.3))
    b.append(line(cx, 120, cx, 780, o=.12, dash="2 8"))
    return frame("".join(b), glow=(1140, 400))

# 04 — Audit OS: nine tracker tiles around a control centre.
def c04():
    b = []
    cx, cy, gap, t = 1150, 430, 185, 128
    for r_ in range(3):
        for c in range(3):
            x, y = cx + (c - 1) * gap, cy + (r_ - 1) * gap
            centre = (r_, c) == (1, 1)
            if not centre: b.append(line(cx, cy, x, y, o=.14))
    for r_ in range(3):
        for c in range(3):
            x, y = cx + (c - 1) * gap - t / 2, cy + (r_ - 1) * gap - t / 2
            centre = (r_, c) == (1, 1)
            b.append(rect(x, y, t, t, o=.55 if centre else .22, c=ACC if centre else INK, fill=ACC if centre else BG, fo=.14 if centre else 1, r=6))
            if not centre:
                for k in range(3): b.append(rect(x + 20, y + 34 + k * 26, 84 - k * 16, 9, o=0, fill=INK, fo=.14, r=2))
                b.append(dot(x + t - 18, y + 18, 5, ACC, .8))
    b.append(ring(cx, cy, 18, o=.9, c=ACC, w=2)); b.append(dot(cx, cy, 6))
    b.append(ring(cx, cy, 360, o=.08, dash="3 9"))
    return frame("".join(b), glow=(1150, 430))

# 05 — Product & UAT: test matrix, search query and response flow.
def c05():
    b = []
    gx, gy = 1000, 140
    for i in range(68):  # 68 functional test cases
        r_, c = divmod(i, 12)
        on = (i * 7) % 11 != 3
        b.append(rect(gx + c * 40, gy + r_ * 40, 28, 28, o=.2, fill=ACC if on else INK, fo=.5 if on else .05, r=3))
    # search bar + chat bubbles (AI search / chatbot)
    b.append(rect(760, 450, 560, 64, o=.35, r=32))
    b.append(ring(800, 482, 13, o=.5)); b.append(line(809, 491, 820, 502, o=.5, w=2))
    b.append(rect(850, 476, 240, 12, o=0, fill=INK, fo=.14, r=3))
    b.append(rect(900, 560, 380, 86, o=.25, fill=INK, fo=.03, r=14))
    b.append(rect(930, 586, 300, 10, o=0, fill=INK, fo=.16, r=3)); b.append(rect(930, 610, 210, 10, o=0, fill=INK, fo=.16, r=3))
    b.append(rect(1060, 674, 300, 64, o=.4, c=ACC, fill=ACC, fo=.08, r=14))
    b.append(rect(1086, 700, 220, 10, o=0, fill=ACC, fo=.45, r=3))
    b.append(line(1320, 482, 1450, 482, o=.3, c=ACC, dash="4 6")); b.append(dot(1460, 482, 7))
    return frame("".join(b), glow=(1180, 380))

# 06 — Brand & reputation: concentric reach from one core — brand, narrative, media, public.
def c06():
    b = []
    cx, cy = 1170, 420
    for i, r in enumerate([70, 150, 240, 340]):
        b.append(ring(cx, cy, r, o=.34 - i * .06, c=ACC if i == 0 else INK, w=2 if i == 0 else 1.5, dash=None if i < 2 else "3 8"))
    b.append(dot(cx, cy, 14))
    pts = [(150, 20), (150, 140), (150, 250), (240, 75), (240, 190), (240, 300), (240, 345), (340, 10), (340, 110), (340, 160), (340, 220), (340, 280), (340, 330)]
    for r, deg in pts:
        a = math.radians(deg)
        x, y = cx + r * math.cos(a), cy + r * math.sin(a)
        b.append(line(cx, cy, x, y, o=.07))
        b.append(dot(x, y, 6 if r < 300 else 4, ACC if r == 150 else INK, .85 if r == 150 else .45))
    return frame("".join(b), glow=(1170, 420))

os.makedirs(OUT, exist_ok=True)
for n, fn in enumerate([c01, c02, c03, c04, c05, c06], 1):
    with open(os.path.join(OUT, f"{n:02d}-cover.svg"), "w") as f: f.write(fn())
print("covers written")
