import './style.css';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

function CurrentCotation() {

    const coinType = "R$"
    const currentValue = "5.30"
    const trandingIsUp = true
    const diffTax = "1.5%"

    return (
        <div className="current">
            
            <p className="coinType">{coinType}</p>
            <p className="currentValue">{currentValue}</p>
            
            <div className="tranding">
                {trandingIsUp ? <TrendingUpIcon className="isUp" /> : <TrendingDownIcon className="isDown" />}
                <p className={trandingIsUp ? "isUp" : "isDown"}>{diffTax}</p>
            </div>
            
        </div>
    )
}

export default CurrentCotation