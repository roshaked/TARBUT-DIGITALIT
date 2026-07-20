const units = [
  {
    id: "u1",
    lessons: "שיעור 1",
    title: "מהפכה דיגיטלית ונוכחות רשת",
    examFocus: "להבחין בין שינוי טכנולוגי לבין טרנספורמציה תרבותית וחברתית.",
    summary:
      "הטענה המרכזית בקורס היא שהמהפכה הדיגיטלית אינה רק החלפת כלים, אלא שינוי עמוק באופן שבו בני אדם מתקיימים, מתקשרים ותופסים את עצמם. לוין וממלוק מתארים שינוי אונטולוגי: הקיום ברשת נעשה חלק בלתי נפרד מההוויה.",
    mustKnow: [
      "נוכחות רשת: הזהות והקיום החברתי שלנו מתקיימים גם במרחב הדיגיטלי.",
      "שינוי טכנולוגי הוא שינוי בכלי; טרנספורמציה היא שינוי בהרגלים, מוסדות, יחסים וזהות.",
      "דטרמיניזם טכנולוגי מול הבניה חברתית של טכנולוגיה.",
    ],
    sources: ["שיעורים 9-1", "הטענה של לוין וממלוק", "דיגיטלית-שיעור1"],
  },
  {
    id: "u2",
    lessons: "שיעור 2",
    title: "טכנולוגיה כאקולוגיה וקוד סמוי",
    examFocus: "להסביר מדוע טכנולוגיה אינה נייטרלית וכיצד עיצוב סביבה מכוון התנהגות.",
    summary:
      "אקולוגיית מדיה בוחנת את הטכנולוגיה כסביבה שמעצבת תרבות. הפלטפורמה אינה רק כלי העברה אלא ארכיטקטורה של אפשרויות, הגבלות, תמריצים והרגלים.",
    mustKnow: [
      "המדיום הוא המצע שעליו צומחת תרבות.",
      "עיצוב טכנולוגי מגדיר מה קל, מה קשה, מה נראה טבעי ומה נעלם מהעין.",
      "טענת הנייטרליות: הכלי לא אשם; הטענה הביקורתית: הכלי כבר מכוון שימושים.",
    ],
    sources: ["קוד סמוי", "דיגיטלית-שיעור 2"],
  },
  {
    id: "u3",
    lessons: "שיעורים 2-3",
    title: "המהפכה הסלולרית",
    examFocus: "להבין למה הסלולר הוא מהפכה, ולזהות דורות, ילידים ומהגרים דיגיטליים.",
    summary:
      "הסלולר מחבר בין ניידות, צמידות לגוף, אישיות ופרסונליזציה. לכן הוא לא עוד מדיום אלא תשתית קבועה לנוכחות רשתית: האדם מחובר בכל מקום ובכל זמן.",
    mustKnow: [
      "Portable: אפשר לשאת אותו; prosthetic: צמוד לגוף; personal: אישי; personalized: מותאם אישית.",
      "דורות X, Y, Z; דורות טכנולוגיים וסוציולוגיים; ילידים דיגיטליים, מהגרים דיגיטליים וילידים סלולריים.",
      "מחקר רוזנברג ובלונדהיים: חוויה מפוצלת, התמכרות מול תלות, פוטנציאל תרפויטי של ניתוק.",
    ],
    sources: ["מהפכה סלולרית", "דיגיטלית-שיעורים 3-2", "תמונות דגשים 1-4"],
  },
  {
    id: "u4",
    lessons: "שיעורים 5-6",
    title: "הפרעת קשב מובנית וכלכלת תשומת הלב",
    examFocus: "לקשור בין מודל עסקי, מוניטיזציה, עיצוב תוכנה והטענה 'המוצר הוא אנחנו'.",
    summary:
      "בכלכלת תשומת הלב פלטפורמות מתחרות על זמן, קשב ונתונים. עיצוב התוכנה כולל דחיפות קלות, התראות, פיד אינסופי ומנגנוני תגמול, ולכן שאלת האחריות אינה רק של המשתמש אלא גם של המוצר.",
    mustKnow: [
      "טריסטן האריס: מספר קטן של חברות משפיעות על מחשבות ורגשות של מיליארדים דרך עיצוב סביבת הבחירה.",
      "מקרה קיילי אצל רולניק: מעבר מביקורת על תוכן לביקורת על עיצוב מוצר ממכר.",
      "Time Well Spent מול TLT: עיצוב שמכבד זמן לעומת טכנולוגיה שמשחררת מתלות בטכנולוגיה.",
      "גודמן פרק 4: הבעיה אינה רק עודף שימוש, אלא מודל כלכלי שמרוויח מתפיסת קשב. לכן הפתרון צריך להפוך הגנה על קשב למוצר בעל ערך.",
      "TLT לפי גודמן: טכנולוגיה לשחרור מטכנולוגיה. כלומר, כלים דיגיטליים שמקטינים תלות, יוצרים מרחב בחירה ומחזירים סוכנות למשתמש.",
      "מוניטיזציה הפוכה: במקום להרוויח מגניבת תשומת לב דרך פרסום, להרוויח מהגנה על תשומת לב, סינון הסחות ועיצוב שמכבד כוונות.",
    ],
    sources: ["TWS", "Time Well Spent", "הפרעת קשב מובנית", "הילדה קיילי", "גודמן בפרק ד"],
  },
  {
    id: "u5",
    lessons: "שיעורים 7-8",
    title: "מהפכת ווב 2.0 וההמון",
    examFocus: "להגדיר Web 2.0 בשני ממדים ולהבחין בין חכמת המון, מיקור המון ומימון המון.",
    summary:
      "ווב 2.0 מתאר גם אידאולוגיה של השתתפות, פתיחות ושיתופיות וגם מערך טכנולוגי שמאפשר תוכן משתמשים, דירוגים, רשתות חברתיות ופלטפורמות השתתפות.",
    mustKnow: [
      "UGC: תוכן שפורסם בפומבי, מבטא מאמץ יצירתי, ונוצר מחוץ למסגרות מקצועיות מסורתיות.",
      "חכמת ההמון: הפקת ידע מקבוצה; מיקור המון: הפניית משימה להמון; מימון המון: גיוס כסף מהמון.",
      "שאלת הליבה: מי יקבל החלטה טובה יותר - מומחים מעטים או ציבור רחב ומעורב.",
    ],
    sources: ["מהפכת הווב", "שיעור 8-7"],
  },
  {
    id: "u6",
    lessons: "שיעור 9",
    title: "כלכלת שיתוף, אפקט הרשת והזנב הארוך",
    examFocus: "להבין מודלים כלכליים דיגיטליים ולזהות דוגמאות.",
    summary:
      "כלכלת שיתוף מניחה ניצול משאבים קיימים דרך פלטפורמות, אמון ותיווך דיגיטלי. אפקט הרשת מגדיל ערך ככל שיש יותר משתמשים. הזנב הארוך מראה איך מדף אינסופי ומידע בזמן אמת מאפשרים לנישות לצבור ערך כלכלי משמעותי.",
    mustKnow: [
      "כלכלת שיתוף מול כלכלת שוק: שימוש, גישה ותיווך לעומת בעלות ומכירה רגילה.",
      "אפקט הרשת: יותר משתמשים יוצרים יותר ערך למשתמשים האחרים.",
      "לגעת בריק ומוות באוורסט: מדף אינסופי ומידע על מגמות קנייה העלו ביקוש לספר נישה.",
    ],
    sources: ["כלכלת שיתוף וזנב ארוך", "שיעור_9"],
  },
  {
    id: "u7",
    lessons: "שיעור 10",
    title: "תקשורת בעידן הבינה המלאכותית",
    examFocus: "להבחין בין CMC, HCI ותקשורת משולבת AI לפי סוכן הפעולה.",
    summary:
      "ההבחנה ההיסטורית נשענת על תפקיד המחשב: בתקשורת מתווכת מחשב האדם הוא סוכן הפעולה והמחשב מתווך; באינטראקציית אדם-מחשב המחשב מבצע שירות או משימה. עם AI, המחשב יכול גם לשוחח, לתווך, ליצור ולאצור.",
    mustKnow: [
      "סוכן פעולה: מי מניע, מכוון או מבצע את הפעולה.",
      "סאנדר ולי: AI כמתקשר או כמתווך, ובין תקשורת בין-אישית לתקשורת המונים.",
      "עקבות דיגיטליים, טביעת רגל דיגיטלית, למידת מכונה, בינה מלאכותית.",
    ],
    sources: ["תקשורת בעידן הבינה המלאכותית", "דיגיטלית-שיעור10", "שיעורים 11-10"],
  },
  {
    id: "u8",
    lessons: "שיעור 11",
    title: "דיסאינפורמציה, מיסאינפורמציה וחדשות כזב",
    examFocus: "להגדיר, להבחין ולזהות מושגים מתוך סיטואציות.",
    summary:
      "ההבחנה הקריטית היא כוונה והקשר: דיסאינפורמציה היא מידע מטעה שמופץ בכוונה לגרום נזק; מיסאינפורמציה היא מידע שגוי שמופץ ללא כוונה מודעת; חדשות כזב הן מופע חדשותי-תקשורתי של מידע שקרי.",
    mustKnow: [
      "מקרה פנטגון 2023: ידיעה כוזבת על פיצוץ השפיעה על הבורסה.",
      "סלובקיה 2023: זיוף/דיפ-פייק פוליטי סמוך לבחירות.",
      "חומת תשלום: כשעיתונות אמינה נסגרת מאחורי תשלום, מידע חופשי אך פחות אמין עלול להתחרות בה.",
      "AI נגד דיסאינפורמציה: הטיה, קושי בהקשר, חוסר שקיפות והסתמכות יתר.",
    ],
    sources: ["דיסאינפורמציה מיסאינפורמציה ומידע כוזב", "דיגיטלית-שיעור 11", "שיעורים 11-10"],
  },
];

