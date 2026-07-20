import json
import re
from pathlib import Path

import pdfplumber


BASE = Path(r"C:\Users\user\Desktop\לימודים\תרבות דיגיטלית")

FILES = [
    ("exam", "שיעורים 9-1- נושאים ומושגים למבחן", BASE / "למבחן" / "שיעורים 9-1- נושאים ומושגים למבחן.pdf"),
    ("exam", "שיעורים 11-10-נושאים ומושגים לבחינה", BASE / "למבחן" / "שיעורים 11-10-נושאים ומושגים לבחינה.pdf"),
    ("exam", "TWS", BASE / "למבחן" / "TWS.pdf"),
    ("exam", "גודמן-פרק 4- 168-156", BASE / "למבחן" / "גודמן-פרק 4- 168-156.pdf"),
    ("exam", "הטענה של לוין וממלוק לגבי השינוי האונטולוגי", BASE / "למבחן" / "הטענה של לוין וממלוק לגבי השינוי האונטולוגי.pdf"),
    ("exam", "תרגום טד לעברית", BASE / "למבחן" / "תרגום טד לעברית.pdf"),
    ("summaries", "דיסאינפורמציה מיסאינפורמציה ומידע כוזב", BASE / "סיכומי שיעורים" / "דיסאינפורמציה  מיסאינפורמציה ומידע כוזב .pdf"),
    ("summaries", "המוח המקוון", BASE / "סיכומי שיעורים" / "המוח המקוון.pdf"),
    ("summaries", "כלכלת שיתוף וזנב ארוך", BASE / "סיכומי שיעורים" / "כלכלת שיתוף וזנב ארוך.pdf"),
    ("summaries", "מהפכה סלולרית", BASE / "סיכומי שיעורים" / "מהפכה סלולרית.pdf"),
    ("summaries", "מהפכת הווב", BASE / "סיכומי שיעורים" / "מהפכת הווב .pdf"),
    ("summaries", "תקשורת בעידן הבינה המלאכותית", BASE / "סיכומי שיעורים" / "תקשורת בעידן הבינה המלאכותית .pdf"),
    ("slides", "Time Well Spent", BASE / "מצגות" / "Time Well Spent.pdf"),
    ("slides", "דיגיטלית-שיעור 2- חלק א-קוד סמוי - מושגים", BASE / "מצגות" / "דיגיטלית-שיעור 2- חלק א-קוד סמוי - מושגים.pdf"),
    ("slides", "דיגיטלית-שיעור 11 דיסאינפורמציה-תשפו", BASE / "מצגות" / "דיגיטלית-שיעור 11 דיסאינפורמציה-תשפו.pdf"),
    ("slides", "דיגיטלית-שיעור1-תשפו", BASE / "מצגות" / "דיגיטלית-שיעור1-תשפו.pdf"),
    ("slides", "דיגיטלית-שיעור-4-האינטרנט והחשיבה-תשפו", BASE / "מצגות" / "דיגיטלית-שיעור-4-האינטרנט והחשיבה-תשפו.pdf"),
    ("slides", "דיגיטלית-שיעור10-תשפו", BASE / "מצגות" / "דיגיטלית-שיעור10-תשפו.pdf"),
    ("slides", "דיגיטלית-שיעורים 3-2-המהפכה הסלולרית-תשפו", BASE / "מצגות" / "דיגיטלית-שיעורים 3-2-המהפכה הסלולרית-תשפו.pdf"),
    ("slides", "דיגיטלית-שיעורים 6-5_הפרעת קשב מובנית-תשפו", BASE / "מצגות" / "דיגיטלית-שיעורים 6-5_הפרעת קשב מובנית-תשפו.pdf"),
    ("slides", "הילדה קיילי נהפכה לאיום על אימפריית הרעל -TheMarker", BASE / "מצגות" / "הילדה קיילי נהפכה לאיום על אימפריית הרעל -TheMarker.pdf"),
    ("slides", "הפרעת קשב מובנית ודרכי התמודדות", BASE / "מצגות" / "הפרעת קשב מובנית ודרכי התמודדות.pdf"),
    ("slides", "שיעור 8-7 -מהפכת הווב 2.0", BASE / "מצגות" / "שיעור 8-7 -מהפכת הווב 2.0.pdf"),
    ("slides", "שיעור_9-כלכלת שיתוף וזנב ארוך_תשפו", BASE / "מצגות" / "שיעור_9-כלכלת שיתוף וזנב ארוך_תשפו.pdf"),
]


def clean_text(text):
    text = text or ""
    text = re.sub(r"[ \t]+", " ", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def normalize_hebrew_direction(text):
    normalized = []
    for line in text.splitlines():
        stripped = line.strip()
        hebrew_chars = len(re.findall(r"[\u0590-\u05ff]", stripped))
        latin_chars = len(re.findall(r"[A-Za-z]", stripped))
        if hebrew_chars > 3 and hebrew_chars >= latin_chars:
            normalized.append(stripped[::-1])
        else:
            normalized.append(stripped)
    return "\n".join(normalized)


def extract_pdf(path):
    pages = []
    with pdfplumber.open(path) as pdf:
        for index, page in enumerate(pdf.pages, start=1):
            text = clean_text(page.extract_text(x_tolerance=1, y_tolerance=3))
            pages.append({"page": index, "text": normalize_hebrew_direction(text)})
    full_text = clean_text("\n\n".join(page["text"] for page in pages if page["text"]))
    return pages, full_text


def main():
    output = []
    missing = []
    for group, title, path in FILES:
        if not path.exists():
            missing.append(str(path))
            continue
        pages, full_text = extract_pdf(path)
        output.append(
            {
                "group": group,
                "title": title,
                "path": str(path),
                "pages": pages,
                "text": full_text,
                "characters": len(full_text),
                "page_count": len(pages),
            }
        )

    Path("data").mkdir(exist_ok=True)
    Path("data/materials.json").write_text(
        json.dumps({"documents": output, "missing": missing}, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
    print(json.dumps({"documents": len(output), "missing": missing}, ensure_ascii=False))


if __name__ == "__main__":
    main()
