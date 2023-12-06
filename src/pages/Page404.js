import { Container, Typography } from '@mui/material';
import { page404ContainerStyle } from '../styles/componentStyles';

export default function Page404() {
  return (
    <Container sx={page404ContainerStyle}>
      <Typography variant="h5">
        <b>404</b> | Такой страницы нет
      </Typography>
    </Container>
  );
}
