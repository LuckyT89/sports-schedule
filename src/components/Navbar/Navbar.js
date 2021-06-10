import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div className='navbar'>
            <NavLink to='/' exact>Home</NavLink>
            <NavLink to='/admin' exact>Admin</NavLink>
        </div>
    );
}

export default Navbar;