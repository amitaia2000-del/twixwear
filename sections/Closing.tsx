"use client";
import {useEffect,useRef} from "react";
import {content} from "@/lib/content";
import gsap from "gsap";
// CLOSING
// 1. הקורא כבר ראה את המערכת ומחליט אם לפעול.
// 2. ה"כן אבל": "מה יקרה כשאלחץ?"
// 3. הסקשן מחזיר את רגע ה-Hero ונותן פעולה אחת.
// 4. ביציאה: פעולה ברורה.
// 5. זכירות: אותו משפט, אותו CTA.
// אתה עורך רק את הקובץ של הסקשן הזה ואת המפתח שלו ב-content.ts. אסור לגעת ב-globals.css, ב-tailwind config, ב-layout.tsx וב-package.json. חסר לך משהו — תגיד לי, אל תוסיף.
export default function Closing(){
 const ref=useRef<HTMLElement>(null);const btn=useRef<HTMLAnchorElement>(null);
 useEffect(()=>{const root=ref.current;if(!root)return;const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;const ctx=gsap.context(()=>{const lines=gsap.utils.toArray<HTMLElement>("[data-close-line]");gsap.fromTo(lines,{yPercent:110},{yPercent:0,duration:.9,stagger:.08,ease:"expo.out"});const el=btn.current;if(!el||reduced)return;
 const move=(e:PointerEvent)=>{const r=el.getBoundingClientRect();const x=((e.clientX-(r.left+r.width/2))/r.width)*6;const y=((e.clientY-(r.top+r.height/2))/r.height)*6;gsap.to(el,{x,y,duration:.25,ease:"power3.out"})};const reset=()=>gsap.to(el,{x:0,y:0,duration:.25,ease:"power3.out"});el.addEventListener("pointermove",move);el.addEventListener("pointerleave",reset);return()=>{el.removeEventListener("pointermove",move);el.removeEventListener("pointerleave",reset)}},root);return()=>ctx.revert()},[]);
 return <section ref={ref} style={{minHeight:"88vh",padding:"140px 5%",display:"grid",placeItems:"center",background:"var(--surface)",textAlign:"center"}}><div><p style={{fontSize:14,color:"var(--ink-soft)"}}>TWIXWEAR</p>
 <h2 style={{fontSize:"clamp(54px,8vw,110px)",lineHeight:1.02,margin:"18px auto 28px",maxWidth:"9ch"}}><span style={{display:"block",overflow:"hidden"}}><span data-close-line style={{display:"block"}}>ללבוש</span></span><span style={{display:"block",overflow:"hidden"}}><span data-close-line style={{display:"block"}}>עם זהות</span></span></h2>
 <p style={{maxWidth:"42ch",margin:"0 auto",color:"var(--ink-soft)"}}>לפתוח את הקולקציה, לבחור פריט, צבע ומידה ולהמשיך למסלול הרכישה.</p>
 <a ref={btn} href={content.cta.href} style={{display:"inline-flex",alignItems:"center",justifyContent:"center",marginTop:26,padding:"14px 22px",borderRadius:10,background:"var(--ink)",color:"var(--surface)",textDecoration:"none"}}>{content.cta.label}</a>
 </div></section>
}