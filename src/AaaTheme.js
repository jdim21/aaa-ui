import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#82e9de',
      main: '#4db6ac',
      dark: '#00867d',
      contrastText: '#fff',
    },
    secondary: {
      light: '#82e9de',
      main: '#4db6ac',
      dark: '#00867d',
      contrastText: '#000',
    },
    background: {
      default: '#4db6ac',
    },
  },
  typography: {
    fontFamily: [
      'Andale Mono',
    ].join(','),
    fontWeight: 400,
    color: 'white',
  },
});

export default theme;