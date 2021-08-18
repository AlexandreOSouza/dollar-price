import './style.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function Header(props) {

    const { title } = props

    return (
        <div className="header">
            <ArrowBackIcon className="arrowBack" />
            <h1>{title}</h1>
        </div>
    )
}

export default Header