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
import VuiInput from "components/VuiInput";
import VuiButton from "components/VuiButton";
// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import linearGradient from "assets/theme/functions/linearGradient";

// Vision UI Dashboard React base styles

import colors from "assets/theme/base/colors";

// Dashboard layout components

import Per_Port from "./Per_Port";
import SSM from "./SSM";
import Down from "./Graph_up_down/Down.png"
import Up from "./Graph_up_down/Up.png"
import Down_F from "./Graph_up_down/Down_F.png"
import Up_F from "./Graph_up_down/Up_F.png"
import De_F from "./Graph_up_down/De_F.png"
import date_VBS from './data/import_data/json/date_VBS.json'

// React icons

// Data

import logo from "./img/ideatrade_logo.png"
import WFII from './data/import_data/json/WFII.json'
import S_100 from './data/import_data/json/Winner_SET100.json'
import rankVBS from './data/import_data/json/Value_by_Sector_rank.json'
import rank_S from './data/import_data/json/Stock_rank.json'
import name_Symbol from './data/import_data/json/name_Symbol.json'
import B_A_update from './data/import_data/json/B_A_update.json'

import { useEffect, useState } from "react";
//icon
import AGRI from "./icon/Agri_Icon.png"
import AGRO1 from "./icon/Agro1_Icon.png"
import AUTO from "./icon/Auto_Icon.png"
import BANK from "./icon/Bank_Icon.png"
import COMM from "./icon/Comm_Icon.png"
import CONMAT from "./icon/Conmat_Icon.png"
import CONS from "./icon/Cons_Icon.png"
import CONSUMP from "./icon/Consump_Icon.png"
import ENERG from "./icon/Energ_Icon.png"
import ETRON from "./icon/Etorn_Icon.png"
import FASHION from "./icon/Fashion_Icon.png"
import FIN from "./icon/Fin_Icon.png"
import FINCIAL1 from "./icon/Fincial1_Icon.png"
import FOOD from "./icon/Food_Icon.png"
import HELTH from "./icon/Helth_Icon.png"
import HOME from "./icon/Home_Icon.png"
import ICT from "./icon/ICT_Icon.png"
import IMM from "./icon/Imm_Icon.png"
import INDUS1 from "./icon/Indus1_Icon.png"
import INSUR from "./icon/Insur_Icon.png"
import MEDIA from "./icon/Media_Icon.png"
import MINE from "./icon/Mine_Icon.png"
import PAPER from "./icon/Paper_Icon.png"
import PERSON from "./icon/Person_Icon.png"
import PETRO from "./icon/Food_Icon.png"
import PF_REIT from "./icon/Pf_Reit_Icon.png"
import PKG from "./icon/Pkg_Icon.png"
import PROF from "./icon/PROF_Icon.png"
import PROPCON1 from "./icon/PROPCON 1_Icon.png"
import RESOURC1 from "./icon/Resourc 1_Icon.png"
import SERVICE1 from "./icon/Service 1_Icon.png"
import STEEL from "./icon/Steel_Icon.png"
import TECH1 from "./icon/Tech 1_Icon.png"
import TOURISM from "./icon/Tourism_Icon.png"
import TRAN from "./icon/Tran_Icon.png"


let all_Name_Icon = ['AGRI','AGRO 1','AUTO','BANK','COMM','CONMAT','CONS','CONSUMP 1','ENERG','ETRON','FASHION','FIN','FINCIAL 1','FOOD','HELTH','HOME','ICT','IMM','INDUS 1','INSUR','MEDIA','MINE','PAPER','PERSON','PETRO','PF&REIT','PKG','PROF','PROPCON 1','RESOURC 1','SERVICE 1','STEEL','TECH 1','TOURISM','TRANS']
let all_Icon = [AGRI,AGRO1,AUTO,BANK,COMM,CONMAT,CONS,CONSUMP,ENERG,ETRON,FASHION,FIN,FINCIAL1,FOOD,HELTH,HOME,ICT,IMM,INDUS1,INSUR,MEDIA,MINE,PAPER,PERSON,PETRO,PF_REIT,PKG,PROF,PROPCON1,RESOURC1,SERVICE1,STEEL,TECH1,TOURISM,TRAN]
let icon_1,icon_2,icon_3,icon_4
const name_Sym = name_Symbol['name']

let S_100_g=[[],[],[]]
for (let i=0;i<S_100.length;i++){
  S_100_g[0].push(S_100[i]['Time'])
  S_100_g[1].push(S_100[i]['SET100'])
  S_100_g[2].push(S_100[i]['Percent Capital'])
}
const k = WFII['Unit'][-1]
const date = <h2>{WFII['Date'][WFII['Date'].length-1]}</h2>
let temp_Sym = ''
let temp_Start = ''
let temp_End = ''
let num_S = S_100_g[2].length

let dif_S =S_100_g[2][num_S-1]-S_100_g[2][num_S]
let arrow = <img src={(k<0 ? Down_F:Up_F)} width="150px" style={{marginBottom:"-45px",marginLeft:"-10px"}} />
if (k==0) arrow = <img src={De_F} width="150px" style={{marginBottom:"-45px",marginLeft:"-10px"}}/>
let Port = <div>
              <h2>{S_100_g[2][num_S-1]}% <span style={{color:(dif_S<0? '#FF0000':'#00FF7F'),fontSize:"15px"}}>{(dif_S<0? "ลด":"เพิ่ม")}จากเมื่อวาน {dif_S}%</span></h2>
          </div>
