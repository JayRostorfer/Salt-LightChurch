"use client"

import React from "react"
import {
  Box,
  Typography,
  Container,
  Button,
  Stack,
} from "@mui/material"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function MinistrySlider5() {
  const ministries = [
    {
      title: "YOUTH MINISTRY",
      subtitle: "Une génération passionnée par Jésus",
      description:
        "Des rencontres dynamiques, des temps de louange et une communauté où les jeunes peuvent grandir dans leur foi.",

      images: [
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop",
      ],
    },

    {
      title: "KIDS MINISTRY",
      subtitle: "Grandir avec Dieu dès le plus jeune âge",
      description:
        "Un environnement amusant, sécurisé et centré sur la Parole de Dieu où les enfants peuvent découvrir Jésus et grandir dans la foi.",

      images: [
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=1600&auto=format&fit=crop",
      ],
    },

    {
      title: "AROMA WOMEN",
      subtitle: "Femmes de foi et d'influence",
      description:
        "Une communauté de femmes qui grandissent ensemble dans la foi, la prière et l'encouragement mutuel.",

      images: [
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1600&auto=format&fit=crop",
      ],
    },
  ]

  return (
    <Box>
      {ministries.map((ministry, index) => (
        <React.Fragment key={index}>
          {/* Titre du groupe */}
          <Box
            sx={{
              backgroundColor: "#0f172a",
              py: 4,
              textAlign: "center",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: "white",
                fontWeight: 800,
                letterSpacing: 2,
                textTransform: "uppercase",
                fontSize: {
                  xs: "2rem",
                  md: "3rem",
                },
              }}
            >
              {ministry.title}
            </Typography>
          </Box>

          <Box
            sx={{
              position: "relative",
              minHeight: "75vh",
              display: "flex",
              alignItems: "center",
              overflow: "hidden",
              mb: {
                xs: 6,
                md: 10,
              },
            }}
          >
            {/* Background Slider */}
            <Swiper
              modules={[Autoplay]}
              
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
              }}
            >
              {ministry.images.map((image, imageIndex) => (
                <SwiperSlide key={imageIndex}>
                  <Box
                    component="img"
                    src={image}
                    alt={`${ministry.title} ${imageIndex + 1}`}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Overlay */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom, rgba(15,23,42,0.45), rgba(15,23,42,0.92))",
                zIndex: 1,
              }}
            />

            {/* Content */}
            <Container
              maxWidth="lg"
              sx={{
                position: "relative",
                zIndex: 2,
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <Box
                sx={{
                  maxWidth: "700px",
                  textAlign: "left",
                      
                }}
              >
                <Typography
                  variant="overline"
                  sx={{
                    color: "#c49b63",
                    letterSpacing: 4,
                    fontWeight: 700,
                  }}
                >
                  {ministry.title}
                </Typography>

                <Typography
                  sx={{
                    color: "white",
                    fontWeight: 800,
                    lineHeight: 1.1,
                    mb: 3,
                    fontSize: {
                      xs: "3rem",
                      md: "5rem",
                    },
                  }}
                >
                  {ministry.subtitle}
                </Typography>

                <Typography
                  sx={{
                    color: "lightgray",
                    lineHeight: 1.9,
                    mb: 4,
                    fontSize: {
                      xs: "1rem",
                      md: "1.15rem",
                    },
                  }}
                >
                  {ministry.description}
                </Typography>

                <Stack
                  direction={{
                    xs: "column",
                    sm: "row",
                  }}
                  spacing={2}
                  justifyContent={
                    index % 2 === 0
                      ? "flex-start"
                      : "flex-end"
                  }
                >
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#c49b63",
                      color: "white",
                      px: 4,
                      py: 1.5,
                      borderRadius: "12px",
                      textTransform: "none",
                      fontWeight: 700,
                      "&:hover": {
                        backgroundColor: "#ad8450",
                      },
                    }}
                  >
                    En savoir plus
                  </Button>

                  <Button
                    variant="outlined"
                    sx={{
                      borderColor: "white",
                      color: "white",
                      px: 4,
                      py: 1.5,
                      borderRadius: "12px",
                      textTransform: "none",
                      "&:hover": {
                        borderColor: "#c49b63",
                        backgroundColor:
                          "rgba(255,255,255,0.08)",
                      },
                    }}
                  >
                    Nous contacter
                  </Button>
                </Stack>
              </Box>
            </Container>
          </Box>
        </React.Fragment>
      ))}
    </Box>
  )
}
