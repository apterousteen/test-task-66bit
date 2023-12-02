import { useEffect, useState } from 'react';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { colors, defaultTheme } from './themeStyles';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Themes from './components/Themes';
import NewsFeed from './components/NewsFeed';
import { THEME_GET_ENDPOINT } from './config';

// TODO: вынести все стили в отдельный файл

function App() {
  const [curTheme, setCurTheme] = useState(defaultTheme);
  // Название темы необходимо для работы ToggleGroup
  const [themeName, setThemeName] = useState('light');

  const changeAppTheme = (themeObj) => {
    const { name, mainColor, secondColor, textColor } = themeObj;

    let themeConfig = {
      palette: {
        type: name,
        primary: {
          main: mainColor,
          dim: colors.dim[name],
        },
        secondary: {
          main: secondColor,
        },
        textColor: {
          main: textColor,
        },
        ...(name === 'light' && { ...colors.lightErrorInfo }),
        ...(name !== 'light' && { ...colors.darkErrorInfo }),
      },

      typography: {
        allVariants: {
          color: textColor,
        },
      },
    };

    setCurTheme(createTheme(themeConfig));
  };

  const handleThemeNameToggle = (e, newThemeName) => {
    // Отключение поведения toggle у кнопки
    if (newThemeName !== null) {
      setThemeName(newThemeName);
    }
  };

  useEffect(() => {
    const fetchTheme = async (themeName) => {
      console.log('fetchTheme');

      const response = await fetch(`${THEME_GET_ENDPOINT}?name=${themeName}`);

      changeAppTheme(await response.json());
    };

    if (!themeName) {
      setCurTheme(defaultTheme);
      return;
    }

    fetchTheme(themeName);
  }, [themeName]);

  // TODO: убрать, когда будет роутинг
  const [page, setPage] = useState('news');

  const handlePageNavigation = (pageName) => {
    setPage(pageName);
  };

  return (
    <ThemeProvider theme={curTheme}>
      <CssBaseline />
      <Header heading="News" />
      <Main>
        {/*TODO: нормальный роутинг*/}
        {page === 'news' && <NewsFeed />}
        {page === 'themes' && (
          <Themes
            themeName={themeName}
            onThemeNameToggle={handleThemeNameToggle}
          />
        )}
      </Main>
      <Footer page={page} onPageNavigation={handlePageNavigation} />
    </ThemeProvider>
  );
}

export default App;
