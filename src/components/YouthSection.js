"use client"

import React from "react"
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  Stack,
} from "@mui/material"

import GroupsIcon from "@mui/icons-material/Groups"
import MusicNoteIcon from "@mui/icons-material/MusicNote"
import SportsEsportsIcon from "@mui/icons-material/SportsEsports"
import FavoriteIcon from "@mui/icons-material/Favorite"

import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import {
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules"

export default function YouthSection() {
  const activities = [
    {
      icon: <GroupsIcon sx={{ fontSize: 45 }} />,
      title: "Small Groups",
      description:
        "Des groupes de jeunes pour grandir ensemble dans la foi.",
    },
    {
      icon: <MusicNoteIcon sx={{ fontSize: 45 }} />,
      title: "Worship",
      description:
        "Des moments puissants de louange et d’adoration.",
    },
    {
      icon: <SportsEsportsIcon sx={{ fontSize: 45 }} />,
      title: "Games & Fun",
      description:
        "Des jeux et activités pour connecter les jeunes.",
    },
    {
      icon: <FavoriteIcon sx={{ fontSize: 45 }} />,
      title: "Community",
      description:
        "Une famille spirituelle où chacun trouve sa place.",
    },
  ]

  const images = [
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1600&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1600&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1600&auto=format&fit=crop",
  ]

  return (
    <Box
      sx={{
        backgroundColor: "#0f172a",
        color: "white",
      }}
    >
      {/* HERO */}
      <Box
        sx={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* BACKGROUND SLIDER */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
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
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Box
                component="img"
                src={image}
                alt=""
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* DARK OVERLAY */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(15,23,42,0.55), rgba(15,23,42,0.95))",
            zIndex: 1,
          }}
        />

        {/* CONTENT */}
        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 2,
          }}
        >
          <Box
            sx={{
              maxWidth: "750px",
            }}
          >
            <Typography
              variant="overline"
              sx={{
                color: "#c49b63",
                letterSpacing: 4,
                fontWeight: "bold",
              }}
            >
              YOUTH MINISTRY
            </Typography>

            <Typography
              sx={{
                fontWeight: 800,
                lineHeight: 1.1,
                mb: 3,
                fontSize: {
                  xs: "3rem",
                  md: "5.5rem",
                },
              }}
            >
              Une génération passionnée par Jésus
            </Typography>

            <Typography
              sx={{
                color: "lightgray",
                lineHeight: 1.9,
                mb: 4,
                fontSize: {
                  xs: "1rem",
                  md: "1.2rem",
                },
              }}
            >
              Un espace moderne où les jeunes peuvent grandir
              spirituellement, construire des relations authentiques
              et vivre une expérience puissante avec Dieu.
            </Typography>

            <Stack
              direction={{
                xs: "column",
                sm: "row",
              }}
              spacing={2}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#c49b63",
                  color: "white",
                  px: 4,
                  py: 1.5,
                  borderRadius: "14px",
                  textTransform: "none",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  "&:hover": {
                    backgroundColor: "#ad8450",
                  },
                }}
              >
                Rejoindre le groupe
              </Button>

              <Button
                variant="outlined"
                sx={{
                  borderColor: "white",
                  color: "white",
                  px: 4,
                  py: 1.5,
                  borderRadius: "14px",
                  textTransform: "none",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  "&:hover": {
                    borderColor: "#c49b63",
                    backgroundColor: "rgba(255,255,255,0.08)",
                  },
                }}
              >
                Voir les événements
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* ACTIVITIES */}
      <Container
        maxWidth="lg"
        sx={{
          py: {
            xs: 8,
            md: 12,
          },
        }}
      >
        <Box textAlign="center" mb={8}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 2,
            }}
          >
            Ce que nous faisons
          </Typography>

          <Typography
            sx={{
              color: "lightgray",
              maxWidth: "700px",
              mx: "auto",
              lineHeight: 1.8,
            }}
          >
            Des rencontres dynamiques, des moments de foi et une
            communauté authentique pour la nouvelle génération.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {activities.map((activity, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: "100%",
                  backgroundColor: "#1e293b",
                  borderRadius: "24px",
                  border:
                    "1px solid rgba(255,255,255,0.06)",
                  transition: "0.4s",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    borderColor: "#c49b63",
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: "20px",
                      backgroundColor:
                        "rgba(196,155,99,0.15)",
                      color: "#c49b63",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 3,
                    }}
                  >
                    {activity.icon}
                  </Box>

                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                    }}
                  >
                    {activity.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "lightgray",
                      lineHeight: 1.8,
                    }}
                  >
                    {activity.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
