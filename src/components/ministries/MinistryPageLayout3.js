"use client"

import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
} from "@mui/material"

import MinistryHero from "./MinistryHero"

export default function MinistryPageLayout3({ ministry }) {
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

        <Box sx={{marginBottom: 10,}}>
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

        {/* WHAT YOU'LL EXPERIENCE */}

        <Box sx={{marginBottom: 10,}}>
          <Typography
            variant="h3"
            fontWeight="bold"
            mb={5}
          >
            What You'll Experience
          </Typography>

          <Grid container spacing={2}>
            {ministry.experiences.map((item, index) => (
              <Grid
                key={index}
                size={{
                  xs: 6,
                  md: 2,
                }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    py: 4,
                    px: 2,
                    height: "100%",
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    color: "whitesmoke", 
                    backgroundColor: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    transition: "all 0.3s ease",
                    borderColor: "#c49b63",
                    boxShadow:
                        "0 10px 30px rgba(196,155,99,0.2)",

                    "&:hover": {
                      transform: "translateY(-5px)",
                      borderColor: "#c49b63",
                      boxShadow:
                        "0 10px 30px rgba(196,155,99,0.2)",
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight={600}
                  >
                    {item}
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
