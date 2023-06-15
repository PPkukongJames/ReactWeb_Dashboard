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
import ApexChart from './unit_step'

import colors from "assets/theme/base/colors";


// Data
import LineChart from "examples/Charts/LineCharts/LineChart";
import BarChart from "examples/Charts/BarCharts/BarChart";
import { lineChartDataDashboard, lineChartOptionsDashboard  } from "layouts/dashboard/data/lineChartData";
import { lineChartDataSet, lineChartOptionsSet  } from "layouts/dashboard/data/Set_WFII";

// import {} from "layouts/dashboard/data/lineChartOptions";
import { barChartDataDashboard } from "layouts/dashboard/data/barChartData";
import { barChartOptionsDashboard } from "layouts/dashboard/data/barChartOptions";

import Divider from "@mui/material/Divider";


import set from './data/import_data/json/Set_unit.json'

import logo from "./img/ideatrade_logo.png";
import VuiButton from "components/VuiButton";
let t_set = ''
let c_set = ''
let score = set['unit'][set['unit'].length-1]-set['unit'][set['unit'].length-2]
if (score ==0){
  c_set = {color:'white',fontSize:"15px"}
  t_set ='คงเดิมจากเมื่อวาน'
}else{
  c_set = {color:(score<0? 'red':'green'),fontSize:"15px"}
  t_set = (score< 0 ? 'ลดจากเมื่อวาน ':'เพิ่มจากเมื่อวาน ')+ score +" คะแนน"
}



function Set_U() {
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
          <VuiButton variant="text" href='/dashboard/Bid_Ask_Graph' target="_blank"><p style={{marginTop:"6.5px",fontSize:"18px"}}>Bid Ask Ratio</p></VuiButton>
          </ButtonGroup>
          </p>
        </Card>   
        <VuiBox mb={1}>
          <Grid container spacing="18px">
            <Grid item xs={12} lg={12} xl={12}>
            <Card>
                <VuiBox sx={{ height: "100%" }}>
                <VuiTypography variant="button" color="text" fontWeight="regular">
                        {/* {set['date'][set['date'].length-1]} */}
                  </VuiTypography>
                  <div></div>
                  <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                    SET
                  </VuiTypography>
                    {/* <div style={{color:"wheat"}}>
                      {set['unit'][set['unit'].length-1]} คะแนน
                    </div>
                    <div style={c_set}>
                      {t_set}
                    </div> */}
                
                  {/* <VuiBox display="flex" alignItems="center" mb="40px">
                    <VuiTypography variant="button" color="success" fontWeight="bold">
                      +5% more{" "}
                      <VuiTypography variant="button" color="text" fontWeight="regular">
                        in 2021
                      </VuiTypography>
                    </VuiTypography>
                  </VuiBox> */}
                  <VuiBox sx={{ height: "500px" }}>
                  <ApexChart
                      name = {'set'}
                      data = {set['index']}
                      time = {set['date']}
                      unit = {set['unit']}
                      color = {"#FF0000"}
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



export default Set_U