const flashcards = [
  {
    term: "שינוי אונטולוגי",
    answer: "שינוי בשאלה מה פירוש להיות אדם: הקיום, הזהות והפעולה האנושית מתעצבים גם דרך רשתות מידע.",
    slideUrl: "public/slides/lesson1-ontological-change.png",
    slideLabel: "שיעור 1, שקף 13",
  },
  {
    term: "נוכחות רשת",
    answer: "הקיום החברתי והזהותי של אדם במרחב הדיגיטלי כחלק בלתי נפרד מההוויה.",
    slideUrl: "public/slides/lesson1-web-presence.png",
    slideLabel: "שיעור 1, שקף 11",
  },
  {
    term: "דטרמיניזם טכנולוגי",
    answer: "גישה שלפיה הטכנולוגיה היא כוח מרכזי שמכתיב שינוי חברתי ותרבותי.",
    slideUrl: "public/slides/lesson1-tech-determinism.png",
    slideLabel: "שיעור 1, שקף 16",
  },
  {
    term: "הבניה חברתית של טכנולוגיה",
    answer: "גישה שלפיה חברה, תרבות, פוליטיקה וכלכלה מעצבות את הטכנולוגיה ואת שימושיה.",
    slideUrl: "public/slides/lesson1-social-construction.png",
    slideLabel: "שיעור 1, שקף 15",
  },
  {
    term: "אקולוגיית מדיה",
    answer: "בחינת המדיום כסביבה שמעצבת תפיסה, תרבות, יחסים ודרכי פעולה.",
    slideUrl: "public/slides/lesson2-media-ecology.png",
    slideLabel: "שיעור 2, שקף 6",
  },
  {
    term: "ניידות וצמידות",
    answer: "הסלולר נישא לכל מקום ונצמד לגוף, ולכן נעשה חלק מתמיד מחיי היום-יום.",
    slideUrl: "public/slides/lesson23-mobile-portable.png",
    slideLabel: "שיעורים 2-3, שקף 12",
  },
  {
    term: "חוויה מפוצלת",
    answer: "במחקר הסלולר: מצד אחד תחושת שקט וחופש בניתוק, מצד שני חרדה, החמצה וריחוק חברתי.",
    slideUrl: "public/slides/lesson23-split-experience.png",
    slideLabel: "שיעורים 2-3, שקף 25",
  },
  {
    term: "פניקה מוסרית",
    answer: "חרדה חברתית סביב תופעה שנתפסת כאיום על ערכים וסדר חברתי.",
    slideUrl: "public/slides/lesson23-moral-panic.png",
    slideLabel: "שיעורים 2-3, שקף 28",
  },
  {
    term: "כלכלת תשומת הלב",
    answer: "מודל שבו קשב וזמן משתמשים נעשים משאב כלכלי מרכזי.",
    slideUrl: "public/slides/lesson56-attention-economy.png",
    slideLabel: "שיעורים 5-6, שקף 6",
  },
  {
    term: "Nudge",
    answer: "דחיפה קלה בעיצוב שמכוונת התנהגות בלי לכפות אותה ישירות.",
    slideUrl: "public/slides/lesson56-nudge-design.png",
    slideLabel: "שיעורים 5-6, שקף 6",
  },
  {
    term: "Time Well Spent",
    answer: "מודל עיצוב שמבקש להתאים טכנולוגיה לערכים ולזמן משמעותי של המשתמש.",
    slideUrl: "public/slides/lesson56-tws.png",
    slideLabel: "שיעורים 5-6, שקף 16",
  },
  {
    term: "TLT",
    answer: "Technology that Liberates us from Technology: טכנולוגיה שתעזור להשתחרר מתלות בטכנולוגיה.",
    slideUrl: "public/slides/lesson56-tlt.png",
    slideLabel: "שיעורים 5-6, שקף 20",
  },
  {
    term: "גודמן - מוניטיזציה",
    answer:
      "גודמן מציע להפוך את הגנת הקשב להזדמנות כלכלית: לא להרוויח מהסחת דעת, אלא משירותים שמחזירים לאדם שליטה בזמן ובקשב.",
    slideUrl: "public/slides/lesson56-monetization.png",
    slideLabel: "שיעורים 5-6, שקף 21",
  },
  {
    term: "UGC",
    answer: "תוכן משתמשים: פומבי, יצירתי במידה מסוימת, ונוצר מחוץ למסגרת מקצועית מסורתית.",
    slideUrl: "public/slides/lesson78-ugc.png",
    slideLabel: "שיעורים 7-8, שקף 13",
  },
  {
    term: "אפקט הרשת",
    answer: "ערך שירות גדל ככל שמספר המשתמשים בו גדל.",
    slideUrl: "public/slides/lesson9-network-effect.png",
    slideLabel: "שיעור 9, שקף 13",
  },
  {
    term: "הזנב הארוך",
    answer: "מודל כלכלי שבו מכירות רבות של מוצרי נישה יכולות להשתוות או לעלות על מכירות הלהיטים.",
    slideUrl: "public/slides/lesson9-long-tail.png",
    slideLabel: "שיעור 9, שקף 14",
  },
  {
    term: "סוכן הפעולה",
    answer: "הגורם שמניע, מכוון או מבצע את הפעולה: אדם, מחשב או AI.",
    slideUrl: "public/slides/lesson10-agency.png",
    slideLabel: "שיעור 10, שקף 7",
  },
  {
    term: "דיסאינפורמציה",
    answer: "מידע שקרי או מטעה שמופץ בכוונה מודעת להזיק או להשפיע.",
    slideUrl: "public/slides/lesson11-disinformation.png",
    slideLabel: "שיעור 11, שקף 11",
  },
  {
    term: "מיסאינפורמציה",
    answer: "מידע שגוי שמופץ בלי כוונת הטעיה מודעת.",
    slideUrl: "public/slides/lesson11-misinformation.png",
    slideLabel: "שיעור 11, שקף 11",
  },
  {
    term: "היוריסטיקת מכונה",
    answer: "נטייה לסמוך על מכונה משום שהיא נתפסת כאובייקטיבית ונייטרלית.",
    slideUrl: "public/slides/lesson11-machine-heuristic.png",
    slideLabel: "שיעור 11, שקף 28",
  },
  {
    term: "היוריסטיקת העדר",
    answer: "נטייה להאמין למשהו כי הרבה אנשים אחרים מאמינים בו.",
    slideUrl: "public/slides/lesson11-bandwagon-heuristic.png",
    slideLabel: "שיעור 11, שקף 28",
  },
];

