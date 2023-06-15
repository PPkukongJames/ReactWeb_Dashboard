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



import set50 from './data/import_data/json/Set_unit50.json'
import ApexChart from './unit_step'
import logo from "./img/ideatrade_logo.png";
import VuiButton from "components/VuiButton";

let t_set50 = ''
let c_set50 = ''


if (set50['unit'][set50['unit'].length-1]-set50['unit'][set50['unit'].length-2]===0){
  c_set50 = {color:'white',fontSize:"15px"}
  t_set50 ='คงเดิมจากเมื่อวาน'
}else{
  c_set50 = {color:(set50['unit'][set50['unit'].length-1]-set50['unit'][set50['unit'].length-2]<0? 'red':'green'),fontSize:"15px"}
  t_set50 = (set50['unit'][set50['unit'].length-1]-set50['unit'][set50['unit'].length-2]<0? 'ลดจากเมื่อวาน ':'เพิ่มจากเมื่อวาน ')+set50['unit'][set50['unit'].length-1]-set50['unit'][set50['unit'].length-2]+" คะแนน"
}


function Set50_U() {
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
        <VuiBox mb={1}>
          <Grid container spacing="18px">
            <Grid item xs={12} lg={12} xl={12}>
            <Card>
                <VuiBox sx={{ height: "100%" }}>
                <VuiTypography variant="button" color="text" fontWeight="regular">
                        {/* {set50['date'][set50['date'].length-1]} */}
                  </VuiTypography>
                  <div></div>
                <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                    SET50
                  </VuiTypography>
                  {/* <div style={{color:"wheat"}}>
                      {set50['unit'][set50['unit'].length-1]} คะแนน
                    </div>
                  <div style={c_set50}>
                      {t_set50}
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
                      name = {'SET50'}
                      data = {set50['index']}
                      time = {set50['date']}
                      unit = {set50['unit']}
                      color = {"#00FF7F"}
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


export default Set50_U