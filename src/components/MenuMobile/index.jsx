import { useState } from 'react'
import './MenuMobile.css'
import MenuOpen from '../../assets/menu-buguer-open.svg'
import MenuClose from '../../assets/menu-buguer-close.svg'
import { ButtonCoffee } from '../ButtonCoffee';

export function MenuMobile() {
    const [open, setOpen] = useState(false);

    return (
        <div className="MenuMobile" >
            <div
                className="menuBtn"
                onClick={
                    () => open ? setOpen(false) : setOpen(true)
                }
            >
                <img
                    src={open ? MenuClose : MenuOpen}
                    alt="menu mobile"
                />
            </div>
            <div className='menuModalDesktop'>
                <ul className='menuLinksDesktop'>
                    <li className="menuLinkDesktop">
                        <a href="/">Home</a>
                    </li>
                    <li className="menuLinkDesktop">
                        <a href="/">Menu</a>
                    </li>
                    <li className="menuLinkDesktop">
                        <a href="/">Recompensas</a>
                    </li>
                    <li className="menuLinkDesktop">
                        <a href="/">Gift Cards</a>
                    </li>
                    <li className="menuLinkDesktop">
                        <a href="/">Recompensas</a>
                    </li>
                </ul>
                <ButtonCoffee />
            </div>

            {
                open ?
                    <div className='menuModal'>
                        <ul className='menuLinks'>
                            <li className="menuLink"><a href="/">Home</a></li>
                            <li className="menuLink"><a href="/">Menu</a></li>
                            <li className="menuLink"><a href="/">Recompensas</a></li>
                            <li className="menuLink"><a href="/">Gift Cards</a></li>
                            <li className="menuLink"><a href="/">Recompensas</a></li>
                        </ul>
                    </div> : null
            }

        </div>
    )
}