"use client"

import React from "react"
import { Box, Typography, Button, Stack } from "@mui/material"
import { motion } from "framer-motion"

export default function HeroSection() {
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
        textAlign: 'center',
        alignItems: "center"
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.6)"
        }}
      />

      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        sx={{
          position: "relative",
          zIndex: 2,
          color: "white",
          px: {
            xs: 3,
            md: 10
          },
         
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            mb: 3,
            fontSize: {
              xs: "3rem",
              md: "5rem"
            }
          }}
        >
          Salt & Light Church
        </Typography>

        <Typography
          sx={{
            fontSize: "1.2rem",
            lineHeight: 1.8,
            mb: 4
          }}
        >
          « You are the salt of the earth… You are the light of the world  » — Matthew 5:13-14
        </Typography>

        <Stack direction="row" spacing={2}
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#c49b63",
              px: 4,
              py: 1.5,
              borderRadius: "40px"
            }}
          >
            Join Us
          </Button>

          <Button
            variant="outlined"
            sx={{
              borderColor: "white",
              color: "white",
              px: 4,
              py: 1.5,
              borderRadius: "40px"
            }}
          >
            Explore Groups
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}
