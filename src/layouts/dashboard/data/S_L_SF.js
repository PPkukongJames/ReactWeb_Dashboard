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



import MT5 from './import_data/json/Data_MT5.json'





export const MT5_SF_o = {
  series:[
    {
      name: 'SF',
      data: MT5['SF'],
    },
  ],
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
      show:true,
      rotate: 90,
      style:{
        colors: "#c8cfca",
        fontSize: "10px",
      },
      offsetY:60,
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
        show:false,
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
      shadeIntensity: 0,
      gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
      inverseColors: true,
      opacityFrom: 0,
      opacityTo: 0,
      stops: [],
    },
    colors: [ "#33FFC8"],
  },
  colors: ["#33FFC8"],
};
  
  
  
  export const MT5_SF_d = [
    {
      name: 'SF',
      data: MT5['SF'],
    },
  ];
  