const quiz = [
  {
    question: "בעלת מכולת מפיצה שקרים על סופר מתחרה כדי להחזיר אליה לקוחות. מה המושג המדויק ביותר?",
    answers: ["דיסאינפורמציה", "מיסאינפורמציה", "חכמת המון", "אפקט הרשת"],
    correct: 0,
    explanation: "יש כאן מידע שקרי שמופץ בכוונה מודעת כדי לגרום נזק ולהשפיע על התנהגות צרכנים.",
  },
  {
    question: "אפליקציה מסדרת מחדש פיד כדי שתמשיכו לגלול, גם בלי שתכננתם. לאיזה מושג זה הכי קרוב?",
    answers: ["שטח מדף אינסופי", "דחיפות קלות ועיצוב תוכנה", "מימון המון", "פניקת סלולר"],
    correct: 1,
    explanation: "העיצוב משנה את סביבת הבחירה ומכוון התנהגות. זו דוגמה לקשר בין עיצוב, קשב ומודל עסקי.",
  },
  {
    question: "במערכת ניווט, האלגוריתם קובע מסלול ומבצע חישוב עבור המשתמש. מי סוכן הפעולה המרכזי?",
    answers: ["ההמון", "המחשב או ה-AI", "העיתונות המקוונת", "חומת התשלום"],
    correct: 1,
    explanation: "המערכת מבצעת פעולה של חישוב והכוונה, ולכן המחשב/AI הוא סוכן פעולה משמעותי.",
  },
  {
    question: "ספר נישה מתחיל להימכר אחרי המלצות מקוונות וקישור לספר מצליח אחר. איזה מודל מסביר זאת?",
    answers: ["הזנב הארוך", "פניקה מוסרית", "טביעת רגל דיגיטלית", "הבניה חברתית"],
    correct: 0,
    explanation: "מדף אינסופי ומידע בזמן אמת מאפשרים למוצרי נישה לצבור ביקוש וערך.",
  },
  {
    question: "סטודנט אומר: 'הטלפון לא אשם בהתמכרות, הכל בחירה אישית'. איזו עמדה זו?",
    answers: ["טכנולוגיה אינה נייטרלית", "טענת נייטרליות הטכנולוגיה", "אוטופיה טכנולוגית", "מיקור המון"],
    correct: 1,
    explanation: "זו עמדה שמייחסת את האחריות למשתמש ומתייחסת למכשיר ככלי ניטרלי.",
  },
  {
    question: "אתר אמין סוגר כתבות מאחורי תשלום, וברשת נשארות גרסאות חינמיות אך שגויות. מה המושג הרלוונטי?",
    answers: ["חומת תשלום", "CMC", "ילידים סלולריים", "UGC"],
    correct: 0,
    explanation: "חומת תשלום עשויה להשפיע על נגישות הציבור למידע אמין ולהשאיר מקום למידע מטעה.",
  },
];

