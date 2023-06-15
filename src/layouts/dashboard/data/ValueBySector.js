// /*!

// =========================================================
// * Vision UI Free React - v1.0.0
// =========================================================

// * Product Page: https://www.creative-tim.com/product/vision-ui-free-react
// * Copyright 2021 Creative Tim (https://www.creative-tim.com/)
// * Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

// * Design and Coded by Simmmple & Creative Tim

// =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// */



// import Value_by_Sector from './import_data/json/Value_by_Sector.json'
// import my_Color from './import_data/json/ALL_color.json'

// function dataSec_Graph(data){
//   let name_S = []
//   for (let i=0 ;i<Value_by_Sector.length;i++){
//     name_S.push(Object.keys(Value_by_Sector[i])[0])
//   }
//   console.log(data)
//   let my_Dataset=[]
//   for(let i=1;i<my_Color['my_Color'].length;i++){
//     if(data[1][i]){
//       my_Dataset.push({
//           name: data[0][i],
//           data: Value_by_Sector[i][data[0][i]],
//           })
//     }
//   }
//   const lineChartDataValueBySector = my_Dataset;
//   const ValueBySector = {
//       series:my_Dataset,
//       options:{
//         chart: {
//         toolbar: {
//           show: false,
//         },
//       },
//       tooltip: {
//         theme: "dark",
//       },
//       dataLabels: {
//         enabled: false,
//       },
//       stroke: {
//         curve:  'straight',
//         width: 1,
//       },
//       xaxis: {
//         type: "datetime",
//         categories: Value_by_Sector[0][name_S[0]],
//         tickAmount: 15,
//         labels: {
//           style: {
//             colors: "#c8cfca",
//             fontSize: "10px",
//           },
//         },
//         axisBorder: {
//           show: false,
//         },
//         axisTicks: {
//           show: false,
//         },
//         fill: {
//               type: 'gradient',
//               gradient: {
//               shadeIntensity: 1,
//               opacityFrom: 0.7,
//               opacityTo: 0.9,
//               stops: [0, 10]
//               }
//           }
//       },
//       yaxis: {
//           opposite: false,
//           decimalsInFloat: 2,
//           forceNiceScale: false,
//           labels: {
//               formatter:function (number) {
//                   number = parseFloat(number);
//                   return number.toFixed(2).replace(/./g, function(c, i, a) {
//                       return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
//                   });
//               },
//               style: {
//                   colors: "#c8cfca",
//                   fontSize: "10px",
//               },
//               },
//           }
//       ,
//       legend: {
          
//         position: 'right',
//         horizontalAlign: 'right',
//         offsetY: -10,
//         labels: {
//           colors: "#ffffff",
//         },
//       },
//       grid: {
//         strokeDashArray: 5,
//         borderColor: "#56577A",
//       },
//       fill: {
//         type: "gradient",
//         gradient: {
//           shade: "dark",
//           type: "vertical",
//           shadeIntensity: 0,
//           gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
//           inverseColors: true,
//           opacityFrom: 0,
//           opacityTo: 0,
//           stops: [],
//         },
//         colors: my_Color['my_Color'],
//       },
//       colors: my_Color['my_Color'],
//     }
//   }
  
//     return ValueBySector
// }

// export default dataSec_Graph