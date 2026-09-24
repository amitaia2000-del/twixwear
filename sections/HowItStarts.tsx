"use client";
import {useEffect,useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
// HOW IT STARTS
// 1. הקורא כבר מבין את הערך ורוצה לדעת מה לעשות.
// 2. ה"כן אבל": "כמה מסובך להתחיל?"
// 3. הסקשן הופך את הפעולה לשלושה צעדים.
// 4. ביציאה: הוא יודע מה קורה.
// 5. זכירות: בוחרים / בודקים / מזמינים.
// אתה עורך רק את הקובץ של הסקשן הזה ואת המפתח שלו ב-content.ts. אסור לגעת ב-globals.css, ב-tailwind config, ב-layout.tsx וב-package.json. חסר לך משהו — תגיד לי, אל תוסיף.
export default function HowItStarts(){
 const ref=useRef<HTMLElement>(null);
 useEffect(()=>{const root=ref.current;if(!root)return;const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;const ctx=gsap.context(()=>{const line=root.querySelector<HTMLElement>("[data-progress]");const dots=gsap.utils.toArray<HTMLElement>("[data-dot]");if(reduced){if(line)gsap.set(line,{scaleY:1});gsap.set(dots,{background:"var(--ink)"});return;}if(line)gsap.to(line,{scaleY:1,ease:"none",scrollTrigger:{trigger:root,start:"top 65%",end:"bottom 40%",scrub:1}});dots.forEach(dot=>gsap.to(dot,{background:"var(--ink)",duration:.2,scrollTrigger:{trigger:dot,start:"top 65%",toggleActions:"play none none reverse"}}));},root);return()=>ctx.revert()},[]);
 const steps=[["1","בוחרים","פותחים את הקולקציה ומוצאים את הפריט המתאים.","עכשיו"],["2","בודקים","בוחרים צבע ומידה ומשווים למדריך המידות.","תוך דקה"],["3","מזמינים","מוסיפים לסל וממשיכים למסלול הרכישה.","מיד"]];
 return <section ref={ref} style={{padding:"140px 5%"}}><div style={{display:"grid",gridTemplateColumns:"52px 1fr",gap:32,maxWidth:"940px",margin:"0 auto"}}><div style={{position:"relative"}}><span style={{position:"absolute",top:20,bottom:20,right:24,width:2,background:"rgba(17,17,17,.12)"}}/><span data-progress style={{position:"absolute",top:20,right:24,width:2,height:"calc(100% - 40px)",background:"var(--ink)",transform:"scaleY(0)",transformOrigin:"top"}}/></div><div><p style={{fontSize:14,color:"var(--ink-soft)"}}>איך זה מתחיל</p>{steps.map(([n,title,body,time])=><article key={n} style={{minHeight:"32vh",display:"grid",gridTemplateColumns:"70px 1fr",gap:24,alignItems:"start",position:"relative"}}><span data-dot style={{width:42,height:42,borderRadius:"50%",border:"1px solid var(--ink)",display:"grid",placeItems:"center",background:"var(--surface)"}}>{n}</span><div><h3 style={{fontSize:"clamp(32px,4vw,52px)",margin:0}}>{title}</h3><p style={{color:"var(--ink-soft)"}}>{body}</p><p style={{fontSize:14,color:"var(--ink-soft)",margin:0}}>{time}</p></div></article>)}</div></div><style jsx>{`@media(max-width:700px){section>div{grid-template-columns:1fr!important}section>div>div:first-child{display:none}article{grid-template-columns:52px 1fr!important}}`}</style></section>
}