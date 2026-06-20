"use client"

import Link from "next/link"
import { Box, Typography, Button } from "@mui/material"

export default function MinistryCard({ ministry }) {
  return (
    <Box
      sx={{
        position: "relative",
        height: 420,
        overflow: "hidden",
        borderRadius: "24px",
        cursor: "pointer",

        "&:hover img": {
          transform: "scale(1.08)",
        },

        "&:hover .overlay": {
          background:
            "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.2))",
        },
      }}
    >
      <Box
        component="img"
        src={ministry.heroImage}
        alt={ministry.title}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "0.5s",
        }}
      />

      <Box
        className="overlay"
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.4))",
          transition: "0.4s",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: 30,
          left: 30,
          right: 30,
          color: "white",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
        >
          {ministry.title}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 3,
            opacity: 0.9,
          }}
        >
          {ministry.shortDescription}
        </Typography>

        <Button
          component={Link}
          href={`/ministries/${ministry.slug}`}
          variant="contained"
          sx={{
            backgroundColor: "#c49b63",

            "&:hover": {
              backgroundColor: "#ad8350",
            },
          }}
        >
          Discover More
        </Button>
      </Box>
    </Box>
  )
}
