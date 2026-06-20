import React from "react"
import { Box, Typography, Grid } from "@mui/material"

export default function AboutPreview() {
  return (
    <Box
      sx={{
        py: 12,
        px: {
          xs: 3,
          md: 10
        }
      }}
    >
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              mb: 3
            }}
          >
            About Our Church
          </Typography>

          <Typography
            sx={{
              lineHeight: 2,
              color: "#555"
            }}
          >
            We are a community passionate about worship, faith and helping people grow spiritually.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/images/about.jpg"
            alt="about"
            sx={{
              width: "100%",
              borderRadius: "20px"
            }}
          />
        </Grid>
      </Grid>
    </Box>
  )
}
