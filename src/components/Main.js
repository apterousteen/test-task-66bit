import { Container } from '@mui/material';

const mainInnerContainerStyle = {
  display: 'flex',
  minHeight: 'calc(100vh - 100px)',
  backgroundColor: 'secondary.main',
  p: 0,
};

export default function Main({ children }) {
  return (
    <Container
      component="main"
      maxWidth={false}
      sx={{ backgroundColor: 'secondary.main', p: 0 }}
    >
      <Container maxWidth="sm" sx={mainInnerContainerStyle}>
        {children}
      </Container>
    </Container>
  );
}
