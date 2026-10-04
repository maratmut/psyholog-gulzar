import json
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
from urllib.request import Request, urlopen
from PIL import Image, ImageOps, ImageDraw

ROOT = Path(__file__).resolve().parents[1]
raw = ROOT / 'reference' / 'assets'
out = ROOT / 'public' / 'assets'
raw.mkdir(exist_ok=True)
out.mkdir(exist_ok=True)
media = json.loads((ROOT / 'reference' / 'media.json').read_text(encoding='utf-8'))

def download(item):
    index = media.index(item) + 1
    path = raw / f'{index:02d}.img'
    if not path.exists():
        with urlopen(Request(item['url'], headers={'User-Agent':'Mozilla/5.0'}), timeout=45) as response:
            path.write_bytes(response.read())
    with Image.open(path) as source:
        image = ImageOps.exif_transpose(source)
        image.thumbnail((1600,1800))
        if image.mode not in ('RGB','RGBA'):
            image = image.convert('RGB')
        image.save(out / f'source-{index:02d}.webp', 'WEBP', quality=86, method=6)
        item['file'] = f'assets/source-{index:02d}.webp'
        item['size'] = list(image.size)
        item['mode'] = image.mode
    return item

with ThreadPoolExecutor(max_workers=5) as executor:
    prepared = list(executor.map(download, media))
(ROOT / 'reference' / 'assets.json').write_text(json.dumps(prepared,ensure_ascii=False,indent=2), encoding='utf-8')
sheet = Image.new('RGB', (1000, ((len(prepared)+4)//5)*240), '#edeae4')
draw = ImageDraw.Draw(sheet)
for index,item in enumerate(prepared):
    with Image.open(ROOT / item['file']) as image:
        image.thumbnail((184,208))
        x, y = (index%5)*200+8, (index//5)*240+8
        if image.mode == 'RGBA':
            sheet.paste(image,(x,y),image)
        else:
            sheet.paste(image,(x,y))
        draw.text((x,y+212),f'{index+1:02d} {item["record"]}',fill='#282522')
sheet.save(ROOT / 'reference' / 'contact-sheet.jpg')
for i in prepared:
    print(i['file'],i['record'],i['size'],i['mode'])
