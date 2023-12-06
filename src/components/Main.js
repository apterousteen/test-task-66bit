import { Container } from '@mui/material';
import { mainInnerContainerStyle } from '../styles/componentStyles';

export default function Main({ children }) {
  return (
    <Container
      component="main"
      maxWidth={false}
      sx={{ backgroundColor: 'secondary.main', p: 0 }}
    >
      <Container
        className="main__inner-container"
        maxWidth="sm"
        sx={mainInnerContainerStyle}
      >
        {children}
      </Container>
    </Container>
  );
}
