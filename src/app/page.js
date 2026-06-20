"use client" 

import { useEffect } from "react";

import HeroSection from "@/components/home/HeroSection"
import MinistriesPreview from "@/components/home/MinistriesPreview"
import CTASection from "@/components/home/CTASection"
import ContactForm5 from "@/components/home/ContactForm5"
import TeachingsPage from "@/components/home/TeachingsPage";
import AboutUs from "@/components/home/AboutUs";
import Founder from "@/components/home/Founder"

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
      <AboutUs />
      <ContactForm5 />
    
    
      
    </>
  )
}
