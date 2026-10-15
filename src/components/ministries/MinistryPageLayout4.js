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
                    
                    
      </Container>
            
    </Box>
  );
}
