import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { getPageName } from './helpers';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Themes from './pages/Themes';
import NewsFeed from './pages/NewsFeed';
import Page404 from './pages/Page404';
import { useTheme } from './hooks/useTheme';

// TODO: вынести все стили в отдельный файл

function App() {
  const [page, setPage] = useState(getPageName(window.location.pathname));

  // Название темы необходимо для работы ToggleGroup
  const [themeName, setThemeName] = useState(() => {
    const localThemeName = JSON.parse(localStorage.getItem('theme'))?.palette
      ?.type;

    return localThemeName || 'light';
  });

  const {
    themeLoading,
    themeErrorMsg,
    themeData: curTheme,
  } = useTheme(themeName);

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
