import React from 'react';

import Input from '../../components/Input';
import { Link } from 'react-router-dom';

import backgroudImg from '../../assets/images/background.svg'
import './style.css';

export default function Login() {
    return (
        <div id="login-page">
            <div className="form-container">
                <form action="">
                    <Input
                        id="email"
                        label="E-mail"
                    // value={whatsapp}
                    // onChange={e => setWhatsapp(e.target.value)}
                    />
                    <Input
                        id="name"
                        label="Password"
                    // value={name}
                    // onChange={e => setName(e.target.value)}
                    />
                    <button type="submit">Login</button>
                    <div className="container-link">
                        <Link to="/">voltar</Link>
                        <Link to="singup">Cadastre-se</Link>
                    </div>
                </form>
            </div>
            <div className="petfinder">
                <div id="background-container">
                    <img id="background" src={backgroudImg} alt="Fundo" />
                    <div id="container-page">
                        <h1>Pet <span>Finder</span></h1>
                    </div>
                </div>
            </div>
        </div>
    );
}