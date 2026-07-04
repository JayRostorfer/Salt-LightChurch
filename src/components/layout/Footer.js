"use client"

import React from "react"
import { Box, Typography, IconButton, Stack } from "@mui/material"
import { FaFacebook, FaYoutube, FaWhatsapp } from "react-icons/fa"

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(180deg, #020617 0%, #0f172a 50%, #111827 100%)",
        color: "lightgrey",
        padding: "2rem 1rem",
        textAlign: "center",
		height: "250px",
      }}
    >
      <Typography variant="h6" gutterBottom>
        Salt and Light Church 
      </Typography>

      <Stack 
          direction="row"
  spacing={2}
  sx={{
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    mb: 2,
  }}
	  >
        
        <IconButton
	  aria-label="Facebook"
  component="a"
  href="https://www.facebook.com/SALTnLIGHTChurchMadagascar"
        >
          <FaFacebook size={30} color="whitesmoke" />
        </IconButton>

        
        <IconButton
          aria-label="YouTube"
          sx={{ zIndex: 1 }}
          component="a"
          href=""
          target="_blank"
          rel="noopener"
        >
          <FaYoutube size={30} color="whitesmoke" />
        </IconButton>


        <IconButton
          aria-label="WhatsApp"
  component="a"
  href="whatsapp://send?phone=261343957978&text=Bonjour"
        >
          <FaWhatsapp size={30} color="whitesmoke" />
        </IconButton>
      </Stack>

      <Typography variant="body1" color="whitesmoke">
        &copy; {new Date().getFullYear()} Salt&Light.
      </Typography>
    </Box>
  )
}

