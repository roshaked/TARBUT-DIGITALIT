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
    ("lesson2-non-neutral", BASE / "דיגיטלית-שיעור 2- חלק א-קוד סמוי - מושגים.pdf", 4),
    ("lesson2-architecture", BASE / "דיגיטלית-שיעור 2- חלק א-קוד סמוי - מושגים.pdf", 5),
    ("lesson2-medium-culture", BASE / "דיגיטלית-שיעור 2- חלק א-קוד סמוי - מושגים.pdf", 6),
    ("lesson23-normative-descriptive", BASE / "דיגיטלית-שיעורים 3-2-המהפכה הסלולרית-תשפו.pdf", 3),
    ("lesson23-mobile-revolution", BASE / "דיגיטלית-שיעורים 3-2-המהפכה הסלולרית-תשפו.pdf", 10),
    ("lesson23-generations", BASE / "דיגיטלית-שיעורים 3-2-המהפכה הסלולרית-תשפו.pdf", 15),
    ("lesson23-x-y-z", BASE / "דיגיטלית-שיעורים 3-2-המהפכה הסלולרית-תשפו.pdf", 19),
    ("lesson23-mobile-portable", BASE / "דיגיטלית-שיעורים 3-2-המהפכה הסלולרית-תשפו.pdf", 12),
    ("lesson23-split-experience", BASE / "דיגיטלית-שיעורים 3-2-המהפכה הסלולרית-תשפו.pdf", 25),
    ("lesson23-moral-panic", BASE / "דיגיטלית-שיעורים 3-2-המהפכה הסלולרית-תשפו.pdf", 28),
    ("lesson23-therapeutic-disconnection", BASE / "דיגיטלית-שיעורים 3-2-המהפכה הסלולרית-תשפו.pdf", 27),
    ("lesson23-research-takeaway", BASE / "דיגיטלית-שיעורים 3-2-המהפכה הסלולרית-תשפו.pdf", 33),
    ("lesson56-attention-economy", BASE / "דיגיטלית-שיעורים 6-5_הפרעת קשב מובנית-תשפו.pdf", 6),
    ("lesson56-nudge-design", BASE / "דיגיטלית-שיעורים 6-5_הפרעת קשב מובנית-תשפו.pdf", 6),
    ("lesson56-tws", BASE / "דיגיטלית-שיעורים 6-5_הפרעת קשב מובנית-תשפו.pdf", 16),
    ("lesson56-tlt", BASE / "דיגיטלית-שיעורים 6-5_הפרעת קשב מובנית-תשפו.pdf", 20),
    ("lesson56-monetization", BASE / "דיגיטלית-שיעורים 6-5_הפרעת קשב מובנית-תשפו.pdf", 21),
    ("lesson78-ugc", BASE / "שיעור 8-7 -מהפכת הווב 2.0.pdf", 13),
    ("lesson78-web2-definition", BASE / "שיעור 8-7 -מהפכת הווב 2.0.pdf", 10),
    ("lesson78-ugc-user", BASE / "שיעור 8-7 -מהפכת הווב 2.0.pdf", 14),
    ("lesson9-network-effect", BASE / "שיעור_9-כלכלת שיתוף וזנב ארוך_תשפו.pdf", 13),
    ("lesson9-long-tail", BASE / "שיעור_9-כלכלת שיתוף וזנב ארוך_תשפו.pdf", 14),
    ("lesson9-hossain", BASE / "שיעור_9-כלכלת שיתוף וזנב ארוך_תשפו.pdf", 12),
    ("lesson9-long-tail-story", BASE / "שיעור_9-כלכלת שיתוף וזנב ארוך_תשפו.pdf", 17),
    ("lesson9-long-tail-value", BASE / "שיעור_9-כלכלת שיתוף וזנב ארוך_תשפו.pdf", 18),
    ("lesson10-agency", BASE / "דיגיטלית-שיעור10-תשפו.pdf", 7),
    ("lesson10-sundar-lee-axes", BASE / "דיגיטלית-שיעור10-תשפו.pdf", 10),
    ("lesson11-disinformation", BASE / "דיגיטלית-שיעור 11 דיסאינפורמציה-תשפו.pdf", 11),
    ("lesson11-misinformation", BASE / "דיגיטלית-שיעור 11 דיסאינפורמציה-תשפו.pdf", 11),
    ("lesson11-machine-heuristic", BASE / "דיגיטלית-שיעור 11 דיסאינפורמציה-תשפו.pdf", 28),
    ("lesson11-bandwagon-heuristic", BASE / "דיגיטלית-שיעור 11 דיסאינפורמציה-תשפו.pdf", 28),
    ("lesson11-democracy-index", BASE / "דיגיטלית-שיעור 11 דיסאינפורמציה-תשפו.pdf", 18),
    ("lesson11-ai-limitations", BASE / "דיגיטלית-שיעור 11 דיסאינפורמציה-תשפו.pdf", 26),
    ("lesson11-banas-findings", BASE / "דיגיטלית-שיעור 11 דיסאינפורמציה-תשפו.pdf", 30),
    ("lesson11-banas-conclusions", BASE / "דיגיטלית-שיעור 11 דיסאינפורמציה-תשפו.pdf", 31),
    ("lesson11-pentagon", BASE / "דיגיטלית-שיעור 11 דיסאינפורמציה-תשפו.pdf", 4),
    ("lesson11-fake-news", BASE / "דיגיטלית-שיעור 11 דיסאינפורמציה-תשפו.pdf", 11),
    ("lesson10-cmc-hci", BASE / "דיגיטלית-שיעור10-תשפו.pdf", 4),
    ("lesson10-digital-traces", BASE / "דיגיטלית-שיעור10-תשפו.pdf", 11),
    ("lesson10-ai-roles", BASE / "דיגיטלית-שיעור10-תשפו.pdf", 11),
    ("lesson11-paywall", BASE / "דיגיטלית-שיעור 11 דיסאינפורמציה-תשפו.pdf", 2),
    ("lesson78-crowd-power", BASE / "שיעור 8-7 -מהפכת הווב 2.0.pdf", 12),
    ("lesson78-crowdfunding", BASE / "שיעור 8-7 -מהפכת הווב 2.0.pdf", 34),
    ("lesson9-sharing-economy", BASE / "שיעור_9-כלכלת שיתוף וזנב ארוך_תשפו.pdf", 4),
    ("lesson23-digital-generations", BASE / "דיגיטלית-שיעורים 3-2-המהפכה הסלולרית-תשפו.pdf", 23),
    ("lesson23-mobile-natives", BASE / "דיגיטלית-שיעורים 3-2-המהפכה הסלולרית-תשפו.pdf", 21),
    ("lesson23-technological-utopia", BASE / "דיגיטלית-שיעורים 3-2-המהפכה הסלולרית-תשפו.pdf", 30),
    ("lesson23-media-panic", BASE / "דיגיטלית-שיעורים 3-2-המהפכה הסלולרית-תשפו.pdf", 29),
    ("lesson56-business-model", BASE / "דיגיטלית-שיעורים 6-5_הפרעת קשב מובנית-תשפו.pdf", 6),
]


def render_slide(slug, pdf_path, page):
    prefix = OUT / slug
    target = OUT / f"{slug}.png"
    for stale in OUT.glob(f"{slug}-*.png"):
        stale.unlink()
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
    matches = sorted(OUT.glob(f"{slug}-*.png"))
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
