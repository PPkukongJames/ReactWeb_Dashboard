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



import WFII from './import_data/json/WFII.json'

export const lineChartOptionsSSet = {
    chart: {
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
      type: "datetime",
      categories: WFII['Date'],
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
      fill: {
            type: 'gradient',
            gradient: {
            shadeIntensity: 2,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 10]
            }
        }
    },
    yaxis: [{
        opposite: true,
        decimalsInFloat: 2,
        min:-1,
        max:1,
        labels: {
          formatter:function (number) {
            number = parseFloat(number);
            let text = ''
            if (number == 0){
              text='0'
            }else if(number==1){
              text='up'
            }else if(number==-1){
              text='down'
            }
            return text
        },
            style: {
                colors: "#c8cfca",
                fontSize: "15px",
            },
            },
        },{
          decimalsInFloat: 2,
          min:Math.min(...WFII['SSET'])*0.95,
          max:Math.max(...WFII['SSET'])*1.05,
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
      position: 'top',
      horizontalAlign: 'right',
      floating: true,
      offsetY: -10,
      labels: {
        colors: "#ffffff",
      },
    },
    grid: {
      strokeDashArray: 5,
      borderColor: "#56577A",
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        shadeIntensity: 0,
        gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
        inverseColors: true,
        opacityFrom: 0,
        opacityTo: 0,
        stops: [],
      },
      colors: ["#86e7fc", "#00FF7F"],
    },
    colors: ["#86e7fc", "#00FF7F"],
  };
  
  
  
  export const lineChartDataSSet = [
    {
      name: 'Trend',
      data: WFII['Unit'],
    },
    {
      name: 'sSet',
      data: WFII['SSET'],
    },
  ];
  