"use client";

import images from "@/data/ImageSwiperData";
import { Box, Container, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Poppins } from "next/font/google";

import "swiper/css";
import "swiper/css/effect-fade";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export default function MinistryHero() {
  return (
    <Box
      sx={{
        position: "relative",
        height: {
          xs: "50vh",
          md: "75vh",
        },
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Swiper */}
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
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <Box
              component="img"
              src={image.src}
              alt={image.alt}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Dark Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.25))",
          zIndex: 1,
        }}
      />

      {/* Watermark Title */}
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          color: "white",
          pb: {
            xs: 5,
            md: 8,
          },
        }}
      >
        <Typography
          variant="h1"
          className={poppins.className}
          sx={{
            textAlign: "center",
            textTransform: "uppercase",
            fontWeight: 700,
            whiteSpace: "nowrap",
            opacity: 0.18,
            fontSize: {
              xs: "2.8rem",
              sm: "4.5rem",
              md: "7rem",
              lg: "9rem",
            },
            letterSpacing: {
              xs: "2px",
              md: "8px",
            },
            lineHeight: 1,
            userSelect: "none",
          }}
        >
          Salt and Light
        </Typography>
      </Container>
    </Box>
  );
}
