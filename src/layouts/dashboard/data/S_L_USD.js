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



import { style } from '@mui/system';
import MT5 from './import_data/json/Data_MT5.json'

export const MT5_USD_o = {
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
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      shadeIntensity: 0.5,
      gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
      inverseColors: true,
      opacityFrom: 0,
      opacityTo: 0,
      stops: [],
    },
    colors: [ "#FFE974"],
  },
  colors: ["#FFE974"],
};
  
  
  
export const MT5_USD_d = [
  {
    name: 'USD',
    data: MT5['CUSD'],
  },
];
  