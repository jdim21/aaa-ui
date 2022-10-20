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
import Button from '@mui/material/Button';
import { AptosAccount } from "aptos";
import wagBannerGif from './wagBannerGif.gif';
import mintGif from './mintGif.gif';
import Footer from './Footer';
import axios from 'axios';
import { useEffect, useState } from 'react';

const apiGateway = "https://i2afgnpv59.execute-api.us-east-1.amazonaws.com/"

const Mint = () => {
  const theme = useTheme();
  const ref = useRef(null);
  const [remaining, setRemaining] = useState("????");
  useEffect(() => {
    // axios.get('https://kn9qjl4uc6.execute-api.us-east-2.amazonaws.com/')
    // axios.get('http://localhost:3001/')
    axios.get(apiGateway)
    .then(response => {
      var result = JSON.stringify(response["data"]);
      setRemaining(result);
    })
  }, []);
  return (
    <div style={{height: "100vh", backgroundImage: wagBannerGif, backgroundColor: theme.palette.primary.light}} fontFamily={theme.typography.fontFamily} ref={ref} id={"mint"}>
    <Footer></Footer>
      <Box sx={{
        width: 500,
        height: 500,
        backgroundColor: 'primary.main',
        margin: "0 auto", 
        marginTop: "2rem",
        borderRadius: 8,
        boxShadow: 16,
      }}>
        <Typography color={"white"} sx={{pt: 5, pb: 1}} variant="h3" fontWeight="bold">MINT NFT</Typography>
        {/* <Typography color={theme.palette.primary.dark} sx={{pt: 5, pb: 1}} variant="h3" fontWeight="bold">MINT NFT</Typography> */}
        <Box sx={{borderRadius: 12, paddingTop: "1.5rem"}}>
          <img src={mintGif}></img>
        </Box>
        <Button variant="contained" style={{marginTop: "1rem", marginRight: "1rem"}} sx={{color: 'primary.dark', backgroundColor: 'primary.light'}}onClick={mintWag}>
          MINT
        </Button>
        <Button variant="contained" style={{marginTop: "1rem", marginLeft: "1rem"}} sx={{color: 'primary.dark', backgroundColor: 'primary.light'}}onClick={claimMint}>
          CLAIM MINT
        </Button>
        <div style={{marginTop: "1rem"}}></div>
        <Typography color={"white"} sx={{pt: 5, pb: 1}} variant="p" fontWeight="bold">Remaining: {remaining.toString()} / 5000</Typography>
      </Box>
      <Typography color={theme.palette.primary.dark} sx={{pt: 5, pb: 1}} variant="h4" fontWeight="bold">Instructions:</Typography>
      <Typography color={theme.palette.primary.dark} sx={{pt: 0, pb: 1}} variant="h6" fontWeight="bold">1: Make sure you have the Martian Wallet Extension installed.</Typography>
      <Typography color={theme.palette.primary.dark} sx={{pt: 0, pb: 1}} variant="h6" fontWeight="bold">2: Press the "MINT" button to pay for the mint and create an offer. Wait a few seconds for the transaction.</Typography>
      <Typography color={theme.palette.primary.dark} sx={{pt: 0, pb: 1}} variant="h6" fontWeight="bold">3: Press "CLAIM MINT" to receive your minted token in a second transaction.</Typography>
      <Typography color={theme.palette.primary.dark} sx={{pt: 1, mb: 2}} variant="h7">Explanation: The first transaction pays for the mint and creates a new token offered to you. The second transaction claims the token since Aptos does NOT allow tokens to be sent to you unless you ask for them!</Typography>
    </div>
  );
}

async function mintWag(){
  // Create a transaction
  try {
    const response = await window.martian.connect();
    const sender = response.address;
    const payload = {
      function: "0x1::coin::transfer",
      type_arguments: ["0x1::aptos_coin::AptosCoin"],
      arguments: ["0xc7128b58e35237a9c101c9f1746e751a8a883c45cb2a7d781e9d09ac7f0e6849", 50]
    };
    const transaction = await window.martian.generateTransaction(sender, payload);
    const txnHash = await window.martian.signAndSubmitTransaction(transaction);
    console.log("txnHash; " + JSON.stringify(txnHash));
    const requestOptions = {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
    }
    const url = apiGateway + 'mint-payment?address=' + sender + '&txnHash=' + txnHash;
    // const url = 'http://localhost:3001/mint-payment?address=' + sender + '&txnHash=' + txnHash;
    // const url = 'http://localhost:3001/mint-payment?address=' + JSON.stringify(sender) + '&txnHash=' + JSON.stringify(txnHash);
    console.log("url to fetch: " + url);
    const fetchRes = await fetch(
      url, requestOptions
    ).then(response => {
      console.log(response.statusText);
      return response.text();
    }).catch(e => JSON.stringify(e));
    console.log("fetchRes: " + fetchRes);
  } catch (e) {
    console.log("Error minting: " + JSON.stringify(e));
  } 
}


