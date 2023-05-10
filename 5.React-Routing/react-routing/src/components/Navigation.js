import { Link, NavLink } from 'react-router-dom';
import styles from './Navigation.module.css'

export function Navigation() {
    const setNavStyle = ({ isActive }) => {
        return isActive
            ? styles['active-link']
            : undefined
    }

    return (
        <nav>
            <ul>
                <li><NavLink className={setNavStyle} to="/"><em>Home</em></NavLink></li>
                <li><NavLink className={setNavStyle} to="/about">About</NavLink></li>
                <li><NavLink className={setNavStyle} to="/pricing">Pricing</NavLink></li>
                <li><NavLink className={setNavStyle} to="/pricing/primiun">Primium Pricing</NavLink></li>
                <li>
                    <NavLink
                        to="/products/10"
                        // style={({ isActive }) => ({
                        //     background: isActive ? 'blue' : 'lightgray'
                        // })}
                        className={setNavStyle}
                    >
                        Products
                    </NavLink></li>
                <li><NavLink className={setNavStyle} to="/millennium-falcon" >Millennium Falcon</NavLink></li>
                <li><NavLink className={setNavStyle} to="/contacts">Contacts</NavLink></li>


                {/* <li><Link to="/"><em>Home</em></Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/pricing/primiun">Primium Pricing</Link></li>
                <li><Link to="/products/10" >Products</Link></li>
                <li><Link to="/millennium-falcon" >Millennium Falcon</Link></li>
                <li><Link to="/contacts">Contacts</Link></li> */}
            </ul>
        </nav>
    );
};