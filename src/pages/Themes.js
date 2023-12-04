import {
  ToggleButton,
  ToggleButtonGroup,
  Alert,
  Container,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { radioButtonTheme } from '../themeStyles';
import { themeNames } from '../config';

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

const alertInfoStyle = {
  bgcolor: 'info.main',
  '& .MuiAlert-message': {
    color: 'info.text',
  },
  '& .MuiAlert-icon': {
    color: 'info.icon',
  },
};

const alertErrorStyle = {
  width: '65vw',
  bgcolor: 'error.main',
  '& .MuiAlert-message': {
    color: 'error.text',
  },
  '& .MuiAlert-icon': {
    color: 'error.icon',
  },
};

export default function Themes({
  themeName,
  themeLoading,
  themeErrorMsg,
  onThemeNameToggle,
}) {
  return (
    <Container sx={themesContainerStyle}>
      {!themeErrorMsg && (
        <Alert severity="info" sx={alertInfoStyle}>
          {themeLoading && 'Загрузка темы...'}
          {!themeLoading && (
            <>
              Выбрана <b>{themeNames[themeName]}</b> тема
            </>
          )}
        </Alert>
      )}
      {themeErrorMsg && (
        <Alert severity="error" sx={alertErrorStyle}>
          {themeErrorMsg}
        </Alert>
      )}
      <ThemeProvider theme={radioButtonTheme}>
        <ToggleButtonGroup
          orientation="vertical"
          value={themeName}
          exclusive
          onChange={onThemeNameToggle}
        >
          <ToggleButton className="btn-light" value="light" aria-label="light">
            Светлая тема
          </ToggleButton>
          <ToggleButton className="btn-dark" value="dark" aria-label="dark">
            Темная тема
          </ToggleButton>
          <ToggleButton className="btn-blue" value="blue" aria-label="blue">
            Синяя тема
          </ToggleButton>
        </ToggleButtonGroup>
      </ThemeProvider>
    </Container>
  );
}
