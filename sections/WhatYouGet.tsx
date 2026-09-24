import {content} from "@/lib/content";
// WHAT YOU GET
// 1. הקורא עבר את המנגנון ושואל מה משתנה בפועל.
// 2. ה"כן אבל": "מה אני מקבל מזה?"
// 3. הסקשן מתרגם מנגנון לתוצאות.
// 4. ביציאה: בהירות.
// 5. זכירות: תוצאה, לא רשימת פיצ'רים.
// אתה עורך רק את הקובץ של הסקשן הזה ואת המפתח שלו ב-content.ts. אסור לגעת ב-globals.css, ב-tailwind config, ב-layout.tsx וב-package.json. חסר לך משהו — תגיד לי, אל תוסיף.
export default function WhatYouGet(){
 const items=[
  ["לוק שמרגיש שלם","מערכת פריטים שעובדת יחד."],
  ["תחושת לבישה אמיתית","בד, קפלים וגימורים שמוצגים מראש."],
  ["בחירה עם פחות ניחושים","מידות, צבעים ומוצר במקום אחד."]
 ];
 return <section style={{padding:"140px 5%"}}><div style={{display:"grid",gridTemplateColumns:"minmax(240px,.55fr) minmax(0,1fr)",gap:80,alignItems:"start"}}><div style={{position:"sticky",top:"14vh"}}><p style={{fontSize:14,color:"var(--ink-soft)"}}>מה מקבלים</p><h2 style={{maxWidth:"9ch",margin:0}}>מה משתנה בפועל</h2></div><div>{items.map(([result,detail],i)=><article key={i} style={{padding:"32px 0",borderBottom:"1px solid rgba(17,17,17,.15)"}}><h3 style={{fontSize:"clamp(28px,4vw,48px)",margin:0}}>{result}</h3><p style={{color:"var(--ink-soft)",marginTop:10}}>{detail} <span style={{color:"var(--ink-soft)"}}>(הרכיב)</span></p></article>)}</div></div></section>
}