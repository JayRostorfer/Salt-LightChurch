"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
} from "@mui/material";

import MinistryHero from "./MinistryHero";
import CTASection from "@/components/home/CTASection"

// icons
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import GroupsIcon from "@mui/icons-material/Groups";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function MinistryPageLayout4({ ministry }) {
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
        <Box sx={{ mb: 10 }}>
          <Typography variant="h3" fontWeight="bold" mb={4}>
          {ministry.title}
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

      
        <Box sx={{ mb: 10 }}>
         

          <Grid container spacing={2}>
            {ministry.experiences.map((item, index) => {
              const Icon = item.icon;

              return (
                <Grid
                  size={{
                  xs: 6,
                  md: 2,
                }}
                  key={index}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      py: 4,
                      px: 2,
                      height: "100%",

                      borderRadius: "20px",
                      display: "flex",
                      flexDirection: "column",
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
                          "0 10px 30px rgba(196,155,99,0.35)",
                      },
                    }}
                  >
                    
                    <Box
                      sx={{
                        mb: 2,
                        width: 60,
                        height: 60,
                        borderRadius: "50%",

                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",

                        background:
                          "rgba(196,155,99,0.15)",
                        border: "1px solid #c49b63",
                      }}
                    >
                      <Icon sx={{ fontSize: 30, color: "#c49b63" }} />
                    </Box>

                    {/* LABEL */}
                    <Typography
                      variant="h6"
                      fontWeight={600}
                    >
                      {item.label}
                    </Typography>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
            <CTASection />
    </Box>
  );
}
