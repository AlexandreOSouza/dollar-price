import './style.css';

function ChartOptions(props) {

    const options = props.options
    const clickFunc = props.clickFunc
    const selected = props.selected


    return (
        <>
            <ul>
                {options.map((op, index) => {
                    return (
                        <li 
                            onClick={() => clickFunc(op)} 
                            key={index}
                            className={op === selected ? 'selected' : ''}
                        >{op}</li>
                    )
                })}
            </ul>
        </>
    )
}

export default ChartOptions