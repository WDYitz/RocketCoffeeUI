/** PAGE STYLE */
import './Home.css'

/** IMAGES */
import rocketCoffe from '../../assets/rocket-coffee.png'
import blurMobile from '../../assets/blur-mobile.png'
import blurDeskTop from '../../assets/blur-1.png'
import blurDeskBot from '../../assets/blur-2.png'
import Seta from '../../assets/arrow.svg'

/** COMPONENTS */
import { ButtonCoffee } from '../../components/ButtonCoffee';
import { Header } from '../../components/Header';


export function Home() {
  const width = screen.width < 1100;

  return (
    <div className="Home">
      <Header />
      <div className="upperPart">
        <h2>O café que fará seu código decolar para o próximo nível.</h2>
        <ButtonCoffee />
      </div>
      <div className="lowerPart">
        <h2>Great Coffee</h2>
        <img src={rocketCoffe} alt="imagem ilustrativa rocket coffe" />

        
        <img src={blurMobile} className='blurMob' />

        
        <img src={blurDeskBot} className='blurDeskBot' />
        <img src={blurDeskTop} className='blurDeskTop' />

      </div>
    </div>
  )
}


