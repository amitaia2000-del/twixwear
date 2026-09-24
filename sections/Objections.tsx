"use client";
import {useState} from "react";
import {content} from "@/lib/content";
// OBJECTIONS
// 1. הקורא מבין את הערך אבל עדיין מחזיק סיכון.
// 2. ה"כן אבל": "מה אם משהו כאן לא בשבילי?"
// 3. האקורדיון עונה ישירות בלי אפקטי גלילה.
// 4. ביציאה: פחות חיכוך.
// 5. זכירות: שאלה אחת, תשובה אחת.
// אתה עורך רק את הקובץ של הסקשן הזה ואת המפתח שלו ב-content.ts. אסור לגעת ב-globals.css, ב-tailwind config, ב-layout.tsx וב-package.json. חסר לך משהו — תגיד לי, אל תוסיף.
const answers=[
 "המחיר שיופיע בעמוד הוא המחיר שעליו מתבססת הקנייה; אין כרגע נתון משלוח סופי שפורסם.",
 "מדריך המידות בעמוד המוצר מאפשר להשוות לחולצה קיימת לפני הבחירה.",
 "הממשק החדש בנוי להציג את הבגד בצורה קרובה ככל האפשר למוצר אמיתי; תמונות מוצר אמיתיות יחליפו placeholders כשיהיו מוכנות.",
 "מדיניות החזרה מלאה עדיין לא הוגדרה בבריף, ולכן לא נבטיח תנאי שלא אושרו.",
 "האתר כבר מציג קטלוג וסל; לפני מכירה בפועל צריך לחבר ספק תשלום והזמנה."
];
export default function Objections(){
 const [open,setOpen]=useState<number|null>(null);
 return <section style={{padding:"140px 5%"}}><div style={{maxWidth:"880px",margin:"0 auto"}}><p style={{fontSize:14,color:"var(--ink-soft)"}}>שאלות לפני בחירה</p><h2 style={{margin:"12px 0 50px"}}>מה עוצר אותך?</h2>
 {content.objections.map((q,i)=><div key={q} style={{borderTop:"1px solid rgba(17,17,17,.16)"}}>
 <button onClick={()=>setOpen(open===i?null:i)} aria-expanded={open===i} style={{width:"100%",display:"flex",justifyContent:"space-between",gap:24,textAlign:"right",border:0,background:"transparent",padding:"24px 0",cursor:"pointer",fontSize:"clamp(20px,2.5vw,30px)"}}><span>{q}</span><span aria-hidden="true">{open===i?"−":"+"}</span></button>
 <div style={{display:"grid",gridTemplateRows:open===i?"1fr":"0fr",transition:"grid-template-rows .3s cubic-bezier(.65,0,.35,1)"}}><div style={{overflow:"hidden"}}><p style={{color:"var(--ink-soft)",margin:"0 0 24px",maxWidth:"56ch"}}>{answers[i]}</p></div></div>
 </div>)}
 </div></section>
}