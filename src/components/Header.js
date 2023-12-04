import { AppBar, Toolbar, Typography } from '@mui/material';
import { pageNamesRus } from '../config';

export default function Header({ heading }) {
  return (
    <AppBar position="sticky">
      <Toolbar sx={{ justifyContent: 'center' }}>
        <Typography variant="h4" component="h1">
          {pageNamesRus[heading]}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
