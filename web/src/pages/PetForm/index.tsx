import React, { useEffect, useState } from 'react';

import PageHeader from '../../components/PageHeader';

import './style.css';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/auth';
import PetItemEditable from '../../components/PetItemEditable';
import api from '../../services/api';

export default function PetForm() {
    const { logged, user } = useAuth();
    const history = useHistory();
    const [myPets, setMyPets] = useState([] as Array<any>)

    useEffect(() => {
        if (!logged) {
            history.push('/login')
        }

        loadPets()
    }, [])

    async function loadPets() {
        const petsResult: any = await api.get("/pet", {
            params: {
                user_id: user?.id
            }
        })

        setMyPets(petsResult.data.map((pet: any) => ({
            ...pet,
            cidade: `${pet.User.cidade}, ${pet.User.estado}`,
            email: pet.User.email
        })))
    }

    function handleAddPet() {
        setMyPets([...myPets, {
            cidade: "",
            email: "",
            idade: "",
            nome: "",
            peso: "",
            raca: ""
        }])
    }

    return (
        <div id="page-pet-form" className="container">
            <PageHeader
                title="Digulgue agora mesmo um pet que precise de um lar"
                backLink="/petlist"
            >
                <div id="container-button">

                    <button onClick={handleAddPet}>Adicionar um pet</button>
                </div>
            </PageHeader>

            <main>
                {myPets.map((item: any, index) => {
                    return (
                        <PetItemEditable
                            key={index}
                            Pet={{ ...item }}
                            updateItens={loadPets}
                        />);
                })}
            </main>
        </div>
    );
}