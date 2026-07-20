import json
from pathlib import Path


TERMS = [
    "שינוי אונטולוגי",
    "נוכחות רשת",
    "דטרמיניזם",
    "הבניה חברתית",
    "אקולוגיית מדיה",
    "ניידות",
    "חוויה מפוצלת",
    "פניקה מוסרית",
    "כלכלת תשומת הלב",
    "nudge",
    "Time Well Spent",
    "TLT",
    "מוניטיזציה",
    "User Generated",
    "אפקט הרשת",
    "הזנב הארוך",
    "סוכן הפעולה",
    "דיסאינפורמציה",
    "מיסאינפורמציה",
    "היוריסטיקת מכונה",
    "היוריסטיקת העדר",
    "Fake News",
    "חדשות כזב",
    "Computer Mediated",
    "Human-Computer",
    "עקבות דיגיטליים",
    "טביעת רגל",
    "machine learning",
    "artificial intelligence",
    "כמשוחחת",
    "מתווכת",
    "יוצרת תוכן",
    "אוצרת תוכן",
    "חומת תשלום",
    "חכמת ההמון",
    "מיקור המון",
    "מימון המון",
    "כלכלת שיתוף",
    "כלכלת שוק",
    "ילידים דיגיטליים",
    "מהגרים דיגיטליים",
    "ילידים סלולרים",
    "אוטופיה טכנולוגית",
    "פניקת מדיה",
    "פניקת סלולר",
    "מודל עסקי",
    "המוצר הוא אנחנו",
]


def main():
    data = json.loads(Path("data/materials.json").read_text(encoding="utf-8"))
    slide_docs = [doc for doc in data["documents"] if doc["group"] == "slides"]
    lines = []
    for term in TERMS:
        lines.append(f"\n## {term}")
        found = 0
        needle = term.lower()
        for doc in slide_docs:
            for page in doc["pages"]:
                text = page["text"].lower()
                if needle in text:
                    snippet_index = text.find(needle)
                    snippet = page["text"][max(0, snippet_index - 120) : snippet_index + 300].replace("\n", " ")
                    lines.append(f"- {doc['title']} | page {page['page']} | {snippet}")
                    found += 1
                    if found >= 4:
                        break
            if found >= 4:
                break
        if found == 0:
            lines.append("לא נמצא")
    Path("data/flashcard-slide-map.txt").write_text("\n".join(lines), encoding="utf-8")
    print("wrote data/flashcard-slide-map.txt")


if __name__ == "__main__":
    main()
