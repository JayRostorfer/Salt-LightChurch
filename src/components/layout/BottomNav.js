"use client" 

import { Box, Typography } from "@mui/material"
import Image from "next/image"
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function BottomNav() {
  return (
    <MotionBox
      initial={{
    opacity: 0,
    x:-20,
  }}
  animate={{
    opacity: 1,
    x: 0,
  }}
      transition={{
        delay: 1.5,
        duration: 1,
        ease: "easeOut",
      }}
  sx={{
    position: "fixed",
    bottom: 20,
    left: 25,
    right: 25,
    height: 60,

    display: "flex",
    alignItems: "center",

    px: 1,

    borderRadius: "999px",
    background: "rgba(255,255,255,0.1)",
    backdropFilter: "blur(18px)",
    WebkitBackdropFilter: "blur(18px)",
    border: "1px solid rgba(255,255,255,0.15)",
    boxShadow: "0 0 15px rgba(255,255,255,0.15)",

    overflow: "hidden",
    zIndex: 9999,
  }}
>
  <Box
    sx={{
      flex: 1,
      overflow: "hidden",
      whiteSpace: "nowrap",
    }}
  >
    <Typography
      sx={{
        position: "absolute",
        color: "#fff",
        display: "inline-block",
        animation: "textdefil 18s linear infinite",
      }}
    >
      Welcome to Salt & Light Church • Sunday Worship 9:00 AM • Everyone is
      welcome!
    </Typography>
  </Box>

  <Box
    sx={{
      ml: "auto",
      width: 54,
      height: 54,
      borderRadius: "50%",
      bgcolor: "#fff",

      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      flexShrink: 0,
    }}
  >
    <Box
      sx={{
        outline: "none",
  WebkitTapHighlightColor: "transparent",

  "&:focus": {
    outline: "none",
  },

  "&:focus-visible": {
    outline: "none",
  },
        position: "relative", 
        width: 55,
        height: 55,
        borderRadius: "50%",
        border: "2px solid #c49b63", 
        boxShadow: "0 0 20px rgba(196, 155, 99, 0.75)",
        overflow: "hidden",
        zIndex: 2000,
        cursor: "pointer",
        transition: "all 0.3s ease",
        
      }}
    >
      <Image
        src="/images/salt-logo-4.png"
        alt="Logo"
        fill
        style={{
          objectFit: "cover",
        }}
      />
    </Box>
  </Box>
</MotionBox>
  )
}
