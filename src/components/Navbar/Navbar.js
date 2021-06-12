import './Navbar.css';
import mainLogo from '../../img/hockey-player.jpg';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div className='navbar'>
            <NavLink to='/' exact>Home</NavLink>
            <NavLink to='/admin' exact>Admin</NavLink>
            <img src={mainLogo} alt='Main hockey league logo' className='img-fluid' />
        </div>
    );
}

export default Navbar;