import React, { useState, FormEvent } from 'react';

import cepPromisse from 'cep-promise';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import './style.css';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

const CEP_MAX_LENGTH = 8;

interface cepStruct {
    cep: string;
    city: string
    neighborhood: string
    service: string
    state: string
    street: string
}

export default function Singup() {
    const history = useHistory();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cep, setCep] = useState('');
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');

    async function handleChangeCep(zipCode: string) {
        if ((Number(zipCode) && zipCode.length <= CEP_MAX_LENGTH) || zipCode === '') {
            setCep(zipCode)
            if (zipCode.length === CEP_MAX_LENGTH) {
                cepPromisse(zipCode).then((response: cepStruct) => {
                    setEstado(response.state);
                    setCidade(response.city);
                    setRua(response.street);
                })
            }
        }
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        api.post('user', {
            nome,
            email,
            password,
            cep,
            estado,
            cidade,
            rua,
            numero,
        }).then(response => {
            alert("Cadastro Feito com Sucesso!");
            history.push('/login');
        }).catch(response => {
            alert("Email ja cadastrado, tente informar outro.")
        })
    }

    return (
        <div id="singup-page" className="container">
            <PageHeader
                backLink="/login"
                title="Você não vai se arrepender de fazer parte da nossa comunidade."
                description="O primeiro passo e preencher esse formulario de inscrição"
            />
            <main>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Dados Pessoais</legend>

                        <Input
                            id="nome"
                            label="Nome Completo"
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                        />
                        <Input
                            id="email"
                            label="E-mail"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <Input
                            id="password"
                            label="Password"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Endereço</legend>
                        <Input
                            id="cep"
                            label="CEP"
                            value={cep}
                            onChange={e => handleChangeCep(e.target.value)}
                        />
                        <Input
                            id="estado"
                            label="Estado"
                            disabled
                            value={estado}
                        />
                        <Input
                            id="cidade"
                            label="Cidade"
                            disabled
                            value={cidade}
                        />
                        <Input
                            id="rua"
                            label="Rua"
                            disabled
                            value={rua}
                        />
                        <Input
                            id="numero"
                            label="Número"
                            value={numero}
                            onChange={e => setNumero(e.target.value)}
                        />
                    </fieldset>

                    <footer>
                        <button type="submit">Salvar Cadastro</button>
                    </footer>
                </form>
            </main>
        </div>
    );
}