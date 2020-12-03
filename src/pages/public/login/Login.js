import React from 'react';

import './Login.css';

import NormalPage from '../../templates/normal-page/NormalPage';
import { LoginForm } from '../../../components';

const Login = () => {

    return (
        <NormalPage>
            <main className="login-page__root">
                <LoginForm />
            </main>
        </NormalPage>
    );
}

export default Login;