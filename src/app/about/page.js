'use client';

import { Box, Typography, Grid } from '@mui/material';
import { motion, easeOut } from 'framer-motion';
import aboutData from '@/data/aboutus.json';

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  visible: (i) => ({
    opacity: 1,
    y: 0,

    transition: {
      delay: i * 0.05,
      duration: 0.6,
      ease: easeOut,
    },
  }),
};

const AboutUs = () => {
  return (
    <Box
      px={2}
      py={6}
      maxWidth="lg"
      mx="auto"
      sx={{
        background:
          'linear-gradient(180deg, #020617 0%, #0f172a 50%, #111827 100%)',
        paddingTop: 5,
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        align="center"
        fontWeight="bold"
        color="whitesmoke"
        gutterBottom
      >
        What do we believe?
      </Typography>

      <Grid
        container
        spacing={4}
        mt={2}
      >
        {aboutData.map((valeur, i) => (
          <Grid
            key={i}
            size={{ xs: 12, md: 6 }}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={itemVariants}
              custom={i}
            >
              <Box
                sx={{
                  p: 3,
                  borderRadius: 2,
                  height: '100%',
                  minHeight: 250,
                  transition: 'transform 0.5s',

                  '&:hover': {
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                <Typography
                  sx={{
                    whiteSpace: 'pre-line',
                    color: '#c49b63',
                  }}
                  fontWeight="bold"
                  variant="h6"
                  align="center"
                  gutterBottom
                >
                  {valeur.titre}
                </Typography>

                <Typography
                  variant="body1"
                  align="center"
                  sx={{
                    whiteSpace: 'pre-line',
                    color: 'whitesmoke',
                  }}
                >
                  {valeur.description}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AboutUs;
