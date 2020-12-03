import React from 'react';

import './NormalPage.css';

const NormalPage = (props) => {

    const { children, title } = props;

    const normalPageHeader = (title) => {
        return (
            <header>
                <h2>{ title }</h2>
            </header>
        );
    }

    return (
        <div className="normal-page__root">
            { title? normalPageHeader(title) : null }
            <main>
                { children }
            </main>
        </div>
    );
};

export default NormalPage;