"use client"

import { Box, Container, Grid, Typography } from "@mui/material"
import ministries from "@/data/ministries"
import MinistryCard from "./MinistryCard"

export default function MinistriesPreview() {
  return (
    <Box
      sx={{
        py: 12,
        textAlign: "center",
        background: "linear-gradient(180deg, #020617 0%, #0f172a 50%, #111827 100%)",
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h2"
          textAlign="center"
          fontWeight="bold"
          mb={2}
          sx={{color:'whitesmoke'}}
        >
          Our Ministries
        </Typography>

        <Typography
          textAlign="center"
          sx={{
            maxWidth: 700,
            mx: "auto",
            mb: 8,
            color: "whitesmoke",
          }}
        >
          Discover communities designed to help every generation grow in faith,
          relationships, and purpose.
        </Typography>

       <Grid container spacing={4}>
  
  {ministries.slice(0, 3).map((ministry) => (
    <Grid
      key={ministry.slug}
      size={{ xs: 12, md: 4 }}
    >
      <MinistryCard ministry={ministry} />
    </Grid>
  ))}


  <Grid size={{ xs: 0, md: 2 }} />

 
  {ministries.slice(3).map((ministry) => (
    <Grid
      key={ministry.slug}
      size={{ xs: 12, md: 4 }}
    >
      <MinistryCard ministry={ministry} />
    </Grid>
  ))}

  
  <Grid size={{ xs: 0, md: 2 }} />
</Grid>

      </Container>
    </Box>
  )
}
