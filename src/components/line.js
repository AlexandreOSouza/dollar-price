import axios from 'axios';
import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
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

function LineChart(props) {

  // const { type } = props

  // if (type === 'yearly') {
  //   dataYearly()
  // }

  useEffect(() => {
    axios('https://www.remessaonline.com.br/api/quotation-history/USD/COM/yearly', { crossdomain: true })
    .then(response => {
      console.log(response)
    })
  }, [])

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


function dataYearly() {
  const apiURL = 'https://www.remessaonline.com.br/api/quotation-history/USD/COM/yearly'
  fetch(apiURL)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch(function(error) {  
    console.log('Request failed', error)  
  })
}


export default LineChart;
