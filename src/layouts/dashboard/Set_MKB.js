/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import { ButtonGroup, Card, LinearProgress, Stack } from "@mui/material";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";


import colors from "assets/theme/base/colors";

import LineChart from "examples/Charts/LineCharts/LineChart";
import ApexChartMKB from './MKB';
import Set_M from './data/import_data/json/Set_MKB.json'

import logo from "./img/ideatrade_logo.png";
import VuiButton from "components/VuiButton";
import { Set_MKB_index, Set_MKB_macdP ,Set_MKB_macdSig  , Set_MKB_rsi } from "./data/Set_MKB_G";
window.Apex = {
  chart: {
    height: 250,
  },
  dataLabels: {
    enabled: false
  }
}

function Set_MKB() {
  const { gradients } = colors;
  const { cardContent } = gradients;

  return (
    <>
      {/* <DashboardNavbar/> */}
      <VuiBox py={1}>
      <Card style={{marginBottom:"5px"}}>
      <p style={{marginBottom:"5px"}}>
      <a href="/dashboard" target="_blank"><img src={logo} align="absbottom" width="100px"  style={{display:"inline"}}/></a>  
        <ButtonGroup>
        {/* <VuiButton variant="text" href='/dashboard' target="_blank"><div style={{marginTop:"6.5px"}}>Dashboard</div></VuiButton> */}
        <VuiButton variant="text" href='/dashboard/USD' target="_blank" ><p style={{marginTop:"6.5px",fontSize:"12px"}}>USDTHB</p></VuiButton>
          <VuiButton variant="contained" color="info" href='/dashboard/Set_MKB'  ><p style={{fontSize:"12px"}}>SET</p></VuiButton>
        <VuiButton  variant="text" href='/dashboard/Set50_MKB' target="_blank" ><p style={{marginTop:"6.5px",fontSize:"12x"}}>SET50</p></VuiButton>
        <VuiButton variant="text" href='/dashboard/Mai_MKB' target="_blank" ><p style={{marginTop:"6.5px",fontSize:"12px"}}>MAI</p></VuiButton>
          <VuiButton variant="text" href='/dashboard/Bid_Ask_Graph' target="_blank"><p style={{marginTop:"6.5px",fontSize:"12px"}}>Bid Ask Ratio</p></VuiButton>      
        </ButtonGroup></p>
        </Card> 
        <VuiBox mb={1}>
          <Grid container spacing="18px">
            <Grid item xs={12} lg={12} xl={12}>
            <Card>
                <VuiBox sx={{ height: "100%" }}>
                <VuiTypography variant="button" color="text" fontWeight="regular">
                <p style={{fontSize:"12px"}}>{Set_M['date'][Set_M['date'].length-1]}</p>
                  </VuiTypography>
                  <div align="middle">
                  <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                  <p style={{fontSize:"15px"}}>SET MKB</p>
                  </VuiTypography></div>
              
                  <VuiBox sx={{ height: "520px" }}>
                  <ApexChartMKB
                    name = {"SET"}
                    index = {Set_MKB_index}
                    macdSig = {Set_MKB_macdSig}
                    macdP = {Set_MKB_macdP}
                    rsi = {Set_MKB_rsi}
                  />
                  </VuiBox>
                </VuiBox>
              </Card>
            </Grid>  
          </Grid>
        </VuiBox>
      </VuiBox>
    </>
  );
}



export default Set_MKB