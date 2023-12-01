import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme, blueTheme } from './themeStyles';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Header heading="News" />
      <Main />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
