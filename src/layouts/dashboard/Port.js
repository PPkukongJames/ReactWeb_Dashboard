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


// Vision UI Dashboard React example components

import Footer from "examples/Footer";


// Vision UI Dashboard React base styles

import colors from "assets/theme/base/colors";


import LineChart from "examples/Charts/LineCharts/LineChart";

import { lineChartDataSet_100, lineChartOptionsSet_100 } from "./data/SET100";
import WFII from './data/import_data/json/WFII.json'
import S_100 from './data/import_data/json/Winner_SET100.json'

import logo from "./img/ideatrade_logo.png";
import VuiButton from "components/VuiButton";



let S_100_g=[[],[],[]]

for (let i=0;i<S_100.length;i++){
  S_100_g[0].push(S_100[i]['Time'])
  S_100_g[1].push(S_100[i]['SET100'])
  S_100_g[2].push(S_100[i]['Percent Capital'])
}


function Dashboard() {
  const { gradients } = colors;
  const { cardContent } = gradients;


  return (
    <>
      {/* <DashboardNavbar/> */}
      <VuiBox py={1}>
      <Card style={{marginBottom:"5px"}}>
      <p style={{marginBottom:"10px"}}>
      <a href="/dashboard" target="_blank"><img src={logo} align="absbottom" width="100px"  style={{display:"inline"}}/></a>
          <ButtonGroup >
          {/* <VuiButton variant="contained" color="info" href='/dashboard'>Dashboard</VuiButton> */}
          <VuiButton variant="text" href='/dashboard/USD' target="_blank" ><p style={{marginTop:"6.5px",fontSize:"18px"}}>USDTHB</p></VuiButton>
          <VuiButton variant="text" href='/dashboard/Set_MKB' target="_blank" ><p style={{marginTop:"6.5px",fontSize:"18px"}}>SET</p></VuiButton>
          <VuiButton variant="text" href='/dashboard/Set50_MKB' target="_blank" ><p style={{marginTop:"6.5px",fontSize:"18px"}}>SET50</p></VuiButton>
          <VuiButton variant="text" href='/dashboard/Mai_MKB' target="_blank" ><p style={{marginTop:"6.5px",fontSize:"18px"}}>MAI</p></VuiButton>
          <VuiButton variant="text" href='/dashboard/Bid_Ask_Graph' target="_black"><p style={{marginTop:"6.5px",fontSize:"18px"}}>Bid Ask Ratio</p></VuiButton>
          </ButtonGroup>
          </p>
        </Card>    
          <VuiBox mb={2}>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={12} xl={12}>
                <Card>
                  <VuiBox sx={{ height: "100%" }}>
                    <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                      Set100
                    </VuiTypography>
                    <VuiBox sx={{ height: "440px" }}>
                      <LineChart
                        lineChartData={lineChartDataSet_100}
                        lineChartOptions={lineChartOptionsSet_100}
                      />
                    </VuiBox>
                  </VuiBox>
                </Card>
              </Grid>
              {/* <BarChart
                  barChartData={barChartDataDashboard}
                  barChartOptions={barChartOptionsDashboard}
              /> */}
            </Grid>
          </VuiBox>

        
        {/* <Grid container spacing={3} direction="row" justifyContent="center" alignItems="stretch">
          <Grid item xs={12} md={6} lg={8}>
            <Projects />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <OrderOverview />
          </Grid>
        </Grid> */}
      </VuiBox>
      {/* <Footer /> */}
    </>
  );
}

export default Dashboard;
