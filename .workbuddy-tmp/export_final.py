"""输出恋唯家画册高清页 + 合成卡片封面"""
import os
import pypdfium2 as pdfium
from PIL import Image, ImageDraw, ImageFilter

BASE = r'D:/蒋涛/00-2026个人作品集整理/恋唯家画册'
PUB = r'C:/Users/Administrator/WorkBuddy/2026-10-31-18-24-33/jiangtao-portfolio/public/projects'
os.makedirs(PUB, exist_ok=True)

FINAL = [
    ('lianweijia-01', '恋唯家五金-玻璃系列产品画册2026.07.pdf', 1),
    ('lianweijia-02', '恋唯家爱格系列电子色卡2026.04.pdf', 5),
    ('lianweijia-03', '恋唯家五金-玻璃系列产品画册2026.07.pdf', 17),
    ('lianweijia-04', '恋唯家Branoo系列电子色卡2026.05.pdf', 10),
    ('lianweijia-05', '膜类系列电子色卡合集2026.07.pdf', 31),
    ('lianweijia-06', '恋唯家爱格系列电子色卡2026.04.pdf', 10),
]

def render(name, pno, width=1600):
    pdf = pdfium.PdfDocument(os.path.join(BASE, name))
    page = pdf[pno - 1]
    scale = width / page.get_size()[0]
    img = page.render(scale=scale).to_pil().convert('RGB')
    page.close(); pdf.close()
    return img

pages = {}
for key, name, pno in FINAL:
    img = render(name, pno)
    img.save(os.path.join(PUB, key + '.jpg'), quality=86)
    pages[key] = img
    print(key, img.size)

# ---- 合成封面：三页错落铺排在深色底上，带投影 ----
W, H = 1920, 1140
canvas = Image.new('RGB', (W, H), (14, 17, 22))
draw = ImageDraw.Draw(canvas)
# 顶部微渐变
for y in range(H):
    t = y / H
    c = (int(14 + 8 * t), int(17 + 10 * t), int(22 + 14 * t))
    draw.line([(0, y), (W, y)], fill=c)

def paste_with_shadow(base, img, cx, cy, target_w, shadow_blur=18, opacity=110):
    ratio = target_w / img.width
    im = img.resize((target_w, int(img.height * ratio)), Image.LANCZOS)
    sh = Image.new('RGBA', (im.width + 60, im.height + 60), (0, 0, 0, 0))
    sm = Image.new('RGBA', sh.size, (0, 0, 0, opacity))
    sh.paste(sm, (30, 34))
    sh = sh.filter(ImageFilter.GaussianBlur(shadow_blur))
    base.paste(sh, (cx - im.width // 2 - 30 + 4, cy - im.height // 2 - 30 + 8), sh)
    base.paste(im, (cx - im.width // 2, cy - im.height // 2))

A = pages['lianweijia-01']  # 五金玻璃封面（金棕）
B = pages['lianweijia-02']  # 爱格理念页（年轮）
C = pages['lianweijia-06']  # 爱格色彩总览（多彩网格）

paste_with_shadow(canvas, A, 400,  620, 660)
paste_with_shadow(canvas, B, 960,  500, 660)
paste_with_shadow(canvas, C, 1520, 640, 660)

canvas.save(os.path.join(PUB, 'lianweijia-00-cover.jpg'), quality=87)
print('cover ok')
