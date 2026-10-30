"use client";

import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
} from "@mui/material";

import Link from "next/link";

export default function LatestService() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",

        background:
          "linear-gradient(-115deg, #9A7850 0%, #173447 100%)",

        py: {
          xs: 10,
          sm: 12,
          md: 16,
        },
      }}
    >
      {/* DECORATIVE GLOW */}

      <Box
        sx={{
          position: "absolute",

          width: {
            xs: 300,
            md: 550,
          },

          height: {
            xs: 300,
            md: 550,
          },

          borderRadius: "50%",

          background: "rgba(196,155,99,0.12)",

          filter: "blur(110px)",

          top: "-30%",
          right: "-10%",

          pointerEvents: "none",
        }}
      />

      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <Grid
          container
          spacing={{
            xs: 7,
            md: 6,
            lg: 10,
          }}
          alignItems="center"
        >
          {/* LEFT CONTENT */}

          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                maxWidth: 520,

                textAlign: {
                  xs: "center",
                  md: "left",
                },

                mx: {
                  xs: "auto",
                  md: 0,
                },
              }}
            >
              {/* SMALL LABEL */}

              <Typography
                sx={{
                  color: "#f8dfb5",

                  fontWeight: 700,

                  letterSpacing: "3px",

                  textTransform: "uppercase",

                  fontSize: {
                    xs: "0.7rem",
                    md: "0.8rem",
                  },

                  mb: 2,
                }}
              >
                LATEST SERVICE
              </Typography>

              {/* MAIN TITLE */}

              <Typography
                component="h2"
                sx={{
                  color: "#fff",

                  fontWeight: 800,

                  lineHeight: 1.1,

                  letterSpacing: "-0.035em",

                  fontSize: {
                    xs: "2.5rem",
                    sm: "3.2rem",
                    md: "3.5rem",
                    lg: "4.2rem",
                  },

                  mb: 3,
                }}
              >
                A heart of
                <Box
                  component="span"
                  sx={{
                    display: "block",
                    color: "#f8dfb5",
                  }}
                >
                  Worship,
                </Box>
                A word to live by. 
              </Typography>

              {/* DESCRIPTION */}

              <Typography
                sx={{
                  color: "rgba(255,255,255,0.8)",

                  lineHeight: 1.9,

                  fontSize: {
                    xs: "1rem",
                    md: "1.1rem",
                  },

                  mb: 4,

                  maxWidth: 480,

                  mx: {
                    xs: "auto",
                    md: 0,
                  },
                }}
              >
                Watch our latest service and receive the message that God has for you. 
              </Typography>

              {/* BUTTON */}

              <Button
                component={Link}
                href=""
                variant="contained"
                sx={{
                  background: "#fff",

                  color: "#173447",

                  px: {
                    xs: 4,
                    md: 5,
                  },

                  py: 1.7,

                  borderRadius: "50px",

                  textTransform: "none",

                  fontWeight: 700,

                  fontSize: "0.95rem",

                  boxShadow:
                    "0 10px 30px rgba(0,0,0,0.15)",

                  transition: "all 0.3s ease",

                  "&:hover": {
                    background: "#f8dfb5",

                    transform: "translateY(-3px)",

                    boxShadow:
                      "0 15px 35px rgba(0,0,0,0.2)",
                  },
                }}
              >
                Watch More Services
              </Button>
            </Box>
          </Grid>

          {/* RIGHT VIDEO */}

          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                position: "relative",

                width: "100%",

                maxWidth: 900,

                mx: "auto",
              }}
            >
              {/* DECORATIVE BORDER */}

              <Box
                sx={{
                  position: "absolute",

                  top: {
                    xs: -10,
                    md: -18,
                  },

                  left: {
                    xs: -10,
                    md: -18,
                  },

                  right: {
                    xs: -10,
                    md: -18,
                  },

                  bottom: {
                    xs: 10,
                    md: 18,
                  },

                  border:
                    "1px solid rgba(248,223,181,0.45)",

                  borderRadius: {
                    xs: "20px",
                    md: "30px",
                  },

                  pointerEvents: "none",
                }}
              />

              {/* VIDEO */}

              <Box
                sx={{
                  position: "relative",

                  width: "100%",

                  aspectRatio: "16 / 9",

                  borderRadius: {
                    xs: "14px",
                    md: "24px",
                  },

                  overflow: "hidden",

                  bgcolor: "#000",

                  boxShadow:
                    "0 25px 70px rgba(0,0,0,0.3)",

                  zIndex: 1,
                }}
              >
                <Box
                  component="iframe"
                  src="https://www.youtube.com/embed/nvosN9tIprU"
                  title="Latest Worship Service"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  sx={{
                    width: "100%",
                    height: "100%",
                    border: 0,
                    display: "block",
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
