import React from 'react';
import NormalPage from '../../templates/normal-page/NormalPage';

import './Home.css';

const Home = () => {

    return (
        <NormalPage title="Home">
            <div className="home__content">
                <p>
                    Projeto que simula o que seria um sistema de controle de estoque.
                </p>
                <p>
                    Integrantes:
                </p>
                <ul>
                    <li>
                        Arthur Macena
                    </li>
                    <li>
                        Netto Prata
                    </li>
                    <li>
                        Guilherme Carneiro
                    </li>
                    <li>
                        Túlio Araújo
                    </li>
                    <li>
                        Sheila Paiva
                    </li>
                </ul>
            </div>
        </NormalPage>
        
    );
};

export default Home;