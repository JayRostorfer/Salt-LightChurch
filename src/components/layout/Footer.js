"use client";

import React from "react";

import {
  Box,
  Container,
  Typography,
  IconButton,
  Stack,
} from "@mui/material";

import {
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      href: "https://www.facebook.com/SALTnLIGHTChurchMadagascar",
    },
    {
      name: "YouTube",
      icon: <FaYoutube />,
      href: "https://www.youtube.com/@SALTandLIGHTChurchMadagascar",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp />,
      href: "https://wa.me/261343957978",
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        overflow: "hidden",
      }}
    >


      <Box
        sx={{
          backgroundColor: "#c49b63",

          color: "#173447",

          py: {
            xs: 9,
            md: 12,
          },

          px: {
            xs: 3,
            md: 6,
          },
        }}
      >
        <Container maxWidth="lg">

          {/* CHURCH NAME */}

          <Typography
            sx={{
              fontWeight: 900,

              fontSize: {
                xs: "2rem",
                md: "2.8rem",
              },

              lineHeight: 1.2,

              mb: 5,
            }}
          >
            SALT & LIGHT
            <br />
            CHURCH
          </Typography>


          {/* CHURCH INFORMATION */}

          <Typography
            sx={{
              fontSize: {
                xs: "1.05rem",
                md: "1.2rem",
              },

              lineHeight: 1.9,

              fontWeight: 400,

              mb: 6,

              maxWidth: 650,
            }}
          >
            

            Antananarivo, Madagascar.
            <br />

            © {new Date().getFullYear()} Salt and Light
            Church Madagascar.
            <br />

            All Rights Reserved.
          </Typography>


          {/* SOCIAL MEDIA */}

          <Stack
            direction="row"
            spacing={2}
            sx={{
              mb: {
                 xs: 4,  
                 md: 5, 
                 },
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            {socialLinks.map((social) => (

              <IconButton
                key={social.name}

                component="a"

                href={social.href || undefined}

                target="_blank"

                rel="noopener noreferrer"

                aria-label={social.name}

                sx={{
                  width: {
                    xs: 65,
                    md: 75,
                  },

                  height: {
                    xs: 65,
                    md: 75,
                  },

                  borderRadius: "50%",

                  backgroundColor: "#173447",

                  color: "#fff",

                  fontSize: {
                    xs: 30,
                    md: 35,
                  },

                  transition: "all 0.3s ease",

                  "&:hover": {
                    backgroundColor: "#244b61",

                    transform: "translateY(-6px)",
                  },

                  "&.Mui-disabled": {
                    backgroundColor: "#173447",
                    color: "#fff",
                    opacity: 0.5,
                  },
                }}
              >
                {social.icon}
              </IconButton>

            ))}
          </Stack>

        </Container>
      </Box>

    </Box>
  );
}
