import React from "react";
import ReactApexChart from "react-apexcharts";


class ApexChartMKB extends React.Component {
    constructor(props) {
        super(props);
        
        this.name = props.name

        this.index = props.index
       
        this.macdSig = props.macdSig

        this.macdP = props.macdP

        this.rsi = props.rsi

    }
    render() {
      return (
        <div id="graph" class="card">
            <div id="index" style={{marginBottom:"-30px"}}>
                <p style={{fontSize:"10px",color:'white'}}>{this.name}</p>
                <ReactApexChart options={this.index.options} series={this.index.series} type="line" height={120} />
            </div>
            <div id="macdSig" style={{marginBottom:"-30px"}}>
                <p style={{fontSize:"10px",color:'white'}}>MacdSig</p>
                <ReactApexChart options={this.macdSig.options} series={this.macdSig.series} type="line" height={120} />
            </div>
            <div id="macdP" style={{marginBottom:"-30px"}}>
            <p style={{fontSize:"10px",color:'white'}}>MacdP</p>
                <ReactApexChart options={this.macdP.options} series={this.macdP.series} type="line" height={120} />
            </div>
            <div id="rsi">
            <p style={{fontSize:"10px",color:'white'}}>RSI</p>
                <ReactApexChart options={this.rsi.options} series={this.rsi.series} type="line" height={150} />
            </div>
        </div>
          )
        }
  }
export default ApexChartMKB