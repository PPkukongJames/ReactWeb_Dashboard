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

import { ButtonGroup, Card} from "@mui/material";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";


import colors from "assets/theme/base/colors";




import mai from './data/import_data/json/Mai_unit.json'
import logo from "./img/ideatrade_logo.png";
import VuiButton from "components/VuiButton";
import ApexChart from './unit_step'
let t_mai = ''
let c_mai = ''
let score = mai['unit'][mai['unit'].length-1]-mai['unit'][mai['unit'].length-2]
if (score==0){
  c_mai = {color:'white',fontSize:"15px"}
  t_mai ='คงเดิมจากเมื่อวาน'
}else{
  c_mai = {color:(score<0? 'red':'green'),fontSize:"15px"}
  t_mai = (score<0? 'ลดจากเมื่อวาน ':'เพิ่มจากเมื่อวาน ')+score+" คะแนน"
}

export function Mai_U() {
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
                        {/* {mai['date'][mai['date'].length-1]} */}
                  </VuiTypography>
                  <div></div>
                <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                    MAI
                  </VuiTypography>
                  {/* <div style={{color:"wheat"}}>
                      {mai['unit'][mai['unit'].length-1]} คะแนน
                    </div>
                  <div style={c_mai}>
                      {t_mai}
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
                      name = {'MAI'}
                      data = {mai['index']}
                      time = {mai['date']}
                      unit = {mai['unit']}
                      color = {"#e9ed6d"}
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

export default Mai_U