import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { UserToolbar } from '../../../components';

import { APPLICATION_PATHS } from '../../../utils';

import './Header.css';

const Header = (props) => {

    const { title } = props;

    const history = useHistory();

    const listOfLinks = () => {
        return (
            <ul>
                {
                    APPLICATION_PATHS.map(path => <li key={ path.title }><Link to={ path.url }>{ path.title }</Link></li>)
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
                    <UserToolbar onClick={ () => history.push('/login') } />
                </div>
            </div>
        </header>
    );
}

export default Header;