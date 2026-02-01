import { Stack, Typography, Button, Box, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';

export default function NotFound() {
  return (
    <Container component="main" maxWidth="md">
      <Stack
        spacing={4}
        alignItems="center"
        justifyContent="center"
        sx={{
          minHeight: '100vh',
          textAlign: 'center',
        }}
      >
        <Box>
          <SentimentDissatisfiedIcon sx={{ fontSize: 120, color: 'text.secondary', mb: 2 }} />
          <Typography variant="h1" component="h1" fontWeight="800" color="primary">
            404
          </Typography>
          <Typography variant="h4" component="h2" gutterBottom fontWeight="medium">
            Oops! Page Not Found
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            The page you are looking for might have been removed, 
            had its name changed, or is temporarily unavailable.
          </Typography>
        </Box>

        <Button
          variant="contained"
          size="large"
          component={Link}
          to="/"
          sx={{
            px: 5,
            py: 1.5,
            fontSize: '1.1rem',
            textTransform: 'none',
            borderRadius: '12px',
            boxShadow: '0 4px 14px 0 rgba(0,118,255,0.39)',
          }}
        >
          Back to Home
        </Button>
      </Stack>
    </Container>
  );
}