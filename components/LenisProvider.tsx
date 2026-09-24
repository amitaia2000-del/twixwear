"use client";
import {ReactNode,useEffect} from "react";
import Lenis from "lenis";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LenisProvider({children}:{children:ReactNode}){
  useEffect(()=>{
    const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root=document.documentElement;

    const setTheme=(deep:boolean)=>{
      root.style.setProperty("--page-bg",deep?"var(--surface-deep)":"var(--surface)");
      root.style.setProperty("--page-ink",deep?"var(--surface)":"var(--ink)");
    };

    setTheme(false);

    if(reduced){
      ScrollTrigger.defaults({scrub:false});
      return()=>setTheme(false);
    }

    const lenis=new Lenis({lerp:.09});
    const raf=(time:number)=>{
      lenis.raf(time);
      ScrollTrigger.update();
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const mechanism=document.querySelector<HTMLElement>("main > section:nth-of-type(4)");
    const proof=document.querySelector<HTMLElement>("main > section:nth-of-type(5)");

    const bgTrigger=mechanism?ScrollTrigger.create({
      trigger:mechanism,
      start:"top 60%",
      end:"bottom 40%",
      onToggle:({isActive})=>gsap.to(root,{
        "--page-bg":isActive?"var(--surface-deep)":"var(--surface)",
        "--page-ink":isActive?"var(--surface)":"var(--ink)",
        duration:.6,
        ease:"power2.inOut",
        overwrite:"auto"
      })
    }):undefined;

    const refresh=()=>ScrollTrigger.refresh();
    if(document.fonts?.ready) document.fonts.ready.then(refresh); else refresh();

    const onResize=()=>ScrollTrigger.refresh();
    window.addEventListener("resize",onResize);

    return()=>{
      bgTrigger?.kill();
      window.removeEventListener("resize",onResize);
      gsap.ticker.remove(raf);
      lenis.destroy();
      setTheme(false);
    };
  },[]);

  return children;
}