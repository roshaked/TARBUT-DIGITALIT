import json
from pathlib import Path


TERMS = [
    "גודמן",
    "מוניטיזציה",
    "רוזנברג",
    "בלונדהיים",
    "מדד הדמוקרטיה",
    "פעילות הפתיחה",
    "היוריסטיקת",
    "Banas",
    "באנס",
    "שימצ",
    "פנטגון",
    "paywall",
    "חומת תשלום",
    "חוסיין",
    "Hossain",
    "לגעת בריק",
    "אוורסט",
    "העדר",
    "מכונה",
]


def main():
    data = json.loads(Path("data/materials.json").read_text(encoding="utf-8"))
    lines = []
    for term in TERMS:
        lines.append(f"\n### {term}")
        found = False
        for doc in data["documents"]:
            haystack = doc["text"].lower()
            needle = term.lower()
            if needle in haystack:
                found = True
                index = haystack.find(needle)
                start = max(0, index - 220)
                end = min(len(doc["text"]), index + 520)
                snippet = doc["text"][start:end].replace("\n", " ")
                lines.append(f"- {doc['title']} :: {snippet}")
        if not found:
            lines.append("לא נמצא")
    Path("data/search-report.txt").write_text("\n".join(lines), encoding="utf-8")
    print("wrote data/search-report.txt")


if __name__ == "__main__":
    main()
