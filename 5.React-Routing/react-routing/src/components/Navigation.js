import { Link } from 'react-router-dom';

export function Navigation() {
    return (
        <nav>
            <ul>
                <li><Link to="/"><em>Home</em></Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/pricing/primiun">Primium Pricing</Link></li>
                <li><Link to="/products/10" >Products</Link></li>
                <li><Link to="/contacts">Contacts</Link></li>
            </ul>
        </nav>
    );
};