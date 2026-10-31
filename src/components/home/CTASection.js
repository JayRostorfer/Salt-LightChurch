"use client";

import { useRef, useLayoutEffect } from "react";
import Link from "next/link";

import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
} from "@mui/material";

import { FiMessageCircle, FiArrowUpRight } from "react-icons/fi";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactCTA() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const buttonRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current.children, {
        opacity: 0,
        y: 45,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(buttonRef.current, {
        opacity: 0,
        x: 40,
        duration: 0.9,
        ease: "power3.out",

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box
      ref={sectionRef}
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",

        background:
          "linear-gradient(115deg, #173447 0%, #24485A 50%, #9A7850 100%)",

        py: {
          xs: 10,
          sm: 12,
          md: 15,
        },
      }}
    >
      {/* Decorative glow */}

      <Box
        sx={{
          position: "absolute",
          width: 450,
          height: 450,
          borderRadius: "50%",

          background: "rgba(196,155,99,0.16)",
          filter: "blur(100px)",

          top: "-60%",
          right: "-10%",

          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: 350,
          height: 350,
          borderRadius: "50%",

          background: "rgba(255,255,255,0.06)",
          filter: "blur(100px)",

          bottom: "-70%",
          left: "-10%",

          pointerEvents: "none",
        }}
      />

      {/* Decorative border */}

      <Box
        sx={{
          position: "absolute",
          inset: 18,

          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "24px",

          pointerEvents: "none",

          display: {
            xs: "none",
            md: "block",
          },
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <Stack
          direction={{
            xs: "column",
            md: "row",
          }}
          alignItems="center"
          justifyContent="space-between"
          spacing={{
            xs: 5,
            md: 8,
          }}
        >
          {/* LEFT CONTENT */}

          <Box
            ref={contentRef}
            sx={{
              flex: 1,

              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
          >
            {/* LABEL */}

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={{
                xs: "center",
                md: "flex-start",
              }}
              spacing={1.5}
              sx={{ mb: 3 }}
            >
              <Box
  component={FiMessageCircle}
  sx={{
    color: "#f8dfb5",
    fontSize: 20,
  }}
/>

              <Typography
                variant="overline"
                sx={{
                  color: "#f8dfb5",
                  letterSpacing: 3,
                  fontWeight: 700,
                }}
              >
                LET'S CONNECT
              </Typography>
            </Stack>

            {/* TITLE */}

            <Typography
              component="h2"
              sx={{
                fontSize: {
                  xs: "2.5rem",
                  sm: "3.2rem",
                  md: "4rem",
                },

                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.035em",

                color: "#fff",

                mb: 3,
              }}
            >
              We'd Love to
              <Box
                component="span"
                sx={{
                  display: "block",
                  color: "#f8dfb5",
                }}
              >
                Hear From You.
              </Box>
            </Typography>

            {/* DESCRIPTION */}

            <Typography
              sx={{
                color: "rgba(255,255,255,0.75)",

                fontSize: {
                  xs: "1rem",
                  md: "1.1rem",
                },

                lineHeight: 1.9,
                maxWidth: 560,

                mx: {
                  xs: "auto",
                  md: 0,
                },
              }}
            >
              Do you want to know more about us or have something you'd like to ask? We'd love to connect with you!
            </Typography>
          </Box>

          {/* RIGHT BUTTON */}

          <Box
  ref={buttonRef}
  sx={{
    display: "flex",

    justifyContent: {
      xs: "center",
      md: "flex-end",
    },

    alignItems: "center",

    width: {
      xs: "100%",
      md: "auto",
    },

    flex: "0 0 auto",
  }}
>
  <Button
    component={Link}
    href="/contact"
    endIcon={<FiArrowUpRight size={20} />}
    sx={{
      width: "auto",
      flexShrink: 0,
      whiteSpace: "nowrap",

      px: { xs: 4, md: 5 },
      py: 2,

      borderRadius: "50px",
      background: "#fff",
      color: "#173447",

      textTransform: "none",
      fontSize: "1rem",
      fontWeight: 700,

      "&:hover": {
        background: "#f8dfb5",
        transform: "translateY(-4px)",
      },
    }}
  >
    Get in Touch
  </Button>
</Box>
        </Stack>
      </Container>
    </Box>
  );
}
