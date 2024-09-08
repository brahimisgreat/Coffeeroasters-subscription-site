import logo from '../assets/shared/desktop/logo.svg'
import hamburger from '../assets/shared/mobile/icon-hamburger.svg'
import '../Components/Header.css'
import close from '../assets/shared/mobile/icon-close.svg'

export const Header = () => {
  return (
    <nav className='header'>
        <div className='logo'>
            <img className='header-logo' src={logo} alt='logo' />
        </div>

        <img src={hamburger} className='open' alt='hamburger' />
        <img src={close} className='close' alt='close' />


            <ul className='nav-links'>
                <li>Home</li>
                <li>About Us</li>
                <li>Create Your Plan</li>
            </ul>
    </nav>
  )
}
