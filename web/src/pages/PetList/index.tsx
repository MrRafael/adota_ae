import React, { useEffect, useState } from 'react';

import PageHeader from '../../components/PageHeader';

import './style.css';
import Select from '../../components/Select';
import PetItem from '../../components/PetItem';
import api from '../../services/api';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/auth';

interface City {
    cidade: string,
    estado: string
}

export default function PetList() {
    const [cidades, setCidades] = useState([] as Array<string>);
    const [cidade, setCidade] = useState("");
    const [pets, setPets] = useState([]);

    const { logged, logout, user } = useAuth()
    const history = useHistory();

    useEffect(() => {
        if (cidades.length == 0) {
            setCities();

            if (logged) {
                setCidade(`${user?.cidade}, ${user?.estado}`)
            }
        }

        loadPets()

    }, [user, cidade])

    async function loadPets() {
        const petsResult: any = await api.get("/pet", {
            params: {
                cidade
            }
        });

        setPets(petsResult.data.map((pet: any) => ({
            ...pet,
            cidade: `${pet.User.cidade}, ${pet.User.estado}`,
            email: pet.User.email
        })))
    }

    async function setCities() {
        const cities = await api.get('city');
        const stringCities = cities.data.map((item: City) => `${item.cidade}, ${item.estado}`);

        setCidades(stringCities)
    }

    return (
        <div id="page-pet-list" className="container">
            <PageHeader
                title="Estes são os Pets esperando por você"
                topleftcontent={
                    (
                        <>
                            <Link to="petform"> Divulgue um pet</Link>
                            {logged ? <button onClick={logout}>Logout</button> : <button onClick={() => history.push("/login")}>Login</button>}
                        </>
                    )
                }
            >
                <form
                    id="search-pets"
                >
                    <Select
                        id="cities"
                        label="Cidade"
                        value={cidade}
                        onChange={e => setCidade(e.target.value)}
                        options={cidades.map(cidade => ({ value: cidade, label: cidade }))}
                    />

                </form>
            </PageHeader>

            <main>
                {pets.map((item, index) => {
                    return (
                        <PetItem
                            key={index}
                            {...item}
                        />);
                })}
            </main>
        </div>
    );
}