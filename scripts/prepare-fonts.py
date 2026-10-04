"""Self-host the selected Google Fonts, retaining their Unicode ranges."""
import re
from pathlib import Path
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parents[1]
url = 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600&family=Oranienbaum&display=swap'
with urlopen(Request(url, headers={'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'}),timeout=30) as response:
    css = response.read().decode('utf-8')
links = list(dict.fromkeys(re.findall(r'url\((https://[^)]+)\)',css)))
for index,link in enumerate(links):
    extension = link.rsplit('.',1)[-1]
    file = f'font-{index+1:02d}.{extension}'
    with urlopen(link,timeout=30) as response:
        (ROOT/'assets'/file).write_bytes(response.read())
    css = css.replace(link,file)
    print(file)
(ROOT/'assets/fonts.css').write_text(css,encoding='utf-8')
for family in ('manrope','oranienbaum'):
    with urlopen(f'https://raw.githubusercontent.com/google/fonts/main/ofl/{family}/OFL.txt',timeout=30) as response:
        (ROOT/'assets'/f'{family}-OFL.txt').write_bytes(response.read())
