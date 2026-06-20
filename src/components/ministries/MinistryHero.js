"use client"

import { Box, Container, Typography } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-fade"

export default function MinistryHero({ ministry }) {
  return (
    <Box
      sx={{
        position: "relative",
        height: "75vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Swiper
  modules={[Autoplay, EffectFade]}
  effect="fade"
  autoplay={{
    delay: 4000,
    disableOnInteraction: false,
  }}
  loop
  style={{
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    zIndex: 0,
  }}
>
  {ministry.gallery.map((image, index) => (
    <SwiperSlide key={index}>
      <Box
        component="img"
        src={image}
        alt={`${ministry.title} ${index + 1}`}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </SwiperSlide>
  ))}
</Swiper> 

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3))",
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
          variant="h1"
          fontWeight="bold"
          sx={{marginTop: "200px"}}
        >
          {ministry.title}
        </Typography>

        <Typography
          variant="h5"
          sx={{
            opacity: 0.9,
          }}
        >
          {ministry.subtitle}
        </Typography>
      </Container>
    </Box>
  )
}
