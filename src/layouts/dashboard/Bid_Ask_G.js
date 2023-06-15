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

import { ButtonGroup, Card, Checkbox, LinearProgress, Stack } from "@mui/material";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";


// Vision UI Dashboard React base styles

import colors from "assets/theme/base/colors";


// React icons

// Data
import LineChart from "examples/Charts/LineCharts/LineChart";


import logo from "./img/ideatrade_logo.png";
import VuiButton from "components/VuiButton";
import { Check, CheckBox, CheckBoxOutlineBlankTwoTone, CheckBoxTwoTone } from "@mui/icons-material";
import React, { useState } from "react";
import Bid_Ask_Data from "./data/Bid_Ask_class";

// import dataSec_Graph from "./data/ValueBySector";



function Bid_Ask_Graph() {
  const { gradients } = colors;
  const { cardContent } = gradients;
  return (
    <>
      {/* <DashboardNavbar/> */}
      <VuiBox py={3}>
      <Card style={{marginBottom:"5px"}}>
      <p style={{marginBottom:"5px"}}>
      <a href="/dashboard" target="_blank"><img src={logo} align="absbottom" width="100px"  style={{display:"inline"}}/></a>
        <ButtonGroup>
        {/* <VuiButton variant="text" href='/dashboard' target="_blank"><div style={{marginTop:"6.5px"}}>Dashboard</div></VuiButton> */}
        <VuiButton variant="text" href='/dashboard/USD' target="_blank" ><p style={{marginTop:"6.5px",fontSize:"12px"}}>USDTHB</p></VuiButton>
          <VuiButton variant="text" href='/dashboard/Set_MKB' target="_blank" ><p style={{marginTop:"6.5px",fontSize:"12px"}}>SET</p></VuiButton>
        <VuiButton variant="text" href='/dashboard/Set50_MKB' target="_blank" ><p style={{marginTop:"6.5px",fontSize:"12px"}}>SET50</p></VuiButton>
        <VuiButton variant="text" href='/dashboard/Mai_MKB' target="_blank" ><p style={{marginTop:"6.5px",fontSize:"12px"}}>MAI</p></VuiButton>
          <VuiButton variant="text" href='/dashboard/Bid_Ask_Graph' target="_blank"><p style={{marginTop:"6.5px",fontSize:"12px"}}>Bid Ask Ratio</p></VuiButton>      
        </ButtonGroup></p>
        </Card>  
     
        <VuiBox mb={2}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={12} xl={12}>
              <Card>
                <VuiBox sx={{ height: "100%" }}>
                  <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                  ชีพจรหุ้น เทียบกับ รูปแบบ Bid Ask Ratio
                  </VuiTypography>
                  <VuiBox sx={{ height: "500px" }}>
                    <Bid_Ask_Data/>
                  </VuiBox>
                </VuiBox>
              </Card>
            </Grid>
          </Grid>
        </VuiBox>
      </VuiBox>
      {/* <Footer /> */}
    </>
  );
}

export default Bid_Ask_Graph;
