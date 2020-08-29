import React, { useState, FormEvent, useEffect } from 'react';

import PageHeader from '../../components/PageHeader';

import './style.css';
import Select from '../../components/Select';
import PetItem from '../../components/PetItem';

export default function PetList() {
    return (
        <div id="page-pet-list" className="container">
            <PageHeader title="Estes são os Pets esperando por você">
                <form
                    id="search-pets"
                >
                   <Select
                        id="week_day"
                        label="Cidade"
                        // value={week_day}
                        // onChange={e => setweek_day(e.target.value)}
                        options={[
                            { value: "0", label: "Domingo" },
                            { value: "1", label: "Segunda-Feira" },
                            { value: "2", label: "Terça-Feira" },
                            { value: "3", label: "Quarta-feira" },
                            { value: "4", label: "Quinta-Feira" },
                            { value: "5", label: "Sexta-Feira" },
                            { value: "6", label: "Sabado" },
                        ]}
                    />
                    
                </form>
            </PageHeader>

            <main>
                <PetItem/>
                <PetItem/>
                {/* {teachers.map((item, index) => {
                    return (
                        <TeacherItem
                            key={index}
                            Pet={item}
                        />);
                })} */}
            </main>
        </div>
    );
}