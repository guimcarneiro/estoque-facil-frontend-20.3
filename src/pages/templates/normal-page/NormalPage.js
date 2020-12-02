import React from 'react';

import './NormalPage.css';

const NormalPage = (props) => {

    const { children, title } = props;

    return (
        <div className="normal-page__root">
            <header>
                <h2>{ title }</h2>
            </header>
            <main>
                { children }
            </main>
        </div>
    );
};

export default NormalPage;