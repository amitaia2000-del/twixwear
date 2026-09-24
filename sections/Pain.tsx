"use client";
import {useEffect,useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {content} from "@/lib/content";
gsap.registerPlugin(ScrollTrigger);
// PAIN
// 1. הקורא בודק אם ההבדל של המותג הוא אמיתי.
// 2. ה"כן אבל": כולם אומרים שהם מיוחדים.
// 3. הסקשן מנסח את בעיית הגנריות במילים ישירות.
// 4. ביציאה: "מישהו ניסח את התחושה שלי."
// 5. זכירות: בגדים טובים לא אמורים למחוק את הזהות שלך.
// אתה עורך רק את הקובץ של הסקשן הזה ואת המפתח שלו ב-content.ts. אסור לגעת ב-globals.css, ב-tailwind config, ב-layout.tsx וב-package.json. חסר לך משהו — תגיד לי, אל תוסיף.
export default function Pain(){
 const ref=useRef<HTMLElement>(null);
 useEffect(()=>{const root=ref.current;if(!root)return;const ctx=gsap.context(()=>{const words=gsap.utils.toArray<HTMLElement>("[data-pain-word]");if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){gsap.set(words,{opacity:1});return;}gsap.to(words,{opacity:1,stagger:.1,ease:"none",scrollTrigger:{trigger:root,start:"top 70%",end:"bottom 60%",scrub:1}})},root);return()=>ctx.revert()},[]);
 const text=content.pain+" בגדים יכולים להיות נקיים ופשוטים, ועדיין להרגיש כמו בחירה של אדם מסוים.";
 return <section ref={ref} style={{padding:"140px 5%",minHeight:"72vh",display:"grid",alignItems:"center"}}>
  <div><div style={{fontSize:14,color:"var(--ink-soft)",marginBottom:22}}>הבעיה</div>
   <p style={{maxWidth:"24ch",fontSize:"clamp(34px,5vw,64px)",lineHeight:1.15,letterSpacing:"-.03em",margin:0}}>
   {text.split(" ").map((w,i)=><span key={i} data-pain-word style={{opacity:.18,display:"inline-block",marginInlineEnd:".22em"}}>{w}</span>)}
   </p>
   <p style={{fontSize:"var(--caption)",color:"var(--ink-soft)",maxWidth:"50ch",marginTop:30}}>המשפט הלא־נוח: כשכל מותג צועק “ייחודי”, עוד רעש לא יוצר זהות.</p>
  </div>
 </section>
}