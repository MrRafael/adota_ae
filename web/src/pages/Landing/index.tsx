import React from 'react';

import backgroudImg from '../../assets/images/background.svg'

import './style.css';

export default function Landing() {
    return (
        <div id="landing">
            <div id="background-container">
                <img id="background" src={backgroudImg} alt="Fundo" />
            </div>
            <div id="container-page">
                <h1>ADOTA <span>AE</span></h1>
                <p>
                    Agradecemos seu interesse em adotar um animal sem dono,
                    prepare-se para uma experiência gratificante que durará muitos anos.<br />
                    Divulgue e Encontre animais que precisam de um lar.</p>
                <div id="container-buttons">
                    <button className="find">Encontrar</button>
                    <button className="divulge">Divulgar</button>
                </div>
            </div>
        </div>
    );
}