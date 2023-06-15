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
import { ButtonGroup, Card } from "@mui/material";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

import VuiButton from "components/VuiButton";
// Vision UI Dashboard React example components

// Vision UI Dashboard React base styles

import colors from "assets/theme/base/colors";

// Dashboard layout components


// React icons

// Data


import React from "react";
import ReactApexChart from "react-apexcharts";

import logo from "./img/ideatrade_logo.png"



import MT5 from './data/import_data/json/Data_MT5.json'

export const MT5_SF = {
  series:[
    {
      name: 'SF',
      data: MT5['SF'],
    },
  ],
  options:{
    chart: {
    id: 'line-1',
    group: 'social',
    type: 'line',
    height:300,
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    theme: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve:  'straight',
    width: 2,
  },
  xaxis: {
    // type: "datetime",
    categories: MT5['date'],
    tickAmount: 35,
    labels: {
      show:true,
      rotate: 90,
      style:{
        colors: "#c8cfca",
        fontSize: "10px",
      },
      offsetY:55,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    fill: {
          type: 'gradient',
          gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 10]
          }
      }
  },
  yaxis: [
      {
        autoScaleYaxis: false,
        show:true,
        decimalsInFloat: 2,
        min:Math.min(...MT5['SF'])*1.05,
        max:Math.max(...MT5['SF'])*1.05,
        labels: {
            formatter:function (number) {
                number = parseFloat(number);
                return number.toFixed(2).replace(/./g, function(c, i, a) {
                    return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
                });
            },
            show:false,
          style: {
              colors: "#c8cfca",
              fontSize: "10px",
          },
          },
      },
  ],
  legend: {
    show: true,
    labels: {
      colors: "#ffffff",
    },
  },
  grid: {
    borderColor: "#56577A",
  },
  colors: ["#33FFC8"],
}}


const MT5_USD = {
  options:{
    chart: {
    id: 'area-1',
    group: 'social',
    type: 'line',
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    theme: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve:  'straight',
    width: 2,
  },
  xaxis: {
    // type: "datetime",
    categories: MT5['date'],
    tickAmount: 35,
    labels: {
      show:false
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 5]
          }
      }
  },
  yaxis: [
      {
        autoScaleYaxis: false,
        decimalsInFloat: 2,
        min:Math.min(...MT5['CUSD'])*0.95,
        max:Math.max(...MT5['CUSD'])*1.05,
        
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
      },
  ],
  legend: {
    show: true,
    labels: {
      colors: "#ffffff",
    },
  },
  grid: {
    borderColor: "#56577A",
  },
  colors: ["#FFE974"],
  },
  series: [{
      name: 'USD',
      data: MT5['CUSD'],
    },
  ],
  }



  
  
  class ApexChartUSD extends React.Component {
      constructor(props) {
          super(props);
          this.USD = props.USD
          this.TH = props.TH
      }
      render() {
        return (
          <div id="graph" class="card">
              <div id="USD" style={{marginBottom:"-30px"}}>
                  <p style={{fontSize:"15px"}}>ทิศทางค่าเงิน USD</p>
                  <p><ReactApexChart options={this.USD.options} series={this.USD.series} type="line" height={200} /></p>
              </div>
              <div id="TH" style={{marginBottom:"-30px"}}>
                  <p style={{fontSize:"15px"}}>ทิศทางค่าเงินบาท</p>
                  <p style={{marginLeft:"2%"}}><ReactApexChart options={this.TH.options} series={this.TH.series} type="line" height={250} /></p>
              </div>
          </div>
            )
          }
}

function USD() {
  // let line1 = new ApexCharts(document.querySelector('#chart-USD'),CUSD)
  // let line2 = new ApexCharts(document.querySelector('#chart-TH'),TH)
  // line1
  // line2.render()

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
        <ButtonGroup>
        {/* <VuiButton variant="text" href='/dashboard' target="_blank"><div style={{marginTop:"6.5px"}}>Dashboard</div></VuiButton> */}
        <VuiButton variant="contained" color="info" href='/dashboard/USD'><p style={{fontSize:"18px"}}>USDTHB</p></VuiButton>
        <VuiButton variant="text" href='/dashboard/Set_MKB' target="_blank" ><p style={{marginTop:"6.5px",fontSize:"18px"}}>SET</p></VuiButton>
          <VuiButton variant="text" href='/dashboard/Set50_MKB' target="_blank" ><p style={{marginTop:"6.5px",fontSize:"18px"}}>SET50</p></VuiButton>
          <VuiButton variant="text" href='/dashboard/Mai_MKB' target="_blank" ><p style={{marginTop:"6.5px",fontSize:"18px"}}>MAI</p></VuiButton>
          <VuiButton variant="text" href='/dashboard/Bid_Ask_Graph' target="_blank"><p style={{marginTop:"6.5px",fontSize:"18px"}}>Bid Ask Ratio</p></VuiButton>
        </ButtonGroup></p>
        </Card>
          <Grid container spacing={1}>
            
            <Grid item xs={12} xl={12}  xxl={12}>
            <div style={{marginRight:'-12px'}}>  
                <div style={{marginTop:"5px"}}>
                  <Grid item xs={12} lg={12} xl={12}>
                    <Card>
                      <VuiBox sx={{ height: "100%" }} style={{marginBottom:"-30px"}}>
                        <p align="left">
                        <VuiBox sx={{ height: "500px" ,width:"100%"}}>
                          <ApexChartUSD
                          USD ={MT5_USD}
                          TH ={MT5_SF}
                          />
                        </VuiBox>
                        </p>
                      </VuiBox>
                    </Card>
                  </Grid>
                </div>
                </div>
            </Grid>
          </Grid>
        </VuiBox>
      </VuiBox>
      
    </>
  );
}

export default USD;
