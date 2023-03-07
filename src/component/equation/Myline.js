import React,{useState} from 'react';
import Chart from 'react-apexcharts';

const Myline = (props) => {
  const [Data,setData] = useState(props);
  console.log('props',props)
  const [chartData, setChartData] = React.useState({
    options: {
      chart: {
        id: Data.name
      },
      xaxis: {
        categories:  Data.iter
      }
    },
    series: [
      {
        name: 'Xl',
        data: Data.Xl
      },
      {
        name: 'Xr',
        data: Data.Xr
      },
      {
        name: 'error',
        data: Data.Error
      }
    ]
  });

  return (
    <Chart options={chartData.options} series={chartData.series} type="line" width={500} height={320} />
  );
}

export default Myline;
