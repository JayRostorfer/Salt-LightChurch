"use client"

import React, { useEffect } from "react"
import { Box, Typography, Button, Stack } from "@mui/material"
import { gsap } from "gsap"
import { Great_Vibes, Allura } from "next/font/google"

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
})

const allura = Allura({
  subsets: ["latin"],
  weight: "400",
})

export default function HeroSection3() {
  useEffect(() => {
    const tl = gsap.timeline()

    tl.from(".hero-title", {
      opacity: 0,
      y: 40,
      duration: 1.4,
      ease: "back.out",
    })
      .from(
        ".hero-verse",
        {
          opacity: 0,
          y: 30,
          duration: 1.2,
          ease: "back.out",
        },
        "-=0.6"
      )
      .from(
        ".hero-buttons",
        {
          opacity: 0,
          y: 25,
          duration: 1,
          ease: "back.out",
        },
        "-=0.4"
      )

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: "url('/images/home.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {/* Dark Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
      />

      {/* Hero Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          color: "white",
          px: {
            xs: 3,
            md: 10,
          },
        }}
      >
        {/* Title */}
        <Typography
          className="hero-title"
          variant="h2"
          sx={{
            fontFamily: greatVibes.style.fontFamily,
            fontWeight: "bold",
            mb: 3,
            fontSize: {
              xs: "3rem",
              md: "5rem",
            },
          }}
        >
          Salt and Light
        </Typography>

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

        {/* Bible Verse */}
        <Typography
          className="hero-verse"
          variant="h6" 
          sx={{
            fontFamily: allura.style.fontFamily,
            fontSize: {
              xs: "1.5rem",
              md: "1.7rem",
            },
            lineHeight: 1.8,
            mb: 4,
          }}
        >
          « You are the salt of the earth… You are the light of the world »
          — Matthew 5:13-14
        </Typography>

        
      </Box>
    </Box>
  )
}
