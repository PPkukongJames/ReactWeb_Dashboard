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
import VuiProgress from "components/VuiProgress";


import colors from "assets/theme/base/colors";

// Data
import LineChart from "examples/Charts/LineCharts/LineChart";
import logo from "./img/ideatrade_logo.png"
import { lineChartDataSet, lineChartOptionsSet  } from "layouts/dashboard/data/Set_WFII";
import { lineChartDataSet_50, lineChartOptionsSet_50 } from "./data/Set50_WFII";
import { lineChartDataSSet, lineChartOptionsSSet  } from "layouts/dashboard/data/SSet_WFII";
import { lineChartDataMAI, lineChartOptionsMAI  } from "layouts/dashboard/data/Mai_WFII";


import WFII from './data/import_data/json/WFII.json'
import S_100 from './data/import_data/json/Winner_SET100.json'
import rankVBS from './data/import_data/json/Value_by_Sector_rank.json'
import rank_S from './data/import_data/json/Stock_rank.json'


import set from './data/import_data/json/Set_unit.json'
import set50 from './data/import_data/json/Set_unit50.json'
import mai from './data/import_data/json/Mai_unit.json'
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import { Link, Route } from "react-router-dom";
import VuiButton from "components/VuiButton";

let t_set = ''
let t_set50 = ''
let t_mai = ''
let c_set = {}
let c_set50 = {}
let c_mai = {}
if (set['unit'][set['unit'].length-1]-set['unit'][set['unit'].length-2]===0){
  c_set = {color:'white',fontSize:"15px"}
  t_set ='คงเดิมจากเมื่อวาน'
}else{
  c_set = {color:(set['unit'][set['unit'].length-1]-set['unit'][set['unit'].length-2]<0? 'red':'green'),fontSize:"15px"}
  t_set = (set['unit'][set['unit'].length-1]-set['unit'][set['unit'].length-2]<0? 'ลดจากเมื่อวาน ':'เพิ่มจากเมื่อวาน ')+set['unit'][set['unit'].length-1]-set['unit'][set['unit'].length-2]+" คะแนน"
}
if (set50['unit'][set50['unit'].length-1]-set50['unit'][set50['unit'].length-2]===0){
  c_set50 = {color:'white',fontSize:"15px"}
  t_set50 ='คงเดิมจากเมื่อวาน'
}else{
  c_set50 = {color:(set50['unit'][set50['unit'].length-1]-set50['unit'][set50['unit'].length-2]<0? 'red':'green'),fontSize:"15px"}
  t_set50 = (set50['unit'][set50['unit'].length-1]-set50['unit'][set50['unit'].length-2]<0? 'ลดจากเมื่อวาน ':'เพิ่มจากเมื่อวาน ')+set50['unit'][set50['unit'].length-1]-set50['unit'][set50['unit'].length-2]+" คะแนน"
}
if (mai['unit'][mai['unit'].length-1]-mai['unit'][mai['unit'].length-2]===0){
  c_mai = {color:'white',fontSize:"15px"}
  t_mai ='คงเดิมจากเมื่อวาน'
}else{
  c_mai = {color:(mai['unit'][mai['unit'].length-1]-mai['unit'][mai['unit'].length-2]<0? 'red':'green'),fontSize:"15px"}
  t_mai = (mai['unit'][mai['unit'].length-1]-mai['unit'][mai['unit'].length-2]<0? 'ลดจากเมื่อวาน ':'เพิ่มจากเมื่อวาน ')+mai['unit'][mai['unit'].length-1]-mai['unit'][mai['unit'].length-2]+" คะแนน"
}



let S_100_g=[[],[],[]]

for (let i=0;i<S_100.length;i++){
  S_100_g[0].push(S_100[i]['Time'])
  S_100_g[1].push(S_100[i]['SET100'])
  S_100_g[2].push(S_100[i]['Percent Capital'])
}
const k = WFII['Unit'][-1]
const date = WFII['Date'][WFII['Date'].length-1]

