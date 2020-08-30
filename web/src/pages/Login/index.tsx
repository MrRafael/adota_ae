import React, { useState, FormEvent, useEffect } from 'react';

import Input from '../../components/Input';
import { Link, useHistory } from 'react-router-dom';

import backgroudImg from '../../assets/images/background.svg'
import './style.css';
import { useAuth } from '../../contexts/auth';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { logged, login, user } = useAuth()
    const history = useHistory()

    useEffect(() => {
        if (logged) {
            history.push('/petlist')
        }
    })

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        login(email, password)
    }

    return (
        <div id="login-page">
            <div className="form-container">
                <form onSubmit={handleSubmit} >
                    <Input
                        id="email"
                        label="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Input
                        id="name"
                        label="Password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
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