import React from 'react';

import './style.css';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

export default function Singup() {
    return (
        <div id="singup-page" className="container">
            <PageHeader
                title="Você não vai se arrepender de fazer parte da nossa comunidade."
                description="O primeiro passo e preencher esse formulario de inscrição"
            />
            <main>
                <form>
                    <fieldset>
                        <legend>Dados Pessoais</legend>

                        <Input
                            id="name"
                            label="Nome Completo"
                            // value={name}
                            // onChange={e => setName(e.target.value)}
                        />
                        <Input
                            id="email"
                            label="E-mail"
                            // value={whatsapp}
                            // onChange={e => setWhatsapp(e.target.value)}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Endereço</legend>
                        <Input
                            id="cep"
                            label="CEP"
                            // value={cost}
                            // onChange={e => setCost(e.target.value)}
                        />
                        <Input
                            id="estado"
                            label="Estado"
                            // value={cost}
                            // onChange={e => setCost(e.target.value)}
                        />
                        <Input
                            id="cidade"
                            label="Cidade"
                            // value={cost}
                            // onChange={e => setCost(e.target.value)}
                        />
                        <Input
                            id="rua"
                            label="Rua"
                            // value={cost}
                            // onChange={e => setCost(e.target.value)}
                        />
                        <Input
                            id="numero"
                            label="Número"
                            // value={cost}
                            // onChange={e => setCost(e.target.value)}
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