const coverage = [
  ["שיעורים 9-1 - נושאים ומושגים", "כוסה", "שימש כבסיס למבנה יחידות 1-6."],
  ["שיעורים 11-10 - נושאים ומושגים", "כוסה", "שימש כבסיס ליחידות AI ודיסאינפורמציה."],
  ["מצגות וסיכומי שיעורים", "כוסה", "24 מסמכים זמינים נסרקו, ללא קובץ חסר בנתיבים שסופקו."],
  ["גודמן - פרק 4", "כוסה", "נבנה סיכום לימודי מתוך המצגת, קובץ TWS והדגשים לבחינה: TLT, מוניטיזציה הפוכה, הגנה על קשב והחזרת סוכנות למשתמש."],
  ["TED - טריסטן האריס", "כוסה", "שולב רק החלק הרלוונטי למבחן: טענת השליטה בקשב, עיצוב סביבת הבחירה, קשר לכלכלת תשומת הלב ול-Time Well Spent."],
];

const examImages = [
  ["public/exam-1.png", "התמכרות ושימוש בסלולר"],
  ["public/exam-2.png", "ילדים, מבוגרים ופניקת מדיה"],
  ["public/exam-3.png", "האוטופיה הטכנולוגית והסלולר"],
  ["public/exam-4.png", "פרדוקס האכזבה מהסלולר"],
];

