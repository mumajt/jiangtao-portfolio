# 合成 VI 与海报卡的深色底拼贴封面（三页错落 + 白边 + 柔和投影）
from PIL import Image, ImageFilter
import os

BASE = r'D:/蒋涛/00-2026个人作品集整理'
PUB = r'C:/Users/Administrator/WorkBuddy/2026-10-31-18-24-33/jiangtao-portfolio/public/projects'
W, H = 1600, 1000


def page(path, target_h):
    img = Image.open(path).convert('RGB')
    w, h = img.size
    return img.resize((int(w * target_h / h), target_h), Image.LANCZOS)


def make_card(p, ang):
    card = p.rotate(ang, expand=True, resample=Image.BICUBIC).convert('RGBA')
    border = Image.new('RGBA', (card.width + 14, card.height + 14), (255, 255, 255, 240))
    border.alpha_composite(card, (7, 7))
    return border


def compose2(paths, out, hs):
    pages = [page(p, h) for p, h in zip(paths, hs)]
    n = len(pages)
    total_w = sum(p.width for p in pages) + 50 * (n - 1)
    x0 = (W - total_w) // 2

    def layout():
        pos = []
        x = x0
        for i, p in enumerate(pages):
            y = int((H - p.height) // 2 + (i - (n - 1) / 2) * 22)
            ang = (i - (n - 1) / 2) * 3.5
            pos.append((x, y, ang))
            x += p.width + 50
        return pos

    pos = layout()
    cards = [make_card(p, a) for p, (_, _, a) in zip(pages, pos)]

    base = Image.new('RGB', (W, H), (13, 15, 19)).convert('RGBA')
    sh_layer = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    for card, (x, y, _) in zip(cards, pos):
        mask = card.split()[3].point(lambda a: 120 if a > 10 else 0)
        shadow = Image.new('RGBA', card.size, (0, 0, 0, 120))
        shadow.putalpha(mask)
        sh_layer.alpha_composite(shadow, (x + 12, y + 24))
    sh_layer = sh_layer.filter(ImageFilter.GaussianBlur(24))

    canvas = Image.alpha_composite(base, sh_layer)
    for card, (x, y, _) in zip(cards, pos):
        canvas.paste(card, (x, y), card)

    canvas.convert('RGB').save(os.path.join(PUB, out), quality=88)
    print('saved', out)


V = BASE + r'/02_金盆地酒业/企业VI/崇阳-VI/VI-效果图/'
HB = PUB + '/'
compose2(
    [V + r'基础-VI/02-基础VI-A-1-1.jpg',
     V + r'基础-VI/15-基础VI-A-3-1.jpg',
     V + r'应用-VI/09-应用VI-B8.jpg'],
    'vi-00-cover.jpg', (760, 660, 700))
compose2(
    [HB + 'haibao-01-jieeryin.jpg',
     HB + 'haibao-03-chenxiangsan.jpg',
     HB + 'haibao-07-lixia.jpg'],
    'haibao-00-cover.jpg', (800, 800, 800))
