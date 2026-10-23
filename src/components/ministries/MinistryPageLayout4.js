"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
} from "@mui/material";

import MinistryHero from "./MinistryHero";


// icons
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import GroupsIcon from "@mui/icons-material/Groups";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function MinistryPageLayout4({ ministry }) {
  return (
    <Box>
      <MinistryHero />

      <Container
        maxWidth="lg"
        sx={{
          py: 10,
        }}
      >
        {/* ABOUT */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h3" fontWeight="bold" mb={4}>
          ministry.title
          </Typography>

          <Typography
            variant="body1"
            sx={{
              lineHeight: 2,
              color: "white",
            }}
          >
            ministry.description
          </Typography>
        </Box>
                                  
      </Container>
            
    </Box>
  );
}
