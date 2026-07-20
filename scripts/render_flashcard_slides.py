import subprocess
from pathlib import Path


POPPLER = Path(r"C:\Users\user\.cache\codex-runtimes\codex-primary-runtime\dependencies\native\poppler\Library\bin\pdftoppm.exe")
BASE = Path(r"C:\Users\user\Desktop\לימודים\תרבות דיגיטלית\מצגות")
OUT = Path("public/slides")

SLIDES = [
    ("lesson1-ontological-change", BASE / "דיגיטלית-שיעור1-תשפו.pdf", 13),
    ("lesson1-web-presence", BASE / "דיגיטלית-שיעור1-תשפו.pdf", 11),
    ("lesson1-tech-determinism", BASE / "דיגיטלית-שיעור1-תשפו.pdf", 16),
    ("lesson1-social-construction", BASE / "דיגיטלית-שיעור1-תשפו.pdf", 15),
    ("lesson2-media-ecology", BASE / "דיגיטלית-שיעור 2- חלק א-קוד סמוי - מושגים.pdf", 6),
    ("lesson23-mobile-portable", BASE / "דיגיטלית-שיעורים 3-2-המהפכה הסלולרית-תשפו.pdf", 12),
    ("lesson23-split-experience", BASE / "דיגיטלית-שיעורים 3-2-המהפכה הסלולרית-תשפו.pdf", 25),
    ("lesson23-moral-panic", BASE / "דיגיטלית-שיעורים 3-2-המהפכה הסלולרית-תשפו.pdf", 28),
    ("lesson56-attention-economy", BASE / "דיגיטלית-שיעורים 6-5_הפרעת קשב מובנית-תשפו.pdf", 6),
    ("lesson56-nudge-design", BASE / "דיגיטלית-שיעורים 6-5_הפרעת קשב מובנית-תשפו.pdf", 6),
    ("lesson56-tws", BASE / "דיגיטלית-שיעורים 6-5_הפרעת קשב מובנית-תשפו.pdf", 16),
    ("lesson56-tlt", BASE / "דיגיטלית-שיעורים 6-5_הפרעת קשב מובנית-תשפו.pdf", 20),
    ("lesson56-monetization", BASE / "דיגיטלית-שיעורים 6-5_הפרעת קשב מובנית-תשפו.pdf", 21),
    ("lesson78-ugc", BASE / "שיעור 8-7 -מהפכת הווב 2.0.pdf", 13),
    ("lesson9-network-effect", BASE / "שיעור_9-כלכלת שיתוף וזנב ארוך_תשפו.pdf", 13),
    ("lesson9-long-tail", BASE / "שיעור_9-כלכלת שיתוף וזנב ארוך_תשפו.pdf", 14),
    ("lesson10-agency", BASE / "דיגיטלית-שיעור10-תשפו.pdf", 7),
    ("lesson11-disinformation", BASE / "דיגיטלית-שיעור 11 דיסאינפורמציה-תשפו.pdf", 11),
    ("lesson11-misinformation", BASE / "דיגיטלית-שיעור 11 דיסאינפורמציה-תשפו.pdf", 11),
    ("lesson11-machine-heuristic", BASE / "דיגיטלית-שיעור 11 דיסאינפורמציה-תשפו.pdf", 28),
    ("lesson11-bandwagon-heuristic", BASE / "דיגיטלית-שיעור 11 דיסאינפורמציה-תשפו.pdf", 28),
]


def render_slide(slug, pdf_path, page):
    prefix = OUT / slug
    expected = OUT / f"{slug}-{page}.png"
    target = OUT / f"{slug}.png"
    subprocess.run(
        [
            str(POPPLER),
            "-f",
            str(page),
            "-l",
            str(page),
            "-r",
            "120",
            "-png",
            str(pdf_path),
            str(prefix),
        ],
        check=True,
    )
    if expected.exists():
        expected.replace(target)
    if not target.exists():
        matches = list(OUT.glob(f"{slug}-*.png"))
        if matches:
            matches[0].replace(target)
    print(target)


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    for slug, pdf_path, page in SLIDES:
        if not pdf_path.exists():
            raise FileNotFoundError(pdf_path)
        render_slide(slug, pdf_path, page)


if __name__ == "__main__":
    main()
