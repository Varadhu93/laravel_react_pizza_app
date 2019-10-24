import React from 'react';
import { Link } from 'react-router-dom'

const navBar = () =>{
    return(
        <nav className="nav-wrapper">
            <div className="container">
                <Link to="/" className="brand-logo">Pizza Shop</Link>

                <ul className="right">
                    <li><Link to="/">Pizza Shop</Link></li>
                    <li><Link to="/cart">My cart</Link></li>
                    <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default navBar;
