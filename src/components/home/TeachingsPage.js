import { Container, Grid, Typography } from "@mui/material"
import teachings from "@/data/teaching"
import TeachingCard from "@/components/home/TeachingCard"

export default function TeachingsPage() {
  return (
    <Container sx={{ py: 10 }}>
      <Typography
        variant="h3"
        fontWeight="bold"
        mb={5}
      >
        Youth Teachings
      </Typography>

      <Grid container spacing={4}>
        {teachings.map((teaching) => (
          <Grid item xs={12} md={6} lg={4} key={teaching.id}>
            <TeachingCard {...teaching} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
