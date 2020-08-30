import React from 'react';

interface petInfoData {
    nome: string,
    raca: string,
    idade: string,
    peso: string,
    cidade: string,
    email: string,
}

const InfoPetItem: React.FC<petInfoData> = (props) => {

    return (
        <>
            <img
                src={
                    props.raca == "Cachorro" ? 
                    "https://cdnb.artstation.com/p/assets/images/images/026/166/719/large/kaila-pawelski-example-1.jpg?1588068718"
                    : "https://lh3.googleusercontent.com/proxy/Rro9YV2SL5VZKWgrshyPvkpVwklYQiqv7Q_EJ6Shr6f-_kQd41WRLLRRtQlra6RQS7KF6n59fzzVzhd16w8evNamexzL7DBkBIwWjkyK5uYyLIlZDc6AUwvblENLWIM"
                }
                alt="Foto Perfil" />
            <div className="info">
                <p>Nome: <span>{props.nome}</span></p>
                <p>Raça: <span>{props.raca}</span></p>
                <p>Idade: <span>{props.idade}</span></p>
                <p>Peso: <span>{props.peso}</span></p>
                <p>Cidade: <span>{props.cidade}</span></p>
                <p>Contato: <span>{props.email}</span></p>
            </div>
        </>
    );
}

export default InfoPetItem