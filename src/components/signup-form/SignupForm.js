import React from 'react';

import './SignupForm.css';

/*
{
  "email": "string",
  "enderecos": [
    {
      "bairro": "string",
      "cidade": "string",
      "complemento": "string",
      "id": 0,
      "numero": 0,
      "rua": "string"
    }
  ],
  "primeiroNome": "string",
  "senha": "string",
  "ultimoNome": "string"
}
*/

const SignupForm = () => {

    const addressFields = () => {
        return (
            <>
                <div className="signup-form__inline-fields">
                    <div className="signup-form__field-container">
                        <label htmlFor="rua">Rua: </label>
                        <input type="rua" />
                    </div>
                    <div className="signup-form__field-container">
                        <label htmlFor="bairro">Bairro: </label>
                        <input type="bairro" />
                    </div>
                    <div className="signup-form__field-container">
                        <label htmlFor="bairro">Complemento: </label>
                        <input type="bairro" />
                    </div>
                </div>
                <div className="signup-form__inline-fields">
                    <div className="signup-form__field-container">
                        <label htmlFor="numero">Número: </label>
                        <input type="numero" />
                    </div>
                    <div className="signup-form__field-container">
                        <label htmlFor="cidade">Cidade: </label>
                        <input type="cidade" />
                    </div>
                </div>
            </>
        );
    }

    const fieldsGroupTitle = (title) => (
        <div className="signup-form__fields-group-title">
            <h4>{ title }</h4>
        </div>
    )

    return (
        <div className="signup-form__root">
            <form>
                <div className="signup-form__fields">
                    { fieldsGroupTitle("Dados Pessoais") }
                    <div className="signup-form__inline-fields">
                        <div className="signup-form__field-container">
                            <label htmlFor="primeiroNome">Primeiro Nome: </label>
                            <input type="text" id="primeiroNome"/>
                        </div>
                        <div className="signup-form__field-container">
                            <label htmlFor="ultimoNome">Sobrenome: </label>
                            <input type="text" id="ultimoNome"/>
                        </div>
                    </div>
                    { fieldsGroupTitle("Login") }
                    <div className="signup-form__inline-fields">
                        <div className="signup-form__field-container">
                            <label htmlFor="email">E-mail: </label>
                            <input type="text" id="email"/>
                        </div>
                        <div className="signup-form__field-container">
                            <label htmlFor="senha">Senha: </label>
                            <input type="senha" />
                        </div>
                    </div>
                    { fieldsGroupTitle("Endereço") }
                    { addressFields() }
                </div>
                <div className="signup-form__btns-container">
                    <button type="submit">Entrar</button>
                </div>
            </form>
        </div>
    );
}

export default SignupForm;