if (dif_S==0){
  Port = <div>
              <h3>{S_100_g[2][num_S-1]}% ไม่มีการเปลี่ยนแปลง</h3>
          </div>
}

for(let i=0;i<all_Name_Icon.length;i++){
  if(all_Name_Icon[i]==rankVBS["1"]){
    icon_1 = all_Icon[i]
  }
  if(all_Name_Icon[i]==rankVBS["2"]){
    icon_2 = all_Icon[i]
  }
  if(all_Name_Icon[i]==rankVBS["3"]){
    icon_3 = all_Icon[i]
  }
  if(all_Name_Icon[i]==rankVBS["4"]){
    icon_4 = all_Icon[i]
  }
}
rank_S["one"][1] = 'COM7'
const detailsector = <p align="middle" >
                        <p style={{marginTop:"10px",color:"#00FF7F",display:"inline-block"}}>
                            <div>{<img src={Up} width="70px"/>}</div>
                          <p style={{display:"inline-block",fontSize:"20px"}}><img style={{margin:"-10px"}} src={icon_1} width="50px"/>{rankVBS["1"]}<div style={{fontSize:"15px"}}>{rank_S["one"][0]}</div><div style={{fontSize:"15px"}}>{rank_S["one"][1]}</div></p>
                          <p style={{display:"inline-block",fontSize:"20px"}}><img style={{margin:"-10px"}} src={icon_2} width="50px"/>{rankVBS["2"]}<div style={{fontSize:"15px"}}>{rank_S["two"][0]}</div><div style={{fontSize:"15px"}}>{rank_S["two"][1]}</div></p>
                        </p>

                        <p style={{marginTop:"10px",marginLeft:"50px",color:"#FF0000",display:"inline-block"}}>
                          <div>{<img src={Down} width="70px"/>}</div>
                          <p style={{display:"inline-block",fontSize:"20px"}}><img style={{margin:"-10px"}} src={icon_3} width="50px"/>{rankVBS["3"]}<div style={{fontSize:"15px"}}>{rank_S["three"][0]}</div><div style={{fontSize:"15px"}}>{rank_S["three"][1]}</div></p>
                          <p style={{display:"inline-block",fontSize:"20px"}}><img style={{margin:"-10px"}} src={icon_4} width="50px"/>{rankVBS["4"]}<div style={{fontSize:"15px"}}>{rank_S["four"][0]}</div><div style={{fontSize:"15px"}}>{rank_S["four"][1]}</div></p>
                        </p>
                      {/* {<img src={Down} width="50px"/>} */}
                    </p>

function Dashboard() {
  const { gradients } = colors;
  const { cardContent } = gradients;

  
  return (
    // style={{marginBottom:"-110px",marginTop:"-90px",marginLeft:"-30px"}}
    <>
      {/* <DashboardNavbar /> */}
      <VuiBox py={3}>
        <VuiBox mb={2}>
        <Card style={{marginBottom:"30px"}}>
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
              <div style={{display:"flex",justifyContent:"center",marginBottom:"30px"}}>
                  <Card  style={{float:"left",width:"40%",height:"300px",marginRight:"50px"}}>
                      <div><h5 style={{color:"#a0aec0",fontSize:"11px"}}>{date}</h5></div>
                      <h1 style={{marginTop:"10px",color:"white",fontSize:"20px"}}> มุมมองการลงทุน </h1>
                      <p align="center">
                        <h1 style={{marginTop:"-30px",color:(k<0? "#FF0000":"#00FF7F"),fontSize:"25px"}}>
                          {arrow}<br/><h3 style={{fontSize:"15px",color:"gray"}}>(มุมมองของวันนี้)</h3>เมื่อวานมุมมอง{k<0 ? "ลง":"ขึ้น"}
                        </h1>
                      </p>
                      <div align="middle" style={{marginTop:"10px"}}><VuiButton  variant="outlined" color="info" href='/dashboard/Vision' target="_black"><p style={{fontSize:"12px"}}>ดูข้อมูลย้อนหลัง</p></VuiButton></div>
                  </Card>
                  <Card  style={{float:"left",width:"50%",height:"300px"}}>
                    <div>
                      <div><h5 style={{color:"#a0aec0"}}>{date_VBS['date']}</h5></div>
                      <div><h4 style={{color:"white"}}>Sector ที่น่าสนใจ</h4></div>
                      <div><p align="middle" >{detailsector}</p></div>
                      <div align="middle" style={{marginTop:"10px"}}><VuiButton  variant="outlined" color="info" href='/dashboard/Sector' target="_black"><p style={{fontSize:"12px"}}>ดูข้อมูลย้อนหลัง</p></VuiButton></div>
                    </div>
                    </Card>
                    </div>
            </Grid>
            
            <Grid item xs={12} xl={12}  xxl={12}>
              <div style={{marginTop:"-10px",display:"flex",justifyContent:"center"}}>
                <Card style={{float:"left",marginRight:"50px",width:"40%",height:"350px"}}>
                    <Per_Port/>
                </Card>
                <Card style={{float:"left",width:"50%",height:"350px"}}>
                    <SSM />
                </Card>
                </div>
            </Grid>
          </Grid>
        </VuiBox>
      </VuiBox>
      
    </>
  );
}

export default Dashboard;
