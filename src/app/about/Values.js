"use client";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

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
      "Our faith in Jesus is the foundation of our lives, guiding us and shaping who we are.",
  },
  {
    number: "02",
    title: "Worship",
    description:
      "We worship God through our daily lives, honoring Him in all we do and giving Him our hearts.
",
  },
  {
    number: "03",
    title: "Unity",
    description:
      "We grow stronger together by sharing God's love, supporting one another, and living as one family in Christ.
",
  },
  {
    number: "04",
    title: "Service",
    description:
      "We use our gifts and talents to help others, serve our community, and share God's love through our actions.",
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

       {/* VALUES GRID */}

<Box
  sx={{
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      md: "1fr",
    },
  }} 
>
  {values.map((value, index) => (
    <Box
      component="article"
      key={value.number}
      className="value-card"
      sx={{
        py: {
          xs: 4,
          sm: 6,
          md: 10,
        },

        pl: {
          xs: 0,
          md: 0,
        },

        pr: {
          xs: 0,
          md: 0,
        },

        
        borderBottom: `1px solid ${colors.border}`
        
      }}
    >
      <Accordion
        disableGutters
        elevation={0}
        square
        sx={{
          background: "transparent",
          color: colors.heading,

          "&:before": {
            display: "none",
          },

          "&.Mui-expanded": {
            margin: 0,
          },
        }}
      >
        {/* ACCORDION HEADER */}

        <AccordionSummary
          expandIcon={
            <Typography
              sx={{
                fontSize: {
                  xs: 28,
                  md: 34,
                },
                fontWeight: 300,
                color: colors.heading,
                transition: "transform 0.3s ease",
              }}
            >
              +
            </Typography>
          }
          sx={{
            px: 0,
            minHeight: "auto",

            "&.Mui-expanded": {
              minHeight: "auto",
            },

            "& .MuiAccordionSummary-content": {
              margin: 0,
              alignItems: "center",
            },

            "& .MuiAccordionSummary-content.Mui-expanded": {
              margin: 0,
            },

            "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded":
              {
                transform: "rotate(45deg)",
              },

            "&:hover .value-title": {
              transform: "translateX(8px)",
            },
          }}
        >
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
        </AccordionSummary>

        {/* ACCORDION DESCRIPTION */}

        <AccordionDetails
          sx={{
            px: 0,
            pt: {
              xs: 3,
              md: 4,
            },
            pb: 0,
          }}
        >
          <Typography
            sx={{
              maxWidth: 420,

              fontSize: {
                xs: 14,
                sm: 15,
              },

              lineHeight: 2,
              color: colors.text,
            }}
          >
            {value.description}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  ))}
</Box>

        {/* CLOSING STATEMENT */}

        <Box
          sx={{
            mt: { xs: 6, md: 9 },
            pt: 4,
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
