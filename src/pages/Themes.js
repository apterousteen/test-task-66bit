import {
  ToggleButton,
  ToggleButtonGroup,
  Alert,
  Container,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { radioButtonTheme } from '../styles/themeStyles';
import { themeNames } from '../config';
import {
  themesAlertErrorStyle,
  themesAlertInfoStyle,
  themesContainerStyle,
} from '../styles/componentStyles';

export default function Themes({
  themeName,
  themeLoading,
  themeErrorMsg,
  onThemeNameToggle,
}) {
  return (
    <Container sx={themesContainerStyle}>
      {!themeErrorMsg && (
        <Alert severity="info" sx={themesAlertInfoStyle}>
          {themeLoading && 'Загрузка темы...'}
          {!themeLoading && (
            <>
              Выбрана <b>{themeNames[themeName]}</b> тема
            </>
          )}
        </Alert>
      )}
      {themeErrorMsg && (
        <Alert severity="error" sx={themesAlertErrorStyle}>
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
