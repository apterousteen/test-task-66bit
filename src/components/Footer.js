import { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { ColorLens, Feed } from '@mui/icons-material';

export default function Footer() {
  const [value, setValue] = useState(0);

  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
      }}
      elevation={3}
    >
      <BottomNavigation
        sx={{
          '& .MuiBottomNavigationAction-root, svg': {
            color: 'primary.dim',
          },
          '& .Mui-selected, .Mui-selected > svg': {
            color: 'textColor.main',
          },
          bgcolor: 'primary.main',
        }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="News" icon={<Feed />} />
        <BottomNavigationAction label="Themes" icon={<ColorLens />} />
      </BottomNavigation>
    </Paper>
  );
}
