import { Container, Typography } from '@mui/material';

const page404ContainerStyle = {
  m: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export default function Page404() {
  return (
    <Container sx={page404ContainerStyle}>
      <Typography variant="h5">
        <b>404</b> | Такой страницы нет
      </Typography>
    </Container>
  );
}
