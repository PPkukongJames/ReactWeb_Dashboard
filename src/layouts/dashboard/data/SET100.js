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



import S_100 from './import_data/json/Winner_SET100.json'

let S_100_g=[[],[],[]]

for (let i=0;i<S_100.length;i++){
  S_100_g[0].push(S_100[i]['Time'])
  S_100_g[1].push(S_100[i]['SET100'])
  S_100_g[2].push(S_100[i]['Percent Capital'])
}



export const lineChartOptionsSet_100 = {
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
      width: 3,
    },
    xaxis: {
      type: "datetime",
      categories: S_100_g[0],
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
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 10]
            }
        }
    },
    yaxis: [{
        min:Math.min(...S_100_g[1])*0.95,
        max:Math.max(...S_100_g[1])*1.05,
        decimalsInFloat: 2,
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
            min:0,
            max:100,
            opposite: true,
            labels: {
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
      colors: ["#86e7fc", "#0075FF"],
    },
    colors: ["#86e7fc", "#0075FF"],
  };
  
  
  
  export const lineChartDataSet_100 = [
    {
      name: 'SET100',
      data: S_100_g[1],
    },
    {
      name: '% Capital Port',
      data: S_100_g[2],
      
    },
  ];
  