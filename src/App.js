import './App.css';
import LineChart from './components/line';
import ChartOptions from './components/ChartOptions';
import { useState } from 'react';
import Header from './components/Header';
import CurrentCotation from './components/CurrentCotation';

function App() {

  const [opSelected, setOpSelected] = useState('1Y')
  const options = ['1D', '2W', '1M', '6M', '1Y']
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
          selected={opSelected}
        />
      </div>
      <LineChart type='yearly'/>
    </div>
  );
}

export default App;
