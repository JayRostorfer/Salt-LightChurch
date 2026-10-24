"use client";

import {
  Box,
  Container,
  Typography,
  Stack,
  useMediaQuery,
} from "@mui/material";

import { useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    number: "01",
    title: "Faith",
    description:
      "text",
  },
  {
    number: "02",
    title: "Worship",
    description:
      "text",
  },
  {
    number: "03",
    title: "Unity",
    description:
      "text",
  },
  {
    number: "04",
    title: "Service",
    description:
      "text",
  },
];

const colors = {
  heading: "white",
  accent: "black",
  text: "whitesmoke",
  border: "#DAD8CF",
};

export default function WhatWeValue() {
  const sectionRef = useRef(null);

  const isDesktop = useMediaQuery("(min-width: 900px)");

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".value-card");

      if (!cards.length) return;

      if (isDesktop) {
        // DESKTOP ANIMATION
        gsap.fromTo(
          cards,
          {
            scale: 0.8,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.7,
            ease: "power4.out",
            stagger: {
              each: 0.08,
              from: "start",
            },
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      } else {
        // MOBILE ANIMATION
        gsap.set(cards, {
          autoAlpha: 0,
          y: 35,
        });

        cards.forEach((card, index) => {
          gsap.to(card, {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power4.out",
            delay: (index % 2) * 0.06,
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              once: true,
            },
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [isDesktop]);

  return (
    <Box
      component="section"
      ref={sectionRef}
      sx={{
        background: "#9A7850",
        py: { xs: 10, sm: 14, md: 18 },
        px: { xs: 2.5, sm: 4, md: 6 },
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl">
        {/* SECTION HEADING */}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "0.85fr 1.15fr",
            },
            gap: { xs: 4, md: 8 },
            alignItems: "end",
            mb: { xs: 8, md: 12 },
          }}
        >
          <Box>
            <Stack
              direction="row"
              alignItems="center"
              spacing={1.5}
              sx={{ mb: 3 }}
            >
              <Box
                sx={{
                  width: 32,
                  height: "1px",
                  bgcolor: colors.accent,
                }}
              />

              <Typography
                sx={{
                  color: colors.accent,
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                }}
              >
                Our Foundation
              </Typography>
            </Stack>

            <Box
              sx={{
                position: "relative",
                display: "inline-block",
                isolation: "isolate",
                px: {
                  xs: 3,
                  sm: 4,
                  md: 5,
                },
                py: {
                  xs: 4,
                  md: 5,
                },
              }}
            >
              {/* TITLE */}

              <Typography
                component="h2"
                sx={{
                  fontFamily:
                    '"Cormorant Garamond", Georgia, serif',
                  fontSize: {
                    xs: 52,
                    sm: 68,
                    md: 84,
                  },
                  fontWeight: 500,
                  lineHeight: 1.02,
                  letterSpacing: "-0.035em",
                  color: colors.heading,
                }}
              >
                <Box
                  component="span"
                  className="title-first"
                  sx={{
                    display: "block",
                    whiteSpace: "nowrap",
                  }}
                >
                  What we
                </Box>

                <Box
                  component="span"
                  className="title-second"
                  sx={{
                    display: "block",
                    color: colors.accent,
                    fontStyle: "italic",
                  }}
                >
                  value.
                </Box>
              </Typography>
            </Box>
          </Box>

          {/* HEADING DESCRIPTION */}

          <Box
            sx={{
              maxWidth: 480,
              justifySelf: {
                xs: "start",
                md: "end",
              },
              pb: { md: 1 },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: 15, sm: 17 },
                lineHeight: 2,
                color: colors.text,
              }}
            >
              Everything we do flows from what we believe.
              These values shape us, and the way we live out
              our faith together.
            </Typography>
          </Box>
        </Box>

        {/* VALUES GRID */}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },
            borderTop: `1px solid ${colors.border}`,
          }}
        >
          {values.map((value, index) => (
            <Box
              component="article"
              key={value.number}
              className="value-card"
              sx={{
                py: { xs: 4, sm: 5, md: 6 },

                pl: {
                  xs: 0,
                  md: index % 2 === 0 ? 0 : 6,
                },

                pr: {
                  xs: 0,
                  md: index % 2 === 0 ? 6 : 0,
                },

                borderRight: {
                  xs: "none",
                  md:
                    index % 2 === 0
                      ? `1px solid ${colors.border}`
                      : "none",
                },

                borderBottom: {
                  xs:
                    index !== values.length - 1
                      ? `1px solid ${colors.border}`
                      : "none",

                  md:
                    index < 2
                      ? `1px solid ${colors.border}`
                      : "none",
                },

                "&:hover .value-title": {
                  transform: "translateX(8px)",
                },

                "&:hover .value-line": {
                  width: 96,
                },
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  mb: { xs: 4, md: 5 },
                }}
              />

              {/* VALUE TITLE */}

              <Typography
                component="h3"
                className="value-title"
                sx={{
                  fontFamily:
                    '"Cormorant Garamond", Georgia, serif',
                  fontSize: {
                    xs: 40,
                    sm: 48,
                    md: 56,
                  },
                  fontWeight: 500,
                  letterSpacing: "-0.025em",
                  lineHeight: 1.1,
                  color: colors.heading,
                  transition: "transform 300ms ease",
                }}
              >
                {value.title}
              </Typography>

              {/* VALUE DESCRIPTION */}

              <Typography
                sx={{
                  mt: 2.5,
                  maxWidth: 420,
                  fontSize: { xs: 14, sm: 15 },
                  lineHeight: 2,
                  color: colors.text,
                }}
              >
                {value.description}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* CLOSING STATEMENT */}

        <Box
          sx={{
            mt: { xs: 6, md: 9 },
            pt: 4,
            borderTop: `1px solid ${colors.border}`,
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            alignItems: {
              xs: "flex-start",
              sm: "center",
            },
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Typography
            sx={{
              fontFamily:
                '"Cormorant Garamond", Georgia, serif',
              fontSize: { xs: 23, sm: 28 },
              fontStyle: "italic",
              color: colors.heading,
            }}
          >
            One faith. One family. One purpose.
          </Typography>

          <Typography
            sx={{
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: colors.accent,
            }}
          >
            Salt & Light Church
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
