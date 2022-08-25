import { useRef } from "react";
import { useTheme } from '@mui/material/styles'
import Container from '@mui/material/Container';
import { CssBaseline, Typography } from "@mui/material";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Card } from "@mui/material";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import aaaAvatarBillyJim from './aaaAvatarBillyJim.png';
import aaaAvatarTheGeneral from './aaaAvatarTheGeneral.png';
import aaaAvatarHoyt from './aaaAvatarHoyt.png';
import aaaAvatarIntern from './aaaAvatarIntern.png';
import discordLogo from './discordLogo.png';
import twitterLogo from './twitterLogo.png';
import { Avatar, Stack } from "@mui/material";
import { sizeHeight } from "@mui/system";

const About = () => {
  const theme = useTheme();
  const ref = useRef(null);
  return (
    <div style={{backgroundColor: theme.palette.primary.light}} fontFamily={theme.typography.fontFamily} ref={ref} id={"about"}>
      <Typography color={theme.palette.primary.dark} sx={{pt: 5, pb: 1}} variant="h3" fontWeight="bold">ABOUT</Typography>
      {/* <Grid display="flex" sx={{ px: 10, py: 5 }} container spacing={2} minHeight={160} columnSpacing={3} wrap="wrap" style={{flexWrap:"wrap"}}> */}
      {/* <Box sx={{display: 'flex', flexWrap: 'wrap'}}> */}
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent:'space-evenly'}}>
        {/* <Grid xs display="flex" justifyContent="center" alignItems="center" flexDirection="row"> */}
          <Stack>
          {/* <div style={{display:"flex"}}> */}
            <Avatar sx={{width: 128, height: 128, ml: 1.5}} src={aaaAvatarTheGeneral} />
            <Card sx={{my: 2, mr: 0, maxWidth:150}} backgroundColor={theme.palette.primary.dark}>
              <Typography sx={{px: 1}} backgroundColor={theme.palette.primary.main} color="white" variant="h6" fontWeight="bold">
                  The General
              </Typography>
              <Typography backgroundColor={theme.palette.primary.main} color="white" variant="body1" fontWeight="0">
                  Developer
              </Typography>
              <Box backgroundColor={theme.palette.primary.main}>
                <a href="https://discordapp.com/users/1008504367160238270">
                  <img width="24" height="24" src={discordLogo}>
                  </img>
                </a>
              </Box>
            </Card>
          </Stack>
          {/* </div> */}
        {/* </Grid> */}
        {/* <Grid xs display="flex" justifyContent="center" alignItems="center" flexDirection="row"> */}
          <Stack>
          {/* <div style={{display:"flex"}}> */}
            <Avatar sx={{width: 128, height: 128}} src={aaaAvatarBillyJim} />
            <Card sx={{my: 2, maxWidth:150}} backgroundColor={theme.palette.primary.dark}>
              <Typography sx={{px: 1}} backgroundColor={theme.palette.primary.main} color="white" variant="h6" fontWeight="bold">
                  Billy Jim
              </Typography>
              <Typography backgroundColor={theme.palette.primary.main} color="white" variant="body1" fontWeight="0">
                  Artist
              </Typography>
              <Box backgroundColor={theme.palette.primary.main}>
                <br/>
                {/* <img width="24" height="24" src={discordLogo}>
                </img> */}
              </Box>
            </Card>
          </Stack>
          {/* </div> */}
        {/* </Grid> */}
        {/* <Grid xs display="flex" justifyContent="center" alignItems="center" flexDirection="row"> */}
          <Stack>
          {/* <div style={{display:"flex"}}> */}
            <Avatar sx={{width: 128, height: 128}} src={aaaAvatarHoyt} />
            <Card sx={{my: 2, maxWidth:150}} backgroundColor={theme.palette.primary.dark}>
              <Typography sx={{px: 1}} backgroundColor={theme.palette.primary.main} color="white" variant="h6" fontWeight="bold">
                  Hoyt
              </Typography>
              <Typography backgroundColor={theme.palette.primary.main} color="white" variant="body1" fontWeight="2">
                  Product
              </Typography>
              <Box backgroundColor={theme.palette.primary.main}>
                <a href="https://twitter.com/wealthyaptgang">
                  <img width="28" height="24" src={twitterLogo}>
                  </img>
                </a>
                {/* <img width="24" height="24" src={discordLogo}>
                </img> */}
              </Box>
            </Card>
          </Stack>
          {/* </div> */}
        {/* </Grid> */}
        {/* <Grid xs display="flex" justifyContent="center" alignItems="center" flexDirection="row"> */}
          <Stack>
          {/* <div style={{display:"flex"}}> */}
            <Avatar sx={{width: 128, height: 128}} src={aaaAvatarIntern} />
            <Card sx={{my: 2, maxWidth:150}} backgroundColor={theme.palette.primary.dark}>
              <Typography sx={{px: 1}} backgroundColor={theme.palette.primary.main} color="white" variant="h6" fontWeight="bold">
                  The Intern
              </Typography>
              <Typography backgroundColor={theme.palette.primary.main} color="white" variant="body1" fontWeight="0">
                  The rest
              </Typography>
              <Box backgroundColor={theme.palette.primary.main}>
                <br/>
                {/* <img width="24" height="24" src={discordLogo}>
                </img> */}
              </Box>
            </Card>
          </Stack>
          {/* </div> */}
        {/* </Grid> */}
      </div>
      {/* </Grid> */}
    </div>);
}

export default About;