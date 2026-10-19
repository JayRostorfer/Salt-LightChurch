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

        {/* Bible Verse */}
        <Typography
          className="hero-verse"
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

        {/* Buttons */}
        <Stack
          className="hero-buttons"
          direction={{
            xs: "column",
            sm: "row",
          }}
          spacing={2}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Join Us */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#c49b63",
              px: 4,
              py: 1.5,
              borderRadius: "40px",
              minWidth: "150px",
              transition: "all 0.3s ease",

              "&:hover": {
                backgroundColor: "#b38a52",
                transform: "translateY(-3px)",
                boxShadow: "0 8px 20px rgba(196, 155, 99, 0.35)",
              },
            }}
          >
            Join Us
          </Button>

          {/* Explore Groups */}
          <Button
            variant="outlined"
            sx={{
              borderColor: "white",
              color: "white",
              px: 4,
              py: 1.5,
              borderRadius: "40px",
              minWidth: "170px",
              transition: "all 0.3s ease",

              "&:hover": {
                borderColor: "#c49b63",
                color: "#c49b63",
                backgroundColor: "rgba(196, 155, 99, 0.08)",
                transform: "translateY(-3px)",
              },
            }}
          >
            Explore Groups
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}
