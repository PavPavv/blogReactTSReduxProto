import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

//  logic
import { theme } from './components/ui/theme';

//  ui
import MainRouter from './main-router';

import './App.css';

const App = (): JSX.Element => {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <MainRouter />
      </ThemeProvider>
    </CssBaseline>
  );
};

export default App;
