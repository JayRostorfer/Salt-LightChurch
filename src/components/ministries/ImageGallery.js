"use client"

import { Box, Grid } from "@mui/material"

export default function ImageGallery({ images }) {
  return (
    <Grid container spacing={3}>
      {images.map((image, index) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          key={index}
        >
          <Box
            sx={{
              overflow: "hidden",
              borderRadius: "20px",

              "&:hover img": {
                transform: "scale(1.08)",
              },
            }}
          >
            <Box
              component="img"
              src={image}
              alt="gallery"
              sx={{
                width: "100%",
                height: 280,
                objectFit: "cover",
                transition: "0.5s",
              }}
            />
          </Box>
        </Grid>
      ))}
    </Grid>
  )
}