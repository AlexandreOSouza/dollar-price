import './style.css';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Puff } from 'react-loading-icons'


function CurrentCotation() {
    const coinType = "R$"

    const [ currentValue, setCurrentValue ] = useState(0)
    const [ diffTax, setDiffTax ] = useState(null)
    const [ trandingIsUp, setTrandingIsUp] = useState(true)

    useEffect(() => {
        setInterval(async () => {
            let response = await fetchData()
            setCurrentValue(response.bid)
            let pct = response.pctChange
            setDiffTax(pct + "%")
            setTrandingIsUp(pct > -1)

          }, 10000);
    }, [currentValue])
    

    return (
        <div className="current">
            {(currentValue === 0) ? 
                <Puff />
            : 
            <>
                <p className="coinType">{coinType}</p>
                <p className="currentValue">{currentValue}</p>
                
                <div className="tranding">
                    {trandingIsUp ? <TrendingUpIcon className="isUp" /> : <TrendingDownIcon className="isDown" />}
                    <p className={trandingIsUp ? "isUp" : "isDown"}>{diffTax}</p>
                </div>
            </>
            }
            
            
        </div>
    )
}


async function fetchData() {
    const apiURL = 'https://economia.awesomeapi.com.br/last/USD-BRL'
    const { data } = await axios.get(apiURL)
    const { bid } = data.USDBRL
    const { pctChange } = data.USDBRL

    return {
        bid: Number(bid).toFixed(2),
        pctChange: pctChange
    }
}


export default CurrentCotation