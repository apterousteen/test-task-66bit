import { createTheme } from '@mui/material/styles';

export const blueTheme = createTheme({
  palette: {
    primary: {
      main: 'rgb(34, 22, 105)',
      dim: 'rgb(118 115 135)',
    },
    secondary: {
      main: 'rgb(41, 67, 153)',
    },
    textColor: {
      main: 'rgb(201, 201, 201)',
    },
    error: {
      main: 'rgb(22, 11, 11)',
      icon: 'rgb(244, 67, 54)',
      text: 'rgb(244, 199, 199)',
    },
    info: {
      main: 'rgb(7, 19, 24)',
      icon: 'rgb(41, 182, 246)',
      text: 'rgb(184, 231, 251)',
    },
  },
  typography: {
    allVariants: {
      color: 'rgb(201, 201, 201)',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: 'rgb(25, 25, 25)',
      dim: 'rgb(120 120 120)',
    },
    secondary: {
      main: 'rgb(111, 103, 120)',
    },
    textColor: {
      main: 'rgb(209, 187, 46)',
    },
    error: {
      main: 'rgb(22, 11, 11)',
      icon: 'rgb(244, 67, 54)',
      text: 'rgb(244, 199, 199)',
    },
    info: {
      main: 'rgb(7, 19, 24)',
      icon: 'rgb(41, 182, 246)',
      text: 'rgb(184, 231, 251)',
    },
  },
  typography: {
    allVariants: {
      color: 'rgb(209, 187, 46)',
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: 'rgb(206, 240, 227)',
      dim: 'rgb(122 144 135)',
    },
    secondary: {
      main: 'rgb(255, 255, 255)',
    },
    textColor: {
      main: 'rgb(10, 10, 10)',
    },
    error: {
      main: 'rgb(253, 237, 237)',
      icon: 'rgb(211 47 47)',
      text: 'rgb(95, 33, 32)',
    },
    info: {
      main: 'rgb(229, 246, 253)',
      icon: 'rgb(2 136 209)',
      text: 'rgb(1, 67, 97)',
    },
  },
  typography: {
    allVariants: {
      color: 'rgb(10, 10, 10)',
    },
  },
});

// Дополнительные цвета не из API
export const colors = {
  info: {
    light: {
      main: 'rgb(229, 246, 253)',
      icon: 'rgb(2 136 209)',
      text: 'rgb(1, 67, 97)',
    },
    dark: {
      main: 'rgb(7, 19, 24)',
      icon: 'rgb(41, 182, 246)',
      text: 'rgb(184, 231, 251)',
    },
  },

  error: {
    light: {
      main: 'rgb(253, 237, 237)',
      icon: 'rgb(211 47 47)',
      text: 'rgb(95, 33, 32)',
    },
    dark: {
      main: 'rgb(22, 11, 11)',
      icon: 'rgb(244, 67, 54)',
      text: 'rgb(244, 199, 199)',
    },
  },

  dim: {
    light: 'rgb(122 144 135)',
    dark: 'rgb(120 120 120)',
    blue: 'rgb(118 115 135)',
  },
};

// Тема MUI не может быть пустой, так что по умолчанию данные светлой темы
// Также приложение будет корректно отображаться при отсутствии связи с сервером
export const currentTheme = createTheme({
  palette: {
    primary: {
      main: 'rgb(206, 240, 227)',
      dim: colors.dim.light,
    },
    secondary: {
      main: 'rgb(255, 255, 255)',
    },
    textColor: 'rgb(10, 10, 10)',
    error: {
      main: colors.error.light.main,
      icon: colors.error.light.icon,
      text: colors.error.light.text,
    },
    info: {
      main: colors.info.light.main,
      icon: colors.info.light.icon,
      text: colors.info.light.text,
    },
  },

  typography: {
    allVariants: {
      color: 'rgb(10, 10, 10)',
    },
  },
});

// Стилизует радио кнопки как обычные
export const radioButtonTheme = createTheme({
  components: {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          height: '50px',
          width: '160px',
          margin: '20px 0',
          padding: '5px 15px',
          borderRadius: '4px!important',
          '&.btn-light': {
            color: 'rgb(10, 10, 10)',
            backgroundColor: 'rgb(255, 255, 255)',
            borderColor: 'rgb(206, 240, 227) !important',
          },
          '&.btn-dark': {
            color: 'rgb(209, 187, 46)',
            backgroundColor: 'rgb(111, 103, 120)',
            borderColor: 'rgb(25, 25, 25) !important',
          },
          '&.btn-blue': {
            color: 'rgb(201, 201, 201)',
            backgroundColor: 'rgb(41, 67, 153)',
            borderColor: 'rgb(34, 22, 105) !important',
          },
          '&.Mui-selected': {
            borderWidth: '4px !important',
          },
          '&:hover': {
            opacity: '0.9',
          },
        },
      },
    },
  },
});
