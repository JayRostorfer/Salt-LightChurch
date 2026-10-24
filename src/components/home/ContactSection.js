import { Box, Container, Grid } from "@mui/material";
import ContactForm5 from "@/components/home/ContactForm5" 

import dynamic from "next/dynamic";


const ChurchMap = dynamic(
  () => import("@/components/home/ChurchMap"),
  {
    ssr: false,
  }
);

export default function ContactSection() {
  return (
    <Box 
      sx={{ 
        background: "linear-gradient(-115deg, #9A7850, #173447)" ,
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
