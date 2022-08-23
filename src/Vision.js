import { useRef } from "react";
import { useTheme } from '@mui/material/styles'
import Container from '@mui/material/Container';
import { CssBaseline, Typography } from "@mui/material";

const Vision = () => {
  const theme = useTheme();
  const ref = useRef(null);
  return (
    <Container fontFamily={theme.typography.fontFamily} ref={ref} id={"vision"}>
    <CssBaseline />
      <Typography color="white" sx={{pt: 5, pb: 1}} variant="h3" fontWeight="bold">VISION</Typography>
      <Typography color="white" sx={{pt: 1, pb: 5}} variant="h6" fontWeight="bold" >
        Wealthy Apdoge Gang aims to support the genesis of the Aptos Network as we believe
        it is the fastest and most secure layer 1 blockchain. NFTs are a crucial part of a growing ecosystem,
        and a doge themed PFP collection is a crucial part to having fun!
        The AAA team are NFT lovers and crypto enthusiasts looking to foster a like-minded community
        to explore and support the Aptos Network.
      </Typography>
    </Container>);
}

export default Vision;