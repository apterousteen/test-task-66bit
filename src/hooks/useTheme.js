import { useState, useEffect } from 'react';
import { colors, defaultTheme } from '../themeStyles';
import { THEME_GET_ENDPOINT } from '../config';
import { timeout } from '../helpers';
import { createTheme } from '@mui/material/styles';

export const useTheme = (themeName) => {
  const [themeLoading, setThemeLoading] = useState(false);
  const [themeErrorMsg, setThemeErrorMsg] = useState('');
  const [themeData, setThemeData] = useState(defaultTheme);

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

    setThemeData(createTheme(themeConfig));
  };

  useEffect(() => {
    const controller = new AbortController();

    const fetchTheme = async () => {
      try {
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
      setThemeData(defaultTheme);
      return;
    }

    fetchTheme();

    return () => {
      controller.abort();
    };
  }, [themeName]);

  return { themeLoading, themeErrorMsg, themeData };
};
