"""Verify retained copy, destinations, anchors and static delivery assets."""
import json
import re
import runpy
from pathlib import Path
from urllib.parse import unquote

ROOT = Path(__file__).resolve().parents[1]
Tree = runpy.run_path(str(ROOT/'scripts/capture-source.py'))['Tree']
page = (ROOT/'index.html').read_text(encoding='utf-8')
tree = Tree()
tree.feed(page)
nodes = list(tree.root.walk())
normalize = lambda value: re.sub(r'\s+',' ',value).strip()
rendered = normalize(tree.root.text())
original = json.loads((ROOT/'reference/used-content.json').read_text(encoding='utf-8'))
missing_copy = [t for t in original if normalize(t) not in rendered]
ids = [n.attrs['id'] for n in nodes if n.attrs.get('id')]
links = [n.attrs['href'] for n in nodes if n.tag=='a' and n.attrs.get('href')]
broken_anchors = [h for h in links if h.startswith('#') and h[1:] not in ids]
required = ['https://psyholog-gulzar.ru/club','https://psyholog-gulzar.ru/ves','https://psyholog-gulzar.ru/sbornic','https://psyholog-gulzar.ru/nastavnichestv','https://wa.me/79993293316','https://psyholog-gulzar.com/otzivi','https://psyholog-gulzar.com/politika','https://psyholog-gulzar.com/dogovor_oferty']
missing_links = [url for url in required if url not in links]
booking = next((unquote(h) for h in links if h.startswith('https://wa.me/79993293316?text=')), '')
assert booking.endswith('Здравствуйте! Хочу записаться на консультацию к Гюльзар.'), 'Original booking message changed'
local = [n.attrs[key] for n in nodes for key in ('src','href','data-image') if n.attrs.get(key) and not n.attrs[key].startswith(('https:','http:','#'))]
missing_files = [url for url in local if not (ROOT/url).is_file()]
assert not missing_copy, f'Missing source copy: {missing_copy}'
assert not broken_anchors, f'Broken section anchors: {broken_anchors}'
assert not missing_links, f'Missing original external destinations: {missing_links}'
assert not missing_files, f'Missing local assets: {missing_files}'
assert len(ids)==len(set(ids)), 'Duplicate element IDs'
assert len([n for n in nodes if n.attrs.get('data-gallery')=='reviews'])==6, 'Review gallery incomplete'
assert len([n for n in nodes if n.attrs.get('data-gallery')=='results'])==10, 'Results gallery incomplete'
assert not re.search(r'<!-- [A-Z_]+ -->',page), 'Unrendered template marker'
print(f'PASS: {len(original)} original text fragments, 8 external destinations, original booking message, {len(set(local))} assets, all anchors, 6 reviews and 10 result photos')
