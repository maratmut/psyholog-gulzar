"""Capture public Tilda content and assets for the authorized redesign."""
import json
from html.parser import HTMLParser
from pathlib import Path
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parents[1]

class Node:
    def __init__(self, tag='', attrs=(), parent=None):
        self.tag, self.attrs, self.parent = tag, dict(attrs), parent
        self.children = []

    def walk(self):
        yield self
        for child in self.children:
            if isinstance(child, Node):
                yield from child.walk()

    def text(self):
        if self.tag == 'br':
            return '\n'
        return ''.join(child.text() if isinstance(child, Node) else child for child in self.children)

class Tree(HTMLParser):
    def __init__(self):
        super().__init__()
        self.root = self.current = Node()

    def handle_starttag(self, tag, attrs):
        node = Node(tag, attrs, self.current)
        self.current.children.append(node)
        if tag not in {'area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr'}:
            self.current = node

    def handle_endtag(self, tag):
        node = self.current
        while node.parent:
            if node.tag == tag:
                self.current = node.parent
                break
            node = node.parent

    def handle_data(self, data):
        self.current.children.append(data)

def fetch(url):
    with urlopen(Request(url, headers={'User-Agent':'Mozilla/5.0'}), timeout=45) as response:
        return response.read()

if __name__ == '__main__':
    directory = ROOT / 'reference'
    directory.mkdir(exist_ok=True)
    html = (directory / 'source.html').read_text(encoding='utf-8') if (directory / 'source.html').exists() else fetch('https://psyholog-gulzar.com/').decode('utf-8')
    (directory / 'source.html').write_text(html, encoding='utf-8')
    tree = Tree()
    tree.feed(html)
    records = []
    for record in tree.root.walk():
        if not record.attrs.get('id','').startswith('rec'):
            continue
        atoms = []
        for node in record.walk():
            if 'tn-atom' not in node.attrs.get('class','').split():
                continue
            parent = node.parent.attrs
            images = [i.attrs for i in node.walk() if i.tag == 'img']
            atoms.append({'text':node.text().strip(), 'href':node.attrs.get('href'), 'images':images,
                          'top':parent.get('data-field-top-value'), 'left':parent.get('data-field-left-value'),
                          'type':parent.get('data-elem-type')})
        if atoms:
            records.append({'id':record.attrs['id'], 'atoms':atoms})
    (directory / 'content.json').write_text(json.dumps(records,ensure_ascii=False,indent=2), encoding='utf-8')
    media = []
    for node in tree.root.walk():
        for key in ('data-original', 'data-img-zoom-url', 'data-bg'):
            url = node.attrs.get(key, '')
            if not url.startswith('https://static.tildacdn.com/tild'):
                continue
            ancestor = node
            while ancestor.parent and not ancestor.attrs.get('id','').startswith('rec'):
                ancestor = ancestor.parent
            if not any(item['url'] == url for item in media):
                media.append({'record':ancestor.attrs.get('id'), 'url':url})
    (directory / 'media.json').write_text(json.dumps(media,ensure_ascii=False,indent=2), encoding='utf-8')
    for record in records:
        print(record['id'], ' | '.join(a['text'].replace('\n',' ')[:95] for a in record['atoms'] if a['text'])[:800])
    print('Captured',len(records),'records')
