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


import { ButtonGroup, Card} from "@mui/material";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";

import VuiInput from "components/VuiInput";
import VuiButton from "components/VuiButton";

import colors from "assets/theme/base/colors";







import BA from './import_data/json/Bid_Ask.json'


import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import Bid_Ask_Data from "./Bid_Ask_Data";


// console.log(BA['Name'])

class Bid_Ask_Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Symbol: '',
      Start:'',
      End:'',
      status : {
        success:false,
        error:false
      },
      statusButton:false,
      statusInput:{
        Symbol:false,
        Start:false,
        End:false,
      },
      graph:{
        series:[
          {
            name :'-',
            data:[]
          }
        ],
        options :{
          chart: {
            type: 'line',
            width:'90%',
            height:"500px",
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
            width: 2
          },
          xaxis: {
            tickAmount: 15,
            labels: {
              style: {
                colors: "#c8cfca",
                fontSize: "10px",
              },
            },
          },
          yaxis: [{
            decimalsInFloat: 0,
            tickAmount: 8,
            min:-5,
            max:5,
            forceNiceScale: true,
                labels: {
                style: {
                    colors: "#c8cfca",
                    fontSize: "10px",
                },
                },
            },
            {
              decimalsInFloat: 2,
              seriesName:'price',
              tickAmount: 10,
              opposite: true,
              labels: {
              style: {
                  colors: "#c8cfca",
                  fontSize: "10px",
              },
              },
          },
          ],legend: {
            show:false,
          },
          markers:{
            size:[3,3,3,3,3,3,3,3,3,3,3,3,3,3,0],
            radius: 0,
            strokeColors:''
          },
          colors: ["#FFD700", "#CCFF33", "#9900FF", "#D7156B", "#A07946", "#2299B8", "#2C61D4", "#41EB5F", "#0000FF", "#A14E45", "#53B7E8", "#6600FF", "#99FFCC", "#66FFFF","#ff0000"],
        }
      }
      }
    };

  myStatus = (event) => {
    event = event.toUpperCase()
    this.setState({Symbol:event})
    if (event.length==0){
      this.setState({
        status:{
          success:false,
          error:false
        },
        statusInput:{
          Symbol:false,
        }
      })
    }else{
      if(BA['Name'].indexOf(event) != -1){
        this.setState({
          status:{
            success:true,
            error:false
          },
          statusInput:{
            Symbol:true,
            Start:this.state.statusInput.Start,
            End:this.state.statusInput.End,
          }
        })
      }else{
        this.setState({
          status:{
            success:false,
            error:true
          },
        })
      }
    }
  }
  checkdate = (date) =>{
    const number = '0123456789'
    const day31 = [1,3,5,7,8,10,12]
    const day30 = [4,6,9,11]
    
    if(date[2]!='/' && date[5]!='/'){
      return false
    }
    
    for (let i=0;i<10;i++){
      if(i==2 || i==5){
        continue
      }

      if(number.indexOf(date[i])==-1) {
        return false
      }
      
    }
    
    date = date.split('/')
    console.log(date)
    const day = parseInt(date[0])
    const month = parseInt(date[1])
    const year = parseInt(date[2])
    if(year<2021) return false
    if (year%4==0 && month == 2){
      if(day>29) return false
      else return true
    }else if(year%4!=0){
      if(month==2){
        if(day>28) return false
        else return true
      }else{
        console.log(day30.indexOf(month))
        if(day31.indexOf(month) != -1){
          if(day>31) return false
          else return true
        }else if(day30.indexOf(month) != -1){
          if(day>30) return false
          else return true
        }
      }
    }
    return false
  }

  inputStart = (event) => {
    if(event.length==10){
      this.setState({
          statusInput:{
            Symbol:this.state.statusInput.Symbol,
            Start:this.checkdate(event),
            End:this.state.statusInput.End
          }
        })
      if(this.checkdate(event)){
        this.setState({
          Start:event
        })
      }

    }else{
      this.setState({
        statusInput:{
          Symbol:this.state.statusInput.Symbol,
          Start:false,
          End:this.state.statusInput.End
        }
      })
    }

  }

  inputEnd= (event) => {
    if(event.length==10){
      this.setState({
        statusInput:{
          Symbol:this.state.statusInput.Symbol,
          Start:this.state.statusInput.Start,
          End:this.checkdate(event),
        }
      })
      if(this.checkdate(event)){
        this.setState({
          End:event
        })
      }
    }else{
      this.setState({
        statusInput:{
          Symbol:this.state.statusInput.Symbol,
          Start:this.state.statusInput.Start,
          End:false,
        }
      })
    }

  }
  Submit=()=>{
    if(this.state.statusInput.Symbol&&this.state.statusInput.Start&&this.state.statusInput.End){
      let Start = this.state.Start.split('/')
      let End = this.state.End.split('/')
      let date_Start = new Date(parseInt(Start[2]),parseInt(Start[1])-1,parseInt(Start[2]))
      let date_End = new Date(parseInt(End[2]),parseInt(End[1])-1,parseInt(End[2]))
      if(date_End.getTime() - date_Start.getTime() < 0){
        this.setState({
          Symbol:"invalid date!!"
        })
        return -1;
      }
    }
    let My_graph = Bid_Ask_Data(this.state.Symbol,this.state.Start,this.state.End)
    console.log(My_graph)
    this.setState({
      Start:My_graph.dateTodate[0],
      End:My_graph.dateTodate[1],
      graph:{
        series:My_graph.series,
        options:My_graph.options
      }
    })

  }

  render() {
    return (
      <div className="counter">
        
        <p style={{float:"left",marginRight:"10px",width:"150px"}} > 
          <VuiInput
            placeholder="Symbol"
            value={this.state.Symbol}
            onChange={(e)=>this.myStatus(e.target.value)}
            success={this.state.status.success}
            error={this.state.status.error}

            icon={{
                component: "favorite",
                direction: "left"  
            }}/>
        </p>
        <p style={{float:"left",marginRight:"10px",width:"200px"}}>
          <VuiInput
            placeholder="Start:DD/MM/YYYY"
            onChange={(e)=>this.inputStart(e.target.value)}

          />
        </p>
        <p style={{float:"left",marginRight:"10px",width:"200px"}}>
          <VuiInput
            placeholder="End:DD/MM/YYYY"   
            onChange={(e)=>this.inputEnd(e.target.value)}
          />
        </p>
        <p><VuiButton variant="gradient" color="info" disabled={!(this.state.statusInput.Symbol&&this.state.statusInput.Start&&this.state.statusInput.End)} onClick={this.Submit} type="submit">Find</VuiButton></p>
        <div style={{color:'white'}}>{(this.state.Symbol)}</div>
        <div id="chart-timeline" style={{marginLeft:'-20px',marginRight:"100px"}}>
          <ReactApexChart series={this.state.graph.series} options={this.state.graph.options} height={300} />
        </div>
        <div align="middle" style={{color:'white',fontSize:'12px'}}>{this.state.Start} to {this.state.End}</div>
      </div>
    );
  }
}

export default Bid_Ask_Graph;
