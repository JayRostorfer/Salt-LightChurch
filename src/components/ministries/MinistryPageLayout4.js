"use client";

import groups from "@/data/groups";
import { useRef, useEffect } from "react";

import {
  Box,
  Container,
  Typography,
  Grid,
} from "@mui/material";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import MinistryHero from "./MinistryHero";

gsap.registerPlugin(ScrollTrigger);

export default function MinistryPageLayout4({
  ministry
}) {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // INTRODUCTION ANIMATION

      gsap.from(".intro-animate", {
        scrollTrigger: {
          trigger: ".intro-section",
          start: "top 80%",
          once: true,
        },

        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      // SECTION TITLES

      gsap.from(".ministries-header-animate", {
        scrollTrigger: {
          trigger: ".ministries-header",
          start: "top 85%",
          once: true,
        },

        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      // EACH MINISTRY SECTION

      gsap.utils
        .toArray(".ministry-section")
        .forEach((section) => {

          const image = section.querySelector(
            ".ministry-image"
          );

          const content = section.querySelector(
            ".ministry-content"
          );

          // IMAGE REVEAL

          gsap.from(image, {
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              once: true,
            },

            y: 80,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
          });

          // TEXT REVEAL

          gsap.from(content, {
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              once: true,
            },

            y: 60,
            opacity: 0,
            duration: 1,
            delay: 0.2,
            ease: "power3.out",
          });

        });

    }, pageRef);

    return () => ctx.revert();
  }, [groupes]);

  return (
    <Box
      ref={pageRef}
      sx={{
        overflow: "hidden",
        background: "#173447",
      }}
    >

      {/* =================================
          HERO
      ================================= */}

      <MinistryHero ministry={ministry} />


      {/* =================================
          GENERAL INTRODUCTION
      ================================= */}

      <Box
        className="intro-section"
        sx={{
          position: "relative",

          py: {
            xs: 12,
            md: 20,
          },

          background: "#F8F7F4",
        }}
      >
        <Container maxWidth="lg">

          <Box
            sx={{
              maxWidth: 900,
              mx: "auto",
              textAlign: "center",
            }}
          >

            {/* SMALL LABEL */}

            <Typography
              className="intro-animate"
              sx={{
                color: "#9A7850",
                letterSpacing: "4px",
                fontSize: "0.8rem",
                fontWeight: 700,
                mb: 4,
              }}
            >
              GROWING TOGETHER
            </Typography>


            {/* MAIN TITLE */}

            <Typography
              className="intro-animate"
              component="h2"
              sx={{
                fontSize: {
                  xs: "2.7rem",
                  sm: "3.5rem",
                  md: "5rem",
                },

                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-1.5px",

                color: "#173447",

                mb: 5,
              }}
            >
              There's a Place
              <br />

              <Box
                component="span"
                sx={{
                  color: "#c49b63",
                }}
              >
                For Everyone.
              </Box>
            </Typography>


            {/* DESCRIPTION */}

            <Typography
              className="intro-animate"
              sx={{
                fontSize: {
                  xs: "1.05rem",
                  md: "1.25rem",
                },

                lineHeight: 2,

                color: "#5B6770",

                maxWidth: 750,
                mx: "auto",
              }}
            >
              Paragraph
            </Typography>


            {/* DECORATIVE LINE */}

            <Box
              className="intro-animate"
              sx={{
                width: 80,
                height: 3,
                background: "#c49b63",
                mx: "auto",
                mt: 6,
              }}
            />

          </Box>

        </Container>
      </Box>


      {/* =================================
          MINISTRIES HEADER
      ================================= */}

      <Box
        className="ministries-header"
        sx={{
          background: "#173447",

          pt: {
            xs: 12,
            md: 18,
          },

          pb: {
            xs: 8,
            md: 12,
          },
        }}
      >
        <Container maxWidth="lg">

          <Box
            sx={{
              maxWidth: 850,
            }}
          >

            <Typography
              className="ministries-header-animate"
              sx={{
                color: "#c49b63",
                letterSpacing: "4px",
                fontSize: "0.8rem",
                fontWeight: 700,
                mb: 3,
              }}
            >
              EXPLORE OUR MINISTRIES
            </Typography>


            <Typography
              className="ministries-header-animate"
              component="h2"
              sx={{
                fontSize: {
                  xs: "2.7rem",
                  md: "5rem",
                },

                fontWeight: 800,

                lineHeight: 1.1,

                color: "white",
              }}
            >
              Different Groups.
              <br />

              <Box
                component="span"
                sx={{
                  color: "#c49b63",
                }}
              >
                One Family.
              </Box>
            </Typography>

          </Box>

        </Container>
      </Box>


      {/* =================================
          MINISTRIES SECTIONS
      ================================= */}

      {groupes.map((groupe, index) => {

        const reverse = index % 2 !== 0;

        return (
           <Box
      key={groupe.slug || index}
      className="ministry-section"
      sx={{
        position: "relative",

        background: "#173447",

        py: {
          xs: 8,
          md: 15,
        },

        mb: {
          xs: 10,
          md: 0,
        },

        overflow: "hidden",
      }}
    >
            {/* BACKGROUND TITLE */}

            <Typography
              aria-hidden="true"
              sx={{
                position: "absolute",

                display: {
                  xs: "block", 
                  md: "none", 
                }, 

                top: {
                  xs: 30,
                  md: -30,
                },

                
                left:  "3%",

                fontSize: {
                  xs: "5rem",
                  md: "5rem",
                },

                fontWeight: 900,

                lineHeight: 1,

                color: "rgba(255,255,255,0.025)",

                pointerEvents: "none",
              }}
            >
              {groupe.title}
            </Typography>


            <Container
              maxWidth="lg"
              sx={{
                position: "relative",
                zIndex: 2,
              }}
            >
              

        {/* MOBILE TITLE */}

<Typography
  component="h3"
  sx={{
    display: {
      xs: "block",
      md: "none",
    },

    fontSize: "2.5rem",
    fontWeight: 800,
    lineHeight: 1.15,
    color: "white",

    mb: 5,

    textAlign: "left",
  }}
>
  {groupe.title}
</Typography>
                    

              <Grid
                container
                spacing={{
                  xs: 6,
                  md: 10,
                }}

                alignItems="center"

                direction={{
                  xs: "column",
                  md: reverse
                    ? "row-reverse"
                    : "row",
                }}
              >

              

                {/* IMAGE */}

                <Grid
                  size={{
                    xs: 12,
                    md: 6,
                  }}
                >

                  <Box
                    className="ministry-image"
                    sx={{
                      position: "relative",

                      width: "100%",

                      borderRadius: {
                        xs: "18px",
                        md: "28px",
                      },

                      overflow: "hidden",

                      boxShadow:
                        "0 30px 80px rgba(0,0,0,0.25)",

                      "&:hover img": {
                        transform: "scale(1.05)",
                      },
                    }}
                  >

                    <Box
                      component="img"
                      src={groupe.img}
                      alt={groupe.title}
                      loading="lazy"
                      sx={{
                        display: "block",

                        width: "100%",

                        height: {
                          xs: 320,
                          sm: 420,
                          md: 500,
                        },

                        objectFit: "cover",

                        transition:
                          "transform 0.8s cubic-bezier(0.2,0.8,0.2,1)",
                      }}
                    />


                    {/* IMAGE OVERLAY */}

                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,

                        background:
                          "linear-gradient(to top, rgba(23,52,71,0.35), transparent)",

                        pointerEvents: "none",
                      }}
                    />

                  </Box>

                </Grid>


                {/* CONTENT */}

                <Grid
                  size={{
                    xs: 12,
                    md: 6,
                  }}
                >

                  <Box
                    className="ministry-content"
                    sx={{
                      maxWidth: 520,
                    }}
                  >

                  {/* DESKTOP TITLE */}

<Typography
  component="h3"
  sx={{
    display: {
      xs: "none",
      md: "block",
    },

    fontSize: "4rem",
    fontWeight: 800,
    lineHeight: 1.15,
    color: "white",

    mb: 4,
  }}
>
  {groupe.title}
</Typography>
                  
                    {/* GROUP DESCRIPTION */}

                    <Typography
                      sx={{
                        fontSize: {
                          xs: "1.05rem",
                          md: "1.15rem",
                        },

                        lineHeight: 2,

                        color:
                          "rgba(255,255,255,0.78)",

                        whiteSpace: "pre-line",
                      }}
                    >
                      {groupe.descri}
                    </Typography>

                     <Box
                      sx={{
                        width: 70,
                        height: 3,
                        mx: "auto",
                        display: {
                          xs: "block", 
                          md: "none", 
                        }, 

                        background: "#c49b63",

                        mt: 4,
                      }}
                    /> 

                  </Box>

                </Grid>

              </Grid>

            </Container>

          </Box>
        );
      })}


      {/* =================================
          ENDING SECTION
      ================================= */}

      <Box
        sx={{
          background:
            "linear-gradient(135deg, #173447, #9A7850)",

          py: {
            xs: 12,
            md: 16,
          },

          textAlign: "center",
        }}
      >
        <Container maxWidth="md">

          <Typography
            sx={{
              color: "#F5D7A8",
              letterSpacing: "4px",
              fontSize: "0.8rem",
              fontWeight: 700,
              mb: 3,
            }}
          >
            YOU BELONG HERE
          </Typography>


          <Typography
            component="h2"
            sx={{
              fontSize: {
                xs: "2.5rem",
                md: "4rem",
              },

              fontWeight: 800,

              color: "white",

              lineHeight: 1.2,

              mb: 4,
            }}
          >
            Life Is Better
            <br />
            Together.
          </Typography>


          <Typography
            sx={{
              fontSize: {
                xs: "1.05rem",
                md: "1.2rem",
              },

              color:
                "rgba(255,255,255,0.85)",

              lineHeight: 1.9,

              maxWidth: 650,

              mx: "auto",
            }}
          >
            Paragraph
            
          </Typography>

        </Container>
      </Box>

    </Box>
  );
}
