"use client";
import {ReactNode,useEffect} from "react";
import Lenis from "lenis";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function LenisProvider({children}:{children:ReactNode}){useEffect(()=>{const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(reduced){ScrollTrigger.defaults({scrub:false});return;}const lenis=new Lenis({lerp:.09});const raf=(time:number)=>{lenis.raf(time);ScrollTrigger.update();};gsap.ticker.add(raf);gsap.ticker.lagSmoothing(0);const onReady=()=>ScrollTrigger.refresh();document.fonts?.ready.then(onReady);return()=>{gsap.ticker.remove(raf);lenis.destroy();};},[]);return children}