"use client" 

import { useEffect } from "react";

import HeroSection from "@/components/home/HeroSection"
import MinistriesPreview from "@/components/home/MinistriesPreview"

import TeachingsPage from "@/components/home/TeachingsPage";
import AboutUs from "@/components/home/AboutUs";
import Founder from "@/components/home/Founder"
import CTASection from "@/components/home/CTASection"


export default function HomePage() {
  useEffect(() => {
    const hash = window.location.hash;

    if (hash === "#get-in-touch") {
      setTimeout(() => {
        document
          .getElementById("get-in-touch")
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      }, 100);
    }
  }, []);
  
  return (
    <>
      <HeroSection />
      <Founder />
      <MinistriesPreview />
      <CTASection />
      
    
    
      
    </>
  )
}
