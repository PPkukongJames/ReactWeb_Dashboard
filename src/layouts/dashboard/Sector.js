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
import Value_by_Sector from './data/import_data/json/Value_by_Sector.json'
import { Check, CheckBox, CheckBoxOutlineBlankTwoTone, CheckBoxTwoTone } from "@mui/icons-material";
import React, { useState } from "react";
import Input from "assets/theme/components/form/input";
// import dataSec_Graph from "./data/ValueBySector";
import ReactApexChart from "react-apexcharts";
import my_Color from './data/import_data/json/ALL_color.json'

let name_S = [[],[]]
name_S[0].push("Select all")
name_S[1].push(true)
for (let i=1 ;i<Value_by_Sector.length;i++){
  let temp_name = Object.keys(Value_by_Sector[i])[0]
  name_S[0].push(temp_name)
  name_S[1].push(false)
}




class ApexChartSector extends React.Component {
  constructor(props) {
      let myData = []
      super(props);
      this.state = {
        series: myData,
        options:{
          chart:{
            id:'Sector',
            toolbar:{
              show:false,
            }
          },
          stroke: {
            curve:  'straight',
            width: 2,
          },
          xaxis: {
            type: "datetime",
            categories: Value_by_Sector[0]['Date'],
            tickAmount: 15,
            labels: {
              style: {
                colors: "#c8cfca",
                fontSize: "10px",
              },
            },
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
      
          },
          yaxis: {
              opposite: false,
              decimalsInFloat: 2,
              min:-160000000000,
              max:100000000000,
              forceNiceScale: false,
              labels: {
                  formatter:function (number) {
                      number = parseFloat(number);
                      return number.toFixed(2).replace(/./g, function(c, i, a) {
                          return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
                      });
                  },
                  style: {
                      colors: "#c8cfca",
                      fontSize: "10px",
                  },
                  },
              }
          ,
          legend: {
            show:true,
            position: 'right',
            horizontalAlign: 'right',
            offsetY: -10,
            labels: {
              colors: "#ffffff",
            },
          },
          grid: {
            strokeDashArray: 5,
            borderColor: "#56577A",
          },
          colors: my_Color['my_Color'],
        }
      }
  }
  handleChange = (event) => {

      console.log(event.target.checked)
      let index = event.target.value
      name_S[1][index] = event.target.checked
      if(index == 0){
          if(name_S[1][index]){
            for(let i=1;i<name_S[1].length;i++){
              name_S[1][i] = true
            }
          }else{
            for(let i=1;i<name_S[1].length;i++){
              name_S[1][i] = false
            }
          }
      }
      let my_Dataset = []
      for(let i=1;i<name_S[1].length;i++){
            if(name_S[1][i]){
              my_Dataset.push({
                  name: name_S[0][i],
                  data: Value_by_Sector[i][name_S[0][i]],
                  })
            }
          }
          console.log(my_Dataset)
          ApexCharts.exec('Sector','updateSeries',my_Dataset) 
    };
    
  render() {
    
    
    let checkFrom = []
    for (let i=0;i<name_S[0].length;i++){
    checkFrom.push(<div style={{marginBottom:"-11px"}}><div style={{display:"inline-flex",color:'white'}}>
            
                <Checkbox
                  value={i}
                  onChange={this.handleChange}

                />
               
                <h6 style={{fontSize:"13px"}}>{name_S[0][i]}</h6>
              </div><br/></div>)
    }
    return (
      <div id="graph" class="card">
          
          <div id="index" style={{marginBottom:"-30px",float:'left',width:'90%'}}>
              <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={800} width={'100%'} />
          </div>
          <div>
            {checkFrom}
          </div>
      </div>
        )
      }
}

function Sector() {
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
                  Value by Sector
                  </VuiTypography>
                  <VuiBox sx={{ height: "800px" }}>
                  
                 <ApexChartSector/>
               
                    
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

export default Sector;
