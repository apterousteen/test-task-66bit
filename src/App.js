import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
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

export default function App() {
  let location = useLocation();
  const [page, setPage] = useState(getPageName(location));

  // Название темы необходимо для работы ToggleGroup
  // Получение названия темы из local storage
  const [themeName, setThemeName] = useState(() => {
    const localThemeName = JSON.parse(localStorage.getItem('theme'))?.palette
      ?.type;

    return localThemeName || 'light';
  });

  // Установка темы
  const {
    themeLoading,
    themeErrorMsg,
    themeData: curTheme,
  } = useTheme(themeName);

  // Сохранение темы в local storage
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(curTheme));
  }, [curTheme]);

  const handleThemeNameToggle = (e, newThemeName) => {
    // Отключение поведения toggle у кнопки
    if (newThemeName !== null) {
      setThemeName(newThemeName);
    }
  };

  // Для корректного отображения навигации
  useEffect(() => {
    setPage(getPageName(location));
  }, [location]);

  const handlePageNavigation = (pageName) => {
    setPage(pageName);
  };

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
