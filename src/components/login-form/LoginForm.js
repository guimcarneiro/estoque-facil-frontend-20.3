import React from 'react';

import './Login.css';

const LoginForm = () => {
    return (
        <div className="login-form__root" >
            <form>
                <div className="login-form__fields">
                    <div className="login-form__field-container">
                        <label htmlFor="username">E-mail: </label>
                        <input type="text" id="username"/>
                    </div>
                    <div className="login-form__field-container">
                        <label htmlFor="password">Senha: </label>
                        <input type="password" />
                    </div>
                </div>
                <div className="login-form__submit-btn-container">
                    <button type="submit">Entrar</button>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;