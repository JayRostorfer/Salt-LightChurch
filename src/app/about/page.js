"use client";

import AboutHero from "./AboutHero"
import WhatWeValue from "./Values"

import { useLayoutEffect, useRef } from "react";
import { Box, Typography, Grid, useMediaQuery } from "@mui/material";
import aboutData from '@/data/aboutus.json';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



export default function AnimatedCards() {
const sectionRef = useRef(null);

const isDesktop = useMediaQuery("(min-width: 900px)");

useLayoutEffect(() => {
const ctx = gsap.context(() => {
const cards = gsap.utils.toArray(".animated-card");

  if (isDesktop) {
    // DESKTOP ANIMATION
    gsap.fromTo(
      cards,
      {
        scale: 0.8,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
        stagger: {
          each: 0.08,
          from: "start",
        },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
  } else {
    // MOBILE ANIMATION
    gsap.set(cards, {
      autoAlpha: 0,
      y: 35,
    });

    cards.forEach((card, index) => {
      gsap.to(card, {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: (index % 2) * 0.06,
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          once: true,
        },
      });
    });
  }
}, sectionRef);

return () => ctx.revert();

}, [isDesktop]);

return (
  <>
<Box
ref={sectionRef}
sx={{
minHeight: "100vh",
px: { xs: 2, md: 4 },
py: 12,
background:
"linear-gradient(180deg, #020617 0%, #0f172a 50%, #111827 100%)",
}}
>
<Box
sx={{
maxWidth: 1200,
mx: "auto",
}}
>
<AboutHero />

    

    <Grid container spacing={4}>
      {aboutData.map((valeur) => (
        <Grid
          key={valeur.number}
          size={{ xs: 12, sm: 6, md: 4 }}
        >
          <Box
            className="animated-card"
            sx={{
              position: "relative",
              overflow: "hidden",
              height: "100%",
              minHeight: 280,
              p: 4,
              borderRadius: 3,
              background:
                "linear-gradient(145deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.95))",
              border: "1px solid rgba(196, 155, 99, 0.2)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
              transition:
                "border-color 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                borderColor: "#c49b63",
                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            
            <Typography
              aria-hidden="true"
              sx={{
                position: "absolute",
                right: { xs: 15, md: 25 },
                top: { xs: 15, md: 25 },
                fontSize: {
                  xs: "5rem",
                  md: "10rem",
                },
                fontWeight: 800,
                lineHeight: 1,
                color: "rgba(196,155,99,0.07)",
                pointerEvents: "none",
                userSelect: "none",
              }}
            >
              {valeur.number}
            </Typography>

            
            <Box
              sx={{
                position: "relative",
                mt: 4,
                width: 65,
                height: 3,
                bgcolor: "#c49b63",
                borderRadius: 5,
              }}
            />

          
            <Typography
              variant="h5"
              component="h3"
              fontWeight="bold"
              sx={{
                position: "relative",
                color: "whitesmoke",
                mt: 2,
                mb: 2,
              }}
            >
              {valeur.title}
            </Typography>

            
            <Typography
              variant="body1"
              sx={{
                position: "relative",
                color: "#cbd5e1",
                lineHeight: 1.9,
              }}
            >
              {valeur.description}
            </Typography>

            
          </Box>
        </Grid>
      ))}
    </Grid>
  </Box>
</Box>

<WhatWeValue />
              </>

);
}
