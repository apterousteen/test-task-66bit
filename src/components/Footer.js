import { Link } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { ColorLens, Feed } from '@mui/icons-material';
import {
  footerBottomNavStyle,
  footerPaperStyle,
} from '../styles/componentStyles';

export default function Footer({ page, onPageNavigation }) {
  return (
    <Paper sx={footerPaperStyle} elevation={3}>
      <BottomNavigation
        sx={footerBottomNavStyle}
        showLabels
        value={page}
        onChange={(e, newValue) => {
          onPageNavigation(newValue);
        }}
      >
        <BottomNavigationAction
          component={Link}
          to="/"
          value="news"
          label="Новости"
          icon={<Feed />}
        />
        <BottomNavigationAction
          component={Link}
          to="/themes"
          value="themes"
          label="Темы"
          icon={<ColorLens />}
        />
      </BottomNavigation>
    </Paper>
  );
}
