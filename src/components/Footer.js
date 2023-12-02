import { useEffect, useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { ColorLens, Feed } from '@mui/icons-material';

const paperStyle = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
};

const bottomNavStyle = {
  '& .MuiBottomNavigationAction-root, svg': {
    color: 'primary.dim',
  },
  '& .Mui-selected, .Mui-selected > svg': {
    color: 'textColor.main',
  },
  bgcolor: 'primary.main',
};

export default function Footer({ page, onPageNavigation }) {
  const [value, setValue] = useState(page);

  useEffect(() => {
    onPageNavigation(value);
  }, [value]);

  return (
    <Paper sx={paperStyle} elevation={3}>
      <BottomNavigation
        sx={bottomNavStyle}
        showLabels
        value={value}
        onChange={(e, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction value="news" label="News" icon={<Feed />} />
        <BottomNavigationAction
          value="themes"
          label="Themes"
          icon={<ColorLens />}
        />
      </BottomNavigation>
    </Paper>
  );
}
