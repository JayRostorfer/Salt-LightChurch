"use client";

import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { gsap } from "gsap";
import {
Great_Vibes,
Lora,
} from "next/font/google";

const greatVibes = Great_Vibes({
subsets: ["latin"],
weight: "400",
display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export default function HeroSection3() {
useEffect(() => {
const ctx = gsap.context(() => {
const tl = gsap.timeline();

  tl.from(".hero-title", {
    opacity: 0,
    y: 35,
    duration: 1.3,
    ease: "power3.out",
  })
    .from(
      ".hero-church",
      {
        opacity: 0,
        y: 20,
        duration: 0.9,
        ease: "power2.out",
      },
      "-=0.7"
    )
    .from(
      ".hero-verse",
      {
        opacity: 0,
        y: 25,
        duration: 1.1,
        ease: "power2.out",
      },
      "-=0.4"
    )
    .from(
      ".hero-reference",
      {
        opacity: 0,
        y: 15,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.5"
    );
});

return () => ctx.revert();

}, []);

return (
<Box
component="section"
sx={{
minHeight: "100vh",
minHeight: "100svh",
width: "100%",
backgroundImage: "url('/images/home.jpg')",
backgroundSize: "cover",
backgroundPosition: "center",
backgroundRepeat: "no-repeat",
position: "relative",
display: "flex",
justifyContent: "center",
alignItems: "center",
textAlign: "center",
overflow: "hidden",
px: {
xs: 2,
sm: 4,
md: 8,
},
py: {
xs: 12,
md: 10,
},
}}
>
{/* Overlay aux couleurs de Salt and Light */}
<Box
sx={{
position: "absolute",
inset: 0,
backgroundColor:"rgba(0,0,0,0.6)",
zIndex: 1,
}}
/>

  {/* Contenu principal */}
  <Box
    sx={{
      position: "relative",
      zIndex: 2,
      width: "100%",
      maxWidth: "1000px",
      mx: "auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      color: "#ffffff",
    }}
  >
    {/* Nom de l'Église */}
    <Typography
      component="h1"
      className="hero-title"
      sx={{
        fontFamily: greatVibes.style.fontFamily,
        fontWeight: 400,
        fontSize: {
          xs: "3.5rem",
          sm: "4.8rem",
          md: "6.5rem",
        },
        lineHeight: 1.3,
        color: "#f8dfb5",
        mb: {
          xs: 1,
          md: 1.5,
        },
        textShadow: "0 4px 25px rgba(0,0,0,0.35)",
      }}
    >
      Salt and Light
    </Typography>

    {/* Appartenance confessionnelle */}
    <Typography
      component="p"
      className="hero-church"
      sx={{
        fontFamily: "inherit",
        fontSize: {
          xs: "0.68rem",
          sm: "0.8rem",
          md: "0.95rem",
        },
        fontWeight: 500,
        letterSpacing: {
          xs: "0.12em",
          sm: "0.2em",
          md: "0.28em",
        },
        lineHeight: 1.8,
        textTransform: "uppercase",
        color: "#c49b63",
        mb: {
          xs: 4,
          md: 5,
        },
      }}
    >
      Assemblée de Dieu anglophone
    </Typography>

    {/* Séparateur décoratif */}
    <Box
      aria-hidden="true"
      sx={{
        width: {
          xs: 55,
          md: 75,
        },
        height: "2px",
        background:
          "linear-gradient(90deg, transparent, #c49b63, transparent)",
        mb: {
          xs: 3,
          md: 4,
        },
      }}
    />

    {/* Verset biblique */}
<Typography
  component="p"
  className="hero-verse"
  sx={{
    fontFamily: lora.style.fontFamily,

    fontSize: {
      xs: "1.15rem",
      sm: "1.45rem",
      md: "1.9rem",
    },

    fontWeight: 400,
    fontStyle: "normal",

    lineHeight: {
      xs: 1.9,
      md: 1.8,
    },

    letterSpacing: "0.015em",

    color: "#ffffff",

    maxWidth: "750px",

    mx: "auto",

    textShadow: "0 2px 12px rgba(0,0,0,0.35)",
  }}
>
  “You are the salt of the earth…
  <Box component="span" sx={{ display: "block" }}>
    You are the light of the world.”
  </Box>
</Typography>

    {/* Référence biblique */}
 <Typography
  component="p"
  className="hero-reference"
  sx={{
    fontFamily: lora.style.fontFamily,

    fontSize: {
      xs: "0.8rem",
      md: "0.95rem",
    },

    fontWeight: 500,

    letterSpacing: "0.15em",

    color: "#c49b63",

    mt: 3,
  }}
>
  MATTHEW 5:13–14
</Typography>
  </Box>
</Box>

);
}
