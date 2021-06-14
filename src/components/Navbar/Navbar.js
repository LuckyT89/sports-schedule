import './Navbar.css';
import mainLogo from '../../img/hockey-player.jpg';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div className='navbar bg-dark p-0'>
            <NavLink to='/' exact style={{textDecoration: 'none'}} activeStyle={{textDecoration: 'underline'}} >Home</NavLink>
            <NavLink to='/admin' exact style={{textDecoration: 'none'}} activeStyle={{textDecoration: 'underline'}} >Admin</NavLink>
            <img src={mainLogo} alt='Main hockey league logo' className='img-fluid' />
        </div>
    );
}

export default Navbar;