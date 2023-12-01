import { Container } from '@mui/material';
import Themes from './Themes';
import NewsFeed from './NewsFeed';

export default function Main() {
  return (
    <Container maxWidth={false} sx={{ bgcolor: 'secondary.main', p: 0 }}>
      <Container
        maxWidth="sm"
        component="main"
        sx={{
          display: 'flex',
          alignItems: 'stretch',
          flexDirection: 'column',
          gap: 2,
          py: 3,
          minHeight: 'calc(100vh - 120px)',
          bgcolor: 'secondary.main',
        }}
      >
        <NewsFeed />
        <Themes />
      </Container>
    </Container>
  );
}
