import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { colors, defaultTheme } from './themeStyles';
import { THEME_GET_ENDPOINT } from './config';
import { getPageName, timeout } from './helpers';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Themes from './pages/Themes';
import NewsFeed from './pages/NewsFeed';
import Page404 from './pages/Page404';

// TODO: вынести все стили в отдельный файл

function App() {
  // Название темы необходимо для работы ToggleGroup
  const [themeName, setThemeName] = useState(() => {
    const localThemeName = JSON.parse(localStorage.getItem('theme'))?.palette
      ?.type;

    return localThemeName || 'light';
  });

  const [curTheme, setCurTheme] = useState(defaultTheme);
  const [themeLoading, setThemeLoading] = useState(false);
  const [themeErrorMsg, setThemeErrorMsg] = useState('');
  const [page, setPage] = useState(getPageName(window.location.pathname));

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

  const handlePageNavigation = (pageName) => {
    setPage(pageName);
  };

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(curTheme));
  }, [curTheme]);

  useEffect(() => {
    const controller = new AbortController();
    const fetchTheme = async (themeName) => {
      try {
        console.log('fetchTheme');

        setThemeLoading(true);
        setThemeErrorMsg('');

        const fetchPromise = fetch(`${THEME_GET_ENDPOINT}?name=${themeName}`, {
          signal: controller.signal,
        });

        const res = await Promise.race([fetchPromise, timeout(4)]);

        if (!res.ok) throw new Error(`Что-то пошло не так. Попробуйте снова`);

        changeAppTheme(await res.json());

        setThemeErrorMsg('');
      } catch (e) {
        if (e.name !== 'AbortError') {
          setThemeErrorMsg(e.message);
        }
      } finally {
        setThemeLoading(false);
      }
    };

    if (!themeName) {
      setCurTheme(defaultTheme);
      return;
    }

    fetchTheme(themeName);

    return () => {
      // прерываем предыдущий запрос, чтобы не было race condition
      controller.abort();
    };
  }, [themeName]);

  return (
    <ThemeProvider theme={curTheme}>
      <CssBaseline />
      <Header heading={page} />
      <Main>
        <Routes>
          <Route path={'/'} element={<NewsFeed />} />
          <Route
            path={'themes'}
            element={
              <Themes
                themeName={themeName}
                themeLoading={themeLoading}
                themeErrorMsg={themeErrorMsg}
                onThemeNameToggle={handleThemeNameToggle}
              />
            }
          />
          <Route path={'*'} element={<Page404 />} />
        </Routes>
      </Main>
      <Footer page={page} onPageNavigation={handlePageNavigation} />
    </ThemeProvider>
  );
}

export default App;
