import axios from 'axios';
import { format, parseISO } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';




function LineChart(props) {

  const [dates, setDates] = useState([])
  const [averages, setAverages] = useState([])

  useEffect(() => {
    let dots = dataYearly()
    console.log(dots)
    setDates(dots.map(dot => dot.date))
    setAverages(dots.map(dot => dot.average))
  }, [])
  
  const data = {
    labels: dates,
    datasets: [
      {
        label: '# of Votes',
        data: averages,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <div className='header'>
        <h1 className='title'>Line Chart</h1>
        <div className='links'>
          <a
            className='btn btn-gh'
            href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Line.js'
          >
            Github Source
          </a>
        </div>
      </div>
      <Line data={data} options={options} />
    </>
  )
}


async function dataYearly() {
    const apiURL = 'https://www.remessaonline.com.br/api/quotation-history/USD/COM/yearly'
    const { data } = await axios(apiURL, { crossdomain: true })
    const dots = data.map(dot => {
      return {
        date: format(parseISO(dot.date), 'dd/MM/yyyy'),
        average: Number(dot.average).toFixed(2)
      }
    })
    return dots
}


export default LineChart;
