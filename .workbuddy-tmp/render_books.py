"""渲染恋唯家画册 PDF 页面并生成缩略拼图供挑页"""
import os, sys
import pypdfium2 as pdfium
from PIL import Image, ImageDraw, ImageFont

BASE = r'D:/蒋涛/00-2026个人作品集整理/恋唯家画册'
OUT = r'C:/Users/Administrator/WorkBuddy/2026-10-31-18-24-33/jiangtao-portfolio/.workbuddy-tmp/pdf-render'
BOOKS = [
    ('wujin',  '恋唯家五金-玻璃系列产品画册2026.07.pdf'),
    ('branoo', '恋唯家Branoo系列电子色卡2026.05.pdf'),
    ('mo',     '膜类系列电子色卡合集2026.07.pdf'),
    ('aige',   '恋唯家爱格系列电子色卡2026.04.pdf'),
]

os.makedirs(OUT, exist_ok=True)

for key, name in BOOKS:
    src = os.path.join(BASE, name)
    pdf = pdfium.PdfDocument(src)
    n = len(pdf)
    pages_dir = os.path.join(OUT, key)
    os.makedirs(pages_dir, exist_ok=True)

    thumbs = []
    for i in range(n):
        page = pdf[i]
        # 小图：宽约 320px，用于拼图预览
        scale = 320 / page.get_size()[0]
        bmp = page.render(scale=scale)
        img = bmp.to_pil().convert('RGB')
        p = os.path.join(pages_dir, f'p{i+1:03d}.jpg')
        img.save(p, quality=70)
        thumbs.append((i + 1, img))
        page.close()

    # 拼图：每行 5 列，每格 340x260
    cols, cw, ch, pad = 5, 340, 260, 10
    rows = (n + cols - 1) // cols
    sheet = Image.new('RGB', (cols * (cw + pad) + pad, rows * (ch + pad) + pad), (24, 26, 30))
    draw = ImageDraw.Draw(sheet)
    try:
        font = ImageFont.truetype('C:/Windows/Fonts/consola.ttf', 16)
    except Exception:
        font = ImageFont.load_default()
    for idx, (pno, img) in enumerate(thumbs):
        r, c = divmod(idx, cols)
        x = pad + c * (cw + pad)
        y = pad + r * (ch + pad)
        img2 = img.copy()
        img2.thumbnail((cw - 8, ch - 30))
        sheet.paste(img2, (x + 4, y + 26))
        draw.text((x + 6, y + 4), f'{key} p{pno}', fill=(120, 230, 200), font=font)
    sheet_path = os.path.join(OUT, f'sheet-{key}.jpg')
    sheet.save(sheet_path, quality=80)
    print(key, n, 'pages ->', sheet_path)
    pdf.close()
print('ALL_OK')