let num_S = S_100_g[2].length-1
let dif_S =S_100_g[2][num_S-2]-S_100_g[2][num_S-1]
let Port = <div>
              <h2>{S_100_g[2][num_S-1]}% <span style={{color:(dif_S<0? '#FF0000':'#00FF7F'),fontSize:"15px"}}>{(dif_S<0? "ลด":"เพิ่ม")}จากเมื่อวาน {dif_S}%</span></h2>
          </div>
if (dif_S==0){
  Port = <div>
              <h3>{S_100_g[2][num_S-1]}% ไม่มีการเปลี่ยนแปลง</h3>
          </div>
}
const detailsector = <p><div style={{marginTop:"10px",color:"#00FF7F"}}>
                      <div style={{marginTop:"10px",fontSize:"18px"}}>{rankVBS["1"]},{rankVBS["2"]}</div>
                      <div style={{fontSize:"12px"}}>{rank_S["one"][0]},{rank_S["one"][1]} {rank_S["two"][0]},{rank_S["two"][1]}</div>
                      </div>
                      <div style={{marginTop:"10px",color:"#FF0000"}}>
                      <div style={{marginTop:"10px",fontSize:"18px"}}>{rankVBS["3"]},{rankVBS["4"]}</div>
                      <div style={{fontSize:"12px"}}>{rank_S["three"][0]},{rank_S["three"][1]} {rank_S["four"][0]},{rank_S["four"][1]}</div>
                      </div>
                    </p>

function Vision() {
  const { gradients } = colors;
  const { cardContent } = gradients;

  return (
    <>
      {/* <DashboardNavbar /> */}
      <VuiBox py={3}>
        <VuiBox mb={2}>
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
        <Grid container spacing={2}>
            <Grid item xs={12} xl={12}  xxl={12}>
            <VuiBox mb={4}>
          <Grid container spacing="18px">
            <Grid item xs={12} lg={12} xl={12}>
            <Card>
                <VuiBox sx={{ height: "100%" }}>
                  <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                    SET
                  </VuiTypography>
                  <VuiBox sx={{ height: "310px" }}>
                    <LineChart
                      lineChartData={lineChartDataSet}
                      lineChartOptions={lineChartOptionsSet}
                    />
                  </VuiBox>
                </VuiBox>
              </Card>
            </Grid>
            <Grid item xs={12} lg={12} xl={12}>
            <Card>
                <VuiBox sx={{ height: "100%" }}>
                  <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                    SET50
                  </VuiTypography>
                  <VuiBox sx={{ height: "310px" }}>
                    <LineChart
                      lineChartData={lineChartDataSet_50}
                      lineChartOptions={lineChartOptionsSet_50}
                    />
                  </VuiBox>
                </VuiBox>
              </Card>
            </Grid>
            <Grid item xs={12} lg={12} xl={12}>
            <Card>
                <VuiBox sx={{ height: "100%" }}>
                  <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                    SSET
                  </VuiTypography>
                  <VuiBox sx={{ height: "310px" }}>
                    <LineChart
                      lineChartData={lineChartDataSSet}
                      lineChartOptions={lineChartOptionsSSet}
                    />
                  </VuiBox>
                </VuiBox>
              </Card>
            </Grid>
            <Grid item xs={12} lg={12} xl={12}>
            <Card>
                <VuiBox sx={{ height: "100%" }}>
                  <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                    MAI
                  </VuiTypography>
                  <VuiBox sx={{ height: "310px" }}>
                    <LineChart
                      lineChartData={lineChartDataMAI}
                      lineChartOptions={lineChartOptionsMAI}
                    />
                  </VuiBox>
                </VuiBox>
              </Card>
            </Grid>
          </Grid>
        </VuiBox> 
            </Grid>
          </Grid>
        </VuiBox>
      </VuiBox>
      
    </>
  );
}

export default Vision;
