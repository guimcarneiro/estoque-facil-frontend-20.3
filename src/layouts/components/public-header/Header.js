import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = (props) => {

    const { title } = props;

    const links = [
        {
            title: "Home",
            url: "/",
        },
        {
            title: "Login",
            url: "/login",
        },
        {
            title: "Produtos",
            url: "/products",
        },
    ]

    const listOfLinks = () => {
        return (
            <ul>
                {
                    links.map(link => <li><Link to={ link.url }>{ link.title }</Link></li>)
                }
            </ul>
        )
    }

    return (
        <header className="public-template__header">
            <h3>{ title }</h3>
            <div className="public-template__header__content">
                <div className="public-template__header__links">
                    { listOfLinks() }
                </div>
                <div className="public-template__header__login">

                </div>
            </div>
        </header>
    );
}

export default Header;