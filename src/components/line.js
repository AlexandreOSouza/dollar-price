import axios from 'axios';
import { format, parseISO } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';




function LineChart(props) {

  const [dates, setDates] = useState([])
  const [averages, setAverages] = useState([])

  const { type } = props

  useEffect(() => {

    const fetchData = async () => { 
      const dots = await fetchDataChart(type.value) 
      setDates(dots.map(dot => dot.date))
      setAverages(dots.map(dot => dot.average))
    }
    setDates([])
    setAverages([])
    fetchData()    
  }, [type.value])
  
  const data = (canvas) => {

    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 350);
    gradient.addColorStop(0, 'rgba(250,174,50,0.7)');   
    gradient.addColorStop(1, 'rgba(250,174,50,0)');
    return {
      labels: dates,
      datasets: [
        {
          label: 'R$',
          data: averages,
          fill: true,
          backgroundColor : gradient,
          borderColor : "#ff6c23",
          borderWidth: 1,
          pointColor : "#fffefa",
          pointStrokeColor : "#ff6c23",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "#fffefa",
        },
      ],
    }
  };

  const options = {
    plugins:{   
      legend: {
        display: false
      },
    },
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
      <Line className="chart" width="100vw" height="20vh" data={data} options={options} />
    </>
  )
}

async function fetchDataChart(type) {
  const apiURL = `https://www.remessaonline.com.br/api/quotation-history/USD/COM/${type}`
  const { data } = await axios(apiURL, { crossdomain: true })
  const dots = data.map(dot => {
    return {
      date: format(parseISO(dot.date), (type === 'daily') ? 'dd/MM/yyyy hh:MM:ss' : 'dd/MM/yyyy'),
      average: Number((type === 'daily') ? dot.value : dot.average).toFixed(2)
    }
  })
  return dots
}

export default LineChart;
