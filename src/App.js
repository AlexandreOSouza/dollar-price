import './App.css';
import LineChart from './components/line';
import ChartOptions from './components/ChartOptions';
import { useState } from 'react';
import Header from './components/Header';
import CurrentCotation from './components/CurrentCotation';

function App() {

  const options = [
    {label: '1D', value: 'daily'}, 
    {label: '2W', value: 'biweekly'}, 
    {label: '1M', value: 'monthly'},
    {label: '6M', value: 'semiannual'}, 
    {label: '1Y', value: 'yearly'}
  ]

  const [opSelected, setOpSelected] = useState(options[4])
  

  const opClickHandler = (op) => {
    setOpSelected(op)
  }

  const coin = "DOLLAR"

  return (
    <div className="App">
      <Header 
        title={coin}
      />
      <CurrentCotation />
      <div className="chart-options">
        <ChartOptions 
          options={options} 
          clickFunc={opClickHandler} 
          selected={opSelected.label}
        />
      </div>
      <LineChart type={opSelected}/>
    </div>
  );
}

export default App;
