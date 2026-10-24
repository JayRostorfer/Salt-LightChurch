import { Box, Container, Grid, Typography } from "@mui/material";
import ContactForm5 from "@/components/home/ContactForm5";

import dynamic from "next/dynamic";

const ChurchMap = dynamic(
  () => import("@/components/home/ChurchMap"),
  {
    ssr: false,
  }
);

export default function ContactSection() {
  return (
    <Box
      component="section"
      id="contact"
      sx={{
        position: "relative",
        overflow: "hidden",

        background:
          "linear-gradient(135deg, #173447 0%, #234457 50%, #9A7850 100%)",

        py: {
          xs: 9,
          sm: 12,
          md: 15,
        },
      }}
    >
      <Container maxWidth="xl">

        {/* INTRODUCTION */}
        <Box
          sx={{
            textAlign: "center",
            maxWidth: 800,
            mx: "auto",

            mb: {
              xs: 8,
              md: 12,
            },
          }}
        >
          <Typography
            sx={{
              color: "#D6B88D",
              fontSize: {
                xs: "0.75rem",
                md: "0.85rem",
              },
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
              mb: 2,
            }}
          >
            WE'D LOVE TO HEAR FROM YOU
          </Typography>

          <Typography
            component="h2"
            sx={{
              color: "#fff",
              fontWeight: 800,
              letterSpacing: "-2px",

              fontSize: {
                xs: "2.7rem",
                sm: "3.8rem",
                md: "5rem",
              },

              lineHeight: 1.1,
              mb: 3,
            }}
          >
            Let's Get{" "}
            <Box
              component="span"
              sx={{
                color: "#D6B88D",
              }}
            >
              in Touch.
            </Box>
          </Typography>

          <Typography
            sx={{
              color: "rgba(255,255,255,0.7)",

              fontSize: {
                xs: "1rem",
                md: "1.15rem",
              },

              lineHeight: 1.9,
            }}
          >
            We'd love to hear from you.
          </Typography>
        </Box>

        {/* CONTACT CONTENT */}
        <Grid
          container
          spacing={{
            xs: 8,
            md: 5,
            lg: 8,
          }}
          alignItems="start"
        >
          {/* FORM */}
          <Grid size={{ xs: 12, md: 6 }}>
            <ContactForm5 />
          </Grid>

          {/* MAP */}
          <Grid size={{ xs: 12, md: 6 }}>
            <ChurchMap />
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
}