async function claimMint(){
  // Create a transaction
  const response = await window.martian.connect();
  const sender = response.address;

  // Get offer
    const requestOptions = {
      method: "GET",
      headers: { 'Content-Type': 'application/json' },
    }
  const url = apiGateway+ 'get-offer?address=' + sender;
  // const url = 'http://localhost:3001/get-offer?address=' + sender;
  console.log("url to fetch: " + url);
  const fetchRes = await fetch(
    url, requestOptions
  ).then(response => {
    console.log(response.statusText);
    return response.text();
  }).catch(e => JSON.stringify(e));
  console.log("fetchRes: " + fetchRes);
  if (fetchRes != "unknown" && fetchRes != null && fetchRes != undefined)
  {
    console.log("sender: " + sender);
    console.log("fetchRes.tokenName: " + fetchRes);
    // type_arguments: ["0x1::aptos_coin::AptosCoin"],
    // const sender = "0xc7128b58e35237a9c101c9f1746e751a8a883c45cb2a7d781e9d09ac7f0e6849";
    const creator = "0xc7128b58e35237a9c101c9f1746e751a8a883c45cb2a7d781e9d09ac7f0e6849";
    const collectionName = "TWAG2";
    const name = fetchRes;
    const property_version = 0;
    // const payload = this.transactionBuilder.buildTransactionPayload(
    //     "0x3::token_transfers::claim_script",
    //     [],
    //     [sender, creator, collectionName, name, property_version],
    //   );
    // const senderAccount = await window.martian.getAccount(sender);
    // const senderAccount = new AptosAccount(undefined, sender);
    const senderAccount = new AptosAccount(undefined, sender);
    console.log("sender: " + JSON.stringify(sender));
    console.log("creator: " + JSON.stringify(creator));
    const payload = {
      function: "0x3::token_transfers::claim_script",
      type_arguments: [],
      arguments: [
        // sender,
        creator,
        creator,
        collectionName,
        name,
        property_version
      ],
    };
    console.log("payload: " + JSON.stringify(payload));
    // const payload = {
    //   function: "0x3::token_transfers::claim_script",
    //   type_arguments: [],
    //   arguments: [
    //     "0xc7128b58e35237a9c101c9f1746e751a8a883c45cb2a7d781e9d09ac7f0e6849",
    //     "0x9de454945a0f8dea24a5754a530612571c91ab0c33fdc02f362da9891d7131cf",
    //     "TWAG",
    //     "TWAG#2",
    //     "0"
    //   ],
    // };
    const transaction = await window.martian.generateTransaction(sender, payload).catch((e) => {
      console.log("Error genTxn: " + JSON.stringify(e));
    });
    try {
      const txnHash = await window.martian.signAndSubmitTransaction(transaction)
      // const signedHash = await window.martian.signTransaction(transaction)
      // const txnHash = await window.martian.submitTransaction(signedHash)
      const urlMarkChecked = apiGateway + 'mark-offer-checked?tokenId=' + name.split('#')[1];
      // const urlMarkChecked = 'http://localhost:3001/mark-offer-checked?tokenId=' + name.split('#')[1];
      console.log("urlMarkChecked: " + urlMarkChecked);
      const requestOptionsMarkChecked = {
        method: "GET",
        headers: { 'Content-Type': 'application/json' },
      }
      const fetchResUpdateChecked = await fetch(
        urlMarkChecked, requestOptionsMarkChecked
      ).then(response => {
        console.log(response.statusText);
        return response.text();
      }).catch(e => {
        console.log("Error updating marked checked: " + JSON.stringify(e));
      });
      console.log("fetchRes: " + fetchRes);
    } catch (error) {
      console.log("Error signing and submitting transaction: " + JSON.stringify(error));
    }

  }
  else
  {
    alert("No claimable mints detected.");
    console.log("Couldn't get offer");
  }
  // return;

}

export default Mint;