import React from 'react';

import './style.css';


export default function PetItem() {

    return (
        <article className="pet-item">
            <img
                src="https://cdn.pixabay.com/photo/2015/11/17/13/13/dogue-de-bordeaux-1047521__340.jpg"
                alt="Foto Perfil" />
                <div className="info">
                    <p>Nome: <span>Bob</span></p>
                    <p>Raça: <span>DOGO</span></p>
                    <p>Idade: <span>2 anos</span></p>
                    <p>Peso: <span>2kg</span></p>
                    <p>Cidade: <span>Piracicaba SP</span></p>
                    <p>Contato: <span>email@email.com</span></p>
                </div>
        </article>
    );
}