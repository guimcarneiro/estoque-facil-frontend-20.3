import React from 'react';

import './UserToolbar.css';

const UserToolbar = ({ onClick }) => {

    return (
        <div className="user-toolbar__root">
            <button onClick={ onClick }>Login</button>
        </div>
    )
}

export default UserToolbar;