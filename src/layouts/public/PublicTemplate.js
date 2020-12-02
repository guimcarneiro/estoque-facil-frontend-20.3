import React from 'react';
import './PublicTemplate.css';

import Header from '../components/public-header/Header';

const PublicTemplate = (props) => {
    const { children } = props;

    return (
        <div className="public-template__root">
            <Header title="Estoque Fácil" />
            <main className="public-template__content">
                { children }
            </main>
        </div>
    );
};

export default PublicTemplate;