const state = {
  progress: JSON.parse(localStorage.getItem("digitalCultureProgress") || "{}"),
  query: "",
};

const views = {
  dashboard: document.querySelector("#dashboard"),
  units: document.querySelector("#units"),
  flashcards: document.querySelector("#flashcards"),
  practice: document.querySelector("#practice"),
  coverage: document.querySelector("#coverage"),
};

function saveProgress() {
  localStorage.setItem("digitalCultureProgress", JSON.stringify(state.progress));
  updateProgress();
}

function updateProgress() {
  const done = units.filter((unit) => state.progress[unit.id]).length;
  const percent = Math.round((done / units.length) * 100);
  document.querySelector("#progressPercent").textContent = `${percent}%`;
  document.querySelector("#progressFill").style.width = `${percent}%`;
}

function matchesQuery(text) {
  return text.toLowerCase().includes(state.query.toLowerCase());
}

function filteredUnits() {
  if (!state.query) return units;
  return units.filter((unit) =>
    matchesQuery([unit.lessons, unit.title, unit.examFocus, unit.summary, unit.mustKnow.join(" ")].join(" "))
  );
}

function renderDashboard() {
  views.dashboard.innerHTML = `
    <div class="hero-grid">
      <div class="panel">
        <h2>מה ללמוד קודם?</h2>
        <ul class="focus-list">
          <li><strong>1.</strong> להבין טענות ולא רק לשנן מושגים: שינוי אונטולוגי, טכנולוגיה לא נייטרלית, סוכן פעולה.</li>
          <li><strong>2.</strong> לתרגל זיהוי מתוך סיטואציה: דיסאינפורמציה מול מיסאינפורמציה, AI כמתווך או כמתקשר, נורמטיבי מול תיאורי.</li>
          <li><strong>3.</strong> לחבר בין נושאים: סלולר כנוכחות רשתית, קשב כמוצר, ווב 2.0 ככלכלה של השתתפות.</li>
        </ul>
      </div>
      <div class="panel">
        <h2>מצב החומר</h2>
        <p>נסרקו 24 מסמכים: סיכומי שיעורים, מצגות, מאמרים וקבצי דגשים. לא נמצא קובץ חסר בנתיבים שסיפקת.</p>
        <p><strong>האתר מסנן רעש:</strong> חומרים שלא נדרשים כפריט עצמאי הוסרו ממסך הכיסוי, ו-TED נשאר רק דרך הטענות שרלוונטיות למבחן.</p>
      </div>
    </div>
    <div class="stats-grid">
      <div class="stat"><strong>${units.length}</strong><span>יחידות לימוד</span></div>
      <div class="stat"><strong>${flashcards.length}</strong><span>כרטיסיות</span></div>
      <div class="stat"><strong>${quiz.length}</strong><span>שאלות יישום</span></div>
      <div class="stat"><strong>24</strong><span>מסמכים שנסרקו</span></div>
    </div>
    <div class="panel">
      <h2>דגשים מהתמונות שהעלית</h2>
      <div class="image-strip">
        ${examImages.map(([src, label]) => `<figure class="image-card"><img src="${src}" alt="${label}" /><p>${label}</p></figure>`).join("")}
      </div>
    </div>
  `;
}

