"use client"

import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
} from "@mui/material"

import MinistryHero from "./MinistryHero"
import ImageGallery from "./ImageGallery"

export default function MinistryPageLayout({ ministry }) {
  return (
    <Box>
      <MinistryHero ministry={ministry} />

      <Container
        maxWidth="lg"
        sx={{
          py: 10,
        }}
      >
        {/* ABOUT */}

        <Box mb={10}>
          <Typography
            variant="h3"
            fontWeight="bold"
            mb={4}
          >
            About {ministry.title}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              lineHeight: 2,
              color: "white",
            }}
          >
            {ministry.description}
          </Typography>
        </Box>

        {/* ACTIVITIES */}

        <Box mb={10}>
          <Typography
            variant="h3"
            fontWeight="bold"
            mb={5}
          >
            Activities
          </Typography>

          <Grid container spacing={3}>
            {ministry.activities.map((activity, index) => (
              <Grid
                item
                xs={12}
                md={4}
                key={index}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: "20px",
                    border: "1px solid #eee",
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                  >
                    {activity}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* GALLERY */}

        <Box>
          <Typography
            variant="h3"
            fontWeight="bold"
            mb={5}
          >
            Gallery
          </Typography>

          <ImageGallery images={ministry.gallery} />
        </Box>
      </Container>
    </Box>
  )
}
