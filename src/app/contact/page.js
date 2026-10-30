"use client";

import {
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";

import { useRef, useLayoutEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ContactForm5 from "@/components/home/ContactForm5";

gsap.registerPlugin(ScrollTrigger);

export default function ContactHero() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const labelRef = useRef(null);
  const formRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.from(labelRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
      })

        .from(
          titleRef.current,
          {
            opacity: 0,
            y: 60,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.3"
        )

        .from(
          descriptionRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.5"
        )

        .from(
          formRef.current,
          {
            opacity: 0,
            x: 60,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.7"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box
      ref={sectionRef}
      component="section"
      sx={{
        position: "relative",

        minHeight: {
          xs: "auto",
          md: "100svh",
        },

        background:
          "linear-gradient(135deg, #173447 0%, #0f172a 100%)",

        display: "flex",
        alignItems: "center",

        overflow: "hidden",

        py: {
          xs: 10,
          md: 12,
        },
      }}
    >
      {/* DECORATIVE GLOW */}

      <Box
        sx={{
          position: "absolute",

          width: {
            xs: 300,
            md: 600,
          },

          height: {
            xs: 300,
            md: 600,
          },

          borderRadius: "50%",

          background: "rgba(196,155,99,0.08)",

          filter: "blur(120px)",

          top: "-20%",
          right: "-10%",

          pointerEvents: "none",
        }}
      />

      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <Grid
          container
          spacing={{
            xs: 6,
            md: 8,
            lg: 10,
          }}
          alignItems="center"
        >
          {/* LEFT CONTENT */}

          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                maxWidth: 600,
              }}
            >
              {/* LABEL */}

              <Typography
                ref={labelRef}
                variant="overline"
                sx={{
                  display: "block",

                  color: "#c49b63",

                  letterSpacing: 4,

                  fontWeight: 700,

                  mb: 2,
                }}
              >
                CONTACT US
              </Typography>

              {/* TITLE */}

              <Typography
                ref={titleRef}
                component="h1"
                sx={{
                  fontSize: {
                    xs: "3.5rem",
                    sm: "4.5rem",
                    lg: "6rem",
                  },

                  fontWeight: 800,

                  lineHeight: 1.05,

                  letterSpacing: "-0.045em",

                  color: "#fff",

                  mb: 4,
                }}
              >
                Let's
                <Box
                  component="span"
                  sx={{
                    display: "block",
                    color: "#c49b63",
                  }}
                >
                  Connect.
                </Box>
              </Typography>

              {/* DESCRIPTION */}

              <Typography
                ref={descriptionRef}
                sx={{
                  color: "rgba(255,255,255,0.7)",

                  fontSize: {
                    xs: "1rem",
                    md: "1.2rem",
                  },

                  lineHeight: 1.9,

                  maxWidth: 480,
                }}
              >
                Whether you have a question, need prayer,
                or simply want to say hello, we'd love
                to hear from you.
              </Typography>

              {/* DECORATIVE LINE */}

              <Box
                sx={{
                  mt: 6,

                  width: 80,
                  height: 3,

                  background:
                    "linear-gradient(90deg, #c49b63, transparent)",

                  borderRadius: 10,
                }}
              />
            </Box>
          </Grid>

          {/* RIGHT FORM */}

          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              ref={formRef}
              sx={{
                width: "100%",

                maxWidth: 650,

                mx: "auto",
              }}
            >
              <ContactForm5 />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
