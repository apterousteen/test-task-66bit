import { useCallback, useEffect, useState } from 'react';
import {
  ToggleButton,
  ToggleButtonGroup,
  Alert,
  Container,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import {
  blueTheme,
  darkTheme,
  lightTheme,
  radioButtonTheme,
} from '../themeStyles';

// Стили
const themesContainerStyle = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 'auto',
  gap: 6,
};

// Константы
const themeNames = { light: 'светлая', dark: 'темная', blue: 'синяя' };

export default function Themes({ curTheme, onThemeChange }) {
  return (
    <Container sx={themesContainerStyle}>
      <Alert
        severity="info"
        sx={{
          bgcolor: 'info.main',
          '& .MuiAlert-message': {
            color: 'info.text',
          },
          '& .MuiAlert-icon': {
            color: 'info.icon',
          },
        }}
      >
        {/* loading вставить */}
        Выбрана <b>{themeNames[curTheme]}</b> тема
      </Alert>
      <ThemeProvider theme={radioButtonTheme}>
        <ToggleButtonGroup
          orientation="vertical"
          value={curTheme}
          exclusive
          onChange={onThemeChange}
        >
          <ToggleButton
            className="btn-light"
            value={lightTheme}
            aria-label="light"
          >
            Светлая тема
          </ToggleButton>
          <ToggleButton
            className="btn-dark"
            value={darkTheme}
            aria-label="dark"
          >
            Темная тема
          </ToggleButton>
          <ToggleButton
            className="btn-blue"
            value={blueTheme}
            aria-label="blue"
          >
            Синяя тема
          </ToggleButton>
        </ToggleButtonGroup>
      </ThemeProvider>
    </Container>
  );
}
