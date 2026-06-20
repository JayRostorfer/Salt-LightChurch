"use client" 

import React from "react"
import { useRouter } from "next/navigation";
import { Box, Typography, Button } from "@mui/material"

export default function CTASection() {

  const router = useRouter();

  const handleClick = () => {
    router.push("/#get-in-touch");
  };
  
  return (
    
    <Box
      sx={{
        py: 14,
        px: 3,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        textAlign: "center"
      }}
    >
      {/* overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "black"
        }}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          color: "white"
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            mb: 3
          }}
        >
          Ready To Join Our Community?
        </Typography>


        
        <Button
          onClick={handleClick}
          variant="contained"
          sx={{
            backgroundColor: "#c49b63",
            borderRadius: "40px",
            px: 5,
            py: 1.5
          }}
        >
          Contact Us
        </Button>

      </Box>
    </Box>
  )
}
