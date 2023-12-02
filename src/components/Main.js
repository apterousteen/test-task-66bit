import { Container } from '@mui/material';

const mainInnerContainerStyle = {
  display: 'flex',
  alignItems: 'stretch',
  flexDirection: 'column',
  gap: 2,
  py: 3,
  minHeight: 'calc(100vh - 100px)',
  backgroundColor: 'secondary.main',
};

export default function Main({ children }) {
  return (
    <Container
      maxWidth={false}
      sx={{ backgroundColor: 'secondary.main', p: 0 }}
    >
      <Container maxWidth="sm" component="main" sx={mainInnerContainerStyle}>
        {children}
      </Container>
    </Container>
  );
}
