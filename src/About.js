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
import { Avatar, Stack } from "@mui/material";
import { sizeHeight } from "@mui/system";

const About = () => {
  const theme = useTheme();
  const ref = useRef(null);
  return (
    <div style={{backgroundColor: theme.palette.primary.light}} fontFamily={theme.typography.fontFamily} ref={ref} id={"about"}>
      <Typography color={theme.palette.primary.dark} sx={{pt: 5, pb: 1}} variant="h3" fontWeight="bold">ABOUT</Typography>
      <Box sx={{ flexGrow: 1 }}>
      <Grid sx={{ px: 10, py: 5 }} container spacing={2} minHeight={160}>
        <Grid xs display="flex" justifyContent="center" alignItems="center">
          <Stack>
            <Avatar sx={{width: 128, height: 128}} src={aaaAvatarTheGeneral} />
            <Card sx={{my: 2}} backgroundColor={theme.palette.primary.dark}>
              <Typography backgroundColor={theme.palette.primary.main} color="white" variant="h6" fontWeight="bold">
                  The General
              </Typography>
              <Typography backgroundColor={theme.palette.primary.main} color="white" variant="body1" fontWeight="0">
                  Developer
              </Typography>
              <Box backgroundColor={theme.palette.primary.main}>
                <img width="24" height="24" src={discordLogo} backgroundColor={theme.palette.primary.main}>
                </img>
              </Box>
            </Card>
          </Stack>
        </Grid>
        <Grid xs display="flex" justifyContent="center" alignItems="center">
          <Stack>
            <Avatar sx={{width: 128, height: 128}} src={aaaAvatarBillyJim} />
            <Card sx={{my: 2}} backgroundColor={theme.palette.primary.dark}>
              <Typography backgroundColor={theme.palette.primary.main} color="white" variant="h6" fontWeight="bold">
                  Billy Jim
              </Typography>
              <Typography backgroundColor={theme.palette.primary.main} color="white" variant="body1" fontWeight="0">
                  Artist
              </Typography>
              <Box backgroundColor={theme.palette.primary.main}>
                <img width="24" height="24" src={discordLogo} backgroundColor={theme.palette.primary.main}>
                </img>
              </Box>
            </Card>
          </Stack>
        </Grid>
        <Grid xs display="flex" justifyContent="center" alignItems="center">
          <Stack>
            <Avatar sx={{width: 128, height: 128}} src={aaaAvatarHoyt} />
            <Card sx={{my: 2}} backgroundColor={theme.palette.primary.dark}>
              <Typography backgroundColor={theme.palette.primary.main} color="white" variant="h6" fontWeight="bold">
                  Hoyt
              </Typography>
              <Typography backgroundColor={theme.palette.primary.main} color="white" variant="body1" fontWeight="2">
                  Product
              </Typography>
              <Box backgroundColor={theme.palette.primary.main}>
                <img width="24" height="24" src={discordLogo} backgroundColor={theme.palette.primary.main}>
                </img>
              </Box>
            </Card>
          </Stack>
        </Grid>
        <Grid xs display="flex" justifyContent="center" alignItems="center">
          <Stack>
            <Avatar sx={{width: 128, height: 128}} src={aaaAvatarIntern} />
            <Card sx={{my: 2}} backgroundColor={theme.palette.primary.dark}>
              <Typography backgroundColor={theme.palette.primary.main} color="white" variant="h6" fontWeight="bold">
                  The Intern
              </Typography>
              <Typography backgroundColor={theme.palette.primary.main} color="white" variant="body1" fontWeight="0">
                  The rest
              </Typography>
              <Box backgroundColor={theme.palette.primary.main}>
                <img width="24" height="24" src={discordLogo} backgroundColor={theme.palette.primary.main}>
                </img>
              </Box>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </Box>
      {/* <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={6}>
          <Item>1</Item>
        </Grid>
        <Grid xs={6}>
          <Item>2</Item>
        </Grid>
        <Grid xs={6}>
          <Item>3</Item>
        </Grid>
        <Grid xs={6}>
          <Item>4</Item>
        </Grid>
      </Grid> */}
        {/* <Grid container spacing={2} columns={2}>
          <Grid xs={1} md="auto">
            <Item>The General</Item>
          </Grid>
          <Grid xs={1} md="auto">
            <Item>Billy</Item>
          </Grid>
        </Grid> */}
      {/* </Box> */}
    </div>);
}

export default About;