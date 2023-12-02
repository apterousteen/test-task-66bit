import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import {
  blueTheme,
  colors,
  currentTheme,
  darkTheme,
  lightTheme,
} from './themeStyles';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { useEffect, useLayoutEffect, useState } from 'react';
import Themes from './components/Themes';

function App() {
  // const [curTheme, setCurTheme] = useState('light');
  const [curTheme, setCurTheme] = useState(currentTheme);

  const changeAppTheme = (themeObj) => {
    console.log('changeAppTheme func');
    console.log(themeObj);

    const { name, mainColor, secondColor, textColor } = themeObj;
    console.log(name, mainColor, secondColor, textColor);

    currentTheme.palette.primary.main = mainColor;
    currentTheme.palette.primary.dim = colors.dim[name];
    currentTheme.palette.secondary.main = secondColor;
    currentTheme.palette.textColor = textColor;
    currentTheme.typography.allVariants.color = textColor;

    if (name === 'light') {
      console.log("name === 'light'");
      currentTheme.palette.error.main = colors.error.light.main;
      currentTheme.palette.error.icon = colors.error.light.icon;
      currentTheme.palette.error.text = colors.error.light.text;
      currentTheme.palette.info.main = colors.info.light.main;
      currentTheme.palette.info.icon = colors.info.light.icon;
      currentTheme.palette.info.text = colors.info.light.text;
    } else {
      console.log("name !== 'light'");
      currentTheme.palette.error.main = colors.error.dark.main;
      currentTheme.palette.error.icon = colors.error.dark.icon;
      currentTheme.palette.error.text = colors.error.dark.text;
      currentTheme.palette.info.main = colors.info.dark.main;
      currentTheme.palette.info.icon = colors.info.dark.icon;
      currentTheme.palette.info.text = colors.info.dark.text;
    }
  };

  // const changeAppTheme = (themeObj) => {
  //   console.log('changeAppTheme func');
  //   console.log(themeObj);
  //
  //   const { name, mainColor, secondColor, textColor } = themeObj;
  //   console.log(name, mainColor, secondColor, textColor);
  //
  //   if (name === 'light') theme = lightTheme;
  //   else if (name === darkTheme) theme = darkTheme;
  //   else if (name === blueTheme) theme = blueTheme;
  //
  //   console.log(theme);
  // };

  const handleThemeChange = (e, newCurTheme) => {
    setCurTheme(newCurTheme || 'light');
  };

  const THEME_GET_ENDPOINT = 'https://frontappapi.dock7.66bit.ru/api/theme/get';

  // useLayoutEffect(() => {
  //   console.log('THEMES useEffect');
  //   const fetchTheme = async (themeName) => {
  //     console.log('fetchTheme');
  //
  //     const response = await fetch(`${THEME_GET_ENDPOINT}?name=${themeName}`);
  //     const themeObj = await response.json();
  //
  //     changeAppTheme(themeObj);
  //   };
  //
  //   fetchTheme(curTheme);
  // }, [curTheme]);

  return (
    <ThemeProvider theme={curTheme}>
      <CssBaseline />
      <Header heading="News" />
      <Main>
        {/*<NewsFeed />*/}
        <Themes curTheme={curTheme} onThemeChange={handleThemeChange} />
      </Main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
