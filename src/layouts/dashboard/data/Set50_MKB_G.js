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



import Set50_MKB from './import_data/json/Set50_MKB.json'
let zero = []
for (let i=0;i<Set50_MKB['index'].length;i++){
  zero.push(0)
}
export const Set50_MKB_index = {
  series:[
    {
      name: 'index',
      data: Set50_MKB['index'],
    }
  ],
  options: {
    chart: {
    id: 'index',
    group: 'Set50',
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
    categories: Set50_MKB['date'],
    tickAmount: 35,
    labels: {
      show:false,
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
    yaxis: [{
            min:Math.min(...Set50_MKB['index'])*0.95,
            max:Math.max(...Set50_MKB['index'])*1.05,
            tickAmount: 5,
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
    colors: ["#03DB6A"],
    }
  }


export const Set50_MKB_macdSig = {
  series:[
    {
      name: 'zero line',
      data: zero,
    },
    {
      name: 'macdSig',
      data: Set50_MKB['macdSig'],
    }
  ],
  options: {
    chart: {
    id: 'macdSig',
    group: 'Set50',
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
    width: [4,2],
  },
  xaxis: {
    categories: Set50_MKB['date'],
    tickAmount: 35,
    labels: {
      show:false,
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
    yaxis: [{
        min:Math.min(...Set50_MKB['macdSig'])*1.05,
        max:Math.max(...Set50_MKB['macdSig'])*1.05,
        tickAmount: 5,
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
        }
    ],
    legend: {
      show:false,
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
    colors: ["#ffffff","#FFCF00"],
    
  }}
  
export const Set50_MKB_macdP = {
    series:[
      {
        name: 'zero line',
        data: zero,
      },{
        name: 'macdP',
        data: Set50_MKB['macdP'],
      },
    ],
    options: {
      chart: {
      id: 'macdP',
      group: 'Set50',
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
      width: [4,2],
    },
    xaxis: {
      categories: Set50_MKB['date'],
      tickAmount: 35,
      labels: {
        show:false,
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
    yaxis: [{
        min:Math.min(...Set50_MKB['macdP'])*1.05,
        max:Math.max(...Set50_MKB['macdP'])*1.05,
        tickAmount: 5,
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
        }
    ],
    legend: {
      show:false,
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
    colors: ["#ffffff","#0075FF"],
  }}

export const Set50_MKB_rsi = {
    series:[
      {
        name: 'zero line',
        data: zero,
      },{
        name: 'rsi',
        data: Set50_MKB['rsi'],
      },
    ],
    options: {
      chart: {
      id: 'rsi',
      group: 'Set50',
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
      width: [4,2],
    },
    xaxis: {
      categories: Set50_MKB['date'],
      tickAmount: 35,
      labels: {
        show:true,
        rotate: 90,
        style:{
          colors: "#c8cfca",
          fontSize: "8px",
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
    yaxis: [{
        min:Math.min(...Set50_MKB['rsi'])*1.05,
        max:Math.max(...Set50_MKB['rsi'])*1.05,
        tickAmount: 5,
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
        }
    ],
    legend: {
      show:false,
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
    colors: ["#ffffff","#86e7fc"],
  }}