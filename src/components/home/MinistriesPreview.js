"use client"

import { Box, Container, Grid, Typography } from "@mui/material"
import ministries from "@/data/ministries"
import MinistryCard from "./MinistryCard"

export default function MinistriesPreview2() {
  return (
    <Box
      sx={{
        py: 12,
        textAlign: "center",
        background:
            "linear-gradient(135deg, #173447, #9A7850)",
      }}
    >
      <Container
  maxWidth="xl"
  disableGutters
  sx={{
    pl: {
      xs: 2,
      md: 3,
    },
    pr: {
      xs: 0,
      md: 3,
    },
  }}
>
        {/* Titre */}
        <Typography
          variant="h3"
          textAlign="center"
              sx={{
                color: "whitesmoke", 
                fontWeight: 700,
                mb: 3,
                mt: 1,
              }}
        >
          Our Groups
        </Typography>

        {/* Description */}
        <Typography
          textAlign="center"
          sx={{
            maxWidth: 700,
            mx: "auto",
            mb: 8,
            color: "whitesmoke",
          }}
        >
          Discover communities designed to help every generation grow in faith,
          relationships, and purpose.
        </Typography>

        {/* ========================================= */}
        {/* MOBILE : CARTES HORIZONTALES SCROLLABLES */}
        {/* ========================================= */}
        <Box
          sx={{
            display: {
              xs: "flex",
              md: "none",
            },

            gap: 2,

            overflowX: "auto",
            overflowY: "hidden",

            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",

            
            px: 1,
            pb: 2,

            
          }}
        >
          {ministries.map((ministry) => (
            <Box
              key={ministry.slug}
              sx={{
                flex: "0 0 85%",
                minWidth: 0,
                scrollSnapAlign: "start",
              }}
            >
              <MinistryCard ministry={ministry} />
            </Box>
          ))}
        </Box>

        {/* ========================================= */}
        {/* DESKTOP LAYOUT */}
        {/* ========================================= */}
        <Box
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
          }}
        >
          <Grid container spacing={4}>
            {/* Les 3 premiers ministries */}
            {ministries.slice(0, 3).map((ministry) => (
              <Grid
                key={ministry.slug}
                size={{ xs: 12, md: 4 }}
              >
                <MinistryCard ministry={ministry} />
              </Grid>
            ))}

            {/* Espace central */}
            <Grid size={{ xs: 0, md: 2 }} />

            {/* Les ministries suivants */}
            {ministries.slice(3).map((ministry) => (
              <Grid
                key={ministry.slug}
                size={{ xs: 12, md: 4 }}
              >
                <MinistryCard ministry={ministry} />
              </Grid>
            ))}

            {/* Espace final */}
            <Grid size={{ xs: 0, md: 2 }} />
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}
