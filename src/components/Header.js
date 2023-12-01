import { AppBar, Toolbar, Typography } from '@mui/material';

export default function Header({ heading }) {
  return (
    <AppBar position="sticky">
      <Toolbar sx={{ justifyContent: 'center' }}>
        <Typography variant="h4" component="h1">
          {heading}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
