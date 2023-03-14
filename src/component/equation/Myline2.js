import React,{useState,useEffect} from 'react';
import Chart from 'react-apexcharts';

const Myline2 = (props) => {
  const [Data,setData] = useState(props);
  console.log('props',props)
  
  const [chartData, setChartData] = React.useState({
    options: {
      chart: {
        id: Data.name
      },
      xaxis: {
        categories:  Data.Iteration
      },
      yaxis: {
        logBase: 10,
        forceNiceScale: true
      },
    },
    series: [
      {
        name: 'X',
        data: Data.X
      },
      {
        name: 'error',
        data: Data.Error
      }
    ]
  });

  useEffect(() => {
    setData(props);
    setChartData({
      options: {
        chart: {
          id: props.name
        },
        xaxis: {
          categories: props.iter
        },
        yaxis: {
          logBase: 10
        }
      },
      series: [
        {
          name: 'X',
          data: props.X
        },
        {
          name: 'error',
          data: props.Error
        }
      ]
    });
  }, [props]);

  return (
    <Chart options={chartData.options} series={chartData.series} type="line" width={500} height={320} />
  );
}

export default Myline2;
