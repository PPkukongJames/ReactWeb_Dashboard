
import BA from './import_data/json/Bid_Ask.json'
function Bid_Ask_Data(Symbol,Start,End){//YYYY.MM.DD
  const day31 = [1,3,5,7,8,10,12]
  const day30 = [4,6,9,11]
  Start = Start.split('/')
  End = End.split('/')

  let tempS = Start[2]+'.'+Start[1]+'.'+Start[0]
  let tempE = End[2]+'.'+End[1]+'.'+End[0]
  
  let index = BA['Name'].indexOf(Symbol)
  let S_index = BA['Date'][index].indexOf(tempS)
  let E_index = BA['Date'][index].indexOf(tempE)

  let date_Start = new Date(parseInt(Start[2]),parseInt(Start[1])-1,parseInt(Start[0]))
  let date_End = new Date(parseInt(End[2]),parseInt(End[1])-1,parseInt(End[0]))
  let tempDate = new Date()
  tempDate.setTime(date_Start.getTime()+(24 * 60 * 60 * 1000))
  // console.log(Start)
  // console.log(End)
  console.log(date_Start)
  console.log(date_End)
  let check = new Date(parseInt(2022),parseInt(1),parseInt(1))
  // console.log(check.getTime())
  // console.log(check.getFullYear())
  // console.log(check.getMonth())
  // console.log(check.getDate())
  // check.setTime(check.getTime()-(24 * 60 * 60 * 1000))
  // console.log(check.getTime())
  // console.log(check.getFullYear())
  // console.log(check.getMonth())
  // console.log(check.getDate())

  let temp_year
  let temp_month 
  let temp_day
  if(S_index == -1){
    while(true){
      temp_year = tempDate.getFullYear()
      temp_month = parseInt(tempDate.getMonth())+1
      temp_day = parseInt(tempDate.getDate())
      if(temp_month==0) temp_month=12
      if (temp_month<10){
        temp_month='0'+temp_month
      }
      if (temp_day<10){
        temp_day = '0'+temp_day
      }
      tempS = temp_year+'.'+temp_month+'.'+temp_day
      console.log(tempS)
      if(BA['Date'][index].indexOf(tempS)!=-1 || tempS==tempE){
        break
      }
      tempDate.setTime(tempDate.getTime()+(24 * 60 * 60 * 1000))
    }
  }
  let index_start = BA['Date'][index].indexOf(tempS)
  
  tempDate.setTime(date_End.getTime()-(24 * 60 * 60 * 1000))
  // console.log(tempE)
  // console.log(tempS)
  // console.log(E_index)
  if(tempS!=tempE){
    if(E_index == -1){
      while(true){
        temp_year = tempDate.getFullYear()
        temp_month = parseInt(tempDate.getMonth())+1
        temp_day = parseInt(tempDate.getDate())
        console.log(tempDate)
        if (temp_month<10){
          temp_month='0'+temp_month
        }
        if (temp_day<10){
          temp_day = '0'+temp_day
        }
        tempE = temp_year+'.'+temp_month+'.'+temp_day
        console.log(tempE)
        if(BA['Date'][index].indexOf(tempE)!=-1 || tempS==tempE){
          break
        }
        tempDate.setTime(tempDate.getTime()-(24 * 60 * 60 * 1000))
      }
    }
  }

  
  let index_end = BA['Date'][index].indexOf(tempE)
  // console.log(tempE)
  // console.log(index_start)
  // console.log(index_end)
  // console.log(BA['Date'][index])
  
  let price = []
  let Bid_4=[]
  let Bid_35=[]
  let Bid_3=[]
  let Bid_25=[]
  let Bid_2=[]
  let Bid_15=[]
  let Bid_1=[]
  let Ask_4=[]
  let Ask_35=[]
  let Ask_3=[]
  let Ask_25=[]
  let Ask_2=[]
  let Ask_15=[]
  let Ask_1=[]
  let Mydate = []
  let temp_date
  if(tempS!=tempE){
    let i = index_start
    while(i!=index_end+1){
      Bid_4.push(-4-(BA['Bid'][index][i][6]/200))
      Bid_35.push(-3.5-(BA['Bid'][index][i][5]/200))
      Bid_3.push(-3-(BA['Bid'][index][i][4]/200))
      Bid_25.push(-2.5-(BA['Bid'][index][i][3]/200))
      Bid_2.push(-2-(BA['Bid'][index][i][2]/200))
      Bid_15.push(-1.5-(BA['Bid'][index][i][1]/200))
      Bid_1.push(-1-(BA['Bid'][index][i][0]/200))
      Ask_4.push(4+BA['Ask'][index][i][6]/200)
      Ask_35.push(3.5+BA['Ask'][index][i][5]/200)
      Ask_3.push(3+BA['Ask'][index][i][4]/200)
      Ask_25.push(2.5+BA['Ask'][index][i][3]/200)
      Ask_2.push(2+BA['Ask'][index][i][2]/200)
      Ask_15.push(1.5+BA['Ask'][index][i][1]/200)
      Ask_1.push(1+BA['Ask'][index][i][0]/200)
      price.push(BA['Price'][index][i])
      temp_date = BA['Date'][index][i].split('.')
      Mydate.push(temp_date[2]+'/'+temp_date[1]+'/'+temp_date[0])
      i+=1
    }
  }

  // console.log(Bid_4)
  // console.log(Bid_35)
  // console.log(Bid_3)
  // console.log(Bid_25)
  // console.log(Bid_2)
  // console.log(Bid_15)
  // console.log(Bid_1)
  // console.log(Ask_4)
  // console.log(Ask_35)
  // console.log(Ask_3)
  // console.log(Ask_25)
  // console.log(Ask_2)
  // console.log(Ask_15)
  // console.log(Ask_1)
  // console.log(price)
  // console.log(Mydate)
    let y = []
    for(let i=-3.5;i<=4;i=i+0.5){
      if (i>=-0.5&&i<=0.5) continue
      y.push({
                decimalsInFloat: 0,
                tickAmount: 10,
                min:-5,
                max:5,
                forceNiceScale: true,
                    labels: {
                    show:false,
                    },
                },)
    }

    let S = Mydate[0]
    let E = Mydate[Mydate.length-1]
    let Bid_ask = {
      dateTodate : [S,E], 
      series: [
        
          {
            name: 'price',
            data: price,
          },{
            name: '-4',
            data: Bid_4,
          },{
            name: '-3.5',
            data: Bid_35,
          }
            ,{name: '-3',
            data: Bid_3,
          },{
            name: '-2.5',
            data: Bid_25,
          },{
            name: '-2',
            data: Bid_2,
          },{
            name: '-1.5',
            data: Bid_15,
          },{
            name: '-1',
            data: Bid_1,
          }
          ,{
            name: '4',
            data: Ask_4,
          },{
            name: '3.5',
            data: Ask_35,
          },{
            name: '3',
            data: Ask_3,
          },{
            name: '2.5',
            data: Ask_25,
          },{
            name: '2',
            data: Ask_2,
          },{
            name: '1.5',
            data: Ask_15,
          },{
            name: '1',
            data: Ask_1,
          }
          ,
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
          categories: Mydate,
          tickAmount: 15,
          labels: {
            style: {
              colors: "#c8cfca",
              fontSize: "10px",
            },
          },
        },
        yaxis: [
          {
            decimalsInFloat: 2,
            seriesName:'price',
            tickAmount: 10,
            min:Math.min(...price)*0.95,
            max:Math.max(...price)*1.05,
            opposite: true,
            labels: {
            style: {
                colors: "#c8cfca",
                fontSize: "10px",
            },
            },
        },
          ...y,
          {
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
         
        ],legend: {
          show:false,
        },
        markers:{
          size:[0,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
          radius: 0,
          strokeColors:''
        },
        colors: ["#ff0000", "#CCFF33", "#9900FF", "#D7156B", "#A07946", "#2299B8", "#2C61D4", "#41EB5F", "#0000FF", "#A14E45", "#53B7E8", "#6600FF", "#99FFCC", "#66FFFF","#FFD700"],
      }
    }

    return Bid_ask

}

export default Bid_Ask_Data