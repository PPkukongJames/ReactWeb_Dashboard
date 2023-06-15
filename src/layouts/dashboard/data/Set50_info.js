
import set50 from './import_data/json/Set_unit50.json'
let a=0,b=0
let color ='#FFEB9C'
let borderRadius=10
if (set50['unit'][set50['unit'].length-1]>0){
  a = 0
  b=set50['unit'][set50['unit'].length-1]
}else if(set50['unit'][set50['unit'].length-1<0]){
  a = set50['unit'][set50['unit'].length-1]
  b= 0
}
if(a==0&&b==0){
  a=0.1
  b=-0.1
  color ='#000000'
  borderRadius=0
}

export const Set50_infoO = {
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
  },colors: [color, color],
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
      decimalsInFloat:0,
      show:true,
      style:{
        colors:"#FFFFFF"
      }
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
  
  
  
export const Set50_infoD = [
  {
    name: 'SET50',
    data: [a],
  },{
    name: 'SET50',
    data: [b]
  }
];
