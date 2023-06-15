
import set from './import_data/json/Set_unit.json'

let a=0,b=0
let color ='#92FFC6'
let borderRadius=10
if (set['unit'][set['unit'].length-1]>0){
  a = 0
  b=set['unit'][set['unit'].length-1]
}else if(set['unit'][set['unit'].length-1<0]){
  a = set['unit'][set['unit'].length-1]
  b= 0
}
if(a==0&&b==0){
  a=0.1
  b=-0.1
  color ='#000000'
  borderRadius=0
}
export const Set_infoO = {
  grid: {
    show:false
  },
  tooltip: {
    theme: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  chart: {
    toolbar: {
      show: false,
    },
    type: 'bar',
    height: 440,
    stacked: true
  },colors: [color,color],
  plotOptions: {
    bar: {
      borderRadius: borderRadius,
      borderRadiusApplication: 'end',
      borderRadiusWhenStacked: 'all',
      horizontal: true,
      barHeight: '100%',
      colors: {
        backgroundBarColors: ['#0B2745'],
        backgroundBarRadius: 10,
      }
    },
  },
  xaxis: {
    min:-11,
    max:11,
    tickAmount:6,
    position: 'top',
    labels: {
      show:true,
      style:{
        colors:"#FFFFFF"
      },
    },
    
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },yaxis: {
    labels: {
      show:false,
    },
  },
  legend: {
    show: false
  },
}
  
  
export const Set_infoD = [
  {
    name: 'SET',
    data: [a],
  },{
    name: 'SET',
    data: [b]
  }
];