import React from 'react';
import Chart from 'react-apexcharts';

const Plottest = (props) => {
  console.log("props",props) 
  const arrays = [];
  props.X.map((xVal, index) => arrays.push([xVal, props.Y[index]]));
  console.log("asd",arrays)
  const array2 = props.X.map((xVal, index) => [xVal, parseInt(props.predicty[index])]);
  console.log("array2",array2)
    const fx = [[parseInt(props.fx),parseInt(props.result)]] ;
  console.log(fx)
  
   
  const series = [{
    name: 'Y',
    type: 'scatter',
    data: arrays
  }, {
    name: 'Line',
    type: 'line',
    data: [array2[0], arrays[array2.length - 1]]
  },{
    name: 'result',
    type: 'scatter',
    data: fx
  }
    ];
  const options = {
    chart: {
      height: 350,
      type: 'line',
    },
    fill: {
      type: 'solid',
    },
    markers: {
      size: [8, 0]
    },
    tooltip: {
      shared: false,
      intersect: true,
    },
    legend: {
      show: false
    },
    xaxis: {
      type: 'numeric',
      min: 0,
      max: 80,
      tickAmount: 8
    },
  };

  return (
    <div className="scatter">
      <Chart options={options} series={series} type="line" height={350} />

    </div>
  );
};

export default Plottest;
