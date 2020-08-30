import React, { useState, useEffect } from 'react';

import editIcon from '../../assets/images/icons/edit.svg'
import deleteIcon from '../../assets/images/icons/trash.svg'
import confirmIcon from '../../assets/images/icons/confirm.svg'
import cancelIcon from '../../assets/images/icons/close.svg'

import './style.css';
import InfoPetItem from '../InfoPetItem';
import Input from '../Input';
import Select from '../Select';
import { useAuth } from '../../contexts/auth';
import api from '../../services/api';


interface PetData {
    id: number,
    nome: string,
    raca: string,
    idade: string,
    peso: string,
    cidade: string,
    email: string,
    user_id: number
}

interface PetItemEditable {
    Pet: PetData,
    updateItens(): void
}

const PetItemEditable: React.FC<PetItemEditable> = (props) => {

    const { user } = useAuth();

    const [editing, setEditing] = useState(false);
    const [nome, setNome] = useState('');
    const [raca, setRaca] = useState('');
    const [idade, setIdade] = useState('');
    const [peso, setPeso] = useState('');

    const [petInfo, setPetInfo] = useState({
        ...props.Pet
    })

    useEffect(() => {
        console.log(petInfo);

        setNome(petInfo.nome);
        setRaca(petInfo.raca);
        setIdade(petInfo.idade);
        setPeso(petInfo.peso);
    }, [petInfo])

    async function handleConfirm() {
        if (nome !== '' && raca !== '' && idade !== '' && peso !== '') {
            setPetInfo({
                ...petInfo,
                nome,
                raca,
                idade,
                peso,
                cidade: `${user?.cidade}, ${user?.estado}`,
                email: `${user?.email}`
            })

            if (!petInfo.id) {
                api.post('pet', {
                    nome,
                    raca,
                    idade,
                    peso,
                    user_id: user?.id
                }).then(response => {
                    alert("Pet salvo com sucesso!")
                    setEditing(false);
                    setPetInfo({
                        ...petInfo,
                        nome,
                        raca,
                        idade,
                        peso,
                        cidade: `${user?.cidade}, ${user?.estado}`,
                        email: `${user?.email}`, id: response.data.id
                    })
                })
            } else {
                api.put('pet', {
                    id: petInfo.id,
                    nome,
                    raca,
                    idade,
                    peso,
                    user_id: user?.id
                }).then(response => {
                    alert("Pet salvo com sucesso!")
                    setEditing(false);
                })
            }
        } else {
            alert("Preencha todos os campos")
        }
    }

    function handleDelete() {
        if (petInfo.id) {
            api.delete('pet', {
                params: {
                    id: petInfo.id
                }
            }).then(() => props.updateItens())
        }
    }

    return (
        <article className="pet-item-editable">
            <div className="topleft-actions">
                {editing || !petInfo.id ?
                    (
                        <>
                            <img
                                src={confirmIcon}
                                onClick={handleConfirm}
                            />
                            <img
                                onClick={() => setEditing(false)}
                                src={cancelIcon}
                            />
                        </>
                    )
                    : (
                        <>
                            <img
                                src={editIcon}
                                onClick={() => setEditing(true)}
                            />
                            <img
                                onClick={handleDelete}
                                src={deleteIcon} />
                        </>
                    )
                }

            </div>
            {
                editing || !petInfo.id ?
                    <form>
                        <Input
                            id="nome"
                            label="Nome"
                            value={nome}
                            onChange={event => setNome(event.target.value)}
                        />
                        <Select
                            id="raca"
                            label="Raça"
                            value={raca}
                            onChange={event => setRaca(event.target.value)}
                            options={[{ value: "Cachorro", label: "Cachorro" }, { value: "Gato", label: "Gato" }]}
                        />
                        <Input
                            id="idade"
                            label="Idade"
                            value={idade}
                            onChange={event => setIdade(event.target.value)}
                        />
                        <Input
                            id="peso"
                            label="Peso"
                            value={peso}
                            onChange={event => setPeso(event.target.value)}
                        />
                    </form>
                    : <InfoPetItem
                        nome={petInfo.nome}
                        raca={petInfo.raca}
                        idade={petInfo.idade}
                        peso={petInfo.peso}
                        cidade={petInfo.cidade}
                        email={petInfo.email}
                    />
            }
        </article>
    );
}

export default PetItemEditable;