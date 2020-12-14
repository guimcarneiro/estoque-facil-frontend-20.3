import React from 'react';
import NormalPage from '../../templates/normal-page/NormalPage';
import { SignupForm } from '../../../components';

const Signup = () => {
    return (
        <NormalPage title="Novo Usuário">
            <main>
                <SignupForm />
            </main>
        </NormalPage>
    );
}

export default Signup;