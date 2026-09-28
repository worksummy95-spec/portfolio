"""Renders Open Graph images (1200x630 PNG) for the homepage and each case.

Uses the site's own typefaces (Fraunces / JetBrains Mono / Inter from Google Fonts)
and the matching text-free case diagram as the right-hand visual.
Run: python3 scripts/make-og.py   (needs Playwright + Chromium)
"""
import asyncio, os, re, sys
from playwright.async_api import async_playwright

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
CHROME = os.environ.get("CHROME", "/opt/pw-browsers/chromium-1194/chrome-linux/chrome")
src = open(os.path.join(ROOT, "lib", "content.ts")).read()
cases = re.findall(r'slug: "([^"]+)", index: "(\d+)", mode: "([^"]+)", client: "([^"]+)",\s*title: "([^"]+)"', src)

FONTS = '<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400&family=Inter:wght@400&family=JetBrains+Mono:wght@400&display=block" rel="stylesheet">'
def page(eyebrow, title, sub, cover):
    img = f'<img src="file://{ROOT}/public/assets/cases-v2/{cover}" style="position:absolute;right:-120px;top:0;height:630px;width:1008px;object-fit:cover;opacity:.95">' if cover else ""
    return f'''<html><head>{FONTS}<style>
body{{margin:0;width:1200px;height:630px;background:#12100f;overflow:hidden;position:relative;font-family:Inter}}
.fade{{position:absolute;inset:0;background:linear-gradient(90deg,#12100f 38%,rgba(18,16,15,.55) 70%,rgba(18,16,15,.15))}}
.wrap{{position:absolute;left:80px;top:0;bottom:0;width:720px;display:flex;flex-direction:column;justify-content:center}}
.eb{{font-family:'JetBrains Mono';font-size:17px;letter-spacing:.18em;text-transform:uppercase;color:#d64f61;margin-bottom:28px}}
h1{{font-family:Fraunces;font-weight:400;font-size:62px;line-height:1.04;letter-spacing:-.025em;color:#f2ece4;margin:0}}
.sub{{margin-top:28px;font-size:22px;line-height:1.45;color:#a79f97;max-width:640px}}
.foot{{position:absolute;left:80px;bottom:52px;font-family:'JetBrains Mono';font-size:15px;letter-spacing:.16em;text-transform:uppercase;color:#8a817a}}
.foot b{{color:#f2ece4;font-weight:400}} .dot{{color:#d64f61}}
.bar{{position:absolute;left:0;top:0;bottom:0;width:6px;background:#d64f61}}
</style></head><body>{img}<div class="fade"></div><div class="bar"></div>
<div class="wrap"><div class="eb">{eyebrow}</div><h1>{title}</h1>{f'<div class="sub">{sub}</div>' if sub else ''}</div>
<div class="foot"><b>Sumanth<span class="dot">.</span></b>&nbsp;&nbsp;Digital Strategy &amp; Transformation&nbsp;&nbsp;·&nbsp;&nbsp;sumanthm.co.in</div>
</body></html>'''

async def main():
    jobs = [("og-home.png", page("Digital Strategy &amp; Transformation", "I turn complex business and digital problems into structured strategies, systems and improvement roadmaps.".replace("problems into", "problems<br>into"), "", "04-cover.svg"))]
    jobs[0] = ("og-home.png", page("Portfolio · Digital Strategy &amp; Transformation", "Sumanth Manjunath", "I bring structure to complex business and digital problems — strategies, systems and improvement roadmaps.", "04-cover.svg"))
    for slug, idx, mode, client, title in cases:
        jobs.append((f"og-{slug}.png", page(f"Case {idx} · {mode}", title.replace("&", "&amp;"), client, f"{idx}-cover.svg")))
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path=CHROME)
        pg = await b.new_page(viewport={"width": 1200, "height": 630})
        for name, html in jobs:
            tmp = os.path.join(ROOT, "scripts", ".og.html")
            open(tmp, "w").write(html)
            await pg.goto("file://" + tmp, wait_until="networkidle")
            await pg.evaluate("document.fonts.ready")
            await pg.wait_for_timeout(300)
            await pg.screenshot(path=os.path.join(ROOT, "public", "og", name))
            print("wrote", name)
        os.remove(tmp)
        await b.close()
asyncio.run(main())
