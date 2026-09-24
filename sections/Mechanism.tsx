"use client";
import {useEffect,useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {content} from "@/lib/content";
gsap.registerPlugin(ScrollTrigger);
// MECHANISM
// 1. הקורא רוצה להבין למה זה שונה.
// 2. ה"כן אבל": "תסביר לי מכנית, לא כסיסמה."
// 3. ארבעה פאנלים הופכים את השיטה לצעדים נראים.
// 4. ביציאה: "אני מבין את ההיגיון."
// 5. זכירות: Identity / Material / System / Experience.
// אתה עורך רק את הקובץ של הסקשן הזה ואת המפתח שלו ב-content.ts. אסור לגעת ב-globals.css, ב-tailwind config, ב-layout.tsx וב-package.json. חסר לך משהו — תגיד לי, אל תוסיף.
export default function Mechanism(){
 const ref=useRef<HTMLElement>(null);
 useEffect(()=>{const root=ref.current;if(!root)return;const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;const ctx=gsap.context(()=>{const panels=gsap.utils.toArray<HTMLElement>("[data-panel]");if(!reduced){panels.forEach((panel,i)=>{const next=panels[i+1];if(next)gsap.to(panel,{scale:.94,opacity:.5,ease:"none",scrollTrigger:{trigger:next,start:"top bottom",end:"top top",scrub:1}})});const path=root.querySelector<SVGPathElement>("[data-path]");if(path){const len=path.getTotalLength();gsap.set(path,{strokeDasharray:len,strokeDashoffset:len});gsap.to(path,{strokeDashoffset:0,ease:"none",scrollTrigger:{trigger:root,start:"top 70%",end:"bottom 35%",scrub:1}})}}},root);return()=>ctx.revert()},[]);
return <section ref={ref} style={{background:"var(--surface-deep)",color:"var(--surface)",padding:"140px 5%"}}>
 <div style={{maxWidth:"68ch",paddingBottom:"7vh"}}><p style={{fontSize:14,color:"rgba(242,240,236,.62)"}}>המנגנון</p><h2 style={{margin:"12px 0",color:"var(--surface)"}}>לא עוד אוסף. מערכת.</h2><p style={{color:"rgba(242,240,236,.68)"}}>כל שכבה עושה עבודה אחרת; ביחד הן הופכות מוצר בודד ללוק עם הקשר, חומר וחוויה.</p></div>
 <svg aria-hidden="true" viewBox="0 0 100 1000" preserveAspectRatio="none" style={{position:"absolute",right:"10%",height:"58%",width:2,pointerEvents:"none"}}><path data-path d="M50 0C50 180 48 270 50 360S52 540 50 650S48 840 50 1000" fill="none" stroke="var(--accent)" strokeWidth="1"/></svg>
 <div style={{display:"grid",gap:"8vh"}}>
 {content.mechanism.map((step,i)=><article key={step.title} data-panel style={{position:"sticky",top:"10vh",minHeight:"78vh",background:"#111",color:"var(--surface)",border:"1px solid rgba(242,240,236,.14)",borderRadius:32,padding:"8vw",display:"grid",alignContent:"space-between",zIndex:i+1}}>
   <div style={{fontSize:14,color:"rgba(242,240,236,.56)"}}>שלב {i+1}</div>
   <div><h3 style={{fontSize:"clamp(48px,8vw,100px)",lineHeight:1,margin:"0 0 24px",letterSpacing:"-.04em"}}>{step.title}</h3><p style={{fontSize:"var(--lead)",color:"rgba(242,240,236,.72)",maxWidth:"48ch"}}>{step.body}</p></div>
   <div style={{fontSize:14,color:"rgba(242,240,236,.45)"}}>TWIXWEAR / {i+1}</div>
 </article>)}
 </div>
</section>