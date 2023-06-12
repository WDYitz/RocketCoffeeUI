import './Header.css';

import { MenuMobile } from '../MenuMobile';
import logoMobile from '../../assets/logo-mobile.svg'
import logoDesk from '../../assets/logo-desktop.svg'

export function Header() {
    const width = screen.width < 1100;
  
    return (
        <div className="Header">
            <img src={width ? logoMobile : logoDesk} 
            alt="logo da RocketSeat" className='logoMobile' />
            <MenuMobile />
        </div>
    )
}