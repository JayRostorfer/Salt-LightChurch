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
        
        WebkitTapHighlightColor: "transparent",
        "&:hover img": {
          transform: "scale(1.08)",
        },

        "&:hover .overlay": {
          background:
            "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.2))",
        },
      }}
    >
      {/* IMAGE */}
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

      {/* OVERLAY */}
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

      {/* CONTENT */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,

          display: "flex",
          flexDirection: "column",

          alignItems: "center",
          justifyContent: "center",

          gap: 2,

          textAlign: "center",
          color: "white",

          px: 3,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            fontSize: {
              xs: "1.8rem",
              md: "2.2rem",
            },
          }}
        >
          {ministry.title}
        </Typography>

        <Button
          component={Link}
          href={`/ministries/${ministry.slug}`}
          variant="contained"
          sx={{
            backgroundColor: "#c49b63",
            color: "#fff",

            borderRadius: "30px",
            px: 3,
            py: 1,

            textTransform: "none",

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