function renderUnits() {
  const list = filteredUnits();
  views.units.innerHTML = list.length
    ? `<div class="unit-grid">${list
        .map(
          (unit) => `
          <article class="unit-card">
            <div class="unit-header">
              <p class="eyebrow">${unit.lessons}</p>
              <h3>${unit.title}</h3>
              <p>${unit.examFocus}</p>
            </div>
            <div class="unit-body">
              <p>${unit.summary}</p>
              <h4>חייבים לדעת</h4>
              <ul>${unit.mustKnow.map((item) => `<li>${item}</li>`).join("")}</ul>
              <div class="tag-row">${unit.sources.map((source) => `<span class="tag">${source}</span>`).join("")}</div>
              <label class="check-row">
                <input type="checkbox" data-progress="${unit.id}" ${state.progress[unit.id] ? "checked" : ""} />
                סימנתי שלמדתי את היחידה
              </label>
            </div>
          </article>
        `
        )
        .join("")}</div>`
    : `<div class="empty">לא נמצאו יחידות שמתאימות לחיפוש.</div>`;
}

function renderFlashcards() {
  const cards = state.query
    ? flashcards.filter((card) => matchesQuery(`${card.term} ${card.answer} ${card.slideLabel}`))
    : flashcards;
  views.flashcards.innerHTML = cards.length
    ? `<div class="flash-grid">${cards
        .map(
          (card, index) => `
          <article class="flashcard">
            <div>
              <span class="tag">כרטיסיה ${index + 1}</span>
              <h3>${card.term}</h3>
              <p class="flash-answer">${card.answer}</p>
            </div>
            <div class="flash-actions">
              <a class="slide-button" href="${card.slideUrl}" target="_blank" rel="noopener">${card.slideLabel}</a>
              <button data-reveal>הצגת תשובה</button>
            </div>
          </article>
        `
        )
        .join("")}</div>`
    : `<div class="empty">אין כרטיסיות שתואמות לחיפוש.</div>`;
}

