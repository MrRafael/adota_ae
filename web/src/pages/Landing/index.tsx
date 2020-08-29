import React from 'react';

import { Link } from 'react-router-dom';

import backgroudImg from '../../assets/images/background.svg'

import './style.css';

export default function Landing() {
    return (
        <div id="landing">
            <div id="background-container">
                <img id="background" src={backgroudImg} alt="Fundo" />
            </div>
            <div id="container-page">
                <h1>Pet <span>Finder</span></h1>
                <p>
                    Agradecemos seu interesse em adotar um animal sem dono,
                    prepare-se para uma experiência gratificante que durará muitos anos.<br />
                    Divulgue e Encontre animais que precisam de um lar.</p>
                <div id="container-buttons">
                    <Link className="find" to='/petlist'>Encontrar</Link>
                    <Link className="divulge" to='/login'>Divulgar</Link>
                </div>
            </div>
        </div>
    );
}