"use client";
// HERO
// 1. איפה הקורא בראש שלו כשהוא מגיע לכאן? הוא בודק אם TWIXWEAR הוא מותג עם זהות.
// 2. מה ה"כן אבל" שרץ לו עכשיו? "עוד אתר אופנה עם תמונה יפה."
// 3. מה הסקשן עושה עם זה? המוצר עצמו הופך לרגע הוויזואלי הזכיר ביותר.
// 4. מה הוא מרגיש ביציאה? סקרנות ורצון לראות את הקולקציה.
// 5. מה הדבר היחיד שהוא יזכור? הבגד שנפתח ממסך מלא לאובייקט מדויק.
// אתה עורך רק את הקובץ של הסקשן הזה ואת המפתח שלו ב-content.ts. אסור לגעת ב-globals.css, ב-tailwind config, ב-layout.tsx וב-package.json. חסר לך משהו — תגיד לי, אל תוסיף.

import {useEffect,useRef} from "react";
import {content} from "@/lib/content";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Hero(){
  const heroRef=useRef<HTMLElement>(null);
  useEffect(()=>{
    const root=heroRef.current;if(!root)return;
    const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx=gsap.context(()=>{
      const lines=gsap.utils.toArray<HTMLElement>("[data-hero-line]");
      const media=root.querySelector<HTMLElement>("[data-hero-media]");
      gsap.fromTo(lines,{yPercent:110},{yPercent:0,duration:.9,stagger:.08,ease:"expo.out",overwrite:"auto"});
      if(!media)return;
      if(reduced){
        gsap.fromTo(media,{opacity:0,y:20},{opacity:1,y:0,duration:.4,ease:"power2.out"});
        return;
      }
      gsap.fromTo(media,{clipPath:"inset(0% 0% 0% 0% round 0px)"},{clipPath:"inset(6% 10% 6% 10% round 28px)",ease:"none",scrollTrigger:{trigger:root,start:"top top",end:"+=80%",scrub:1,pin:true}});
      gsap.to(media,{y:-40,ease:"none",scrollTrigger:{trigger:root,start:"top top",end:"+=80%",scrub:1}});
    },root);
    return()=>ctx.revert();
  },[]);
  return <section ref={heroRef} data-section="hero" style={{minHeight:"100svh",position:"relative",display:"grid",gridTemplateColumns:"minmax(0,1fr) minmax(320px,1.1fr)",gap:48,alignItems:"center",padding:"8vw 5%",overflow:"hidden"}}>
    <div>
      <p style={{fontSize:14,color:"var(--ink-soft)",margin:0}}>TWIXWEAR / {content.vibe.join(" · ")}</p>
      <h1 style={{margin:"24px 0 30px",maxWidth:"9ch"}}>
        <span style={{display:"block",overflow:"hidden"}}><span data-hero-line style={{display:"block"}}>ללבוש</span></span>
        <span style={{display:"block",overflow:"hidden"}}><span data-hero-line style={{display:"block"}}>עם זהות</span></span>
      </h1>
      <p style={{fontSize:"var(--lead)",color:"var(--ink-soft)",maxWidth:"34ch"}}>{content.offer}</p>
      <a href={content.cta.href} style={{display:"inline-flex",alignItems:"center",justifyContent:"center",background:"var(--ink)",color:"var(--surface)",padding:"13px 20px",borderRadius:10,marginTop:18,textDecoration:"none"}}>{content.cta.label}</a>
      <p style={{fontSize:"var(--caption)",color:"var(--ink-soft)",marginTop:18}}>קולקציה ראשונה של TWIXWEAR — פריטים שנבנו יחד.</p>
    </div>
    <div data-hero-media style={{minHeight:"72vh",background:"var(--surface-deep)",borderRadius:0,position:"relative",overflow:"hidden",display:"grid",placeItems:"center"}}>
      <img src="/images/hero.svg" alt="placeholder לתמונת קולקציית TWIXWEAR" style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}} />
      <div style={{position:"absolute",inset:"auto 24px 24px auto",padding:"10px 12px",background:"var(--surface)",color:"var(--ink)",borderRadius:10,fontSize:14}}>TWIXWEAR</div>
    </div>
    <style jsx>{`
      @media(max-width:1024px){section[data-section="hero"]{grid-template-columns:1fr;min-height:auto;padding-top:88px;padding-bottom:88px}section[data-section="hero"] [data-hero-media]{min-height:68vh}}
      @media(max-width:640px){section[data-section="hero"] [data-hero-media]{min-height:55vh}section[data-section="hero"] h1{font-size:var(--display)}}
      @media(prefers-reduced-motion:reduce){section[data-section="hero"] [data-hero-media]{transform:none!important}}
    `}</style>
  </section>
}