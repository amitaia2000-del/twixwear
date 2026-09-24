"use client";
import {useEffect,useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {content} from "@/lib/content";
gsap.registerPlugin(ScrollTrigger);
// WHY WHAT YOU TRIED DID NOT WORK
// 1. הקורא בודק אם הבעיה היא כמות הניסיון.
// 2. ה"כן אבל": אולי פשוט צריך עוד פריטים.
// 3. הסקשן מפריד בין "לא ניסיתי מספיק" לבין "לא הייתה מערכת".
// 4. ביציאה: רצון להבין את המנגנון.
// 5. זכירות: פחות רעש, יותר מערכת.
// אתה עורך רק את הקובץ של הסקשן הזה ואת המפתח שלו ב-content.ts. אסור לגעת ב-globals.css, ב-tailwind config, ב-layout.tsx וב-package.json. חסר לך משהו — תגיד לי, אל תוסיף.
export default function FailedBefore(){
 const ref=useRef<HTMLElement>(null);
 useEffect(()=>{const root=ref.current;if(!root)return;const ctx=gsap.context(()=>{gsap.utils.toArray<HTMLElement>("[data-fail-row]").forEach(row=>{const strike=row.querySelector<HTMLElement>("[data-strike]");if(!strike)return;gsap.to(strike,{scaleX:1,transformOrigin:"right",duration:.5,ease:"power2.inOut",scrollTrigger:{trigger:row,start:"top 75%",toggleActions:"play none none reverse"}});gsap.to(row,{opacity:.35,duration:.5,delay:.1,scrollTrigger:{trigger:row,start:"top 75%",toggleActions:"play none none reverse"}})})},root);return()=>ctx.revert()},[]);
 return <section ref={ref} style={{padding:"140px 5%"}}>
  <div style={{display:"grid",gridTemplateColumns:"minmax(240px,.7fr) minmax(0,1.3fr)",gap:70}}>
   <div><p style={{fontSize:14,color:"var(--ink-soft)"}}>מה לא מספיק</p><h2 style={{maxWidth:"10ch",margin:0}}>זה לא שלא ניסית מספיק.</h2></div>
   <div>{content.failedBefore.map((item,i)=><div key={i} data-fail-row style={{position:"relative",padding:"26px 0",borderBottom:"1px solid rgba(17,17,17,.16)",fontSize:"clamp(24px,3vw,40px)"}}><span data-strike style={{position:"absolute",left:0,right:0,top:"50%",height:1,background:"currentColor",transform:"scaleX(0)",transformOrigin:"right"}} />{item}</div>)}<p style={{fontSize:"clamp(30px,4vw,52px)",maxWidth:"15ch",marginTop:38}}>המסקנה נשארת: צריך מערכת טובה יותר, לא יותר רעש.</p></div>
  </div>
  <style jsx>{`@media(max-width:900px){section>div{grid-template-columns:1fr!important;gap:30px!important}}`}</style>
 </section>
}