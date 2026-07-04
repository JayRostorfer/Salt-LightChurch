import { Box, Container, Grid } from "@mui/material";
import ContactForm5 from "@/components/home/ContactForm5" 

import dynamic from "next/dynamic";


const ChurchMap = dynamic(
  () => import("@/components/ChurchMap"),
  {
    ssr: false,
  }
);

export default function ContactSection() {
  return (
    <Box 
      sx={{ 
        background: "linear-gradient(180deg, #020617 0%, #0f172a 50%, #111827 100%)",
      }}
      maxWidth="lg">
       <Container>
      <Grid container spacing={1}>

        <Grid size={{ xs: 12, md: 6 }}>
          <ContactForm5 />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <ChurchMap />
        </Grid>

      </Grid>
       </Container>
    </Box>
  );
}
