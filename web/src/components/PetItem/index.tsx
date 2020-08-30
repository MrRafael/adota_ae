import React from 'react';

import './style.css';
import InfoPetItem from '../InfoPetItem';

interface petInfoData {
    nome: string,
    raca: string,
    idade: string,
    peso: string,
    cidade: string,
    email: string,
}


 const PetItem:React.FC<petInfoData> =(props) => {

    return (
        <article className="pet-item">
            <InfoPetItem
                {...props}
            />
        </article>
    );
}

export default PetItem