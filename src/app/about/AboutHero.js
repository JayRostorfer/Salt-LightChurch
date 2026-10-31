"use client"

import { Box, Container, Typography } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade } from "swiper/modules"
import { Great_Vibes, Allura, Alex_Brush } from "next/font/google";
import "swiper/css"
import "swiper/css/effect-fade"

const gv = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});


export default function AboutHero() {
  return (
    <Box
      sx={{
        position: "relative",
        height: {
  			xs: "50vh",
  			md: "75vh",
		},
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, #0f172a, #c49b63)",
	  zIndex: 1,
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          color: "white",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{
			  fontFamily: gv.style.fontFamily,
			  marginTop: {
				  xs: "50px",
				  md: "200px",
			  },
				  
		  }}
        >
          What do we believe? 
        </Typography>

        
      </Container>
    </Box>
  )
}
