import * as React from 'react';
import './App.css';
import ResponsiveAppBar from './ResponsiveAppBar';
import { Box, Stack, Paper, CssBaseline } from '@mui/material';
import { styled } from '@mui/material/styles';
import wagBannerGif from './wagBannerGif.gif';
import { ThemeProvider } from '@mui/material/styles';
import theme from './AaaTheme';
import Vision from './Vision';
import About from './About';
import Faq from './Faq';
import Footer from './Footer';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === '#1A2027',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  const ref = React.useRef(null);
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <div className="App">
      <ResponsiveAppBar></ResponsiveAppBar>
      <Box sx={{ width: '100%' }}>
        <Stack spacing={0}>
          <img ref={ref} id={"home"} className="imgFullWidth" src={wagBannerGif}>
          </img>
          <Vision></Vision>
          <About></About>
          <Faq></Faq>
        </Stack>
      </Box>
      <Footer></Footer>
    </div>
    </ThemeProvider>
  );
}

export default App;
