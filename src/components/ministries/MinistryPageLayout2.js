"use client"

import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
} from "@mui/material"

import MinistryHero from "./MinistryHero"

export default function MinistryPageLayout2({ ministry }) {
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
                size={{ xs: 12, md: 4 }}
                key={index}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: "20px",
                    border: "1px solid #eee",
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    mb={2}
                  >
                    {activity.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.8,
                    }}
                  >
                    {activity.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}
