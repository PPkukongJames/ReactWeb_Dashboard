import React from "react";
import ReactApexChart from "react-apexcharts";
import { ButtonGroup, Card, LinearProgress, Stack } from "@mui/material";
import VuiButton from "components/VuiButton";
class ApexChart extends React.Component {
  
  constructor(props) {
    super(props);
    this.props = props
    let data = []
    let unit = []
    for(let i=0;i<props.time.length;i++){
      data.push([props.time[i],props.data[i]])
      unit.push([props.time[i],props.unit[i]])
    }
    this.state = {
      series: [{
        name: "Unit Step",
        data: unit
      },{
        name: props.name,
        data: data
      }],
      options: {
        legend: {
          position: 'top',
          labels: {
            colors: '#ffffff',
            
        },
        },
        chart: {
          toolbar: {
            show: false,
          },
          id: 'area-datetime',
          type: 'line',
          height:'500px',
          width: '100%',
          zoom: {
            autoScaleYaxis: true
          }
        },
        dataLabels: {
          enabled: false
        },
        markers: {
          size: 0,
          style: 'hollow',
        },
        xaxis: {
          type: 'datetime',
          borderColor: '#999',

          tickAmount: 5,
          labels:{
            format:'dd MMM yyyy',
            rotate: 0,
            rotateAlways: true,
            style: {
              colors: "#c8cfca",
              fontSize: "10px",
            }
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },yaxis: [{
          // decimalsInFloat: 2,
          min:Math.min(...props.unit),
          max:Math.max(...props.unit),
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
      },{
      opposite: true,
        decimalsInFloat: 2,
        min:Math.min(...props.data)*0.95,
        max:Math.max(...props.data)*1.05,
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
        tooltip: {
          x: {
            format: 'dd MMM yyyy'
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0,
            opacityTo: 0,
            stops: [0, 100]
          }
        },colors: ["#86e7fc", props.color],
      },
    
    
      selection: 'all',
    
    };
  }
  

  updateData(timeline) {
    const monthNames = ["Jan", "Feb", "Mar", "Apr",
                        "May", "Jun", "Jul", "Aug",
                        "Sep", "Oct", "Nov", "Dec"];
    const myTime = this.props.time
    let index_year = 0
    for(let i=0;i<myTime.length;i++){
      let temp = myTime[i].split(' ')
      let temp_2 = myTime[i+1].split(' ')

      if(temp[2]!=temp_2[2]){
        index_year = i
        break
      }
    }

    this.setState({
      selection: timeline
    })
    
    switch (timeline) {
      case '2022':
        ApexCharts.exec(
          'area-datetime',
          'zoomX',
          new Date(this.props.time[0]).getTime(),
          new Date(this.props.time[index_year]).getTime()
        )
        break
      case '2023':
        ApexCharts.exec(
          'area-datetime',
          'zoomX',
          new Date(this.props.time[index_year+1]).getTime(),
          new Date(this.props.time[myTime.length-1]).getTime()
        )
        break
      case 'all':
        ApexCharts.exec(
          'area-datetime',
          'zoomX',
          new Date(this.props.time[0]).getTime(),
          new Date(this.props.time[myTime.length-1]).getTime()
        )
        break
      default:
    }
  }


  render() {
    return (
  <div id="chart">
    <div class="toolbar">
      <p align="right">
      <ButtonGroup>
      <VuiButton variant="outlined" color="info" id="2022"
        onClick={()=>this.updateData('2022')} className={ (this.state.selection==='2022' ? 'active' : '')}>
      2022
      </VuiButton>
      &nbsp;
      <VuiButton variant="outlined" color="info" id="2023"
        
        onClick={()=>this.updateData('2023')} className={ (this.state.selection==='2023' ? 'active' : '')}>
      2023
      </VuiButton>
      &nbsp;
      <VuiButton variant="outlined" color="info" id="all"
        onClick={()=>this.updateData('all')} className={ (this.state.selection==='all' ? 'active' : '')}>
      ALL
      </VuiButton></ButtonGroup></p>
      </div>

    <div id="chart-timeline">
    <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={400} />
    </div>
  </div>
        )
      }
}
// const domContainer = document.querySelector('#app');
// ReactDOM.render(React.createElement(ApexChart), domContainer);
export default ApexChart
