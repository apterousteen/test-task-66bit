import NewsCard from '../components/NewsCard';
import ObserverRef from '../components/ObserverRef';
import { Container } from '@mui/material';

export default function NewsFeed() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        py: 3,
      }}
    >
      <NewsCard />
      <NewsCard />
      <ObserverRef />
    </Container>
  );
}
