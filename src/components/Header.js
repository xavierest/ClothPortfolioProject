import { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavbarToggler,
    Collapse
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from '../app/assets/img/logo.png';



const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <Navbar sticky='top'  className='navColor'>
            <NavbarBrand  className='mx-auto'  onClick={() => setMenuOpen(!menuOpen)}>
             
                <img src={logo} alt='cloth logo ' className='logo  '   />
            </NavbarBrand>
            <Collapse className='' isOpen={menuOpen} navbar>
                <Nav className='flex-row justify-content-center' navbar>
                    <NavItem>
                        <NavLink className='nav-link navb' to='/'>
                            <h6 className='navWords'>Videos</h6>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link navb' to='/'>
                            <h6 className='navWords'>Products</h6>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link navb' to='/'>
                            <h6 className='navWords'>About Us</h6>
                        </NavLink >
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link navb' to='/'>
                            <h6 className='navWords'>Email List</h6>
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
            
        </Navbar>
    );
};

export default Header