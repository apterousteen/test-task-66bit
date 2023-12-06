import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { ColorLens, Feed } from '@mui/icons-material';
import {
  footerBottomNavStyle,
  footerPaperStyle,
} from '../styles/componentStyles';

export default function Footer({ page, onPageNavigation }) {
  const [value, setValue] = useState(page);

  useEffect(() => {
    onPageNavigation(value);
  }, [value]);

  return (
    <Paper sx={footerPaperStyle} elevation={3}>
      <BottomNavigation
        sx={footerBottomNavStyle}
        showLabels
        value={value}
        onChange={(e, newValue) => {
          setValue(newValue);
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
