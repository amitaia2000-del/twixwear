"use client";
import {useEffect,useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {content} from "@/lib/content";
gsap.registerPlugin(ScrollTrigger);
// PROOF
// 1. הקורא מחפש סיבה להאמין.
// 2. ה"כן אבל": "תראה לי תוצאות."
// 3. אין PROOF אמיתי שסופק, אז הממשק משאיר מקום במקום להמציא.
// 4. ביציאה: שקיפות במקום מספרים מזויפים.
// 5. זכירות: כשיהיו נתונים, הם יקבלו כאן את הבמה.
// אתה עורך רק את הקובץ של הסקשן הזה ואת המפתח שלו ב-content.ts. אסור לגעת ב-globals.css, ב-tailwind config, ב-layout.tsx וב-package.json. חסר לך משהו — תגיד לי, אל תוסיף.
export default function Proof(){
 const ref=useRef<HTMLElement>(null);
 useEffect(()=>{const root=ref.current;if(!root)return;const ctx=gsap.context(()=>{if(window.innerWidth<1024||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const track=root.querySelector<HTMLElement>("[data-track]");if(!track)return;const distance=track.scrollWidth-window.innerWidth;if(distance<=0)return;gsap.to(track,{x:()=>-distance,ease:"none",scrollTrigger:{trigger:root,start:"top top",end:()=>"+="+(track.scrollWidth-window.innerWidth),pin:true,scrub:1,invalidateOnRefresh:true}});const marquee=root.querySelector<HTMLElement>("[data-marquee]");if(marquee)ScrollTrigger.create({trigger:root,start:"top top",end:()=>"+="+Math.max(distance,1),onUpdate:s=>gsap.to(marquee,{x:s.getVelocity()*.008,duration:.2,ease:"power2.out"})});},root);return()=>ctx.revert()},[]);
 const cards=content.proof.length?content.proof:["מקום להוכחה אמיתית","מקום למספר מדויק","מקום לתוצאה מתועדת","מקום לשם / לקוח אמיתי"];
 return <section ref={ref} style={{padding:"140px 0",overflow:"hidden"}}>
 <div style={{padding:"0 5% 40px"}}><p style={{fontSize:14,color:"var(--ink-soft)"}}>הוכחה</p><h2>כאן הנתונים מדברים.</h2><p style={{color:"var(--ink-soft)"}}>לא המצאנו מספרים. ברגע שיהיו נתוני אמת, הם ייכנסו לכאן.</p></div>
 <div data-track style={{display:"flex",gap:20,width:"max-content",paddingInlineStart:"5%"}}>{cards.map((card,i)=><article key={i} style={{width:"min(34vw,480px)",minHeight:"50vh",border:"1px solid rgba(17,17,17,.16)",borderRadius:24,padding:20,flex:"0 0 auto"}}><div style={{aspectRatio:"1",background:"#B9B7B2",display:"grid",placeItems:"center",borderRadius:24,color:"#5C5A57",textAlign:"center",padding:20}}>{content.proof.length?card:"PROOF SLOT"}</div></article>)}</div>
 <div data-marquee style={{padding:"28px 5%",fontSize:14,color:"var(--ink-soft)",letterSpacing:2}}>TWIXWEAR · REAL PROOF ONLY · TWIXWEAR · REAL PROOF ONLY</div>
 <style jsx>{`@media(max-width:1023px){[data-track]{display:grid!important;grid-template-columns:1fr 1fr;width:auto!important;padding:0 5%!important}[data-track] article{width:auto!important;min-height:auto!important}section{padding-left:0!important;padding-right:0!important}}@media(max-width:620px){[data-track]{grid-template-columns:1fr!important}}`}</style>
 </section>
}