function renderPractice() {
  views.practice.innerHTML = `<div class="practice-grid">${quiz
    .map(
      (item, index) => `
      <article class="quiz-card">
        <span class="tag">שאלה ${index + 1}</span>
        <h3>${item.question}</h3>
        <div class="answers">
          ${item.answers
            .map((answer, answerIndex) => `<button class="answer-button" data-quiz="${index}" data-answer="${answerIndex}">${answer}</button>`)
            .join("")}
        </div>
        <p class="feedback" id="feedback-${index}"></p>
      </article>
    `
    )
    .join("")}</div>`;
}

function renderCoverage() {
  views.coverage.innerHTML = `
    <div class="coverage-grid">
      <div class="panel">
        <h2>כיסוי לפי ההנחיות</h2>
        <div class="unit-grid">
          ${coverage
            .map(
              ([name, status, note]) => `
              <article class="source-card">
                <strong>${name}</strong>
                <span class="${status === "כוסה" ? "status-ok" : "status-warn"}">${status}</span>
                <p>${note}</p>
              </article>
            `
            )
            .join("")}
        </div>
      </div>
      <div class="panel">
        <h2>אסטרטגיית למידה מומלצת</h2>
        <ol>
          <li>לקרוא יחידה ולסמן אותה רק אחרי שאפשר להסביר אותה בעל פה.</li>
          <li>לעבור לכרטיסיות ולבדוק אם ההגדרה יוצאת מדויקת בלי להציץ.</li>
          <li>לפתור שאלות יישום, כי לפי ההנחיות זה סוג ידע שחוזר בכמה נושאים.</li>
          <li>לחזור במיוחד על החוסרים המסומנים לפני המבחן.</li>
        </ol>
      </div>
    </div>
  `;
}

function renderAll() {
  renderDashboard();
  renderUnits();
  renderFlashcards();
  renderPractice();
  renderCoverage();
  updateProgress();
}

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".nav-item").forEach((item) => item.classList.remove("active"));
    document.querySelectorAll(".view").forEach((view) => view.classList.remove("active-view"));
    button.classList.add("active");
    views[button.dataset.view].classList.add("active-view");
  });
});

document.querySelector("#searchInput").addEventListener("input", (event) => {
  state.query = event.target.value.trim();
  renderUnits();
  renderFlashcards();
});

document.addEventListener("change", (event) => {
  if (event.target.matches("[data-progress]")) {
    state.progress[event.target.dataset.progress] = event.target.checked;
    saveProgress();
  }
});

document.addEventListener("click", (event) => {
  if (event.target.matches("[data-reveal]")) {
    const card = event.target.closest(".flashcard");
    card.classList.toggle("revealed");
    event.target.textContent = card.classList.contains("revealed") ? "הסתרת תשובה" : "הצגת תשובה";
  }

  if (event.target.matches("[data-answer]")) {
    const questionIndex = Number(event.target.dataset.quiz);
    const answerIndex = Number(event.target.dataset.answer);
    const item = quiz[questionIndex];
    const card = event.target.closest(".quiz-card");
    card.querySelectorAll(".answer-button").forEach((button) => {
      button.classList.remove("correct", "wrong");
      if (Number(button.dataset.answer) === item.correct) button.classList.add("correct");
    });
    if (answerIndex !== item.correct) event.target.classList.add("wrong");
    document.querySelector(`#feedback-${questionIndex}`).textContent = item.explanation;
  }
});

document.querySelector("#resetProgress").addEventListener("click", () => {
  state.progress = {};
  saveProgress();
  renderUnits();
});

renderAll();
