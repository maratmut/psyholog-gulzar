"""One-time insertion of verified original copy into the authored HTML."""
import json
import re
from html import escape
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
records = {r['id']:r['atoms'] for r in json.loads((ROOT/'reference/content.json').read_text(encoding='utf-8'))}
used = []

def text(record, index):
    value = records[record][index]['text']
    used.append(value)
    return escape(value).replace('\n','<br>')

def paragraphs(record, indices):
    return ''.join(f'<p>{text(record,i)}</p>' for i in indices)

def items(record, indices):
    return '<ul class="program-list">'+''.join(f'<li>{text(record,i)}</li>' for i in indices)+'</ul>'

def disclosure(title, body, outer=False):
    return f'<details class="{"program-details" if outer else "program-subdetails"}"><summary>{escape(title)}<span class="disclosure-mark" aria-hidden="true"></span></summary><div class="program-content">{body}</div></details>'

about = 'rec766786929'
club = 'rec2331192831'
weight = 'rec3131244001'
bundle = 'rec2226318861'
mentor = 'rec770352376'
consultation = 'rec766772960'
channel = 'rec766997420'

club_body = disclosure('Возможно, ты узнаешь себя',items(club,[16,18,20,22,24,26,28]))
club_body += disclosure('О чём мы будем говорить',paragraphs(club,[8,9])+items(club,list(range(30,51,2))))
club_body += disclosure('Что будет внутри',items(club,[52,54,56,58,60]))
club_body += disclosure('Это пространство для тебя, если ты хочешь',items(club,[62,64,66,68,70])+paragraphs(club,[13,75]))
club_body += disclosure('Разговор о твоей сексуальности',paragraphs(club,[76,77,78,79,81])+items(club,[82,83,84,85,86])+f'<p>{text(club,74)} {text(club,73)} {text(club,72)}</p>')

weight_body = paragraphs(weight,[23])
for title,indices in [(14,[12,13]),(20,[17,18,19]),(33,[8,31,32,38,40,42,44]),(51,[46,49,50,56])]:
    weight_body += disclosure(records[weight][title]['text'],items(weight,indices))
    used.append(records[weight][title]['text'])
weight_body += disclosure('А также',items(weight,[58,61,62,64])+paragraphs(weight,[10,11]))
weight_body += disclosure('Специалисты',f'<h4>{text(weight,70)}</h4>'+paragraphs(weight,[68])+f'<h4>{text(weight,71)}</h4>'+paragraphs(weight,[69]))
gallery = '<p>Фотографии из раздела «До / После» исходного сайта.</p><div class="results-grid">'
for index in range(4,14):
    gallery += f'<button class="gallery-image" type="button" data-gallery="results" data-image="assets/source-{index:02d}.webp" aria-label="Увеличить фотографию {index-3} из раздела До / После"><img src="assets/source-{index:02d}.webp" alt="Фотография {index-3} из раздела До / После" loading="lazy" width="320" height="420"><span>Увеличить <svg class="icon"><use href="#arrow"/></svg></span></button>'
gallery += '</div>'
weight_body += disclosure('До / После — фотографии',gallery)

bundle_body = paragraphs(bundle,[5,6])
for title,body in [
    ('Курс «Я — опора»',paragraphs(bundle,[76,78])+items(bundle,[74,75,82,84,86])),
    ('Чек-лист «Любовь без страха»',paragraphs(bundle,[15,16,17])+items(bundle,[13,14,23,25,27,29])),
    ('Канал «Мне можно»',paragraphs(bundle,[33,34])+items(bundle,[55,56,57,58,59,60,61,62,63])),
    ('Интенсив «Сила женщины»',paragraphs(bundle,[52,53])+items(bundle,[36,37,38,39,40,41,42]))
]:
    bundle_body += disclosure(title,body)

reviews = ''
for i in range(17,23):
    reviews += f'<button class="review-card" type="button" data-gallery="reviews" data-image="assets/source-{i:02d}.webp" aria-label="Прочитать отзыв {i-16}"><span class="review-quote" aria-hidden="true">“</span><span class="review-image"><img src="assets/source-{i:02d}.webp" alt="Оригинальный отзыв клиента {i-16}" width="650" height="650" loading="lazy"></span><span class="review-card-footer">Отзыв клиента <span class="text-link">Читать <svg class="icon"><use href="#arrow"/></svg></span></span></button>'

replacements = {
    'ABOUT_COPY':paragraphs(about,[5,9])+disclosure('Подробнее о моём подходе',paragraphs(about,[7])),
    'CLUB_INTRO':paragraphs(club,[3]),
    'CLUB_PROGRAM':disclosure('О пространстве и программа',club_body,True),
    'WEIGHT_INTRO':paragraphs(weight,[4]),
    'WEIGHT_PROGRAM':disclosure('Программа интенсива',weight_body,True),
    'BUNDLE_INTRO':f'<p>{text(bundle,4)} {text(bundle,7)}</p>',
    'BUNDLE_PROGRAM':disclosure('Что входит в набор',bundle_body,True),
    'MENTOR_INTRO':paragraphs(mentor,[8]),
    'MENTOR_PROGRAM':disclosure('Как проходит наставничество',paragraphs(mentor,[4,23])+items(mentor,[26,28,32])+f'<h4>{text(mentor,18)}</h4>'+items(mentor,[6,14,15,19,30])+paragraphs(mentor,[35]),True),
    'CONSULTATION_COPY':paragraphs(consultation,[4,7])+disclosure('Подробнее о консультации',paragraphs(consultation,[6,10,12])),
    'CHANNEL_PROGRAM':disclosure('Что будет на канале',paragraphs(channel,[14])+items(channel,[25,27,29,31])+f'<h4>{text(channel,32)}</h4>'+items(channel,[19,34,16,37,40])+paragraphs(channel,[23,42,45]),True),
    'REVIEWS':reviews
}
path = ROOT/'index.html'
page = path.read_text(encoding='utf-8')
for key,value in replacements.items():
    marker = f'<!-- {key} -->'
    if marker not in page:
        raise SystemExit('Content is already rendered, or template marker is absent: '+key)
    page = page.replace(marker,value)
path.write_text(page,encoding='utf-8')
(ROOT/'reference/used-content.json').write_text(json.dumps(list(dict.fromkeys(used)),ensure_ascii=False,indent=2),encoding='utf-8')
print('Inserted',len(set(used)),'original text fragments, 6 reviews and 10 result photos')
