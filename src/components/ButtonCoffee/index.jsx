import '../ButtonCoffee/buttonCoffee.css'
import arrow from '../../assets/arrow.svg'

export function ButtonCoffee(props) {
    return (
        <button
            className="ButtonCoffee"
        > PEGAR MEU CAFÉ <img src={arrow} />
        </button>
    )
}